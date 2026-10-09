import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseSlug, Dict, Lang } from "@/content";
import { CASES, casePath, site } from "@/content";
import { BrowserFrame } from "./BrowserFrame";
import { Reveal } from "./Reveal";

const SHELL = "mx-auto max-w-[1440px] px-5 md:px-16";

function Rule({ dark = false }: { dark?: boolean }) {
  return <Reveal variant="draw" className={`h-px ${dark ? "bg-dark-hair" : "bg-hair"}`} />;
}

function PartHead({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <Rule />
      <Reveal className="grid grid-cols-1 gap-4 pt-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="t-label text-brass-ink">{label}</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="t-h2 mb-4">{title}</h2>
          {intro && <p className="t-body-lg max-w-2xl text-muted">{intro}</p>}
        </div>
      </Reveal>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((b) => (
        <li key={b} className="t-body flex items-start gap-3">
          <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-ink" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedRows({ items }: { items: string[] }) {
  return (
    <ol>
      {items.map((s, i) => (
        <Reveal as="li" key={s} delay={i * 60} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-hair py-4">
          <span className="t-label text-muted">0{i + 1}</span>
          <span className="t-body">{s}</span>
        </Reveal>
      ))}
    </ol>
  );
}

type Props = { lang: Lang; slug: CaseSlug; dict: Dict };

export function CaseStudy({ lang, slug, dict }: Props) {
  const c = dict.cases;
  const index = CASES.indexOf(slug);
  const isSrd = slug === "quan-ly-chung-tu";
  const data = isSrd ? c.srd : c.wyckoff;
  const title = isSrd ? dict.projects.p1.title : dict.projects.p2.title;
  const nextSlug = CASES[(index + 1) % CASES.length];
  const nextTitle = isSrd ? dict.projects.p2.title : dict.projects.p1.title;
  const heroShot = isSrd ? "/images/srd/dashboard.png" : "/images/wyckoff-progress.jpg";
  const heroSize = isSrd ? { w: 2360, h: 1310 } : { w: 2160, h: 1350 };
  const heroCaption = isSrd ? dict.projects.p1.shots.dashboard : dict.projects.p2.shot;

  const meta: [string, ReactNode][] = [
    [c.metaLabels.role, data.meta.role],
    [c.metaLabels.timeline, data.meta.timeline],
    [c.metaLabels.year, data.meta.year],
    [c.metaLabels.team, data.meta.team],
    [c.metaLabels.type, data.meta.type],
  ];
  if (isSrd) meta.push([c.metaLabels.client, site.clientName[lang]]);

  return (
    <main id="main">
      {/* ---------- Đầu trang dự án ---------- */}
      <section className={`${SHELL} pb-14 pt-28 md:pb-20 md:pt-36`}>
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <Link href={`${lang === "vi" ? "" : "/en"}/#du-an`} className="t-label ul-draw text-muted hover:text-ink">
            {c.back}
          </Link>
          <p className="t-label text-muted">
            ({c.label} · 0{index + 1})
          </p>
        </div>

        <h1 className="t-h1 mb-8 max-w-[18ch]">
          <span className="mask-line">
            <span>{title}</span>
          </span>
        </h1>

        <ul className="mb-12 flex flex-wrap gap-2.5 md:mb-16">
          {data.chips.map((chip) => (
            <li
              key={chip}
              className="t-label border border-hair px-3 py-1.5"
              style={{ textTransform: "none", letterSpacing: "0.01em" }}
            >
              {chip}
            </li>
          ))}
        </ul>

        <Reveal variant="wipe">
          <BrowserFrame
            src={heroShot}
            alt={heroCaption}
            width={heroSize.w}
            height={heroSize.h}
            caption={heroCaption}
            sizes="(min-width: 1440px) 1312px, 100vw"
            priority
          />
        </Reveal>
      </section>

      {/* ---------- Giới thiệu + thông tin chung ---------- */}
      <section className={`${SHELL} pb-16 md:pb-24`}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <p className="text-[clamp(20px,2vw,28px)] leading-[1.45] tracking-[-0.015em]">{data.intro}</p>
            {isSrd && (
              <a
                href={site.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label mt-10 inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-paper transition-colors duration-100 hover:bg-brass hover:text-ink"
              >
                {dict.projects.p1.demo} ↗
              </a>
            )}
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <dl>
              {meta.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-hair py-3">
                  <dt className="t-label text-muted">{k}</dt>
                  <dd className="t-body">{v}</dd>
                </div>
              ))}
              <div className="border-t border-hair" />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- Vai trò của tôi ---------- */}
      <section className={`${SHELL} pb-16 md:pb-24`}>
        <Rule />
        <div className="grid grid-cols-1 gap-6 pt-8 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="t-label text-brass-ink">{c.myRoleLabel}</p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <Bullets items={data.myRole} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Cách làm ---------- */}
      <section className={`${SHELL} pb-16 md:pb-24`}>
        <Rule />
        <Reveal className="pb-10 pt-8">
          <h2 className="t-h1">{c.approachLabel}</h2>
        </Reveal>
        <ol className="grid grid-cols-1 border-l border-t border-hair md:grid-cols-2 lg:grid-cols-4">
          {data.approach.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 90} className="flex flex-col border-b border-r border-hair p-6 md:p-8">
              <span className="t-label mb-6 text-brass-ink">0{i + 1}</span>
              <h3 className="t-h3 mb-3">{a.title}</h3>
              <p className="t-body text-muted">{a.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- Các phần riêng của từng dự án ---------- */}
      {isSrd ? (
        <SrdParts lang={lang} dict={dict} />
      ) : (
        <WyckoffParts dict={dict} />
      )}

      {/* ---------- Quy mô ---------- */}
      <section className={`${SHELL} pb-16 md:pb-24`}>
        <Rule />
        <Reveal className="pb-8 pt-8">
          <p className="t-label text-brass-ink">{c.scopeLabel}</p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {data.scope.map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <span className="block text-[clamp(56px,8vw,120px)] font-medium leading-[1.05] tracking-[-0.04em]">
                  {s.n}
                </span>
                <span className="t-body mt-2 block max-w-[14rem] text-muted">{s.l}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ---------- Dự án tiếp theo ---------- */}
      <section className="on-dark bg-dark text-paper">
        <Link
          href={casePath(lang, nextSlug)}
          className="group mx-auto block max-w-[1440px] px-5 py-20 md:px-16 md:py-28"
        >
          <p className="t-label mb-6 text-brass">{c.nextLabel}</p>
          <p className="t-h1 flex items-baseline justify-between gap-6 transition-colors group-hover:text-brass">
            <span>{nextTitle}</span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </p>
        </Link>
      </section>
    </main>
  );
}

/* ================= SRD ================= */
function SrdParts({ lang, dict }: { lang: Lang; dict: Dict }) {
  const { parts } = dict.cases.srd;
  const d = dict.projects.p1.detail;
  const p1 = dict.projects.p1;
  void lang;
  return (
    <>
      <section className={`${SHELL} pb-8 md:pb-12`}>
        <PartHead {...parts.features} />
        <div>
          {dict.cases.srd.features.map((f, i) => (
            <article
              key={f.title}
              className="grid grid-cols-1 items-center gap-8 border-t border-hair py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12 lg:py-16"
            >
              <Reveal className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="t-label mb-4 text-brass-ink">{f.eyebrow}</p>
                <h3 className="t-h2 mb-5">{f.title}</h3>
                <p className="t-body mb-6 text-muted">{f.text}</p>
                <Bullets items={f.bullets} />
              </Reveal>
              <Reveal
                variant="wipe"
                delay={100}
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <BrowserFrame
                  src={`/images/srd/feature-${i + 1}.png`}
                  alt={f.alt}
                  width={1520}
                  height={[612, 722, 828, 752, 746][i]}
                  caption={f.alt}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className={`${SHELL} pb-16 md:pb-24`}>
        <PartHead {...parts.problems} />
        <ul>
          {d.problems.map((x, i) => (
            <Reveal
              as="li"
              key={x.problem}
              delay={i * 50}
              className="grid grid-cols-1 gap-2 border-t border-hair py-6 md:grid-cols-12 md:gap-8"
            >
              <p className="t-h3 md:col-span-4">{x.problem}</p>
              <p className="t-body text-muted md:col-span-8">{x.solution}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className={`${SHELL} pb-16 md:pb-24`}>
        <PartHead {...parts.safety} />
        <div className="lg:ml-[33.333%]">
          <Reveal>
            <Bullets items={d.safety} />
          </Reveal>
        </div>
        {site.results?.[lang] && site.results[lang].length > 0 && (
          <div className="mt-14 lg:ml-[33.333%]">
            <p className="t-label mb-4 text-brass-ink">{d.resultLabel}</p>
            <Bullets items={site.results[lang]} />
          </div>
        )}
      </section>
    </>
  );
}

/* ================= Wyckoff ================= */
function WyckoffParts({ dict }: { dict: Dict }) {
  const { parts } = dict.cases.wyckoff;
  const d = dict.projects.p2.detail;
  return (
    <>
      <section className={`${SHELL} pb-16 md:pb-24`}>
        <PartHead {...parts.features} />
        <div className="lg:ml-[33.333%]">
          <NumberedRows items={d.features} />
        </div>
      </section>

      <section className={`${SHELL} pb-16 md:pb-24`}>
        <PartHead {...parts.note} />
        <Reveal className="lg:ml-[33.333%]">
          <p className="t-body-lg max-w-2xl text-muted">{d.note}</p>
        </Reveal>
      </section>
    </>
  );
}
