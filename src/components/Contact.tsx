import type { Dict, Lang } from "@/content";
import { site } from "@/content";
import { ContactForm } from "./ContactForm";
import { CopyButton } from "./CopyButton";
import { Reveal } from "./Reveal";

const tile =
  "t-label block border border-dark-hair p-3 text-center transition-colors hover:border-brass hover:text-brass";

export function Contact({ lang, dict }: { lang: Lang; dict: Dict["contact"] }) {
  const ch = dict.channels;
  const responseTime = site.responseTime?.[lang] ?? null;

  return (
    <section id="lien-he" className="on-dark bg-dark text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between gap-14 lg:col-span-6">
            <Reveal>
              <p className="t-label mb-6 text-brass">{dict.eyebrow}</p>
              <h2 className="text-[clamp(34px,4.4vw,64px)] font-medium leading-[1.1] tracking-[-0.03em]">
                {dict.heading}
              </h2>
            </Reveal>

            <Reveal delay={120} className="border-t border-dark-hair pt-8">
              <p className="t-label mb-4 text-dark-muted">{dict.channelsLabel}</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {site.email ? (
                  <a href={`mailto:${site.email}`} className={tile}>{ch.email}</a>
                ) : (
                  <span className={`${tile} text-dark-muted`}>[{ch.email}]</span>
                )}
                {site.zaloUrl ? (
                  <a href={site.zaloUrl} target="_blank" rel="noopener noreferrer" className={tile}>{ch.zalo}</a>
                ) : (
                  <span className={`${tile} text-dark-muted`}>[{ch.zalo}]</span>
                )}
                {site.linkedinUrl ? (
                  <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className={tile}>{ch.linkedin}</a>
                ) : (
                  <span className={`${tile} text-dark-muted`}>[{ch.linkedin}]</span>
                )}
                {site.cvUrl ? (
                  <a href={site.cvUrl} target="_blank" rel="noopener noreferrer" className={tile}>{ch.cv}</a>
                ) : (
                  <span className={`${tile} text-dark-muted`}>[{ch.cv}]</span>
                )}
              </div>
              {site.email && (
                <p className="t-body mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-dark-muted">
                  <span className="text-paper">{site.email}</span>
                  <CopyButton value={site.email} label={dict.copy} doneLabel={dict.copied} className="text-brass" />
                </p>
              )}
            </Reveal>
          </div>

          <Reveal delay={80} className="lg:col-span-6">
            <ContactForm
              lang={lang}
              dict={dict.form}
              fallbackEmail={site.email}
              responseTime={responseTime}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
