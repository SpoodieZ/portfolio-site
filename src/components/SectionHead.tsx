import { Reveal } from "./Reveal";

export function SectionHead({
  title,
  index,
  dark = false,
}: {
  title: string;
  index: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-4">
        <h2 className="t-h1 whitespace-nowrap">{title}</h2>
        <span className={`t-label shrink-0 ${dark ? "text-dark-muted" : "text-muted"}`}>{index}</span>
      </Reveal>
      <Reveal variant="draw" className={`h-px ${dark ? "bg-dark-hair" : "bg-hair"}`} />
    </div>
  );
}
