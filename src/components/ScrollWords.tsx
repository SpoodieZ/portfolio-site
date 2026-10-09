"use client";

import { useEffect, useMemo, useRef } from "react";

const FROM = [140, 137, 130]; // xám (đủ 3:1 cho chữ lớn)
const TO = [10, 10, 10]; // đen

/** Đoạn chữ chuyển từ xám sang đen từng từ khi cuộn. Không có JS thì hiện đen luôn. */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>(".w"));
    const n = spans.length;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.88 - rect.top) / (rect.height + vh * 0.25)));
      spans.forEach((s, i) => {
        const q = Math.min(1, Math.max(0, (p - (i / n) * 0.85) / 0.15));
        const c = FROM.map((f, k) => Math.round(f + (TO[k] - f) * q));
        s.style.color = `rgb(${c[0]},${c[1]},${c[2]})`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [words]);

  return (
    <p ref={ref} className={`sw ${className}`}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="w">{w}</span>{" "}
        </span>
      ))}
    </p>
  );
}
