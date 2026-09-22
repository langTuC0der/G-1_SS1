# Khóa học Lập trình Lớp 7 — Design System & Learning Page Template

Hệ thống giao diện bài học tương tác chuẩn hóa cho toàn bộ **36 tuần (72 buổi học)** dành cho học sinh lớp 7 học trực tuyến 1:1.

---

## 1. Triết lý Thiết kế

- **Phong cách:** **Bright & Friendly Modern Edu** (kết hợp nét tinh gọn, cao cấp của *Apple/Notion* với sự tươi vui, tạo động lực của *Duolingo/Kahoot*).
- **Tối ưu Split Screen:** Hoạt động hoàn hảo ở chiều ngang **600–800px** khi học sinh chia đôi màn hình (một nửa xem bài, một nửa thực hành).
- **Thuần công nghệ Web chuẩn (Zero-Dependency):**
  - Sử dụng **HTML5 Semantic, Vanilla CSS và Vanilla JavaScript**.
  - Không cần cài đặt thư viện ngoài hay build tool (Webpack, Vite, Tailwind...).
  - Mở trực tiếp bằng bất kỳ trình duyệt nào (`file://` hoặc `http://`).

---

## 2. Cấu trúc Thư mục

```text
GĐ1/
├── design-system/
│   ├── css/
│   │   ├── tokens.css         # Design Tokens chuẩn: mã màu, font, radius, spacing
│   │   ├── reset.css          # CSS Reset, Google Fonts, Accessibility
│   │   ├── layout.css         # Background ambient glow, dot-grid, 2-column grid
│   │   ├── components.css     # 12+ Components: Mission Bar, Cards, Keycap 3D, Mouse, Quiz, Timer...
│   │   ├── utilities.css      # Helper classes: flex, grid, spacing, text
│   │   └── responsive.css     # Breakpoints tối ưu đặc biệt cho Split Screen 600-800px
│   ├── js/
│   │   ├── storage.js         # Lưu tiến trình học qua localStorage an toàn
│   │   ├── audio.js           # Hiệu ứng âm thanh dịu nhẹ qua Web Audio API (có Mute)
│   │   ├── visualizers.js     # Bàn phím 3D phản hồi bấm chuột/phím thật & Chuột trực quan
│   │   ├── timer.js           # Đồng hồ đếm ngược Boss Challenge (Start/Pause/Reset)
│   │   ├── checklist.js       # Checklist tích điểm, tự động tăng thanh Progress Bar
│   │   ├── quiz.js            # Trắc nghiệm phản hồi tức thì: Đúng 🎉, Sai kèm Hint 💡
│   │   └── learning-engine.js # Nạp Lesson Data, render động, điều phối điểm XP
│   └── styleguide.html        # Trang Showcase trưng bày toàn bộ component và trạng thái
│
├── lessons/
│   └── gd1/
│       └── week-01/
│           ├── lesson-01.js   # Dữ liệu Buổi 01: Làm quen với máy tính
│           └── lesson-02.js   # Dữ liệu Buổi 02: Chuột & thao tác cơ bản
│
├── templates/
│   └── lesson.html            # Template chuẩn đọc bài học qua ?id=gd1-w01-l01
│
├── index.html                 # Cổng Hub kết nối Styleguide & toàn bộ bài học
└── README.md                  # Tài liệu hướng dẫn sử dụng
```

---

## 3. Cách mở và sử dụng

### Cách 1: Mở trực tiếp bằng trình duyệt (Offline)
Chỉ cần nhấp đúp chuột vào file:
- `index.html`: Cổng trang chủ.
- `design-system/styleguide.html`: Xem thư viện thành phần mẫu.
- `templates/lesson.html?id=gd1-w01-l01`: Xem Buổi 01.
- `templates/lesson.html?id=gd1-w01-l02`: Xem Buổi 02.

### Cách 2: Khởi chạy qua Local Web Server
Nếu muốn chạy qua địa chỉ `http://localhost`:
```bash
python3 -m http.server 8080
```
Sau đó truy cập: `http://localhost:8080`

---

## 4. Cách tạo một Bài học mới (Data-Driven)

> **Nguyên tắc:** Bạn **không cần tạo thêm file HTML mới**. Mỗi bài học chỉ cần tạo 1 file JavaScript chứa dữ liệu nội dung!

### Bước 1: Tạo file dữ liệu bài học
Ví dụ muốn tạo Buổi 03 (Tuần 02), hãy tạo file:  
`lessons/gd1/week-02/lesson-03.js`

```javascript
(function () {
  'use strict';

  const lessonData = {
    id: 'gd1-w02-l03',
    stage: 'GĐ1',
    stageName: 'Nhập môn máy tính',
    week: 2,
    lesson: 3,
    duration: '90 phút',
    title: 'Bàn phím & Gõ văn bản',
    subtitle: 'Làm quen các hàng phím, phím điều khiển và gõ tiếng Việt',
    totalXP: 100,

    cheatsheet: {
      shortcuts: [
        { keys: ['Shift'], desc: 'Gõ chữ hoa hoặc ký tự trên' },
        { keys: ['Enter'], desc: 'Xuống dòng mới' },
        { keys: ['Backspace'], desc: 'Xóa lùi ký tự đứng trước' }
      ],
      troubleshooting: 'Nếu không gõ được tiếng Việt có dấu, em hãy kiểm tra biểu tượng Unikey ở góc phải màn hình xem đang là chữ V hay chữ E nhé!'
    },

    sections: [
      {
        id: 'warmup',
        type: 'warmup',
        icon: '🚀',
        title: 'Khởi động ngón tay',
        contentHtml: '<p>Nội dung khởi động...</p>'
      },
      {
        id: 'concept',
        type: 'concept',
        icon: '🔍',
        title: 'Khu vực các hàng phím',
        contentHtml: '<p>Nội dung bài học...</p>'
      },
      {
        id: 'lab',
        type: 'lab',
        icon: '💻',
        title: 'Thực hành gõ giới thiệu bản thân',
        contentHtml: '<p>Nội dung thực hành...</p>'
      },
      {
        id: 'quiz',
        type: 'quiz',
        icon: '🎯',
        title: 'Trắc nghiệm phản xạ',
        contentHtml: '<p>Nội dung trắc nghiệm...</p>'
      },
      {
        id: 'boss',
        type: 'boss',
        icon: '🏆',
        title: 'Boss Challenge: Thử thách gõ tốc độ',
        contentHtml: '<p>Nhiệm vụ tính giờ...</p>'
      }
    ]
  };

  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w02-l03'] = lessonData;
})();
```

### Bước 2: Nạp vào template
Thêm thẻ script vào `templates/lesson.html`:
```html
<script src="../lessons/gd1/week-02/lesson-03.js"></script>
```

### Bước 3: Mở bài học
Truy cập URL:  
`templates/lesson.html?id=gd1-w02-l03`

---

## 5. Danh mục các Khối Thành phần Mẫu (Components)

| Khối | Class chính | Mục đích |
| :--- | :--- | :--- |
| **Mission Bar** | `.mission-bar`, `.mission-step` | Thanh điều hướng 4 chặng ghim trên cùng kèm XP |
| **Thẻ bài học** | `.edu-card--concept` | Thẻ kiến thức viền xanh Indigo kèm icon |
| **Thẻ thực hành** | `.edu-card--lab`, `.lab-step` | Các bước thực hành đánh số và đổi màu khi xong |
| **Hộp gợi ý** | `.hint-box` | Accordion mở rộng cho mẹo/gợi ý khi học sinh bí |
| **Phím 3D** | `.keycap` | Phím nảy 3D, bấm chuột hoặc gõ phím thật đều sáng |
| **Chuột ảo** | `.mouse-visualizer-container` | Mô hình chuột tương tác trái, phải, con lăn |
| **Checklist** | `.checklist-item`, `.progress-bar` | Danh sách tích điểm, gạch chữ và tăng tiến độ |
| **Quiz** | `.quiz-box`, `.quiz-option` | Trắc nghiệm chọn đáp án, phản hồi xanh/vàng kèm hint |
| **Boss Timer** | `.boss-banner`, `.timer-widget` | Đếm ngược tính giờ thử thách cuối buổi |
| **Sổ tay nổi** | `.cheatsheet-fab`, `.cheatsheet-drawer` | Nút tròn mở drawer tra cứu phím tắt nhanh |
