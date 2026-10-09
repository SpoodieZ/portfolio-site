import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASES, LANGS, casePath, displayName, getDict, isCase, isLang, site } from "@/content";
import { CaseStudy } from "@/components/CaseStudy";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => CASES.map((slug) => ({ lang, slug })));
}

type Params = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang) || !isCase(slug)) return {};
  const dict = getDict(lang);
  const isSrd = slug === "quan-ly-chung-tu";
  const title = isSrd ? dict.projects.p1.title : dict.projects.p2.title;
  const description = (isSrd ? dict.cases.srd : dict.cases.wyckoff).intro;
  const base = site.siteUrl.replace(/\/$/, "");
  const url = (l: "vi" | "en") => `${base}${casePath(l, slug)}`;
  return {
    title: `${title} — ${displayName(lang)}®`,
    description,
    alternates: {
      canonical: url(lang),
      languages: { vi: url("vi"), en: url("en"), "x-default": url("vi") },
    },
    openGraph: { title, description, url: url(lang), type: "article" },
    robots: site.allowIndex ? undefined : { index: false, follow: false },
  };
}

export default async function CasePage({ params }: Params) {
  const { lang, slug } = await params;
  if (!isLang(lang) || !isCase(slug)) notFound();
  return <CaseStudy lang={lang} slug={slug} dict={getDict(lang)} />;
}
