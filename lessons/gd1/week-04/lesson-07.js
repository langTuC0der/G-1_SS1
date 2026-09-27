/**
 * LESSON DATA — GĐ1 · Tuần 04 · Buổi 07
 * Chủ đề: Internet & Trình duyệt Web (Web Browser)
 * Thiết kế chuẩn Slide Trình chiếu Giảng dạy 1:1 (Teacher-Led Slide Deck)
 */

(function () {
  'use strict';

  const lessonData = {
    id: 'gd1-w04-l07',
    stage: 'GĐ1',
    stageName: 'Nhập môn máy tính',
    week: 4,
    lesson: 7,
    duration: '90 phút',
    title: 'Internet & Trình duyệt Web',
    subtitle: 'Khám phá thế giới mạng toàn cầu, quản lý thẻ Tab siêu tốc, kỹ năng tìm kiếm Google thông minh và tải tài liệu an toàn',
    totalXP: 100,

    cheatsheet: {
      vocabulary: [
        'Internet',
        'Web Browser',
        'Website',
        'URL',
        'Tab',
        'Bookmark',
        'Download',
        'Search Engine'
      ],
      icons: [
        { symbol: '🌐', name: 'Browser', desc: 'Trình duyệt web: Cửa sổ mở ra toàn bộ thế giới số' },
        { symbol: '🔗', name: 'URL', desc: 'Địa chỉ web chính xác dẫn tới trang web' },
        { symbol: '📑', name: 'Tab', desc: 'Thẻ duyệt web: Cho phép mở nhiều trang cùng lúc' },
        { symbol: '⭐', name: 'Bookmark', desc: 'Đánh dấu trang yêu thích để lần sau mở lại trong 1 giây' },
        { symbol: '📥', name: 'Download', desc: 'Tải tài liệu, hình ảnh từ Internet về ổ cứng máy tính' }
      ],
      shortcuts: [
        { keys: ['Ctrl', 'T'], desc: 'Mở thêm một thẻ Tab duyệt web mới' },
        { keys: ['Ctrl', 'W'], desc: 'Đóng thẻ Tab đang xem hiện tại' },
        { keys: ['Ctrl', 'Shift', 'T'], desc: 'Cứu nguy: Khôi phục lại thẻ Tab vừa lỡ tay đóng nhầm!' },
        { keys: ['Ctrl', 'D'], desc: 'Đánh dấu Bookmark lưu lại trang web hay' },
        { keys: ['Ctrl', 'J'], desc: 'Mở nhanh danh sách các tệp vừa Tải về (Downloads)' }
      ],
      troubleshooting: 'Nếu lỡ tay bấm dấu X tắt mất một bài báo hay trên mạng: Hãy bấm ngay tổ hợp phím thần kỳ Ctrl + Shift + T để trình duyệt mở lại trang đó ngay lập tức!'
    },

    sections: [
      /* SLIDE 01: WELCOME & MISSION */
      {
        id: 'w04-l07-s01',
        type: 'concept',
        icon: '🌐',
        eyebrow: 'BUỔI 07 · TUẦN 04',
        title: 'Khám phá Thế giới Mạng Toàn Cầu (Internet & Web)',
        badge: { type: 'primary', text: '⭐ Tuần Về Đích GĐ1' },
        contentHtml: `
          <div class="hero-mission-box">
            <div class="hero-mission-content">
              <span class="badge badge--energy mb-2">Chặng 4: Khai phá Không gian Mạng</span>
              <h2 style="font-size: 1.75rem; margin-bottom: 8px;">Chào mừng em đến với Xa lộ Thông tin Internet!</h2>
              <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.6;">
                Internet giống như một thư viện khổng lồ kết nối hàng tỷ chiếc máy tính trên toàn hành tinh. Để khám phá kho tàng tri thức đó, chúng mình cần chiếc "tàu ngầm" đặc biệt: <strong>Trình duyệt Web (Web Browser)</strong>!
              </p>
              
              <div class="grid-2-col gap-3 mt-3">
                <div class="learning-target-card">
                  <div class="target-icon">🌐</div>
                  <div>
                    <strong>Trình duyệt & Địa chỉ URL</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Hiểu bản chất Chrome/Edge, cấu trúc địa chỉ https:// và tên miền an toàn.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">📑</div>
                  <div>
                    <strong>Tuyệt kỹ Quản lý Tab</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Mở Tab mới (Ctrl+T), đóng Tab (Ctrl+W) và cứu Tab đóng nhầm (Ctrl+Shift+T).</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🔍</div>
                  <div>
                    <strong>Kỹ năng Tìm kiếm Thông minh</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Cú pháp Google chính xác, tìm kiếm ảnh sắc nét phục vụ bài thuyết trình.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">📥</div>
                  <div>
                    <strong>Tải file & Bookmark chuẩn</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Tải tài liệu về đúng cây thư mục HocTap_Lop7 và lưu Bookmark các trang web quý.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-mascot-badge">
              <div style="font-size: 4rem;">🧭</div>
              <span class="badge badge--warning mt-2 font-bold">+100 XP Thưởng</span>
              <p class="text-muted text-center mt-2" style="font-size: 0.8rem;">Dành cho Nhà thám hiểm Internet cừ khôi</p>
            </div>
          </div>
        `
      },

      /* SLIDE 02: WHAT IS INTERNET & BROWSER */
      {
        id: 'w04-l07-s02',
        type: 'concept',
        icon: '🛰️',
        eyebrow: 'KHÁI NIỆM CƠ BẢN',
        title: 'Internet & Trình Duyệt Web (Web Browser) Là Gì?',
        badge: { type: 'primary', text: 'Nền tảng số' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <span style="font-size: 2.2rem;">🕸️</span>
                <h3 style="margin: 0; color: #2563eb;">1. INTERNET & WWW</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                <strong>Internet:</strong> Là mạng lưới khổng lồ kết nối hàng tỷ máy tính và điện thoại trên toàn thế giới với nhau thông qua dây cáp ngầm dưới biển và sóng vệ tinh.
              </p>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                <strong>WWW (World Wide Web):</strong> Là kho chứa hàng triệu trang web thông tin, hình ảnh, bài học mà loài người cùng chia sẻ.
              </p>
            </div>

            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <span style="font-size: 2.2rem;">🚀</span>
                <h3 style="margin: 0; color: #10b981;">2. TRÌNH DUYỆT WEB</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Là phần mềm giúp máy tính đọc và hiển thị các trang web cho em xem.
              </p>
              <div class="d-flex gap-3 mt-3">
                <div class="p-2 rounded bg-page-secondary text-center flex-1">
                  <span style="font-size: 1.6rem;">🔴🟡🟢</span>
                  <div style="font-size: 0.8rem; font-weight: 700; margin-top: 4px;">Google Chrome</div>
                </div>
                <div class="p-2 rounded bg-page-secondary text-center flex-1">
                  <span style="font-size: 1.6rem;">🌀</span>
                  <div style="font-size: 0.8rem; font-weight: 700; margin-top: 4px;">Microsoft Edge</div>
                </div>
                <div class="p-2 rounded bg-page-secondary text-center flex-1">
                  <span style="font-size: 1.6rem;">🦊</span>
                  <div style="font-size: 0.8rem; font-weight: 700; margin-top: 4px;">Firefox</div>
                </div>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 03: URL STRUCTURE */
      {
        id: 'w04-l07-s03',
        type: 'concept',
        icon: '🔗',
        eyebrow: 'GIẢI MÃ ĐỊA CHỈ',
        title: 'Cấu Trúc Thanh Địa Chỉ Web (URL)',
        badge: { type: 'energy', text: 'Nhận diện website' },
        contentHtml: `
          <div class="p-4 bg-card rounded border mb-4 text-center">
            <span class="text-secondary" style="font-size: 0.92rem;">Một địa chỉ trang web hoàn chỉnh luôn có dạng:</span>
            <div class="mt-2" style="font-size: 1.35rem; font-family: monospace; font-weight: 700; word-break: break-all;">
              <span style="color: #10b981; background: #ecfdf5; padding: 4px 8px; border-radius: 4px;">https://</span>
              <span style="color: #2563eb; background: #eff6ff; padding: 4px 8px; border-radius: 4px;">vietjack.me</span>
              <span style="color: #8b5cf6; background: #f5f3ff; padding: 4px 8px; border-radius: 4px;">/lop-7/toan-hoc</span>
            </div>
            <div class="d-flex justify-center gap-4 mt-2 text-muted" style="font-size: 0.85rem;">
              <span>⬆️ <strong>Giao thức bảo mật (https):</strong> Có ổ khóa xanh an toàn</span>
              <span>⬆️ <strong>Tên miền (Domain Name):</strong> Tên ngôi nhà web</span>
              <span>⬆️ <strong>Đường dẫn bài viết:</strong> Trang con cụ thể</span>
            </div>
          </div>

          <h3 class="mb-2 text-primary">Ý nghĩa các phần đuôi tên miền uy tín:</h3>
          <div class="grid-3-col gap-3">
            <div class="p-3 bg-card rounded border">
              <strong style="color: #2563eb;">.edu.vn / .edu</strong>
              <p class="text-secondary mt-1" style="font-size: 0.85rem; margin: 0;">
                Dành riêng cho các trường học, đại học và cơ quan Giáo dục (Education). Nguồn tài liệu học tập đáng tin cậy nhất!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong style="color: #10b981;">.gov.vn / .gov</strong>
              <p class="text-secondary mt-1" style="font-size: 0.85rem; margin: 0;">
                Cổng thông tin chính thức của cơ quan Chính phủ (Government). Thông tin chuẩn xác 100%.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong style="color: #f59e0b;">.com / .vn / .org</strong>
              <p class="text-secondary mt-1" style="font-size: 0.85rem; margin: 0;">
                Các trang tin tức, công ty thương mại, tổ chức cộng đồng phổ biến toàn cầu.
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 04: TAB MASTERY */
      {
        id: 'w04-l07-s04',
        type: 'concept',
        icon: '📑',
        eyebrow: 'TUYỆT KỸ TRÌNH DUYỆT',
        title: 'Làm Chủ Thẻ Duyệt Web (Tab Mastery)',
        badge: { type: 'energy', text: 'Thao tác Pro' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Khi làm bài tập, em thường phải mở 1 tab xem sách bài tập, 1 tab nghe nhạc và 1 tab tra từ điển. Hãy ghi nhớ bộ 4 phím tắt quản lý thẻ sau:
          </p>

          <div class="grid-2-col gap-4 mb-4">
            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">T</kbd>
                <h4 style="margin: 0;">Mở Tab Mới (New Tab)</h4>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Chữ <strong>T</strong> là <em>Tab</em>. Mở thêm 1 thẻ trắng mới ngay lập tức mà không cần bấm chuột vào dấu cộng nhỏ trên đầu trình duyệt.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">W</kbd>
                <h4 style="margin: 0; color: #dc2626;">Đóng Tab Nhanh (Close Tab)</h4>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Tắt ngay thẻ đang xem mà không sợ bấm nhầm vào dấu X của cả cửa sổ trình duyệt!
              </p>
            </div>

            <div class="p-3 bg-card rounded border" style="border: 2px solid #10b981;">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Shift</kbd> + <kbd class="keycap">T</kbd>
                <h4 style="margin: 0; color: #10b981;">CỨU NGUY: MỞ LẠI TAB ĐÓNG NHẦM</h4>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Tuyệt chiêu hữu ích nhất trần đời! Vừa lỡ tay tắt mất trang web quan trọng? Bấm ngay <code>Ctrl + Shift + T</code>, trang web đó sẽ tự động hồi sinh ngay lập tức!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Tab</kbd>
                <h4 style="margin: 0;">Chuyển Sang Tab Tiếp Theo</h4>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Duyệt nhanh qua các tab từ trái sang phải như lật từng trang sách chỉ bằng 2 ngón tay.
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 05: GOOGLE SEARCH TRICKS */
      {
        id: 'w04-l07-s05',
        type: 'concept',
        icon: '🔍',
        eyebrow: 'BÍ THUẬT TÌM KIẾM',
        title: 'Kỹ Năng Tìm Kiếm Google Thông Minh Cho Học Sinh Lớp 7',
        badge: { type: 'primary', text: 'Tìm đâu trúng đó' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-3 bg-card rounded border">
              <strong class="text-primary" style="font-size: 1rem;">1. Dùng Dấu Ngoặc Kép <code>"..."</code></strong>
              <p class="text-secondary mt-1" style="font-size: 0.88rem; line-height: 1.5;">
                Khi em muốn tìm chính xác cụm từ nguyên văn không bị đảo chữ:<br>
                Ví dụ: Gõ <code>"thuật toán tìm kiếm tuần tự"</code> ➔ Google sẽ chỉ trả về những bài viết chứa đúng chuẩn cụm từ đó!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong class="text-primary" style="font-size: 1rem;">2. Lọc đuôi tệp tin chuyên biệt <code>filetype:</code></strong>
              <p class="text-secondary mt-1" style="font-size: 0.88rem; line-height: 1.5;">
                Muốn tải thẳng đề thi hay giáo trình dạng file Word hoặc PDF:<br>
                Ví dụ: Gõ <code>đề thi tin học lớp 7 filetype:pdf</code> ➔ Kết quả chỉ toàn file PDF để em tải về in ra học!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong class="text-primary" style="font-size: 1rem;">3. Tìm kiếm Hình ảnh Chất lượng cao (Tools > Large)</strong>
              <p class="text-secondary mt-1" style="font-size: 0.88rem; line-height: 1.5;">
                Khi tìm ảnh làm bài thuyết trình, bấm thẻ <em>Hình ảnh (Images) ➔ Công cụ (Tools) ➔ Kích thước: Lớn (Large)</em> để ảnh tải về nét căng, không bị vỡ hạt mờ căm!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong class="text-primary" style="font-size: 1rem;">4. Tránh các từ ngữ thừa thãi</strong>
              <p class="text-secondary mt-1" style="font-size: 0.88rem; line-height: 1.5;">
                Không nên gõ như văn nói: <em>"Bác Google ơi cho em hỏi bài tập toán lớp 7 trang 15 giải thế nào ạ"</em> ❌<br>
                Hãy gõ ngắn gọn súc tích: <code>toán 7 trang 15 cánh diều</code> ✅!
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 06: BOOKMARK & DOWNLOAD */
      {
        id: 'w04-l07-s06',
        type: 'concept',
        icon: '⭐',
        eyebrow: 'LƯU TRỮ TRÊN WEB',
        title: 'Đánh Dấu Bookmark (Ctrl + D) & Tải Tệp An Toàn (Download)',
        badge: { type: 'energy', text: 'Bảo bối lướt web' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">D</kbd>
                <h3 style="margin: 0; color: #f59e0b;">BOOKMARK (Đánh dấu ngôi sao)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Khi gặp một trang web học tập bổ ích (như VietJack, Khan Academy, Scratch Online):
              </p>
              <ul style="margin: 6px 0 0 20px; font-size: 0.88rem; line-height: 1.6;" class="text-secondary">
                <li>Bấm <code>Ctrl + D</code> (hoặc bấm biểu tượng ngôi sao ở cuối thanh địa chỉ).</li>
                <li>Trang web sẽ được ghim lên <strong>Thanh dấu trang (Bookmarks Bar)</strong> ngay dưới thanh URL.</li>
                <li>Lần sau chỉ cần mở trình duyệt và nhấp chuột đúng 1 cái là vào thẳng trang web, không cần gõ lại địa chỉ!</li>
              </ul>
            </div>

            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">J</kbd>
                <h3 style="margin: 0; color: #2563eb;">DOWNLOAD (Tải tệp tin về máy)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Khi tải tài liệu hoặc ảnh trên mạng:
              </p>
              <ul style="margin: 6px 0 0 20px; font-size: 0.88rem; line-height: 1.6;" class="text-secondary">
                <li>Bấm <code>Ctrl + J</code> để mở nhanh cửa sổ danh sách các tệp vừa tải về.</li>
                <li>Bấm chữ <strong>"Hiển thị trong thư mục" (Show in folder)</strong> để xem file đang nằm ở đâu.</li>
                <li>Luôn di chuyển (Ctrl + X) file vừa tải từ thư mục Downloads về đúng thư mục <code>HocTap_Lop7</code> của mình!</li>
              </ul>
            </div>
          </div>
        `
      },

      /* SLIDE 07: HANDS-ON LAB */
      {
        id: 'w04-l07-s07',
        type: 'lab',
        icon: '🧭',
        eyebrow: 'THỰC HÀNH TẠI CHỖ',
        title: 'Hands-on Lab: Nhiệm Vụ Tìm Kiếm & Tải Tài Liệu Chuẩn',
        badge: { type: 'energy', text: 'Thực hành máy thật 15p' },
        contentHtml: `
          <div class="callout callout--info mb-3">
            <h4 class="callout__title">🎯 Thử thách Thám hiểm Web:</h4>
            <p style="margin: 0; line-height: 1.6;">
              Em hãy mở Google Chrome hoặc Microsoft Edge trên máy và thực hiện chuỗi nhiệm vụ sau:
            </p>
          </div>

          <div class="checklist-suite">
            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 1:</strong> Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">T</kbd> mở tab mới, truy cập trang tìm kiếm Google.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 2:</strong> Tìm kiếm cụm từ <code>"ngôi nhà thông minh smart home"</code> ở thẻ Hình ảnh với kích thước Lớn.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 3:</strong> Nhấp chuột phải vào bức ảnh ưng ý nhất, chọn <strong>"Lưu hình ảnh thành..." (Save image as...)</strong> và lưu vào thư mục <code>HocTap_Lop7/LapTrinh</code> với tên <code>SmartHome_AnhMinhHoa.png</code>.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 4:</strong> Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">D</kbd> để thêm trang web này vào thanh Bookmark của trình duyệt.
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 08: QUICK QUIZ */
      {
        id: 'w04-l07-s08',
        type: 'quiz',
        icon: '❓',
        eyebrow: 'CỦNG CỐ KIẾN THỨC',
        title: 'Quick Quiz: Thử Tài Trí Nhớ Trình Duyệt Web',
        badge: { type: 'quiz', text: '3 Câu hỏi trắc nghiệm' },
        contentHtml: `
          <div class="quiz-container">
            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 1: Tổ hợp phím nào giúp khôi phục lại thẻ Tab vừa lỡ tay đóng nhầm?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Chính xác 100%! Ctrl + Shift + T là phím tắt thần thánh cứu lại tab đóng nhầm.')">A. Ctrl + Shift + T</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Ctrl + T là mở thêm 1 tab trắng mới.')">B. Ctrl + T</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Ctrl + W là đóng tab.')">C. Ctrl + W</button>
              </div>
            </div>

            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 2: Tên miền nào sau đây thường là nguồn tài liệu giáo dục và trường học đáng tin cậy nhất?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Rất chuẩn! Đuôi .edu / .edu.vn là viết tắt của Education (Giáo dục).')">A. .edu.vn</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, '.xyz là tên miền tự do không kiểm duyệt.')">B. .xyz</button>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 09: BOSS CHALLENGE */
      {
        id: 'w04-l07-s09',
        type: 'boss',
        icon: '🔥',
        eyebrow: 'THỬ THÁCH TỐI HẬU',
        title: 'Boss Challenge: 90 Giây Tìm Kiếm & Tải Tài Liệu Thần Tốc',
        badge: { type: 'danger', text: 'Boss Fight 90s' },
        contentHtml: `
          <div class="boss-arena-box p-4 rounded text-center" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); color: #ffffff;">
            <span class="badge badge--energy mb-2 font-bold" style="font-size: 0.9rem;">SÁT HẠCH TỐC ĐỘ BUỔI 07</span>
            <h2 style="font-size: 1.8rem; margin: 4px 0 12px; color: #fbbf24;">Nhà Thám Hiểm Tốc Độ</h2>
            <p style="max-width: 650px; margin: 0 auto 20px; font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
              Giáo viên đưa ra từ khóa bí mật: <code>"Lập trình Scratch chú mèo"</code>. Học sinh có 90 giây để tìm trên Google, tải đúng 1 ảnh chú mèo Scratch nền trong suốt (PNG) và lưu thẳng vào thư mục <code>LapTrinh</code> trên máy tính!
            </p>

            <div class="d-flex justify-center items-center gap-3">
              <button class="btn btn--energy font-bold" style="padding: 12px 28px; font-size: 1.05rem;" onclick="
                if (window.TimerManager) window.TimerManager.start(90);
                if (window.SoundManager) window.SoundManager.playPop();
              ">
                ⏱️ Bắt đầu Tính giờ 90s!
              </button>
            </div>
          </div>
        `
      },

      /* SLIDE 10: SUMMARY & NEXT MISSION */
      {
        id: 'w04-l07-s10',
        type: 'complete',
        icon: '🎉',
        eyebrow: 'TỔNG KẾT BUỔI 07',
        title: 'Chúc mừng Em đã Hoàn thành Buổi 07!',
        badge: { type: 'success', text: '⭐ +100 XP Toàn năng' },
        contentHtml: `
          <div class="p-4 bg-card rounded border text-center">
            <div style="font-size: 4rem;" class="mb-2">🌐</div>
            <h2 style="color: var(--color-success); margin-bottom: 8px;">Em đã là Thủy thủ Đại dương Internet!</h2>
            <p class="text-secondary" style="max-width: 640px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6;">
              Hôm nay em đã tự tin lướt web, làm chủ các phím tắt quản lý Tab, tìm kiếm tài liệu thông minh trên Google và tải file an toàn về máy tính.
            </p>

            <div class="p-3 rounded mt-4 text-left" style="background: #eff6ff; border: 1px solid rgba(59, 130, 246, 0.3); max-width: 640px; margin-left: auto; margin-right: auto;">
              <strong class="text-primary" style="font-size: 1rem;">🔥 Bật mí Buổi học số 08 (Chủ nhật tới) — ĐẠI THỬ THÁCH CUỐI GIAI ĐOẠN 1:</strong>
              <p class="text-secondary mt-1" style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Chủ đề: <strong>Upload & An toàn Internet — Chiến dịch "Thám tử Internet"</strong><br>
                Em sẽ học kỹ năng tải bài lên Google Drive/Form, đặt mật khẩu chống hack, nhận diện đường link lừa đảo độc hại và bước vào bài kiểm tra tổng hợp sát hạch toàn diện Giai đoạn 1 để nhận Chứng chỉ Hoàn thành!
              </p>
            </div>

            <div class="d-flex justify-center gap-3 mt-4">
              <a href="../index.html" class="btn btn--secondary">🏠 Về Cổng Khóa học</a>
              <a href="lesson.html?id=gd1-w04-l08" class="btn btn--primary">Sang Buổi 08: Đại Thử Thách GĐ1 ➔</a>
            </div>
          </div>
        `
      }
    ]
  };

  // Đăng ký vào Global Lesson Registry
  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w04-l07'] = lessonData;

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('id') === 'gd1-w04-l07') {
    window.currentLessonData = lessonData;
  }
})();
