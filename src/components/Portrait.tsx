import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const CANDIDATES = ["portrait.jpg", "portrait.jpeg", "portrait.webp", "portrait.png"];

function findPortrait(): string | null {
  for (const f of CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", f))) return `/images/${f}`;
  }
  return null;
}

/**
 * Ảnh chân dung (giữ nguyên màu): đặt file vào public/images/portrait.jpg là tự hiện.
 * Chưa có ảnh thì hiện khung giữ chỗ.
 */
export function Portrait({
  alt,
  placeholder,
  sizes,
  priority = false,
  className = "",
}: {
  alt: string;
  placeholder: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const src = findPortrait();
  return (
    <div className={`relative overflow-hidden bg-[#e3e2df] ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <span className="t-label text-[#4f4d49]">{placeholder}</span>
        </div>
      )}
    </div>
  );
}
