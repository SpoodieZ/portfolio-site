import type { Dict } from "./types";

export const vi: Dict = {
  meta: {
    title: "Ứng dụng quản lý và quy trình tự động",
    description:
      "Tôi giúp doanh nghiệp và tổ chức tiết kiệm thời gian và nhân lực bằng ứng dụng quản lý và quy trình tự động, thiết kế riêng cho cách bạn đang làm việc.",
  },
  skip: "Bỏ qua tới nội dung",
  nav: {
    about: "Giới thiệu",
    projects: "Dự án",
    services: "Dịch vụ",
    contact: "Liên hệ",
    cta: "Bắt đầu dự án",
    menu: "Menu",
    close: "Đóng",
    langLabel: "Ngôn ngữ",
  },
  hero: {
    eyebrow: "(01 / ỨNG DỤNG QUẢN LÝ VÀ QUY TRÌNH TỰ ĐỘNG)",
    tagline: "Ứng dụng quản lý và quy trình tự động cho doanh nghiệp.",
    chipsLabel: "(PHẠM VI CÔNG VIỆC)",
    chips: ["Ứng dụng quản lý", "Quy trình tự động", "Đào tạo và ôn tập", "Marketing và nội dung"],
    portraitAlt: "Ảnh chân dung",
    portraitCaption: "LÀM VIỆC ĐỘC LẬP",
    portraitPlaceholder: "Ảnh chân dung của bạn",
  },
  about: {
    title: "Giới thiệu",
    index: "(02 / TỔNG QUAN)",
    statement:
      "Tôi giúp doanh nghiệp tiết kiệm thời gian và nhân lực bằng ứng dụng quản lý và quy trình tự động, thiết kế riêng cho cách bạn đang làm việc.",
    tiltCaption: "LÀM VIỆC ĐỘC LẬP",
    cards: [
      {
        label: "(VẤN ĐỀ)",
        text: "Doanh nghiệp và tổ chức thường mất hàng giờ mỗi tuần cho các thao tác lặp lại như kiểm tra chứng từ, nhắc việc và tổng hợp báo cáo.",
        caption: "THỰC TRẠNG PHỔ BIẾN",
      },
      {
        label: "(KINH NGHIỆM)",
        text: "Theo học chuyên ngành Marketing, có kinh nghiệm quay phim, chụp ảnh và sản xuất nội dung. Đã xây dựng hệ thống quản lý chứng từ cho một khách hàng.",
        caption: "NỀN TẢNG ĐA DIỆN",
      },
      {
        label: "(CÁCH LÀM)",
        text: "Tìm hiểu kỹ quy trình hiện tại trước, chỉ xây những gì thực sự tiết kiệm thời gian, bàn giao kèm tài liệu hướng dẫn.",
        caption: "NGUYÊN TẮC LÀM VIỆC",
      },
      {
        label: "(HỢP TÁC)",
        text: "Làm việc độc lập, linh hoạt theo từng gói dự án hoặc đồng hành tư vấn vận hành dài hạn.",
        caption: "PHƯƠNG THỨC LINH HOẠT",
      },
    ],
  },
  projects: {
    title: "Dự án",
    index: "(03 / HỒ SƠ THỰC HIỆN)",
    p1: {
      eyebrow: "(DỰ ÁN CHO KHÁCH HÀNG)",
      title: "Hệ thống quản lý chứng từ",
      clientLabel: "KHÁCH HÀNG:",
      summary:
        "Ứng dụng web nội bộ để nộp, kiểm tra và duyệt hồ sơ thanh toán của các dự án. Mọi bước nằm ở một nơi, thay vì rải rác qua email và tin nhắn.",
      bullets: [
        "Checklist riêng cho 4 loại hồ sơ: tạm ứng, hoàn ứng, thanh toán chuyên gia, thanh toán nhà cung cấp",
        "4 trạng thái xử lý, có email thông báo khi đổi trạng thái",
        "Mỗi người chỉ thấy hồ sơ của dự án được giao",
        "Kế toán không thể tự duyệt hồ sơ do chính mình gửi",
      ],
      demo: "Dùng thử bản demo",
      more: "Xem dự án",
      less: "Thu gọn",
      flowLabel: "(4 TRẠNG THÁI XỬ LÝ)",
      flow: ["Chờ kiểm tra", "Đang kiểm tra", "Yêu cầu bổ sung", "Cho thanh toán"],
      shots: {
        dashboard: "Bảng điều khiển của kế toán (dữ liệu minh họa)",
      },
      detail: {
        problemsLabel: "(VẤN ĐỀ → CÁCH GIẢI)",
        problems: [
          {
            problem: "Thiếu chứng từ, phát hiện muộn",
            solution:
              "Người nộp không nhớ hết giấy tờ cần có cho từng loại hồ sơ nên kế toán phải hỏi đi hỏi lại. App có checklist cố định cho từng loại; mục nào thiếu phải ghi rõ lý do.",
          },
          {
            problem: "Không biết hồ sơ đang ở đâu",
            solution:
              "4 trạng thái rõ ràng (Chờ kiểm tra, Đang kiểm tra, Yêu cầu bổ sung, Cho thanh toán), kèm email thông báo khi đổi trạng thái.",
          },
          {
            problem: "Trao đổi rời rạc",
            solution:
              "Kế toán và PM ghi chú ngay trên hồ sơ, theo 3 mức độ: Bình thường, Cần chú ý, Khẩn cấp, nên khó bỏ sót.",
          },
          {
            problem: "Khó tìm lại và tổng hợp",
            solution:
              "Hồ sơ hoàn thành lưu ở mục Lịch sử, xem và in lại được. Có báo cáo Excel liệt kê mọi hồ sơ đang thiếu chứng từ.",
          },
          {
            problem: "Phân quyền lỏng",
            solution: "Mỗi người chỉ thấy đúng hồ sơ của dự án mình được giao.",
          },
        ],
        safetyLabel: "(QUẢN LÝ VÀ AN TOÀN)",
        safety: [
          "Kế toán trưởng tạo dự án, gán thành viên, kế toán và PM cho từng dự án.",
          "Đăng nhập bằng Google; máy chủ kiểm tra danh tính thật ở mọi thao tác nên không giả mạo được người khác.",
          "Kế toán không thể tự duyệt hồ sơ do chính mình gửi.",
          "Sau thời hạn lưu trữ, hệ thống tự xoá file đính kèm và chi tiết, chỉ giữ lại dòng tóm tắt.",
          "Có giao diện sáng và tối, hỗ trợ tiếng Việt và tiếng Anh.",
        ],
        resultLabel: "(KẾT QUẢ)",
      },
    },
    p2: {
      eyebrow: "(SẢN PHẨM CÁ NHÂN)",
      title: "Ứng dụng ôn tập Wyckoff",
      summary:
        "Biến một cuốn sách chuyên ngành 42 chương thành hệ thống học chủ động: câu hỏi, theo dõi tiến độ và thử thách mỗi ngày.",
      bullets: [
        "326 câu hỏi gồm trắc nghiệm, nhận diện biểu đồ và tự luận tự chấm",
        "Ôn lại câu sai, thử thách 5 câu mỗi ngày, huy hiệu và chuỗi ngày học",
        "Bộ ôn xuyên chương kèm bảng thuật ngữ",
      ],
      more: "Xem dự án",
      less: "Thu gọn",
      shot: "Màn hình theo dõi tiến độ (dữ liệu minh họa)",
      detail: {
        featuresLabel: "(TÍNH NĂNG)",
        features: [
          "42 chương và phần giới thiệu, mỗi chương có bộ câu hỏi riêng.",
          "Ba dạng câu hỏi: trắc nghiệm (174), nhận diện trên biểu đồ (113), tự luận tự chấm bằng đáp án gợi ý (39).",
          "Chấm điểm ngay sau mỗi câu, kèm giải thích.",
          "Ôn lại câu sai, ghi chú sai lầm, chuỗi ngày học liên tiếp, đặt cược độ tự tin, câu hỏi “boss” cuối chương.",
          "Thử thách 5 câu mỗi ngày và huy hiệu thành tích.",
          "Bộ ôn xuyên chương kèm bảng thuật ngữ.",
          "Nhật ký giao dịch chia sẻ trong nhóm, đăng nhập bằng Google.",
        ],
        noteLabel: "(GHI CHÚ)",
        note: "Ứng dụng dùng riêng cho nhóm học nên không mở bản công khai, vì nội dung dựa trên một cuốn sách có bản quyền.",
      },
    },
  },
  services: {
    title: "Dịch vụ",
    index: "(04 / DỊCH VỤ CUNG ỨNG)",
    doneLabel: "(ĐÃ TRIỂN KHAI)",
    done: [
      {
        name: "Ứng dụng quản lý quy trình",
        desc: "Nộp, kiểm tra và duyệt hồ sơ, phân quyền, báo cáo.",
      },
      {
        name: "Ứng dụng đào tạo và ôn tập",
        desc: "Biến tài liệu thành bài kiểm tra có theo dõi tiến độ.",
      },
    ],
    onRequestLabel: "(NHẬN LÀM THEO YÊU CẦU)",
    onRequest: [
      { name: "Quy trình tự động", desc: "Kết nối dữ liệu giữa các công cụ bạn đang dùng." },
      { name: "Marketing và nội dung", desc: "Lên kế hoạch và sản xuất nội dung theo quy trình rõ ràng." },
      { name: "Website và landing page", desc: "Trang giới thiệu gọn gàng, tải nhanh." },
    ],
    note: "Bạn có một việc cụ thể? Hãy kể cho tôi, chúng ta bắt đầu bằng một bản thử nhỏ.",
  },
  contact: {
    eyebrow: "(05 / BẮT ĐẦU ĐỐI THOẠI)",
    heading: "Kể cho tôi quy trình đang khiến bạn mất nhiều thời gian nhất.",
    channelsLabel: "KÊNH KẾT NỐI TRỰC TIẾP",
    channels: { email: "Email", zalo: "Zalo", linkedin: "LinkedIn", cv: "Tải CV" },
    copy: "Sao chép",
    copied: "Đã sao chép",
    form: {
      name: "TÊN CỦA BẠN (BẮT BUỘC)",
      namePh: "Nguyễn Văn A",
      email: "EMAIL (BẮT BUỘC)",
      emailPh: "ban@tochuc.vn",
      phone: "ĐIỆN THOẠI",
      phonePh: "090 000 0000",
      reason: "LÝ DO KẾT NỐI",
      reasons: { project: "Dự án", job: "Cơ hội việc làm", hello: "Chỉ chào hỏi" },
      message: "LỜI NHẮN",
      messagePh: "Mô tả sơ lược công việc hoặc bảng tính đang cần tự động hoá…",
      submit: "Gửi thông tin",
      sending: "Đang gửi…",
      success: "Đã nhận thông tin của bạn. Tôi sẽ phản hồi sớm.",
      errRequired: "Vui lòng điền mục này.",
      errEmail: "Địa chỉ email chưa đúng.",
      errFallback: "Chưa gửi được. Vui lòng thử lại hoặc email trực tiếp.",
      errNotConfigured: "Form chưa được kết nối. Vui lòng liên hệ qua kênh trực tiếp bên cạnh.",
      responseLabel: "THỜI GIAN PHẢN HỒI:",
    },
  },
  cases: {
    label: "DỰ ÁN",
    back: "← Tất cả dự án",
    metaLabels: {
      role: "VAI TRÒ",
      timeline: "THỜI GIAN",
      year: "NĂM",
      team: "NHÂN SỰ",
      type: "LOẠI",
      client: "KHÁCH HÀNG",
    },
    myRoleLabel: "(VAI TRÒ CỦA TÔI)",
    approachLabel: "Cách làm",
    scopeLabel: "(QUY MÔ)",
    nextLabel: "DỰ ÁN TIẾP THEO",
    srd: {
      chips: ["Ứng dụng quản lý", "Quy trình", "Phân quyền", "Báo cáo"],
      intro:
        "Ứng dụng web nội bộ để nộp, kiểm tra và duyệt hồ sơ thanh toán của các dự án. Mọi bước nằm ở một nơi thay vì rải rác qua email và tin nhắn: người nộp biết cần chuẩn bị gì, kế toán thấy đủ mọi thứ trên một màn hình, và ai cũng biết hồ sơ đang ở bước nào.",
      meta: {
        role: "Thiết kế quy trình · Xây dựng ứng dụng · Triển khai",
        timeline: "07/2026 — nay",
        year: "2026",
        team: "Làm việc độc lập",
        type: "Dự án cho khách hàng",
      },
      myRole: [
        "Chuyển tài liệu mô tả quy trình thanh toán và bảng checklist chứng từ có sẵn thành quy trình chạy trên ứng dụng.",
        "Thiết kế checklist riêng cho 4 loại hồ sơ và 4 trạng thái xử lý.",
        "Thiết kế phân quyền theo vai trò (người nộp, kế toán, kế toán trưởng, PM) và theo từng dự án.",
        "Chạy thử nội bộ, sửa theo phản hồi, bổ sung hoàn tác, lưu trữ, báo cáo Excel và rà soát bảo mật.",
      ],
      approach: [
        {
          title: "Hiểu quy trình hiện tại",
          text: "Đọc tài liệu quy trình và bảng checklist cho 4 bộ chứng từ, xác định ai làm gì ở bước nào.",
        },
        {
          title: "Thiết kế luồng",
          text: "Chốt 4 trạng thái, các vai trò và quy tắc: kế toán không tự duyệt hồ sơ của chính mình.",
        },
        {
          title: "Chạy thử nội bộ",
          text: "Mở cho một nhóm người dùng được chọn trước, sau đó mở đăng nhập bằng Google.",
        },
        {
          title: "Hoàn thiện",
          text: "Sửa theo phản hồi: thông báo email, ghi chú theo mức độ, hoàn tác, lưu trữ, báo cáo Excel.",
        },
      ],
      scope: [
        { n: "4", l: "loại hồ sơ, mỗi loại một checklist" },
        { n: "4", l: "trạng thái xử lý" },
        { n: "3", l: "mức độ ghi chú" },
        { n: "4", l: "vai trò với quyền khác nhau" },
      ],
      features: [
        {
          eyebrow: "01 / NỘP HỒ SƠ",
          title: "Nộp hồ sơ dễ dàng",
          text:
            "Hệ thống hỗ trợ 4 loại hồ sơ: Tạm ứng, Hoàn ứng, Thanh toán chuyên gia, Thanh toán nhà cung cấp, với danh mục chứng từ riêng cho từng loại. Người nộp chọn loại hồ sơ phù hợp và thực hiện theo danh mục có sẵn.",
          bullets: ["4 loại hồ sơ thường dùng, mỗi loại có checklist riêng", "Gắn đúng dự án ngay từ bước đầu tiên"],
          alt: "Màn hình chọn loại hồ sơ cần nộp",
        },
        {
          eyebrow: "02 / CHECKLIST",
          title: "Checklist chứng từ rõ ràng",
          text:
            "Các chứng từ bắt buộc được liệt kê sẵn theo đúng quy định của SRD, giúp người nộp dễ dàng kiểm tra hồ sơ trước khi gửi. Với từng mục, người nộp có thể tích chọn, đính kèm file hoặc dán link; nếu chưa có chứng từ, chỉ cần ghi rõ lý do để kế toán nắm được.",
          bullets: ["Đính kèm file trực tiếp hoặc dán link tài liệu", "Ghi lý do nếu mục nào chưa có sẵn"],
          alt: "Checklist chứng từ của hồ sơ tạm ứng",
        },
        {
          eyebrow: "03 / THEO DÕI",
          title: "Theo dõi trạng thái minh bạch",
          text:
            "Mỗi hồ sơ có một trong 4 trạng thái: Chờ kiểm tra, Đang kiểm tra, Yêu cầu bổ sung, Cho thanh toán. Người nộp có thể theo dõi trạng thái để biết hồ sơ đang ở bước nào và có cần bổ sung chứng từ hay không.",
          bullets: ["Nhận email thông báo khi hồ sơ đổi trạng thái", "Xem lại toàn bộ lịch sử xử lý của từng hồ sơ"],
          alt: "Danh sách hồ sơ của người nộp kèm trạng thái",
        },
        {
          eyebrow: "04 / KIỂM TRA",
          title: "Dành cho người kiểm tra",
          text:
            "Kế toán có thể xem checklist, chứng từ đính kèm và ghi chú của người nộp trên cùng một màn hình. Sau khi kiểm tra, kế toán có thể yêu cầu bổ sung hoặc xác nhận cho thanh toán chỉ với một thao tác.",
          bullets: ["Trao đổi ghi chú trực tiếp với người nộp hồ sơ", "Không thể tự duyệt hồ sơ do chính mình gửi"],
          alt: "Màn hình xử lý hồ sơ của kế toán",
        },
        {
          eyebrow: "05 / LƯU TRỮ",
          title: "Lịch sử & báo cáo đầy đủ",
          text:
            "Các hồ sơ đã hoàn thành được lưu tại mục Lịch sử, vẫn có thể xem và in đầy đủ khi cần. Hệ thống cũng cho phép xuất báo cáo Excel về tất cả hồ sơ đang thiếu chứng từ chỉ với một lần bấm.",
          bullets: ["Biết trước ngày dữ liệu chi tiết sẽ được dọn dẹp", "Xuất báo cáo mục còn thiếu ra file Excel"],
          alt: "Lịch sử hồ sơ và báo cáo mục còn thiếu",
        },
      ],
      parts: {
        features: {
          label: "(PHẦN 01)",
          title: "Tính năng theo từng bước",
          intro: "Từ lúc nộp hồ sơ tới khi được cho thanh toán, mỗi bước đều có màn hình riêng, rõ ràng.",
        },
        problems: {
          label: "(PHẦN 02)",
          title: "Vấn đề và cách giải",
          intro: "Năm điểm nghẽn của quy trình cũ và cách ứng dụng xử lý từng điểm.",
        },
        safety: {
          label: "(PHẦN 03)",
          title: "Quản lý và an toàn",
          intro: "Quyền hạn, bảo mật và lưu trữ.",
        },
      },
    },
    wyckoff: {
      chips: ["Đào tạo và ôn tập", "Học chủ động", "Theo dõi tiến độ"],
      intro:
        "Biến một cuốn sách chuyên ngành 42 chương thành hệ thống học chủ động. Thay vì đọc lại, người học trả lời câu hỏi, nhận phản hồi ngay, ôn lại chỗ sai và giữ nhịp học mỗi ngày.",
      meta: {
        role: "Thiết kế học liệu · Xây dựng ứng dụng",
        timeline: "08/2026 — 10/2026",
        year: "2026",
        team: "Làm việc độc lập",
        type: "Sản phẩm cá nhân",
      },
      myRole: [
        "Viết bản đặc tả trước khi xây: mục tiêu học, tính năng bắt buộc và những thứ cố ý không làm.",
        "Thiết kế cấu trúc bộ câu hỏi theo chương và ba dạng câu hỏi.",
        "Thiết kế các cơ chế giữ nhịp học: chuỗi ngày, thử thách mỗi ngày, huy hiệu.",
        "Xây dựng ứng dụng, đăng nhập Google và nhật ký chia sẻ trong nhóm.",
      ],
      approach: [
        {
          title: "Đặt mục tiêu",
          text: "Học để nhớ và vận dụng, không phải đọc lại: trọng tâm là kiểm tra chủ động.",
        },
        {
          title: "Chia nội dung",
          text: "42 chương, mỗi chương một bộ câu hỏi riêng.",
        },
        {
          title: "Phản hồi tức thì",
          text: "Chấm điểm ngay sau mỗi câu, kèm giải thích, và ôn lại những câu đã sai.",
        },
        {
          title: "Giữ động lực",
          text: "Chuỗi ngày học, thử thách 5 câu mỗi ngày, huy hiệu và bộ ôn xuyên chương.",
        },
      ],
      scope: [
        { n: "42", l: "chương" },
        { n: "326", l: "câu hỏi" },
        { n: "3", l: "dạng câu hỏi" },
        { n: "6", l: "huy hiệu thành tích" },
      ],
      parts: {
        features: { label: "(PHẦN 01)", title: "Tính năng" },
        note: { label: "(GHI CHÚ)", title: "Vì sao không có bản công khai" },
      },
    },
  },
  footer: { cv: "HỒ SƠ NĂNG LỰC", privacy: "CHÍNH SÁCH BẢO MẬT", rights: "Bảo lưu mọi quyền." },
  privacy: {
    title: "Chính sách bảo mật",
    updated: "Cập nhật lần cuối: [ngày cập nhật]",
    back: "← Về trang chủ",
    sections: [
      {
        h: "Thông tin tôi thu thập",
        p: "Chỉ những thông tin bạn tự nhập vào form liên hệ: tên, email, số điện thoại (nếu có), lý do liên hệ và lời nhắn.",
      },
      {
        h: "Mục đích sử dụng",
        p: "Dùng để phản hồi yêu cầu của bạn. Tôi không bán hay chia sẻ thông tin này cho bên thứ ba vì mục đích quảng cáo.",
      },
      {
        h: "Cách thông tin được gửi đi",
        p: "Khi bạn gửi form, nội dung được chuyển qua một dịch vụ gửi email tới hộp thư của tôi. Trang web này không dùng cookie theo dõi hay công cụ phân tích.",
      },
      {
        h: "Quyền của bạn",
        p: "Bạn có thể yêu cầu xoá hoặc chỉnh sửa thông tin đã gửi bằng cách email cho tôi.",
      },
    ],
  },
};
