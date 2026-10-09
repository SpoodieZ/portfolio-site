"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Variant = "fade" | "draw" | "wipe" | "plain";
type Tag = "div" | "li" | "span" | "p" | "section" | "figure";

const BASE: Record<Variant, string> = { fade: "rv", draw: "draw", wipe: "wipe", plain: "" };

/** Thêm class "in" khi phần tử cuộn tới. CSS trong globals.css quyết định hiệu ứng. */
export function Reveal({
  as = "div",
  variant = "fade",
  delay = 0,
  className = "",
  children,
  style,
  ...rest
}: {
  as?: Tag;
  variant?: Variant;
  delay?: number;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = as as "div";
  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${BASE[variant]} ${shown ? "in" : ""} ${className}`.trim()}
      style={{ ...style, ["--d" as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Component>
  );
}
