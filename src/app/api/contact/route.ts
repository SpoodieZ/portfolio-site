import { NextResponse } from "next/server";

export const runtime = "nodejs";

const REASONS: Record<string, string> = {
  project: "Dự án / Project",
  job: "Cơ hội việc làm / Job opportunity",
  hello: "Chỉ chào hỏi / Just saying hi",
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Giới hạn đơn giản theo IP (chỉ trong bộ nhớ của một máy chủ, đủ để chặn spam thô sơ)
const hits = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_HITS;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r/g, "").trim().slice(0, max) : "";
const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Bẫy spam: ô ẩn có nội dung, hoặc gửi nhanh bất thường. Trả "ok" để bot không biết.
  if (clean(body.website, 200) || (typeof body.t === "number" && body.t < 1500)) {
    return NextResponse.json({ ok: true });
  }

  const name = oneLine(clean(body.name, 100));
  const email = oneLine(clean(body.email, 200));
  const phone = oneLine(clean(body.phone, 40));
  const message = clean(body.message, 4000);
  const reason = REASONS[clean(body.reason, 20)] ?? REASONS.hello;
  const lang = body.lang === "en" ? "en" : "vi";

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) {
    // Chưa cấu hình dịch vụ gửi email: báo rõ để giao diện hướng khách liên hệ trực tiếp.
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const text = [
    `Lý do: ${reason}`,
    `Tên: ${name}`,
    `Email: ${email}`,
    `Điện thoại: ${phone || "(không có)"}`,
    `Ngôn ngữ trang: ${lang}`,
    "",
    message || "(không có lời nhắn)",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${reason} - ${name}`,
        text,
      }),
    });
    if (!res.ok) return NextResponse.json({ error: "send_failed" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
