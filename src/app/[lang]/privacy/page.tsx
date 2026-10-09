import Link from "next/link";
import { notFound } from "next/navigation";
import { getDict, homePath, isLang } from "@/content";

export default async function Privacy({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { privacy } = getDict(lang);

  return (
    <main id="main" className="mx-auto min-h-[70vh] max-w-[900px] px-5 pb-24 pt-32 md:px-16 md:pt-40">
      <Link href={homePath(lang)} className="t-label ul-draw text-muted">
        {privacy.back}
      </Link>
      <h1 className="t-h1 mb-3 mt-10">{privacy.title}</h1>
      <p className="t-label mb-12 text-muted">{privacy.updated}</p>
      <div className="border-t border-hair">
        {privacy.sections.map((s) => (
          <section key={s.h} className="grid grid-cols-1 gap-2 border-b border-hair py-6 md:grid-cols-12 md:gap-8">
            <h2 className="t-h3 md:col-span-4">{s.h}</h2>
            <p className="t-body text-muted md:col-span-8">{s.p}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
