"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dict, Lang } from "@/content";
import { homePath } from "@/content";

const SECTIONS = [
  { id: "gioi-thieu", key: "about" },
  { id: "du-an", key: "projects" },
  { id: "dich-vu", key: "services" },
  { id: "lien-he", key: "contact" },
] as const;

export function Header({ lang, dict, name }: { lang: Lang; dict: Dict["nav"]; name: string }) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const home = homePath(lang);
  const pathname = usePathname();
  const onHome = ["/", "/vi", "/en"].includes(pathname);

  // Ẩn khi cuộn xuống, hiện lại khi cuộn lên
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 120) setHidden(false);
      else if (y > last + 6) setHidden(true);
      else if (y < last - 6) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tô sáng mục đang xem. Chạy lại mỗi khi đổi trang để bắt đúng các phần của trang mới.
  useEffect(() => {
    setActive("");
    setHidden(false);
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Đóng menu điện thoại khi đã sang trang khác
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const link = (id: string) => `${home}#${id}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-hair bg-paper/90 backdrop-blur-md transition-transform duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-16">
        <a href={onHome ? "#top" : home} className="t-h3 shrink-0 whitespace-nowrap tracking-tight" aria-label={name}>
          {name}®
        </a>

        <div className="flex items-center gap-5 md:gap-6 lg:gap-10">
          <nav aria-label="Menu" className="t-label hidden items-center gap-5 whitespace-nowrap md:flex lg:gap-8">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={link(s.id)}
                data-active={active === s.id}
                aria-current={active === s.id ? "true" : undefined}
                className={`ul-draw ${active === s.id ? "text-ink" : "text-muted"} hover:text-ink`}
              >
                ({dict[s.key].toUpperCase()})
              </a>
            ))}
          </nav>

          <div className="t-label flex items-center gap-2 whitespace-nowrap md:border-l md:border-hair md:pl-6" role="group" aria-label={dict.langLabel}>
            <Link
              href={homePath("vi")}
              hrefLang="vi"
              data-no-transition
              aria-current={lang === "vi" ? "true" : undefined}
              className={lang === "vi" ? "text-ink" : "text-muted hover:text-ink"}
            >
              VI
            </Link>
            <span aria-hidden className="text-hair">|</span>
            <Link
              href={homePath("en")}
              hrefLang="en"
              data-no-transition
              aria-current={lang === "en" ? "true" : undefined}
              className={lang === "en" ? "text-ink" : "text-muted hover:text-ink"}
            >
              EN
            </Link>
          </div>

          <a
            href={link("lien-he")}
            className="t-label hidden items-center whitespace-nowrap bg-ink px-5 py-2.5 text-paper transition-colors duration-100 hover:bg-brass hover:text-ink lg:inline-flex"
          >
            {dict.cta} →
          </a>

          <button
            type="button"
            className="t-label md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? dict.close : dict.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Menu"
          className="border-t border-hair bg-paper px-5 pb-8 pt-4 md:hidden"
        >
          <ul>
            {SECTIONS.map((s, i) => (
              <li key={s.id} className="border-b border-hair">
                <a
                  href={link(s.id)}
                  onClick={() => setOpen(false)}
                  className="t-h2 flex items-baseline justify-between py-4"
                >
                  <span>{dict[s.key]}</span>
                  <span className="t-label text-muted">(0{i + 2})</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={link("lien-he")}
            onClick={() => setOpen(false)}
            className="t-label mt-6 inline-flex bg-ink px-5 py-3 text-paper"
          >
            {dict.cta} →
          </a>
        </nav>
      )}
    </header>
  );
}
