# Website portfolio của Lê Khánh Toàn

Website một trang song ngữ (Việt ở `/`, Anh ở `/en`) để xin việc và bán dịch vụ (ứng dụng quản lý, quy trình tự động). Người dùng không viết code và giao tiếp bằng tiếng Việt: trả lời bằng tiếng Việt, ngắn gọn, nói rõ cái gì đã kiểm tra và cái gì chưa.

## Công nghệ và lệnh

Next.js 16 (App Router), React 19, Tailwind CSS 4, font Be Vietnam Pro. Bản Next này có thay đổi so với các bản cũ: khi cần dùng API nào, đọc tài liệu trong `node_modules/next/dist/docs/` trước.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # kiểm tra bản chạy thật (kèm kiểm tra kiểu)
npm run typecheck
```

## Chỗ sửa nội dung

- Thông tin thật (tên, email, Zalo, LinkedIn, CV, tên khách hàng, kết quả đo được): `src/content/site.ts`.
- Toàn bộ chữ: `src/content/vi.ts` và `src/content/en.ts`. Hai file có cùng cấu trúc (`types.ts`); sửa cái này phải sửa cái kia.
- Ảnh: `public/images/` (ảnh chân dung là `portrait.jpg`, ảnh SRD ở `srd/`).
- Trang dự án: `src/components/CaseStudy.tsx`, các slug ở `src/content/cases.ts`.
- Hiệu ứng chuyển trang: `src/components/PageTransition.tsx`.
- Hướng dẫn đầy đủ: `README.md`. (Bản chiến lược riêng của chủ website chỉ lưu trên máy của họ, không nằm trong kho này.)

## Quy tắc nội dung (bắt buộc)

- KHÔNG ghi trên website rằng người dùng "dùng AI để viết code / xây app". AI chỉ xuất hiện như một năng lực giải pháp (đọc, phân loại, tự động hóa). Nhưng cũng KHÔNG viết "lập trình viên", "kỹ sư phần mềm", "tự viết từng dòng code". Nếu khách hỏi thẳng thì trả lời đúng sự thật.
- KHÔNG bịa số liệu, logo khách hàng, lời chứng thực, giải thưởng, giá. Chỗ chưa có thì để trống hoặc dạng `[...]`. Mục "Kết quả" chỉ hiện khi `site.results` có số thật.
- Chỉ ghi "đã làm" những gì có sản phẩm chứng minh (SRD, Wyckoff). Quy trình tự động, marketing, game, website: ghi là "nhận làm theo yêu cầu".
- SRD là khách hàng thật. Nêu tên, logo và ảnh cần SRD đồng ý. Ảnh trong `public/images/srd/` lấy từ trang giới thiệu của app SRD; cần xác nhận tên người, mã hồ sơ, email rút gọn trong ảnh là dữ liệu mẫu.
- Wyckoff dựa trên sách có bản quyền: KHÔNG đặt link công khai tới app, KHÔNG dùng ảnh biểu đồ lấy từ sách.
- Chỉ đưa lên website những dự án hoàn chỉnh mà chủ website đã đồng ý đưa vào; không tự thêm dự án khác.
- Không đưa số điện thoại hay thông tin cá nhân khác lên website nếu chủ website chưa đồng ý.

## Chất lượng

- Chữ có dấu tiếng Việt: tiêu đề lớn giữ `line-height` >= 1.05, chọn font có hỗ trợ tiếng Việt.
- Màu chữ nhỏ phải đủ tương phản (vàng đồng trên nền sáng dùng `brass-ink`). Sau khi sửa giao diện, chạy kiểm tra truy cập và build; mục tiêu 0 lỗi.
- Hiệu ứng phải tôn trọng `prefers-reduced-motion` và vẫn hiện đủ nội dung khi tắt JavaScript (khối `noscript` trong `layout.tsx`).
- Website đang gắn `noindex` cho tới khi điền hết nội dung thật (`NEXT_PUBLIC_ALLOW_INDEX=true` để bật).

## Không commit

`.env*` (chỉ commit `.env.example`), khóa API, file CV có số điện thoại. Form liên hệ gửi qua Resend; khóa nằm trong biến môi trường, không nằm trong code.
