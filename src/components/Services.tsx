import type { Dict, Lang } from "@/content";
import { CASES, casePath } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

function Row({
  n,
  name,
  desc,
  href,
  delay,
}: {
  n: string;
  name: string;
  desc: string;
  href?: string;
  delay: number;
}) {
  const body = (
    <div className="group grid grid-cols-1 items-baseline gap-1 py-7 md:grid-cols-12 md:gap-0 md:py-8">
      <span className="t-label mb-1 text-dark-muted transition-colors group-hover:text-brass md:col-span-1 md:mb-0">
        {n}
      </span>
      <span className="t-h3 transition-colors group-hover:text-brass md:col-span-6">
        {name}
        {href && <span aria-hidden className="ml-3 inline-block text-dark-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brass">→</span>}
      </span>
      <span className="t-body mt-1 text-dark-muted md:col-span-5 md:mt-0">{desc}</span>
    </div>
  );
  return (
    <li>
      <Reveal variant="draw" delay={delay} className="h-px bg-dark-hair" />
      <Reveal delay={delay}>
        {href ? (
          <a href={href} className="on-dark block">
            {body}
          </a>
        ) : (
          body
        )}
      </Reveal>
    </li>
  );
}

export function Services({ lang, dict }: { lang: Lang; dict: Dict["services"] }) {
  return (
    <section id="dich-vu" className="on-dark border-b border-dark-hair bg-dark text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-28">
        <SectionHead title={dict.title} index={dict.index} dark />

        <div className="mb-14">
          <p className="t-label mb-4 text-brass">{dict.doneLabel}</p>
          <ul>
            {dict.done.map((r, i) => (
              <Row key={r.name} n={`0${i + 1}`} name={r.name} desc={r.desc} href={casePath(lang, CASES[i])} delay={i * 80} />
            ))}
          </ul>
          <Reveal variant="draw" className="h-px bg-dark-hair" />
        </div>

        <div>
          <p className="t-label mb-4 text-brass">{dict.onRequestLabel}</p>
          <ul>
            {dict.onRequest.map((r, i) => (
              <Row
                key={r.name}
                n={`0${dict.done.length + i + 1}`}
                name={r.name}
                desc={r.desc}
                delay={i * 80}
              />
            ))}
          </ul>
          <Reveal variant="draw" className="h-px bg-dark-hair" />
        </div>

        <Reveal className="t-body-lg mt-12 max-w-2xl text-paper">{dict.note}</Reveal>
      </div>
    </section>
  );
}
