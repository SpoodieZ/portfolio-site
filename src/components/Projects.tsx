import Link from "next/link";
import type { Dict, Lang } from "@/content";
import { CASES, casePath, site } from "@/content";
import { BrowserFrame } from "./BrowserFrame";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { StatusFlow } from "./StatusFlow";

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((b) => (
      <li key={b} className="t-body flex items-start gap-3">
        <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-ink" />
        <span>{b}</span>
      </li>
    ))}
  </ul>
);

const primaryBtn =
  "t-label inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-paper transition-colors duration-100 hover:bg-brass hover:text-ink";
const ghostBtn =
  "t-label group/btn inline-flex items-center gap-2 border border-ink px-7 py-3.5 transition-colors duration-100 hover:border-brass-mid hover:text-brass-ink";

export function Projects({ lang, dict }: { lang: Lang; dict: Dict["projects"] }) {
  const { p1, p2 } = dict;
  const href1 = casePath(lang, CASES[0]);
  const href2 = casePath(lang, CASES[1]);

  return (
    <section
      id="du-an"
      className="mx-auto max-w-[1440px] border-b border-hair px-5 py-20 md:px-16 md:py-24"
    >
      <SectionHead title={dict.title} index={dict.index} />

      {/* ---------- Dự án 1: SRD ---------- */}
      <article id="du-an-1" className="group border-b border-hair py-12 md:py-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="t-label mb-3 text-muted">{p1.eyebrow}</p>
              <h3 className="t-h2 mb-2 transition-colors group-hover:text-brass-mid">
                <Link href={href1} className="focus-visible:outline-offset-4">
                  {p1.title}
                </Link>
              </h3>
              <p className="t-label mb-6 text-muted">
                {p1.clientLabel} {site.clientName[lang]}
              </p>
              <p className="t-body mb-6 text-muted">{p1.summary}</p>
            </Reveal>
            <Reveal delay={100}>
              <Bullets items={p1.bullets} />
            </Reveal>
            <div className="mt-8">
              <StatusFlow label={p1.flowLabel} steps={p1.flow} />
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                {p1.demo} ↗
              </a>
              <Link href={href1} className={ghostBtn}>
                {p1.more}
                <span aria-hidden className="transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal variant="wipe">
              <Link href={href1} tabIndex={-1} aria-hidden className="block">
                <BrowserFrame
                  src="/images/srd/dashboard.png"
                  alt={p1.shots.dashboard}
                  width={2360}
                  height={1310}
                  caption={p1.shots.dashboard}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  priority
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </article>

      {/* ---------- Dự án 2: Wyckoff ---------- */}
      <article id="du-an-2" className="group py-12 md:py-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:order-2 lg:col-span-5">
            <Reveal>
              <p className="t-label mb-3 text-muted">{p2.eyebrow}</p>
              <h3 className="t-h2 mb-6 transition-colors group-hover:text-brass-mid">
                <Link href={href2} className="focus-visible:outline-offset-4">
                  {p2.title}
                </Link>
              </h3>
              <p className="t-body mb-6 text-muted">{p2.summary}</p>
            </Reveal>
            <Reveal delay={100}>
              <Bullets items={p2.bullets} />
            </Reveal>
            <div className="mt-10">
              <Link href={href2} className={ghostBtn}>
                {p2.more}
                <span aria-hidden className="transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:order-1 lg:col-span-7">
            <Reveal variant="wipe">
              <Link href={href2} tabIndex={-1} aria-hidden className="block">
                <BrowserFrame
                  src="/images/wyckoff-progress.jpg"
                  alt={p2.shot}
                  width={2160}
                  height={1350}
                  caption={p2.shot}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </article>
    </section>
  );
}
