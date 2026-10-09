import type { Dict } from "@/content";
import { Portrait } from "./Portrait";
import { Reveal } from "./Reveal";
import { ScrollWords } from "./ScrollWords";
import { SectionHead } from "./SectionHead";

export function About({ dict, portraitAlt, portraitPlaceholder }: {
  dict: Dict["about"];
  portraitAlt: string;
  portraitPlaceholder: string;
}) {
  return (
    <section
      id="gioi-thieu"
      className="mx-auto max-w-[1440px] border-b border-hair px-5 py-20 md:px-16 md:py-24"
    >
      <SectionHead title={dict.title} index={dict.index} />

      <div className="mb-16 grid grid-cols-1 items-center gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <ScrollWords text={dict.statement} className="t-lead" />
        </div>
        <Reveal className="flex justify-start lg:col-span-4 lg:justify-end" delay={120}>
          <div className="w-56 rotate-1 border border-hair bg-paper p-2 transition-transform duration-300 hover:rotate-0">
            <Portrait
              alt={portraitAlt}
              placeholder={portraitPlaceholder}
              sizes="224px"
              className="aspect-[4/5]"
            />
            <p className="t-label mt-2 text-center text-muted">{dict.tiltCaption}</p>
          </div>
        </Reveal>
      </div>

      <ul className="grid grid-cols-1 border-l border-t border-hair md:grid-cols-2 lg:grid-cols-4">
        {dict.cards.map((c, i) => (
          <Reveal
            as="li"
            key={c.label}
            delay={i * 90}
            className="flex flex-col justify-between border-b border-r border-hair p-6 md:p-8"
          >
            <p className="t-label mb-6 text-brass-ink">{c.label}</p>
            <p className="t-body flex-1">{c.text}</p>
            <p className="t-label mt-8 text-muted">{c.caption}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
