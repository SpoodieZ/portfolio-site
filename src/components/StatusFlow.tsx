import { Reveal } from "./Reveal";

/** Chuỗi 4 trạng thái xử lý hồ sơ, sáng lên lần lượt khi cuộn tới. */
export function StatusFlow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <Reveal variant="plain" className="flow mb-2">
      <p className="t-label mb-3 text-muted">{label}</p>
      <div className="relative">
        <div aria-hidden className="absolute left-0 right-0 top-[7px] h-px bg-hair" />
        <div aria-hidden className="flow-line absolute left-0 right-0 top-[7px] h-px bg-brass" />
        <ol className="relative grid grid-cols-4 gap-2">
          {steps.map((s, i) => (
            <li
              key={s}
              className="flow-step pr-2 text-left"
              style={{ ["--d" as string]: `${300 + i * 450}ms`, border: 0 }}
            >
              <span className="dot relative mb-2 block h-[15px] w-[15px] border border-ink bg-hair" aria-hidden />
              <span className="t-small block leading-snug">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
