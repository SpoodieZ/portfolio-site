"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Dict, Lang } from "@/content";

type Reason = "project" | "job" | "hello";
type Errors = Partial<Record<"name" | "email", string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm({
  lang,
  dict,
  fallbackEmail,
  responseTime,
}: {
  lang: Lang;
  dict: Dict["contact"]["form"];
  fallbackEmail: string;
  responseTime: string | null;
}) {
  const uid = useId();
  const [reason, setReason] = useState<Reason>("project");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const mountedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const text = String(fd.get("message") ?? "").trim();
    const hp = String(fd.get("website") ?? "");

    const next: Errors = {};
    if (!name) next.name = dict.errRequired;
    if (!email) next.email = dict.errRequired;
    else if (!EMAIL_RE.test(email)) next.email = dict.errEmail;
    setErrors(next);
    if (next.name || next.email) {
      const first = next.name ? "name" : "email";
      formRef.current?.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          reason,
          message: text,
          lang,
          website: hp,
          t: Date.now() - mountedAt.current,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage(dict.success);
        formRef.current?.reset();
        setReason("project");
        mountedAt.current = Date.now();
      } else if (res.status === 503) {
        setStatus("error");
        setMessage(dict.errNotConfigured);
      } else {
        setStatus("error");
        setMessage(dict.errFallback);
      }
    } catch {
      setStatus("error");
      setMessage(dict.errFallback);
    }
  }

  const field =
    "w-full border-0 border-b border-dark-hair bg-transparent px-0 py-2.5 text-paper placeholder-[#6a6862] outline-none transition-colors focus:border-brass t-body";
  const labelCls = "t-label mb-2 block text-dark-muted";
  const err = (id: string, text?: string) =>
    text ? (
      <p id={id} className="t-small mt-2 text-[#e8c086]">
        <span aria-hidden>↳ </span>
        {text}
      </p>
    ) : null;

  const reasons: { v: Reason; label: string }[] = [
    { v: "project", label: dict.reasons.project },
    { v: "job", label: dict.reasons.job },
    { v: "hello", label: dict.reasons.hello },
  ];

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6 border border-dark-hair bg-dark-card p-6 md:p-10">
      <div>
        <label htmlFor={`${uid}-name`} className={labelCls}>{dict.name}</label>
        <input
          id={`${uid}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={dict.namePh}
          maxLength={100}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${uid}-name-err` : undefined}
          className={field}
          onChange={() => errors.name && setErrors((p) => ({ ...p, name: undefined }))}
        />
        {err(`${uid}-name-err`, errors.name)}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-email`} className={labelCls}>{dict.email}</label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={dict.emailPh}
            maxLength={200}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
            className={field}
            onChange={() => errors.email && setErrors((p) => ({ ...p, email: undefined }))}
          />
          {err(`${uid}-email-err`, errors.email)}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={labelCls}>{dict.phone}</label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={dict.phonePh}
            maxLength={40}
            className={field}
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelCls}>{dict.reason}</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {reasons.map((r) => (
            <label key={r.v} className="cursor-pointer">
              <input
                type="radio"
                name="reason"
                value={r.v}
                checked={reason === r.v}
                onChange={() => setReason(r.v)}
                className="peer sr-only"
              />
              <span className="t-label block border border-dark-hair px-3 py-2.5 text-center normal-case text-dark-muted transition-colors peer-checked:border-paper peer-checked:bg-[#281800] peer-checked:text-[#ffdeae] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-paper"
                style={{ textTransform: "none", letterSpacing: "0.02em" }}>
                {r.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`${uid}-message`} className={labelCls}>{dict.message}</label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          maxLength={4000}
          placeholder={dict.messagePh}
          className={`${field} resize-none`}
        />
      </div>

      {/* Bẫy chống spam: người thật không thấy và không điền */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          aria-disabled={status === "sending"}
          className="t-label w-full bg-paper px-10 py-4 text-ink transition-colors duration-100 hover:bg-brass hover:text-ink aria-disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? dict.sending : dict.submit}
        </button>
        {responseTime && (
          <p className="t-label text-dark-muted">
            {dict.responseLabel} {responseTime}
          </p>
        )}
      </div>

      <div role="status" aria-live="polite" className="min-h-[1.5rem]">
        {message && (
          <p className={`t-body ${status === "success" ? "text-paper" : "text-[#e8c086]"}`}>
            {status === "success" ? "✓ " : "! "}
            {message}
            {status === "error" && fallbackEmail && (
              <>
                {" "}
                <a href={`mailto:${fallbackEmail}`} className="ul-draw on-dark" data-active="true">
                  {fallbackEmail}
                </a>
              </>
            )}
          </p>
        )}
      </div>
    </form>
  );
}
