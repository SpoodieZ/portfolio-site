import type { Lang } from "./types";

/**
 * NƠI DUY NHẤT CẦN ĐIỀN THÔNG TIN THẬT.
 * Chỗ nào còn dấu ngoặc vuông [ ] là chưa điền. Để trống ("") thì mục đó tự ẩn
 * (với liên hệ) hoặc hiện dạng ngoặc vuông (với tên).
 */
export const site = {
  /** Tên hiển thị. Mỗi phần tử là một dòng ở tiêu đề lớn đầu trang. */
  nameLines: {
    vi: ["Lê Khánh", "Toàn"],
    en: ["Lê Khánh", "Toàn"],
  } as Record<Lang, string[]>,

  /** Liên hệ. Điền địa chỉ thật; để "" nếu chưa có. */
  email: "khanhtoanwork29@gmail.com",
  zaloUrl: "", // ví dụ: https://zalo.me/0900000000
  linkedinUrl: "", // ví dụ: https://www.linkedin.com/in/ten-ban
  cvUrl: "", // ví dụ: /files/cv.pdf (đặt file trong thư mục public/files)

  /** Dự án SRD */
  clientName: { vi: "[Tên khách hàng]", en: "[Client name]" } as Record<Lang, string>,
  demoUrl: "https://srd-chungtu-demo.vercel.app",
  demoHost: "srd-chungtu-demo.vercel.app",
  /** Kết quả đo được của dự án SRD. Chỉ điền số THẬT. null = ẩn mục kết quả. */
  results: null as null | Record<Lang, string[]>,

  /** Thời gian phản hồi hiển thị cạnh nút gửi. null = ẩn. */
  responseTime: null as null | Record<Lang, string>,

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  allowIndex: process.env.NEXT_PUBLIC_ALLOW_INDEX === "true",
};

export const displayName = (lang: Lang) => site.nameLines[lang].join(" ");
