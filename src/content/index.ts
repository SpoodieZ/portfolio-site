import { vi } from "./vi";
import { en } from "./en";
import type { Dict, Lang } from "./types";

export const dictionaries: Record<Lang, Dict> = { vi, en };
export const getDict = (lang: Lang): Dict => dictionaries[lang];
export { site, displayName } from "./site";
export { isLang, LANGS } from "./types";
export type { Dict, Lang } from "./types";

/** Tiếng Việt ở "/", tiếng Anh ở "/en". */
export const homePath = (lang: Lang) => (lang === "vi" ? "/" : "/en");
export const privacyPath = (lang: Lang) => (lang === "vi" ? "/privacy" : "/en/privacy");

export { CASES, isCase } from "./cases";
export type { CaseSlug } from "./cases";
/** Trang riêng của từng dự án: "/work/<slug>" (Việt) hoặc "/en/work/<slug>". */
export const casePath = (lang: Lang, slug: string) =>
  `${lang === "vi" ? "" : "/en"}/work/${slug}`;
