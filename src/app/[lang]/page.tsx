import { notFound } from "next/navigation";
import { getDict, isLang } from "@/content";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDict(lang);

  return (
    <main id="main">
      <Hero lang={lang} dict={dict.hero} />
      <About
        dict={dict.about}
        portraitAlt={dict.hero.portraitAlt}
        portraitPlaceholder={dict.hero.portraitPlaceholder}
      />
      <Projects lang={lang} dict={dict.projects} />
      <Services lang={lang} dict={dict.services} />
      <Contact lang={lang} dict={dict.contact} />
    </main>
  );
}
