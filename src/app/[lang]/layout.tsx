import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Be_Vietnam_Pro } from "next/font/google";
import type { ReactNode } from "react";
import "../globals.css";
import { LANGS, displayName, getDict, homePath, isLang, site } from "@/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageTransition } from "@/components/PageTransition";

const font = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const NOSCRIPT_CSS =
  ".rv,.draw,.wipe>*{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}" +
  ".sw .w{color:#0a0a0a!important}" +
  ".flow .flow-step{border-color:#0a0a0a;color:#0a0a0a}" +
  ".flow .flow-line{transform:none!important}";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const dict = getDict(lang);
  const title = `${displayName(lang)}® — ${dict.meta.title}`;
  const base = site.siteUrl.replace(/\/$/, "");
  const url = (l: "vi" | "en") => `${base}${homePath(l) === "/" ? "" : homePath(l)}/`;
  return {
    metadataBase: new URL(site.siteUrl),
    icons: { icon: "/favicon.svg" },
    title,
    description: dict.meta.description,
    alternates: {
      canonical: url(lang),
      languages: { vi: url("vi"), en: url("en"), "x-default": url("vi") },
    },
    openGraph: {
      title,
      description: dict.meta.description,
      url: url(lang),
      type: "website",
      locale: lang === "vi" ? "vi_VN" : "en_US",
    },
    robots: site.allowIndex ? undefined : { index: false, follow: false },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
} & Params) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDict(lang);

  return (
    <html lang={lang} className={font.variable} data-scroll-behavior="smooth">
      <head>
        {/* Không có JavaScript thì hiện nội dung đầy đủ, không chờ hiệu ứng cuộn */}
        <noscript>
          <style>{NOSCRIPT_CSS}</style>
        </noscript>
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {dict.skip}
        </a>
        <ScrollProgress />
        <PageTransition />
        <Header lang={lang} dict={dict.nav} name={displayName(lang)} />
        {children}
        <Footer lang={lang} dict={dict.footer} />
      </body>
    </html>
  );
}
