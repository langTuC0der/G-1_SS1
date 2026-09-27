/**
 * LESSON DATA — GĐ1 · Tuần 02 · Buổi 04
 * Chủ đề: Phím tắt hữu ích
 * Thiết kế chuẩn Slide Trình chiếu Giảng dạy 1:1 (Teacher-Led Slide Deck)
 */

(function () {
  'use strict';

  const lessonData = {
    id: 'gd1-w02-l04',
    stage: 'GĐ1',
    stageName: 'Nhập môn máy tính',
    week: 2,
    lesson: 4,
    duration: '90 phút',
    title: 'Phím tắt hữu ích',
    subtitle: 'Nằm lòng các tổ hợp phím Ctrl + C, V, X, Z, A, S, Alt + Tab và tuyệt chiêu thao tác nhanh không cần chuột',
    totalXP: 100,

    cheatsheet: {
      vocabulary: [
        'Shortcut',
        'Copy',
        'Paste',
        'Cut',
        'Undo',
        'Redo',
        'Select All',
        'Save'
      ],
      icons: [
        { symbol: '📋', name: 'Ctrl + C', desc: 'Copy: Sao chép đối tượng vào bộ nhớ tạm' },
        { symbol: '📌', name: 'Ctrl + V', desc: 'Paste: Dán đối tượng từ bộ nhớ tạm ra' },
        { symbol: '✂️', name: 'Ctrl + X', desc: 'Cut: Cắt và di chuyển đối tượng sang nơi khác' },
        { symbol: '⏪', name: 'Ctrl + Z', desc: 'Undo: Hoàn tác lệnh sai, cứu nguy tức thì' },
        { symbol: '💾', name: 'Ctrl + S', desc: 'Save: Lưu nhanh tài liệu tránh mất dữ liệu' },
        { symbol: '🔄', name: 'Alt + Tab', desc: 'Chuyển đổi qua lại giữa các cửa sổ ứng dụng' }
      ],
      shortcuts: [
        { keys: ['Ctrl', 'C'], desc: 'Sao chép văn bản, tệp hoặc thư mục đã chọn' },
        { keys: ['Ctrl', 'V'], desc: 'Dán nội dung vừa sao chép hoặc cắt ra vị trí mới' },
        { keys: ['Ctrl', 'X'], desc: 'Cắt nội dung để chuyển vị trí khác' },
        { keys: ['Ctrl', 'Z'], desc: 'Quay ngược thời gian hoàn tác hành động vừa làm' },
        { keys: ['Ctrl', 'Y'], desc: 'Làm lại (Redo) hành động vừa Undo' },
        { keys: ['Ctrl', 'A'], desc: 'Chọn toàn bộ văn bản hoặc toàn bộ file' },
        { keys: ['Ctrl', 'S'], desc: 'Lưu tài liệu đang mở ngay lập tức' },
        { keys: ['Alt', 'Tab'], desc: 'Giữ Alt và bấm Tab để chuyển nhanh qua cửa sổ khác' },
        { keys: ['Win', 'D'], desc: 'Ẩn tất cả cửa sổ, về ngay màn hình Desktop' },
        { keys: ['Win', 'E'], desc: 'Mở nhanh trình quản lý thư mục File Explorer' }
      ],
      troubleshooting: 'Nếu lỡ tay xóa nhầm văn bản hoặc lỡ kéo nhầm file: ĐỪNG HOẢNG SỢ! Hãy bấm ngay tổ hợp phím thần thánh Ctrl + Z để máy tính quay ngược thời gian cứu lại ngay!'
    },

    sections: [
      /* SLIDE 01: WELCOME & MISSION */
      {
        id: 'w02-l04-s01',
        type: 'concept',
        icon: '⚡',
        eyebrow: 'BUỔI 04 · TUẦN 02',
        title: 'Làm chủ Phím tắt Siêu tốc (Ninja Keyboard)',
        badge: { type: 'energy', text: '⭐ Tuyệt chiêu Pro' },
        contentHtml: `
          <div class="hero-mission-box">
            <div class="hero-mission-content">
              <span class="badge badge--energy mb-2">Chặng 2: Nâng cấp Tốc độ</span>
              <h2 style="font-size: 1.75rem; margin-bottom: 8px;">Chào mừng em đến với Khóa huấn luyện Phím tắt!</h2>
              <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.6;">
                Em có từng thấy các chuyên gia công nghệ và lập trình viên thao tác máy tính nhanh thoăn thoắt mà hầu như không cần đụng đến chuột? Bí mật của họ chính là <strong>Phím tắt (Shortcuts)</strong>!
              </p>
              
              <div class="grid-2-col gap-3 mt-3">
                <div class="learning-target-card">
                  <div class="target-icon">📋</div>
                  <div>
                    <strong>Bộ ba Sao chép & Dán</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Copy (Ctrl+C), Paste (Ctrl+V) và Cut (Ctrl+X) — vũ khí sao chép dữ liệu số 1.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">⏳</div>
                  <div>
                    <strong>Phép màu Hoàn tác</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Quay ngược thời gian cứu nguy với Ctrl+Z (Undo) và làm lại với Ctrl+Y (Redo).</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🚀</div>
                  <div>
                    <strong>Điều khiển Đa nhiệm</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Chuyển cửa sổ chớp mắt với Alt+Tab, ẩn Desktop Win+D, mở File Explorer Win+E.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🛡️</div>
                  <div>
                    <strong>Bác sĩ Cứu hộ Khẩn cấp</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Mở Task Manager xử lý phần mềm bị đơ với Ctrl+Shift+Esc mà không cần khởi động lại máy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-mascot-badge">
              <div style="font-size: 4rem;">⚡</div>
              <span class="badge badge--warning mt-2 font-bold">+100 XP Thưởng</span>
              <p class="text-muted text-center mt-2" style="font-size: 0.8rem;">Dành cho Học sinh vượt qua Speed Challenge</p>
            </div>
          </div>
        `
      },

      /* SLIDE 02: WARM-UP & REVIEW */
      {
        id: 'w02-l04-s02',
        type: 'warmup',
        icon: '🤔',
        eyebrow: 'KHỞI ĐỘNG 5 PHÚT',
        title: 'Ôn tập Buổi 03 & Đố vui Phím gõ',
        badge: { type: 'warning', text: 'Phá băng & Ôn bài' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Hãy cùng thầy/cô ôn nhanh 4 câu hỏi thực tế của Buổi 3 trước khi bước vào thế giới phím tắt nhé:
          </p>

          <div class="grid-2-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border">
              <strong>1. Hai ngón tay trỏ đặt lên phím nào khi bắt đầu gõ?</strong>
              <p class="text-muted mt-1" style="font-size: 0.88rem; margin: 0;">
                👉 Đáp án: Phím <strong>F</strong> (tay trái) và phím <strong>J</strong> (tay phải) — 2 phím có gờ gai nhỏ!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong>2. Muốn xóa chữ nằm ngay trước (bên trái) con trỏ, em bấm phím gì?</strong>
              <p class="text-muted mt-1" style="font-size: 0.88rem; margin: 0;">
                👉 Đáp án: Phím <strong>Backspace (⌫)</strong>. Muốn xóa chữ bên phải thì bấm <strong>Delete (⌦)</strong>.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong>3. Trong Telex, gõ từ <code>lowps hocj</code> sẽ ra chữ gì?</strong>
              <p class="text-muted mt-1" style="font-size: 0.88rem; margin: 0;">
                👉 Đáp án: Từ <strong>lớp học</strong> (<code>ow</code> = ơ, <code>s</code> = sắc, <code>j</code> = nặng).
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong>4. Dấu chấm câu đặt như thế nào là đúng ngữ pháp?</strong>
              <p class="text-muted mt-1" style="font-size: 0.88rem; margin: 0;">
                👉 Đáp án: Đặt sát dính liền với từ trước, và cách 1 khoảng trắng (Space) với từ sau!
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 03: SHORTCUT CONCEPT */
      {
        id: 'w02-l04-s03',
        type: 'concept',
        icon: '🔑',
        eyebrow: 'BẢN CHẤT PHÍM TẮT',
        title: 'Công thức Phím Tắt & 4 Phím Bổ Trợ Thần Thánh',
        badge: { type: 'primary', text: 'Nguyên lý hoạt động' },
        contentHtml: `
          <div class="callout callout--info mb-3">
            <h4 class="callout__title">💡 Phím tắt (Keyboard Shortcut) là gì?</h4>
            <p style="margin: 0; line-height: 1.6;">
              Là sự kết hợp cùng lúc giữa <strong>1 phím bổ trợ</strong> (như Ctrl, Alt, Shift, Win) với <strong>1 phím chữ hoặc số</strong> để ra lệnh cho máy tính thực hiện ngay một hành động mà không cần rê chuột bấm qua nhiều tầng menu.
            </p>
          </div>

          <h3 class="mb-3 text-primary">Bộ tứ Phím Bổ Trợ (Modifier Keys):</h3>
          <div class="grid-4-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border text-center">
              <kbd class="keycap mb-2" style="font-size: 1.1rem; width: 100%;">Ctrl</kbd>
              <strong style="color: #2563eb;">Control</strong>
              <p class="text-muted mt-1" style="font-size: 0.8rem; margin: 0;">Phím điều khiển tối thượng, xuất hiện trong 80% phím tắt.</p>
            </div>

            <div class="p-3 bg-card rounded border text-center">
              <kbd class="keycap mb-2" style="font-size: 1.1rem; width: 100%;">Alt</kbd>
              <strong style="color: #f59e0b;">Alternate</strong>
              <p class="text-muted mt-1" style="font-size: 0.8rem; margin: 0;">Phím hoán đổi lệnh, chuyên dùng kết hợp để chuyển đổi cửa sổ.</p>
            </div>

            <div class="p-3 bg-card rounded border text-center">
              <kbd class="keycap mb-2" style="font-size: 1.1rem; width: 100%;">Shift</kbd>
              <strong style="color: #10b981;">Shift</strong>
              <p class="text-muted mt-1" style="font-size: 0.8rem; margin: 0;">Phím nâng cao, kết hợp gõ chữ hoa và mở rộng vùng chọn.</p>
            </div>

            <div class="p-3 bg-card rounded border text-center">
              <kbd class="keycap mb-2" style="font-size: 1.1rem; width: 100%;">Win ⊞</kbd>
              <strong style="color: #6366f1;">Windows</strong>
              <p class="text-muted mt-1" style="font-size: 0.8rem; margin: 0;">Phím cờ Windows, ra lệnh cho toàn bộ hệ điều hành.</p>
            </div>
          </div>

          <div class="p-3 rounded" style="background: #fef3c7; border: 1px solid #fde68a;">
            <strong style="color: #92400e;">⚠️ Nguyên tắc bấm phím tắt chuẩn xác:</strong>
            <span class="text-secondary" style="font-size: 0.9rem;">
              <strong>NHẤN GIỮ</strong> phím bổ trợ (Ctrl/Alt/Win) trước ➔ Rồi <strong>BẤM NHẸ</strong> phím chữ cái (C, V, Z) ➔ Sau đó buông tay ra! Không bấm đồng thời một lúc cả 2 phím cùng mili-giây.
            </span>
          </div>
        `
      },

      /* SLIDE 04: CTRL+C, CTRL+V, CTRL+X */
      {
        id: 'w02-l04-s04',
        type: 'concept',
        icon: '📋',
        eyebrow: 'BỘ BA HUYỀN THOẠI',
        title: 'Bộ Ba Sao Chép, Cắt & Dán (Ctrl + C, V, X)',
        badge: { type: 'energy', text: 'Quan trọng nhất' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Đây là 3 tổ hợp phím được mọi người trên thế giới sử dụng nhiều nhất hàng ngày:
          </p>

          <div class="grid-3-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border" style="border-top: 4px solid #2563eb;">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">C</kbd>
              </div>
              <h4 style="margin: 0 0 6px; color: #2563eb;">1. COPY (Sao chép)</h4>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Chữ <strong>C</strong> viết tắt của <em>Copy</em>. Tạo ra một bản sao của đối tượng vào bộ nhớ tạm (Clipboard). Đối tượng gốc <strong>vẫn còn nguyên vẹn</strong> tại chỗ!
              </p>
            </div>

            <div class="p-3 bg-card rounded border" style="border-top: 4px solid #ef4444;">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">X</kbd>
              </div>
              <h4 style="margin: 0 0 6px; color: #ef4444;">2. CUT (Cắt / Di chuyển)</h4>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Phím <strong>X</strong> nhìn giống chiếc kéo cắt giấy! Cắt lấy đối tượng đi và chuẩn bị mang sang nơi khác. Đối tượng gốc <strong>sẽ biến mất</strong> ở vị trí cũ!
              </p>
            </div>

            <div class="p-3 bg-card rounded border" style="border-top: 4px solid #10b981;">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">V</kbd>
              </div>
              <h4 style="margin: 0 0 6px; color: #10b981;">3. PASTE (Dán dữ liệu)</h4>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Phím <strong>V</strong> nằm ngay cạnh C và X! Sau khi đã Copy hoặc Cut, em di chuyển con trỏ chuột đến nơi cần rồi bấm <code>Ctrl + V</code> để dán dữ liệu ra!
              </p>
            </div>
          </div>

          <div class="p-3 rounded bg-page-secondary border">
            <strong>Mẹo siêu hay:</strong> Một lần bấm <code>Ctrl + C</code>, em có thể bấm <code>Ctrl + V</code> bao nhiêu lần tùy thích để nhân bản liên tục!
          </div>
        `
      },

      /* SLIDE 05: CTRL+Z & CTRL+Y */
      {
        id: 'w02-l04-s05',
        type: 'concept',
        icon: '⏳',
        eyebrow: 'CỖ MÁY THỜI GIAN',
        title: 'Cứu nguy với Hoàn tác Undo (Ctrl + Z) & Redo (Ctrl + Y)',
        badge: { type: 'danger', text: 'Phao cứu sinh' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border" style="border-left: 5px solid #2563eb;">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Z</kbd>
                <h3 style="margin: 0; color: #2563eb;">UNDO (Quay ngược thời gian)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Trong lúc học tập hoặc làm bài, em lỡ tay:
              </p>
              <ul style="margin: 6px 0 12px 20px; padding: 0; font-size: 0.9rem; line-height: 1.6;" class="text-secondary">
                <li>Lỡ tay bấm xóa mất cả đoạn văn dài?</li>
                <li>Lỡ tay kéo nhầm một thư mục vào thùng rác?</li>
                <li>Lỡ tay tô màu sai hoặc cắt nhầm ảnh?</li>
              </ul>
              <div class="callout callout--success" style="padding: 10px 14px;">
                <strong>🎉 Giải pháp:</strong> Hãy bình tĩnh bấm ngay <code>Ctrl + Z</code>! Máy tính sẽ lập tức hoàn tác hành động vừa rồi như chưa hề có cuộc chia ly!
              </div>
            </div>

            <div class="p-4 bg-card rounded border" style="border-left: 5px solid #10b981;">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Y</kbd>
                <h3 style="margin: 0; color: #10b981;">REDO (Làm lại thao tác)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Nếu em vừa bấm <code>Ctrl + Z</code> nhưng rồi lại nhận ra: <em>"Ơ, thao tác xóa lúc nãy mới là đúng cơ mà!"</em>.
              </p>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Lúc này, tổ hợp phím <code>Ctrl + Y</code> sẽ tiến tới tương lai một bước, khôi phục lại hành động em vừa lỡ hoàn tác!
              </p>
              <div class="p-2 rounded bg-page-secondary mt-3 font-mono text-center" style="font-size: 0.9rem;">
                Undo (Ctrl+Z) ⟵ [Trạng thái hiện tại] ⟶ Redo (Ctrl+Y)
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 06: CTRL+A & CTRL+S */
      {
        id: 'w02-l04-s06',
        type: 'concept',
        icon: '💾',
        eyebrow: 'BẢO VỆ DỮ LIỆU',
        title: 'Chọn Tất Cả (Ctrl + A) & Lưu Nhanh Tài Liệu (Ctrl + S)',
        badge: { type: 'primary', text: 'Thói quen sống còn' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">A</kbd>
                <h3 style="margin: 0;">SELECT ALL (Chọn tất cả)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Chữ <strong>A</strong> viết tắt của <em>All (Tất cả)</em>.
              </p>
              <ul style="margin: 6px 0 0 20px; padding: 0; font-size: 0.88rem; line-height: 1.6;" class="text-secondary">
                <li>Trong văn bản Word/Notepad: Bôi đen toàn bộ tất cả các trang văn bản chỉ trong 0.1 giây.</li>
                <li>Trong thư mục máy tính: Chọn toàn bộ 1.000 bức ảnh hoặc tệp tin cùng lúc mà không phải rê chuột mỏi tay.</li>
              </ul>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">S</kbd>
                <h3 style="margin: 0; color: #dc2626;">SAVE (Lưu tài liệu ngay)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Chữ <strong>S</strong> viết tắt của <em>Save (Lưu trữ)</em>.
              </p>
              <div class="callout callout--danger mt-2">
                <strong>⚡ Bài học xương máu:</strong>
                <p style="margin: 4px 0 0; font-size: 0.85rem;">
                  Lỡ như nhà bị mất điện đột ngột hoặc máy tính hết pin tắt ngúm, mọi bài văn hoặc dòng mã lập trình em vừa gõ cả tiếng đồng hồ sẽ biến mất vĩnh viễn nếu chưa kịp Lưu! Cứ sau mỗi 5-10 phút gõ bài, hãy tiện tay bấm <code>Ctrl + S</code> một lần!
                </p>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 07: CTRL + F */
      {
        id: 'w02-l04-s07',
        type: 'concept',
        icon: '🔍',
        eyebrow: 'KÍNH LÚP TÌM KIẾM',
        title: 'Tìm kiếm Siêu Tốc với Ctrl + F (Find)',
        badge: { type: 'energy', text: 'Kính lúp thần kỳ' },
        contentHtml: `
          <div class="grid-2-col gap-4 items-center">
            <div>
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">F</kbd>
                <h3 style="margin: 0; color: var(--color-primary);">FIND (Tìm kiếm mọi ngóc ngách)</h3>
              </div>
              <p class="text-secondary" style="line-height: 1.6; font-size: 0.95rem;">
                Chữ <strong>F</strong> viết tắt của <em>Find (Tìm kiếm)</em>. Khi em đọc một cuốn sách giáo khoa điện tử 300 trang, hoặc một trang báo dài bất tận trên mạng:
              </p>
              <ul style="margin: 8px 0 16px 20px; padding: 0; font-size: 0.9rem; line-height: 1.7;" class="text-secondary">
                <li>Làm sao để tìm xem từ <strong>"Pascal"</strong> hay <strong>"Hà Nội"</strong> nằm ở dòng nào?</li>
                <li>Không cần căng mắt đọc từng chữ! Hãy bấm ngay <code>Ctrl + F</code>.</li>
                <li>Một thanh tìm kiếm nhỏ sẽ hiện lên ở góc màn hình: Em gõ từ cần tìm vào, máy tính sẽ tự động bôi vàng tất cả các vị trí chứa từ đó lập tức!</li>
              </ul>
            </div>

            <div class="p-4 bg-card rounded border text-center">
              <span style="font-size: 3rem;">🔍</span>
              <h4 class="mt-2 mb-2">Thanh tìm kiếm ảo (Mock Search)</h4>
              <div class="d-flex gap-2">
                <input type="text" placeholder="Gõ từ cần tìm (ví dụ: lớp 7)..." style="flex: 1; padding: 8px 12px; border: 1px solid var(--border-soft); border-radius: 6px;">
                <button class="btn btn--primary btn--sm">Tìm ➔</button>
              </div>
              <small class="text-muted mt-2 d-block">Hoạt động trong Chrome, Edge, Word, Excel, PDF và mọi trình duyệt!</small>
            </div>
          </div>
        `
      },

      /* SLIDE 08: ALT + TAB & WIN + D */
      {
        id: 'w02-l04-s08',
        type: 'concept',
        icon: '🔄',
        eyebrow: 'ĐA NHIỆM CHỚP MẮT',
        title: 'Chuyển Đổi Cửa Sổ (Alt + Tab) & Về Desktop (Win + D)',
        badge: { type: 'primary', text: 'Kỹ năng Đa nhiệm' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Alt</kbd> + <kbd class="keycap">Tab</kbd>
                <h3 style="margin: 0; color: #2563eb;">CHUYỂN CỬA SỔ TRONG 0.5 GIÂY</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Thay vì phải rê chuột xuống Taskbar để tìm từng cửa sổ:
              </p>
              <div class="p-3 rounded bg-page-secondary mt-2 mb-2" style="font-size: 0.88rem; line-height: 1.6;">
                <strong>Cách thao tác:</strong><br>
                1. Ngón tay cái bên trái <strong>Nhấn giữ phím Alt</strong>.<br>
                2. Ngón tay trỏ hoặc giữa <strong>Bấm nhẹ phím Tab</strong> ➔ Một bảng danh sách các ứng dụng đang mở sẽ hiện lên giữa màn hình.<br>
                3. Bấm Tab tiếp để nhảy đến ứng dụng em muốn rồi <strong>buông tay khỏi phím Alt</strong> ra!
              </div>
            </div>

            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Win ⊞</kbd> + <kbd class="keycap">D</kbd>
                <h3 style="margin: 0; color: #10b981;">ẨN HẾT VỀ MÀN HÌNH DESKTOP</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Chữ <strong>D</strong> viết tắt của <em>Desktop</em>.
              </p>
              <div class="p-3 rounded bg-page-secondary mt-2 mb-2" style="font-size: 0.88rem; line-height: 1.6;">
                <strong>Công dụng tuyệt đỉnh:</strong><br>
                Khi trên màn hình của em đang mở ngổn ngang 10 cửa sổ khác nhau, em muốn quay ngay về màn hình nền Desktop để tìm tài liệu: Chỉ cần bấm <code>Win + D</code> đúng 1 lần! Tất cả các cửa sổ sẽ tự động thu nhỏ xuống Taskbar ngay lập tức. Bấm <code>Win + D</code> lần nữa để phục hồi lại như cũ!
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 09: WIN+E & ALT+F4 */
      {
        id: 'w02-l04-s09',
        type: 'concept',
        icon: '📁',
        eyebrow: 'ĐIỀU HÀNH HỆ THỐNG',
        title: 'Mở File Explorer (Win + E) & Đóng Ứng Dụng (Alt + F4)',
        badge: { type: 'energy', text: 'Tổ hợp tiện ích' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Win ⊞</kbd> + <kbd class="keycap">E</kbd>
                <h3 style="margin: 0; color: #6366f1;">Mở File Explorer (Ổ đĩa & Thư mục)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Chữ <strong>E</strong> viết tắt của <em>Explorer</em>. Bấm tổ hợp này giúp em mở ngay cửa sổ quản lý tệp tin và các ổ đĩa C, D trên máy tính chỉ trong 1 tích tắc.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Alt</kbd> + <kbd class="keycap">F4</kbd>
                <h3 style="margin: 0; color: #dc2626;">Đóng Cửa Sổ Ứng Dụng</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Tương đương với việc dùng chuột bấm vào dấu <strong>X</strong> màu đỏ ở góc trên bên phải. Nếu ở ngoài màn hình Desktop mà bấm <code>Alt + F4</code>, máy tính sẽ hiện bảng thông báo Shut down tắt máy an toàn!
              </p>
            </div>
          </div>

          <div class="callout callout--warning mt-3">
            <h4 class="callout__title">💡 Phím chụp ảnh màn hình siêu xịn:</h4>
            <p style="margin: 0; font-size: 0.9rem;">
              Bấm tổ hợp <kbd class="keycap">Win ⊞</kbd> + <kbd class="keycap">Shift</kbd> + <kbd class="keycap">S</kbd> để quét chọn chụp lại một phần màn hình máy tính gửi cho Thầy/Cô khi muốn hỏi bài!
            </p>
          </div>
        `
      },

      /* SLIDE 10: TASK MANAGER */
      {
        id: 'w02-l04-s10',
        type: 'concept',
        icon: '🛡️',
        eyebrow: 'BÁC SĨ CỨU HỘ',
        title: 'Task Manager (Ctrl + Shift + Esc) — Cấp cứu phần mềm treo',
        badge: { type: 'danger', text: 'Tuyệt chiêu IT' },
        contentHtml: `
          <div class="grid-2-col gap-4 items-center">
            <div>
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Shift</kbd> + <kbd class="keycap">Esc</kbd>
              </div>
              <h3 style="margin: 0 0 8px; color: #dc2626;">Khi ứng dụng bị đơ (Not Responding)...</h3>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Đôi khi phần mềm bị lỗi hoặc máy tính mở quá nhiều tác vụ khiến một ứng dụng bị treo, con trỏ chuột quay tròn và bấm dấu X không chịu tắt.
              </p>
              <div class="p-3 rounded bg-page-secondary mt-2" style="font-size: 0.88rem; line-height: 1.6;">
                <strong>3 bước xử lý như chuyên gia CNTT:</strong><br>
                1. Bấm tổ hợp 3 phím <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Shift</kbd> + <kbd class="keycap">Esc</kbd> để mở bảng Task Manager.<br>
                2. Tìm tên ứng dụng đang bị treo trong danh sách.<br>
                3. Bấm nút <strong>End Task</strong> ở góc dưới để bắt buộc ứng dụng đó đóng ngay lập tức mà không phải khởi động lại cả máy tính!
              </div>
            </div>

            <div class="p-4 bg-card rounded border text-center">
              <div style="font-size: 3rem;">🩺</div>
              <h4 class="mt-2 mb-1">Cửa sổ Task Manager</h4>
              <div class="p-2 rounded bg-page-secondary text-left font-mono" style="font-size: 0.85rem;">
                <div class="d-flex justify-between p-1 bg-white rounded border mb-1">
                  <span>Google Chrome</span>
                  <span class="text-success">Hoạt động</span>
                </div>
                <div class="d-flex justify-between p-1 rounded mb-1" style="background: #fee2e2; color: #991b1b;">
                  <span>Trò chơi Game (Not Responding)</span>
                  <span class="badge badge--danger">Bị Treo</span>
                </div>
                <div class="d-flex justify-between p-1 bg-white rounded border">
                  <span>Notepad</span>
                  <span class="text-success">Hoạt động</span>
                </div>
              </div>
              <button class="btn btn--danger btn--sm w-100 mt-2">End Task (Buộc dừng)</button>
            </div>
          </div>
        `
      },

      /* SLIDE 11: SHORTCUT MATRIX */
      {
        id: 'w02-l04-s11',
        type: 'concept',
        icon: '📊',
        eyebrow: 'BẢNG MA TRẬN TỔNG HỢP',
        title: 'Bảng Vàng 10 Tổ Hợp Phím Tắt Sống Còn',
        badge: { type: 'primary', text: 'Bảo bối ghi nhớ' },
        contentHtml: `
          <div class="table-responsive">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
              <thead>
                <tr style="background: var(--bg-page-secondary); text-align: left;">
                  <th style="padding: 10px 14px; border: 1px solid var(--border-soft);">Tổ hợp phím</th>
                  <th style="padding: 10px 14px; border: 1px solid var(--border-soft);">Tên lệnh</th>
                  <th style="padding: 10px 14px; border: 1px solid var(--border-soft);">Công dụng cốt lõi</th>
                  <th style="padding: 10px 14px; border: 1px solid var(--border-soft);">Tần suất sử dụng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);"><kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">C</kbd></td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); font-weight: 700;">Copy</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);">Sao chép văn bản, ảnh, tệp tin</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); color: #dc2626; font-weight: 700;">★★★★★ Hàng ngày</td>
                </tr>
                <tr>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);"><kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">V</kbd></td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); font-weight: 700;">Paste</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);">Dán dữ liệu vừa Copy hoặc Cut</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); color: #dc2626; font-weight: 700;">★★★★★ Hàng ngày</td>
                </tr>
                <tr>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);"><kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">X</kbd></td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); font-weight: 700;">Cut</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);">Cắt di chuyển đối tượng sang nơi khác</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); color: #2563eb; font-weight: 700;">★★★★☆ Rất thường xuyên</td>
                </tr>
                <tr>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);"><kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Z</kbd></td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); font-weight: 700;">Undo</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);">Hoàn tác thao tác sai lầm vừa làm</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); color: #dc2626; font-weight: 700;">★★★★★ Cứu nguy số 1</td>
                </tr>
                <tr>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);"><kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">A</kbd></td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); font-weight: 700;">Select All</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);">Bôi đen toàn bộ nội dung trong 1 nốt nhạc</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); color: #2563eb; font-weight: 700;">★★★★☆ Rất thường xuyên</td>
                </tr>
                <tr>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);"><kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">S</kbd></td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); font-weight: 700;">Save</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);">Lưu nhanh tài liệu tránh mất bài</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); color: #dc2626; font-weight: 700;">★★★★★ Bắt buộc</td>
                </tr>
                <tr>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);"><kbd class="keycap">Alt</kbd> + <kbd class="keycap">Tab</kbd></td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); font-weight: 700;">App Switcher</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);">Chuyển đổi qua lại giữa các cửa sổ</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); color: #10b981; font-weight: 700;">★★★★★ Thần tốc</td>
                </tr>
                <tr>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);"><kbd class="keycap">Win</kbd> + <kbd class="keycap">D</kbd></td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); font-weight: 700;">Show Desktop</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft);">Thu nhỏ toàn bộ cửa sổ về màn hình nền</td>
                  <td style="padding: 8px 14px; border: 1px solid var(--border-soft); color: #10b981; font-weight: 700;">★★★★☆ Rất tiện lợi</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },

      /* SLIDE 12: HANDS-ON LAB 01 */
      {
        id: 'w02-l04-s12',
        type: 'lab',
        icon: '🧪',
        eyebrow: 'THỰC HÀNH TẠI CHỖ',
        title: 'Hands-on Lab 01: Chuỗi Thao Tác Sao Chép & Hoàn Tác',
        badge: { type: 'energy', text: 'Thực hành máy tính 10p' },
        contentHtml: `
          <div class="callout callout--info mb-3">
            <h4 class="callout__title">🎯 Nhiệm vụ thực hành trên Notepad:</h4>
            <p style="margin: 0; line-height: 1.6;">
              Mở file Notepad có sẵn trên máy em và hoàn thành chuỗi 5 nhiệm vụ sau mà <strong>không dùng menu chuột</strong>:
            </p>
          </div>

          <div class="checklist-suite">
            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 1:</strong> Gõ dòng chữ <code>Lập trình Lớp 7 rất thú vị!</code> vào Notepad.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 2:</strong> Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">A</kbd> để bôi đen, rồi bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">C</kbd> để sao chép.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 3:</strong> Bấm phím mũi tên xuống hoặc bấm <kbd class="keycap">Enter</kbd>, rồi bấm liên tiếp <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">V</kbd> 3 lần để nhân bản thành 4 dòng!
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 4:</strong> Bấm phím <kbd class="keycap">Backspace</kbd> xóa hết toàn bộ, rồi bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Z</kbd> để chứng kiến phép thuật hoàn tác chữ lại như cũ!
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 5:</strong> Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">S</kbd> để lưu lại tệp tin.
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 13: HANDS-ON LAB 02 */
      {
        id: 'w02-l04-s13',
        type: 'lab',
        icon: '🚀',
        eyebrow: 'THỰC HÀNH KHÔNG CHUỘT',
        title: 'Hands-on Lab 02: Nhảy Múa Giữa Các Cửa Sổ (Alt+Tab & Win+D)',
        badge: { type: 'warning', text: 'Ninja Không Chuột' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Em hãy đặt tay lên bàn phím và chuẩn bị thực hiện bài tập biểu diễn chuyển đổi ứng dụng thần tốc:
          </p>

          <div class="grid-2-col gap-4 mb-4">
            <div class="p-3 bg-card rounded border">
              <h4 class="text-primary mb-2">1. Chuẩn bị 3 cửa sổ:</h4>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Hãy mở sẵn trên máy em: 1 cửa sổ <strong>Trình duyệt Web</strong>, 1 cửa sổ <strong>Notepad</strong> và 1 cửa sổ <strong>File Explorer</strong> (bấm <kbd class="keycap">Win</kbd> + <kbd class="keycap">E</kbd> để mở nhanh).
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <h4 class="text-primary mb-2">2. Thử thách của Giáo viên:</h4>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Khi giáo viên hô <em>"Chuyển sang Notepad!"</em> ➔ Em lập tức bấm <kbd class="keycap">Alt</kbd> + <kbd class="keycap">Tab</kbd> chuyển sang Notepad trong 1 giây.<br>
                Khi giáo viên hô <em>"Về Desktop!"</em> ➔ Lập tức bấm <kbd class="keycap">Win</kbd> + <kbd class="keycap">D</kbd>!
              </p>
            </div>
          </div>

          <div class="callout callout--success">
            <strong>🎯 Mục tiêu:</strong> Hoàn thành 5 lượt chuyển đổi mượt mà mà tay hoàn toàn không chạm vào chuột máy tính!
          </div>
        `
      },

      /* SLIDE 14: COMMON PITFALLS */
      {
        id: 'w02-l04-s14',
        type: 'concept',
        icon: '⚠️',
        eyebrow: 'BÁC SĨ PHÍM TẮT',
        title: '3 Sai Lầm Thường Gặp Khi Dùng Phím Tắt',
        badge: { type: 'danger', text: 'Lưu ý người mới' },
        contentHtml: `
          <div class="grid-3-col gap-3">
            <div class="p-3 bg-card rounded border">
              <span class="badge badge--danger mb-2">Lỗi 1</span>
              <h4 style="margin: 0 0 6px;">Quên giữ phím bổ trợ</h4>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Bấm phím C trước rồi mới bấm phím Ctrl ➔ Máy tính sẽ hiểu là em đang muốn gõ chữ cái "c" thay vì ra lệnh Copy! Luôn nhớ: Giữ Ctrl trước, bấm C sau.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--danger mb-2">Lỗi 2</span>
              <h4 style="margin: 0 0 6px;">Chưa chọn đối tượng đã Copy</h4>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Chưa dùng chuột bôi đen đoạn văn hoặc chưa nhấp chọn file mà đã bấm <code>Ctrl + C</code> ➔ Máy tính sẽ không biết phải sao chép cái gì cả!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--danger mb-2">Lỗi 3</span>
              <h4 style="margin: 0 0 6px;">Bấm nhầm phím Fn trên Laptop</h4>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Trên bàn phím một số laptop, dãy phím F1-F12 bị gán làm nút tăng giảm âm lượng hoặc độ sáng. Khi muốn bấm <code>Alt + F4</code>, em có thể cần bấm <code>Alt + Fn + F4</code>.
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 15: SPEED CHALLENGE */
      {
        id: 'w02-l04-s15',
        type: 'practice',
        icon: '⚡',
        eyebrow: 'ĐẤU TRƯỜNG PHẢN XẠ',
        title: 'Thử Thách Thao Tác Nhanh Bằng Phím Tắt',
        badge: { type: 'energy', text: 'Đua tốc độ' },
        contentHtml: `
          <div class="callout callout--info mb-3">
            <h4 class="callout__title">⏱️ Thử thách 60 Giây Phản xạ (Speed Shortcut):</h4>
            <p style="margin: 0; line-height: 1.6;">
              Thầy/Cô sẽ đọc tên hành động ngẫu nhiên, em hãy bấm đúng tổ hợp phím trên bàn phím của mình thật nhanh:
            </p>
          </div>

          <div class="grid-2-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border">
              <span class="badge badge--primary mb-1">Nhiệm vụ A</span>
              <div style="font-weight: 700; font-size: 1.05rem;">"Sao chép ngay!"</div>
              <div class="text-muted mt-1" style="font-size: 0.85rem;">👉 Bấm: <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">C</kbd></div>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--primary mb-1">Nhiệm vụ B</span>
              <div style="font-weight: 700; font-size: 1.05rem;">"Lưu bài kẻo mất!"</div>
              <div class="text-muted mt-1" style="font-size: 0.85rem;">👉 Bấm: <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">S</kbd></div>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--primary mb-1">Nhiệm vụ C</span>
              <div style="font-weight: 700; font-size: 1.05rem;">"Lỡ xóa mất rồi, cứu với!"</div>
              <div class="text-muted mt-1" style="font-size: 0.85rem;">👉 Bấm: <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Z</kbd></div>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--primary mb-1">Nhiệm vụ D</span>
              <div style="font-weight: 700; font-size: 1.05rem;">"Chọn hết tất cả mọi thứ!"</div>
              <div class="text-muted mt-1" style="font-size: 0.85rem;">👉 Bấm: <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">A</kbd></div>
            </div>
          </div>
        `
      },

      /* SLIDE 16: QUICK QUIZ */
      {
        id: 'w02-l04-s16',
        type: 'quiz',
        icon: '❓',
        eyebrow: 'CỦNG CỐ KIẾN THỨC',
        title: 'Quick Quiz: Thử Tài Trí Nhớ Phím Tắt',
        badge: { type: 'quiz', text: '5 Câu hỏi trắc nghiệm' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Hãy chọn đáp án chuẩn xác nhất cho từng tình huống:
          </p>

          <div class="quiz-container">
            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 1: Tổ hợp phím nào dùng để quay ngược thời gian hoàn tác hành động sai (Undo)?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Quá xuất sắc! Ctrl + Z là cỗ máy thời gian cứu nguy số 1.')">A. Ctrl + Z</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Ctrl + C là Sao chép.')">B. Ctrl + C</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Ctrl + S là Lưu tệp tin.')">C. Ctrl + S</button>
              </div>
            </div>

            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 2: Muốn chuyển nhanh qua lại giữa các cửa sổ ứng dụng đang mở, em dùng tổ hợp nào?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Ctrl + Shift là đổi bộ gõ tiếng Việt.')">A. Ctrl + Shift</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Chính xác! Giữ Alt và bấm Tab để chuyển cửa sổ.')">B. Alt + Tab</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Win + D là về Desktop.')">C. Win + D</button>
              </div>
            </div>

            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 3: Khác biệt giữa Cắt (Ctrl + X) và Sao chép (Ctrl + C) là gì?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Đúng rồi! Ctrl + X sẽ xóa đối tượng gốc ở chỗ cũ để chuyển sang chỗ mới.')">A. Ctrl + X xóa đối tượng ở vị trí gốc, còn Ctrl + C giữ nguyên đối tượng gốc</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Cả hai đều có thể dán bằng Ctrl + V.')">B. Ctrl + X không thể dùng Ctrl + V để dán được</button>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 17: BOSS CHALLENGE */
      {
        id: 'w02-l04-s17',
        type: 'boss',
        icon: '🔥',
        eyebrow: 'THỬ THÁCH TỐI HẬU',
        title: 'Boss Challenge: Vượt Chướng Ngại Vật 120s Bằng Phím Tắt',
        badge: { type: 'danger', text: 'Boss Fight 120s' },
        contentHtml: `
          <div class="boss-arena-box p-4 rounded text-center" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); color: #ffffff;">
            <span class="badge badge--energy mb-2 font-bold" style="font-size: 0.9rem;">SÁT HẠCH TỔNG KẾT TUẦN 02</span>
            <h2 style="font-size: 1.8rem; margin: 4px 0 12px; color: #fbbf24;">Thử Thách Ninja Tốc Độ (Shortcut Master)</h2>
            <p style="max-width: 650px; margin: 0 auto 20px; font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
              Học sinh phải thực hiện chuỗi 4 thao tác liên hoàn chỉ bằng phím tắt trong 120 giây: <strong>Mở File Explorer (Win+E) ➔ Chuyển sang Notepad (Alt+Tab) ➔ Chọn hết văn bản và Copy (Ctrl+A, Ctrl+C) ➔ Về Desktop (Win+D)</strong>!
            </p>

            <div class="d-flex justify-center items-center gap-3">
              <button class="btn btn--energy font-bold" style="padding: 12px 28px; font-size: 1.05rem;" onclick="
                if (window.TimerManager) window.TimerManager.start(120);
                if (window.SoundManager) window.SoundManager.playPop();
              ">
                ⏱️ Bắt đầu Đếm ngược 120s!
              </button>
            </div>
          </div>
        `
      },

      /* SLIDE 18: SUMMARY & NEXT MISSION */
      {
        id: 'w02-l04-s18',
        type: 'complete',
        icon: '🎉',
        eyebrow: 'TỔNG KẾT BUỔI 04',
        title: 'Chúc mừng Em đã Hoàn thành Tuần 02!',
        badge: { type: 'success', text: '⭐ +100 XP Toàn năng' },
        contentHtml: `
          <div class="p-4 bg-card rounded border text-center">
            <div style="font-size: 4rem;" class="mb-2">🏆</div>
            <h2 style="color: var(--color-success); margin-bottom: 8px;">Em đã xuất sắc Hoàn thành Tuần 02!</h2>
            <p class="text-secondary" style="max-width: 640px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6;">
              Qua 4 buổi học đầu tiên, em đã xây dựng nền tảng vững chắc nhất về phần cứng máy tính, chuột công thái học, bàn phím 10 ngón và tổ hợp phím tắt thao tác nhanh!
            </p>

            <div class="p-3 rounded mt-4 text-left" style="background: #eff6ff; border: 1px solid rgba(59, 130, 246, 0.3); max-width: 640px; margin-left: auto; margin-right: auto;">
              <strong class="text-primary" style="font-size: 1rem;">🚀 Tiến vào Tuần 03: File, Folder & Quản lý dữ liệu</strong>
              <p class="text-secondary mt-1" style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Buổi 05 (Thứ 3 tới): Em sẽ học cách tạo lập cây thư mục học tập cá nhân ngăn nắp, giải mã bí mật của các loại đuôi file (.docx, .png, .mp4, .pdf), đổi tên file chuẩn hóa và xóa tệp đúng cách!
              </p>
            </div>

            <div class="d-flex justify-center gap-3 mt-4">
              <a href="../index.html" class="btn btn--secondary">🏠 Về Cổng Khóa học</a>
              <a href="lesson.html?id=gd1-w03-l05" class="btn btn--primary">Sang Tuần 03: Buổi 05 (File & Folder) ➔</a>
            </div>
          </div>
        `
      }
    ]
  };

  // Đăng ký vào Global Lesson Registry
  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w02-l04'] = lessonData;

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('id') === 'gd1-w02-l04') {
    window.currentLessonData = lessonData;
  }
})();
