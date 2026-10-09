import Link from "next/link";
import type { Dict, Lang } from "@/content";
import { displayName, homePath, privacyPath, site } from "@/content";
import { FitText } from "./FitText";

export function Footer({ lang, dict }: { lang: Lang; dict: Dict["footer"] }) {
  const name = displayName(lang);
  const year = new Date().getFullYear();
  const link = "ul-draw hover:text-[#ffdeae]";

  return (
    <footer className="on-dark border-t border-dark-hair bg-dark-card px-5 py-14 text-paper md:px-16 md:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 border-b border-dark-hair pb-8">
          <FitText text={`${name.toUpperCase()}®`} className="font-medium leading-[1.05] tracking-[-0.04em]" />
        </div>

        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <ul className="t-label flex flex-wrap gap-x-8 gap-y-3 text-dark-muted md:col-span-8">
            {site.cvUrl && (
              <li>
                <a href={site.cvUrl} target="_blank" rel="noopener noreferrer" className={link}>
                  (01) {dict.cv}
                </a>
              </li>
            )}
            <li>
              <Link href={privacyPath(lang)} className={link}>
                ({site.cvUrl ? "02" : "01"}) {dict.privacy}
              </Link>
            </li>
          </ul>
          <div className="t-label flex flex-col justify-between gap-3 text-dark-muted sm:flex-row md:col-span-4 md:flex-col md:items-end lg:flex-row lg:items-center">
            <span>
              © {year} {name}®. {dict.rights}
            </span>
            <span className="flex gap-2 text-paper">
              <Link href={homePath("vi")} hrefLang="vi"
              data-no-transition aria-current={lang === "vi" ? "true" : undefined} className={lang === "vi" ? "" : "text-dark-muted hover:text-paper"}>VI</Link>
              <span aria-hidden className="text-dark-hair">|</span>
              <Link href={homePath("en")} hrefLang="en"
              data-no-transition aria-current={lang === "en" ? "true" : undefined} className={lang === "en" ? "" : "text-dark-muted hover:text-paper"}>EN</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
