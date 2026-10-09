import Image from "next/image";

export function BrowserFrame({
  src,
  alt,
  width,
  height,
  urlLabel,
  caption,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  urlLabel?: string;
  caption: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="border border-hair bg-white">
        <div className="flex items-center justify-between border-b border-hair bg-paper-soft px-4 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 border border-[#c4c7c7] bg-paper" />
            <span className="h-2.5 w-2.5 border border-[#c4c7c7] bg-paper" />
            <span className="h-2.5 w-2.5 border border-[#c4c7c7] bg-paper" />
          </div>
          {urlLabel ? (
            <span className="t-label text-muted" style={{ textTransform: "none", letterSpacing: "0.02em" }}>
              {urlLabel}
            </span>
          ) : (
            <span />
          )}
          <span className="w-10" aria-hidden />
        </div>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="t-label mt-3 text-muted">{caption}</figcaption>
    </figure>
  );
}
