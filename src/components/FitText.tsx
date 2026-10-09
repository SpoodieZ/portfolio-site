"use client";

import { useEffect, useRef } from "react";

/** Chữ một dòng tự co giãn cho vừa chiều rộng khung chứa. */
export function FitText({ text, className = "" }: { text: string; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const w = wrap.current;
    const s = inner.current;
    if (!w || !s) return;
    const fit = () => {
      s.style.fontSize = "100px";
      const natural = s.scrollWidth;
      if (natural > 0) s.style.fontSize = `${Math.min(300, (100 * w.clientWidth) / natural)}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(w);
    document.fonts?.ready.then(fit).catch(() => {});
    return () => ro.disconnect();
  }, [text]);

  return (
    <div ref={wrap} className="w-full overflow-hidden">
      <span
        ref={inner}
        aria-hidden
        className={`inline-block whitespace-nowrap ${className}`}
        style={{ fontSize: "10vw" }}
      >
        {text}
      </span>
    </div>
  );
}
