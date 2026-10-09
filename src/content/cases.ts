export const CASES = ["quan-ly-chung-tu", "on-tap-wyckoff"] as const;
export type CaseSlug = (typeof CASES)[number];
export const isCase = (s: string): s is CaseSlug => (CASES as readonly string[]).includes(s);
