import type { Dict, Lang } from "@/content";
import { site } from "@/content";
import { Portrait } from "./Portrait";

export function Hero({ lang, dict }: { lang: Lang; dict: Dict["hero"] }) {
  const lines = site.nameLines[lang];
  return (
    <section
      id="top"
      className="mx-auto max-w-[1440px] border-b border-hair px-5 pb-16 pt-28 md:px-16 md:pb-20 md:pt-36"
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-between lg:col-span-7 lg:pr-8">
          <div>
            <p className="t-label mb-6 text-muted">{dict.eyebrow}</p>
            <h1 className="t-display mb-8">
              {lines.map((line, i) => (
                <span key={i} className="mask-line" style={{ ["--d" as string]: `${i * 140}ms` }}>
                  <span>{line}</span>
                </span>
              ))}
            </h1>
            <p className="t-body-lg mb-10 max-w-xl text-muted">{dict.tagline}</p>
          </div>

          <div className="border-t border-hair pt-8">
            <p className="t-label mb-3 text-muted">{dict.chipsLabel}</p>
            <ul className="flex flex-wrap gap-2.5">
              {dict.chips.map((c) => (
                <li
                  key={c}
                  className="t-label border border-hair px-3 py-1.5 normal-case tracking-normal transition-colors hover:border-ink"
                  style={{ textTransform: "none", letterSpacing: "0.01em" }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-end lg:col-span-5">
          <div className="hero-portrait relative border border-hair bg-paper p-2">
            <Portrait
              alt={dict.portraitAlt}
              placeholder={dict.portraitPlaceholder}
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              className="aspect-[3/4]"
            />
            <div className="t-label absolute bottom-5 left-5 border border-hair bg-paper/90 px-3 py-1">
              {dict.portraitCaption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
