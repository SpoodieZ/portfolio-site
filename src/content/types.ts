export type Lang = "vi" | "en";
export const LANGS: Lang[] = ["vi", "en"];
export const isLang = (v: string): v is Lang => v === "vi" || v === "en";

export type Part = { label: string; title: string; intro?: string };
export type CaseCommon = {
  chips: string[];
  intro: string;
  meta: { role: string; timeline: string; year: string; team: string; type: string };
  myRole: string[];
  approach: { title: string; text: string }[];
  scope: { n: string; l: string }[];
};

export type Feature = { eyebrow: string; title: string; text: string; bullets: string[]; alt: string };

export type Dict = {
  meta: { title: string; description: string };
  skip: string;
  nav: {
    about: string;
    projects: string;
    services: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    tagline: string;
    chipsLabel: string;
    chips: string[];
    portraitAlt: string;
    portraitCaption: string;
    portraitPlaceholder: string;
  };
  about: {
    title: string;
    index: string;
    statement: string;
    tiltCaption: string;
    cards: { label: string; text: string; caption: string }[];
  };
  projects: {
    title: string;
    index: string;
    p1: {
      eyebrow: string;
      title: string;
      clientLabel: string;
      summary: string;
      bullets: string[];
      demo: string;
      more: string;
      less: string;
      flowLabel: string;
      flow: string[];
      shots: { dashboard: string };
      detail: {
        problemsLabel: string;
        problems: { problem: string; solution: string }[];
        safetyLabel: string;
        safety: string[];
        resultLabel: string;
      };
    };
    p2: {
      eyebrow: string;
      title: string;
      summary: string;
      bullets: string[];
      more: string;
      less: string;
      shot: string;
      detail: { featuresLabel: string; features: string[]; noteLabel: string; note: string };
    };
  };
  services: {
    title: string;
    index: string;
    doneLabel: string;
    done: { name: string; desc: string }[];
    onRequestLabel: string;
    onRequest: { name: string; desc: string }[];
    note: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    channelsLabel: string;
    channels: { email: string; zalo: string; linkedin: string; cv: string };
    copy: string;
    copied: string;
    form: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      phone: string;
      phonePh: string;
      reason: string;
      reasons: { project: string; job: string; hello: string };
      message: string;
      messagePh: string;
      submit: string;
      sending: string;
      success: string;
      errRequired: string;
      errEmail: string;
      errFallback: string;
      errNotConfigured: string;
      responseLabel: string;
    };
  };
  cases: {
    label: string;
    back: string;
    metaLabels: { role: string; timeline: string; year: string; team: string; type: string; client: string };
    myRoleLabel: string;
    approachLabel: string;
    scopeLabel: string;
    nextLabel: string;
    srd: CaseCommon & {
      features: Feature[];
      parts: { features: Part; problems: Part; safety: Part };
    };
    wyckoff: CaseCommon & {
      parts: { features: Part; note: Part };
    };
  };
  footer: { cv: string; privacy: string; rights: string };
  privacy: { title: string; updated: string; sections: { h: string; p: string }[]; back: string };
};
