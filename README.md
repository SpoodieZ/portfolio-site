# Website portfolio

Website một trang, song ngữ (Việt ở `/`, Anh ở `/en`), dựng theo bản thiết kế Stitch "Swiss Editorial Archive".

Công nghệ: Next.js 16 (App Router), React 19, Tailwind CSS 4, font Be Vietnam Pro (có đủ dấu tiếng Việt).

## Chạy trên máy

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # kiểm tra bản chạy thật
npm run typecheck
```

## Việc bạn cần làm trước khi công khai

Mọi thông tin thật nằm ở **một file**: [`src/content/site.ts`](src/content/site.ts).

1. **Tên của bạn**: đã điền "Lê Khánh Toàn". Muốn đổi thì sửa `nameLines` (mỗi phần tử là một dòng ở tiêu đề lớn).
2. **Liên hệ**: điền `email`, `zaloUrl`, `linkedinUrl`, `cvUrl`. Mục nào để trống sẽ hiện dạng `[Email]` (nhớ điền hết trước khi công khai).
3. **Ảnh chân dung**: đặt file vào `public/images/portrait.jpg` (hoặc `.webp`, `.png`). Tỉ lệ dọc 3:4 là đẹp nhất. Ảnh hiển thị đúng màu gốc. Sau khi thêm, chạy lại `npm run build` (hoặc đẩy lên để Vercel build lại).
4. **Tên khách hàng** (`clientName`): chỉ điền sau khi SRD đồng ý bằng văn bản. Ảnh chụp bản demo có hiện logo và tên SRD, cần cùng sự đồng ý đó.
5. **Kết quả đo được** (`results`): chỉ điền số THẬT (ví dụ số hồ sơ mỗi tháng, thời gian tiết kiệm). Để `null` thì mục kết quả tự ẩn.
6. **Thời gian phản hồi** (`responseTime`): để `null` nếu chưa muốn cam kết.
7. **Chính sách bảo mật**: xem lại nội dung trong `src/content/vi.ts` và `en.ts` (mục `privacy`), điền ngày cập nhật.

Toàn bộ chữ trên trang nằm ở `src/content/vi.ts` (tiếng Việt) và `src/content/en.ts` (tiếng Anh). Hai file có cùng cấu trúc.

## Form liên hệ

Form gửi qua [Resend](https://resend.com). Tạo file `.env.local` (xem `.env.example`):

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=email-nhan-thu@cua-ban.vn
CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"
```

Chưa cấu hình thì form báo thật là "chưa kết nối" và hướng khách liên hệ trực tiếp, không giả vờ đã gửi. Khi triển khai lên Vercel, nhập 3 biến này trong Settings → Environment Variables.

## Công khai lên Google

Mặc định website gắn `noindex` để không lộ bản chưa điền xong. Khi đã điền hết, đặt:

```
NEXT_PUBLIC_SITE_URL=https://ten-mien-cua-ban.vn
NEXT_PUBLIC_ALLOW_INDEX=true
```

## Trang riêng cho từng dự án

Bấm "Xem dự án" ở trang chủ sẽ mở một trang riêng (giống mô hình case study): tên dự án, ảnh lớn, giới thiệu, bảng thông tin, vai trò của bạn, các bước làm, ảnh các màn hình, vấn đề và cách giải, số liệu quy mô, và nút sang dự án tiếp theo.

- Địa chỉ: `/work/quan-ly-chung-tu` và `/work/on-tap-wyckoff` (bản tiếng Anh thêm `/en` ở đầu).
- Chữ của các trang này nằm ở mục `cases` (trang riêng) và `projects.p1`, `projects.p2` (thẻ ở trang chủ và phần chi tiết) trong `src/content/vi.ts` và `en.ts`.
- Khung trang nằm ở `src/components/CaseStudy.tsx`. Thêm dự án mới: thêm slug vào `src/content/cases.ts`, thêm nội dung vào hai file chữ, rồi thêm một nhánh hiển thị trong `CaseStudy.tsx`.
- Mục "Thời gian" và "Nhân sự" là thông tin thật từ lịch sử làm việc của bạn (SRD từ 07/2026, Wyckoff 08–10/2026, làm độc lập). Sửa lại nếu khác.

## Ảnh dự án

- **SRD**: ảnh lấy từ chính trang giới thiệu của app SRD thật (`public/landing/` của app), nằm ở `public/images/srd/` (`dashboard.png`, `feature-1.png` … `feature-5.png`). Ảnh bảng điều khiển đã cắt bỏ nút "N" của công cụ phát triển. Văn bản 5 bước (Nộp hồ sơ, Checklist, Theo dõi, Kiểm tra, Lưu trữ) cũng lấy từ trang đó, nằm ở `cases.srd.features` trong `vi.ts` và `en.ts`.
- **Wyckoff**: `public/images/wyckoff-progress.jpg`, chỉ là màn hình theo dõi tiến độ, cố ý không có biểu đồ lấy từ sách.
- Các tên người, mã hồ sơ và email rút gọn trong ảnh SRD là dữ liệu trên trang giới thiệu của app. Hãy xác nhận đó là dữ liệu mẫu, không phải người thật, trước khi công khai.

## Hiệu ứng chuyển trang

Bấm một liên kết sang trang khác (ví dụ "Xem dự án", "Dự án tiếp theo", đổi ngôn ngữ) thì một tấm màn tối kéo từ trên xuống che kín màn hình, trang mới tải phía sau, rồi tấm màn trượt tiếp xuống dưới để lộ trang mới (cùng nhịp với website mẫu nhưng đi ngược chiều). Mã nằm ở `src/components/PageTransition.tsx` (đổi thời gian, đường cong ở đầu file). Tổng thời gian khoảng 1,2 giây. Liên kết neo cùng trang, mở tab mới, bấm kèm Ctrl/Cmd, nút đổi ngôn ngữ VI/EN (gắn `data-no-transition`) và máy bật "giảm chuyển động" thì chuyển trang bình thường, không có màn.

## Hiệu ứng

Tất cả nằm trong `src/app/globals.css` và `src/components/` (Reveal, ScrollWords, ScrollProgress, StatusFlow, FitText). Máy bật "giảm chuyển động" hoặc tắt JavaScript thì mọi nội dung vẫn hiện đủ, đã kiểm tra.

## Cấu trúc

```
src/content/        chữ (vi, en) và thông tin thật (site.ts)
src/components/     các phần của trang
src/app/[lang]/     trang chủ và trang chính sách bảo mật
src/app/api/contact form liên hệ
public/images/      ảnh
```
