"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

/**
 * Hiệu ứng chuyển trang: một tấm màn tối kéo từ trên xuống che kín màn hình,
 * trang mới được tải phía sau, rồi tấm màn trượt tiếp xuống dưới để lộ trang mới.
 *
 * Áp dụng cho mọi liên kết nội bộ sang một trang khác. Các trường hợp sau bỏ qua hiệu ứng
 * và chuyển trang bình thường: liên kết neo (#...) trên cùng một trang, liên kết mở tab mới,
 * bấm kèm phím Ctrl/Cmd/Shift, liên kết có thuộc tính data-no-transition (nút đổi ngôn ngữ),
 * và người dùng bật "giảm chuyển động".
 */
const COVER_MS = 550;
const HOLD_MS = 100;
const REVEAL_MS = 600;
const NAV_TIMEOUT_MS = 4000;
const EASE_COVER = "cubic-bezier(0.76, 0, 0.24, 1)";
const EASE_REVEAL = "cubic-bezier(0.16, 1, 0.3, 1)";

export function PageTransition() {
  const curtain = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const busy = useRef(false);
  const waiting = useRef<((reason: "route" | "timeout") => void) | null>(null);
  const lastPath = useRef(pathname);

  // Khi đường dẫn đổi xong thì báo cho luồng đang chờ.
  useEffect(() => {
    if (pathname !== lastPath.current) {
      lastPath.current = pathname;
      waiting.current?.("route");
    }
  }, [pathname]);

  const run = useCallback(
    async (href: string) => {
      const el = curtain.current;
      if (busy.current) return; // đang chuyển trang: bỏ qua cú bấm thứ hai
      if (!el || typeof el.animate !== "function") {
        router.push(href);
        return;
      }
      busy.current = true;
      const root = document.documentElement;
      root.classList.add("is-transitioning");
      el.style.visibility = "visible";

      try {
        // 1) Màn kéo từ trên xuống che kín
        await el.animate(
          [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }],
          { duration: COVER_MS, easing: EASE_COVER, fill: "forwards" },
        ).finished;

        // 2) Đổi trang phía sau màn
        const arrived = new Promise<void>((resolve) => {
          const timer = setTimeout(() => resolve(), NAV_TIMEOUT_MS);
          waiting.current = () => {
            clearTimeout(timer);
            resolve();
          };
        });
        router.push(href);
        await arrived;
        waiting.current = null;
        await new Promise((r) => setTimeout(r, HOLD_MS));

        // 3) Trang mới bắt đầu chạy hiệu ứng vào, màn trượt tiếp xuống dưới để lộ trang
        root.classList.remove("is-transitioning");
        await el.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(100%)" }],
          { duration: REVEAL_MS, easing: EASE_REVEAL, fill: "forwards" },
        ).finished;
      } catch {
        // bị hủy giữa chừng: dọn dẹp ở bước cuối
      } finally {
        el.getAnimations().forEach((a) => a.cancel());
        el.style.visibility = "hidden";
        root.classList.remove("is-transitioning");
        waiting.current = null;
        busy.current = false;
      }
    },
    [router],
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (reduce.matches) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      if (a.hasAttribute("data-no-transition")) return; // ví dụ nút đổi ngôn ngữ: chuyển ngay
      const raw = a.getAttribute("href");
      if (!raw || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      // Cùng một trang (chỉ khác phần #neo) thì để trình duyệt cuộn mượt như thường
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      e.preventDefault();
      e.stopPropagation();
      void run(url.pathname + url.search + url.hash);
    };

    // Pha "capture" để chặn trước bộ xử lý của <Link>
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [run]);

  return (
    <div
      ref={curtain}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] bg-dark"
      style={{ visibility: "hidden", transform: "translateY(-100%)" }}
    />
  );
}
