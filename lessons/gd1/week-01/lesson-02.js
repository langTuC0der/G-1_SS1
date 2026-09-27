/**
 * LESSON DATA — GĐ1 · Tuần 01 · Buổi 02
 * Chủ đề: Chuột & Thao tác cơ bản
 * Thiết kế chuẩn Slide Trình chiếu Giảng dạy 1:1 (Teacher-Led Slide Deck)
 */

(function () {
  'use strict';

  const lessonData = {
    id: 'gd1-w01-l02',
    stage: 'GĐ1',
    stageName: 'Nhập môn máy tính',
    week: 1,
    lesson: 2,
    duration: '90 phút',
    title: 'Chuột & Thao tác cơ bản',
    subtitle: 'Làm chủ click, double click, chuột phải, con lăn và kỹ thuật kéo thả (drag & drop)',
    totalXP: 100,

    cheatsheet: {
      vocabulary: [
        'Left Click',
        'Double Click',
        'Right Click',
        'Scroll Wheel',
        'Drag & Drop',
        'Context Menu',
        'Cursor',
        'Ergonomics'
      ],
      icons: [
        { symbol: '👆', name: 'Left Click', desc: 'Nhấp chuột trái: Chọn đối tượng, bấm nút' },
        { symbol: '⚡', name: 'Double Click', desc: 'Nháy đúp: Bấm 2 lần nhanh để mở tệp hoặc app' },
        { symbol: '📋', name: 'Right Click', desc: 'Chuột phải: Mở bảng chọn tùy chọn (Context Menu)' },
        { symbol: '📜', name: 'Scroll Wheel', desc: 'Con lăn: Cuộn xem trang web hoặc tài liệu dài' },
        { symbol: '🖐️', name: 'Drag & Drop', desc: 'Kéo và thả: Nhấn giữ chuột trái di chuyển đối tượng' }
      ],
      shortcuts: [
        { keys: ['Ctrl', 'Cuộn chuột'], desc: 'Phóng to (Zoom In) hoặc Thu nhỏ (Zoom Out) màn hình' },
        { keys: ['Ctrl', 'Chuột trái'], desc: 'Chọn nhiều tệp tin riêng lẻ không liền kề nhau' },
        { keys: ['Shift', 'Chuột trái'], desc: 'Chọn một danh sách dài liên tục từ tệp đầu đến cuối' },
        { keys: ['Chuột trái'], desc: 'Click nhẹ ra ngoài vùng trống để đóng menu chuột phải' }
      ],
      troubleshooting: 'Nếu lỡ bấm nhầm chuột phải hiện menu lạ: Em chỉ cần nhấp chuột trái 1 lần ra ngoài khoảng trống màn hình là menu tự biến mất ngay!'
    },

    sections: [
      /* ==========================================================================
         SLIDE 01 — MISSION START
         ========================================================================== */
      {
        id: 'slide-01',
        type: 'concept',
        icon: '🚀',
        eyebrow: 'SLIDE 01 · KHỞI ĐẦU BUỔI HỌC · NHẬP MÔN',
        title: 'Mission 02: Chinh phục Chú Chuột Máy Tính',
        badge: { text: 'Mục tiêu buổi học', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: Hình ảnh tư thế cầm chuột chuẩn -->
            <div class="d-flex flex-column gap-3 justify-between">
              <div class="edu-illustration-card" style="margin: 0;">
                <img src="../design-system/assets/illustrations/mouse_guide.jpg" alt="Tư thế cầm chuột chuẩn" class="rounded-img" style="max-height: 280px; object-fit: cover; width: 100%;">
                <p class="img-caption">📸 Tư thế cầm chuột chuẩn: Cổ tay thẳng, ngón trỏ đặt lên nút chuột trái, ngón giữa đặt lên nút chuột phải, lòng bàn tay ôm nhẹ thân chuột</p>
              </div>

              <blockquote style="border-left: 4px solid var(--color-primary); padding-left: 16px; margin: 0; font-size: 1.15rem; font-weight: 700; color: var(--color-primary); background: #eff6ff; padding: 12px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                “Chuột máy tính là chiếc cọ vẽ và vô lăng điều khiển giúp em biến mọi ý tưởng trên màn hình thành hiện thực!”
              </blockquote>
            </div>

            <!-- Cột phải: 4 Trọng tâm buổi học & Nút bắt đầu -->
            <div class="d-flex flex-column gap-3 justify-between">
              <div>
                <h4 style="font-size: 1.1rem; color: var(--text-primary); margin: 0 0 12px;">🎯 4 mục tiêu trọng tâm buổi học hôm nay:</h4>
                <div class="d-flex flex-column gap-2">
                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 1.6rem;">🐭</span>
                    <div>
                      <strong style="font-size: 0.98rem;">1. Cấu tạo & Tư thế cầm chuột chuẩn</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Cổ tay thẳng, thả lỏng ngón tay, bảo vệ khớp xương lâu dài.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 1.6rem;">⚡</span>
                    <div>
                      <strong style="font-size: 0.98rem;">2. 4 Kỹ năng thao tác chuột cốt lõi</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Nhấp đơn, nháy đúp mở app, chuột phải xem tùy chọn, con lăn cuộn trang.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 1.6rem;">🖐️</span>
                    <div>
                      <strong style="font-size: 0.98rem;">3. Kỹ thuật Kéo và Thả (Drag & Drop)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Di dời icon, dọn dẹp Desktop, nền tảng cho lập trình Scratch.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 1.6rem;">🏆</span>
                    <div>
                      <strong style="font-size: 0.98rem;">4. Phản xạ nhanh với Mini Game Chuột</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Rèn luyện độ chính xác, tốc độ bấm và hoàn thành Boss Challenge.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-between items-center p-3 rounded" style="background: var(--bg-page-secondary); border: 1px solid var(--border-soft);">
                <span>🎯 <strong>Mục tiêu:</strong> Làm chủ 5 kỹ năng chuột & Chinh phục Boss Game!</span>
                <button class="btn btn--primary" onclick="window.LearningEngine.nextSlide();">
                  🚀 Bắt đầu bài học ➔
                </button>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 02 — WARM-UP: ÔN TẬP BUỔI 01 & TRÒ CHUYỆN
         ========================================================================== */
      {
        id: 'slide-02',
        type: 'warmup',
        icon: '🤔',
        eyebrow: 'SLIDE 02 · KHỞI ĐỘNG · BẬT MÍ CÂU CHUYỆN',
        title: 'Ôn tập Buổi 01 & Phá băng cùng Chuột máy tính',
        badge: { text: '+10 XP Khởi động', type: 'warning' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: 4 câu hỏi ôn tập tương tác -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p class="mb-3" style="font-size: 1.05rem;">Em hãy nhấp chọn câu hỏi mà em tự tin trả lời đúng nhất từ Buổi 01 nhé:</p>
                <div class="choice-cards-container">
                  <div class="choice-cards-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                    <div class="choice-card" data-label="3 nút điều khiển cửa sổ" style="padding: 16px;">
                      <span style="font-size: 2rem;">🪟</span>
                      <strong>3 nút cửa sổ</strong>
                      <span class="text-secondary" style="font-size: 0.85rem;">Minimize, Maximize, Close</span>
                    </div>
                    <div class="choice-card" data-label="Desktop và Taskbar" style="padding: 16px;">
                      <span style="font-size: 2rem;">🖥️</span>
                      <strong>Desktop & Taskbar</strong>
                      <span class="text-secondary" style="font-size: 0.85rem;">Mặt bàn số & thanh tác vụ</span>
                    </div>
                    <div class="choice-card" data-label="4 bộ phận máy tính" style="padding: 16px;">
                      <span style="font-size: 2rem;">🧩</span>
                      <strong>4 bộ phận máy tính</strong>
                      <span class="text-secondary" style="font-size: 0.85rem;">Màn hình, Case, Phím, Chuột</span>
                    </div>
                    <div class="choice-card" data-label="Tắt máy an toàn (Shut down)" style="padding: 16px;">
                      <span style="font-size: 2rem;">⏻</span>
                      <strong>Tắt máy an toàn</strong>
                      <span class="text-secondary" style="font-size: 0.85rem;">Quy trình Shut down chuẩn</span>
                    </div>
                  </div>
                  <div class="choice-feedback mt-3 p-3 rounded" style="display: none; background: var(--color-success-light); color: #065f46; border: 1px solid rgba(16, 185, 129, 0.4); font-size: 0.95rem;"></div>
                </div>
              </div>

              <div class="p-3 rounded mt-3" style="background: var(--color-primary-light); border: 1px solid rgba(79, 70, 229, 0.2);">
                <span class="font-bold text-primary">💡 Gợi ý nhanh:</span>
                <span class="text-secondary" style="font-size: 0.9rem;">Ở Buổi 01 chúng mình đã biết chuột là thiết bị ĐẦU VÀO (Input Device). Hôm nay chúng mình sẽ biến chú chuột thành cánh tay nối dài điêu luyện!</span>
              </div>
            </div>

            <!-- Cột phải: Khám phá chú chuột của học sinh -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <div class="d-flex items-center gap-2 mb-3">
                  <span style="font-size: 1.6rem;">🗣️</span>
                  <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-primary);">Góc giao lưu: Chú chuột của em thế nào?</h4>
                </div>
                <div class="d-flex flex-column gap-3">
                  <div class="p-3 rounded" style="background: #f8fafc; border-left: 3px solid var(--color-primary);">
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">1. Em đang dùng chuột bằng tay phải hay tay trái?</strong>
                    <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">Đa số các bạn dùng tay phải, nhưng nếu thuận tay trái, máy tính hoàn toàn cho phép đổi vị trí nút chuột rất dễ dàng!</p>
                  </div>

                  <div class="p-3 rounded" style="background: #f8fafc; border-left: 3px solid var(--color-energy);">
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">2. Chuột của em là chuột có dây hay chuột không dây?</strong>
                    <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">Chuột không dây dùng pin và cắm đầu USB nhỏ xíu (hoặc Bluetooth), còn chuột có dây cắm trực tiếp vào máy tính.</p>
                  </div>

                  <div class="p-3 rounded" style="background: #f8fafc; border-left: 3px solid var(--color-success);">
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">3. Em có dùng tấm lót chuột (Mousepad) bên dưới không?</strong>
                    <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">Tấm lót chuột giúp mắt đọc quang học di chuyển mượt mà và không làm xước mặt bàn!</p>
                  </div>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                ⭐ <strong>Thử tài nhanh:</strong> Em hãy nâng nhẹ đáy chuột lên xem mắt đọc quang học đang phát tia sáng màu gì nhé!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 03 — CẤU TẠO CHUỘT MÁY TÍNH
         ========================================================================== */
      {
        id: 'slide-03',
        type: 'concept',
        icon: '🔍',
        eyebrow: 'SLIDE 03 · KHÁM PHÁ CẤU TẠO · VŨ KHÍ TÍ HON',
        title: 'Khám phá Cấu tạo Chuột Máy Tính: Vũ khí tí hon',
        badge: { text: 'Kiến thức phần cứng', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: 4 bộ phận chính của chuột -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p class="mb-3" style="font-size: 1.05rem;">Chuột máy tính hiện đại gồm <strong>4 bộ phận then chốt</strong> phối hợp nhịp nhàng:</p>
                <div class="mouse-anatomy-grid">
                  <div class="mouse-anatomy-card">
                    <div class="d-flex justify-between items-center">
                      <strong style="color: var(--color-primary); font-size: 1.05rem;">1. Nút chuột trái</strong>
                      <span class="badge badge--primary">Dùng 80%</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">Nằm bên trái, ngón trỏ điều khiển. Dùng để chọn tệp tin, bấm nút, mở ứng dụng và bôi đen văn bản.</p>
                  </div>

                  <div class="mouse-anatomy-card">
                    <div class="d-flex justify-between items-center">
                      <strong style="color: var(--color-purple); font-size: 1.05rem;">2. Nút chuột phải</strong>
                      <span class="badge badge--secondary">Menu</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">Nằm bên phải, ngón giữa điều khiển. Mở ra bảng chọn lệnh (Context Menu) với các chức năng mở rộng.</p>
                  </div>

                  <div class="mouse-anatomy-card">
                    <div class="d-flex justify-between items-center">
                      <strong style="color: var(--color-energy); font-size: 1.05rem;">3. Con lăn ở giữa</strong>
                      <span class="badge badge--energy">Scroll</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">Bánh xe cao su nhỏ ở giữa. Lăn lên / xuống để xem trang dài, và có thể bấm xuống như một nút thứ 3.</p>
                  </div>

                  <div class="mouse-anatomy-card">
                    <div class="d-flex justify-between items-center">
                      <strong style="color: var(--color-warning); font-size: 1.05rem;">4. Mắt đọc quang học</strong>
                      <span class="badge badge--warning">Cảm biến</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">Nằm ở mặt dưới chuột, phát tia sáng đỏ hoặc vô hình để chụp lại bề mặt bàn và tính toán chuyển động.</p>
                  </div>
                </div>
              </div>

              <!-- Lịch sử thú vị -->
              <div class="p-3 rounded mt-3 d-flex items-center gap-3" style="background: #fffbeb; border: 1.5px solid #fde68a;">
                <span style="font-size: 2.2rem;">🪵🐭</span>
                <div>
                  <strong style="color: #92400e; font-size: 0.95rem;">Em có biết?</strong>
                  <p style="color: #78350f; font-size: 0.88rem; margin: 2px 0 0;">Năm 1964, nhà khoa học <strong>Douglas Engelbart</strong> đã phát minh ra chú chuột máy tính đầu tiên trên thế giới làm bằng <strong>khối gỗ cứng</strong> và có 2 bánh xe kim loại bên dưới!</p>
                </div>
              </div>
            </div>

            <!-- Cột phải: Mô hình chuột 3D trực quan -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center">
              <div>
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">Mô hình Chuột Tương Tác</h4>
                <p class="text-secondary" style="font-size: 0.9rem; margin-bottom: 16px;">Em hãy thử click vào các nút trên chú chuột ảo dưới đây:</p>

                <div class="mouse-visualizer-container" style="box-shadow: none; border: none; padding: 0;">
                  <div class="mouse-device">
                    <div class="mouse-buttons-row">
                      <button class="mouse-zone" data-mouse="left" title="Chuột trái">TRÁI</button>
                      <button class="mouse-zone" data-mouse="scroll" title="Con lăn cuộn"></button>
                      <button class="mouse-zone" data-mouse="right" title="Chuột phải">PHẢI</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded mt-3 text-left" style="background: var(--bg-page-secondary); font-size: 0.85rem; line-height: 1.6;">
                <div>🔘 <strong>Chuột trái:</strong> Ngón trỏ phụ trách chính</div>
                <div>🔘 <strong>Con lăn:</strong> Ngón trỏ vươn nhẹ sang để cuộn</div>
                <div>🔘 <strong>Chuột phải:</strong> Ngón giữa phụ trách riêng</div>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 04 — TƯ THẾ CẦM CHUỘT CHUẨN & ERGONOMICS
         ========================================================================== */
      {
        id: 'slide-04',
        type: 'concept',
        icon: '🪑',
        eyebrow: 'SLIDE 04 · TƯ THẾ CHUẨN · BẢO VỆ CỔ TAY',
        title: 'Tư thế Cầm Chuột Chuẩn & Giữ gìn Cổ tay',
        badge: { text: 'Bảo vệ sức khỏe', type: 'success' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: So sánh Tư thế Đúng vs Tư thế Sai -->
            <div class="d-flex flex-column justify-between">
              <div class="mouse-grip-grid">
                <div class="grip-card grip-card--correct">
                  <div class="d-flex items-center gap-2">
                    <span style="font-size: 1.5rem;">✅</span>
                    <strong style="color: #065f46; font-size: 1.05rem;">TƯ THẾ ĐÚNG</strong>
                  </div>
                  <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #065f46; line-height: 1.6;">
                    <li><strong>Cổ tay thẳng hàng</strong> với cẳng tay, không bẻ gập.</li>
                    <li><strong>Lòng bàn tay ôm nhẹ</strong> lưng chuột, không gồng cứng.</li>
                    <li><strong>Ngón trỏ đặt nút trái</strong>, ngón giữa đặt nút phải.</li>
                    <li>Ngón cái và ngón áp út giữ nhẹ 2 bên hông chuột.</li>
                    <li>Di chuyển chuột bằng cả cẳng tay nhẹ nhàng.</li>
                  </ul>
                </div>

                <div class="grip-card grip-card--wrong">
                  <div class="d-flex items-center gap-2">
                    <span style="font-size: 1.5rem;">❌</span>
                    <strong style="color: #991b1b; font-size: 1.05rem;">TƯ THẾ SAI NÊN TRÁNH</strong>
                  </div>
                  <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #991b1b; line-height: 1.6;">
                    <li><strong>Bẻ gập cổ tay</strong> sang trái hoặc sang phải quá nhiều.</li>
                    <li><strong>Gồng cứng các ngón tay</strong>, bóp mạnh thân chuột.</li>
                    <li>Dùng ngón giữa bấm chuột trái (bị chéo ngón).</li>
                    <li>Tỳ mạnh cổ tay xuống mép bàn sắc cạnh.</li>
                    <li>Ngồi quá xa khiến cánh tay phải với với mệt mỏi.</li>
                  </ul>
                </div>
              </div>

              <div class="p-3 rounded mt-3 d-flex items-center gap-3" style="background: #ecfdf5; border: 1.5px solid #a7f3d0;">
                <span style="font-size: 2rem;">🌿</span>
                <div>
                  <strong style="color: #065f46; font-size: 0.95rem;">Lời khuyên Công thái học (Ergonomics):</strong>
                  <p style="color: #047857; font-size: 0.88rem; margin: 2px 0 0;">Cứ sau mỗi 30–45 phút học tập, em hãy buông chuột, xoay nhẹ cổ tay theo vòng tròn và nắm mở các ngón tay 10 lần để thư giãn gân cốt nhé!</p>
                </div>
              </div>
            </div>

            <!-- Cột phải: Hình ảnh minh họa & Check tư thế trực tiếp -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <div class="edu-illustration-card" style="margin: 0 0 16px;">
                  <img src="../design-system/assets/illustrations/mouse_guide.jpg" alt="Minh họa cầm chuột" class="rounded-img" style="max-height: 230px; object-fit: cover; width: 100%;">
                </div>
                <h4 style="color: var(--color-primary); margin: 0 0 8px;">Thực hành kiểm tra tư thế ngay tại bàn học:</h4>
                <div class="d-flex flex-column gap-2" style="font-size: 0.92rem;">
                  <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
                    <span>1️⃣</span> <span>Đặt chuột thẳng ngay trước vai phải (khoảng cách vừa tầm với).</span>
                  </div>
                  <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
                    <span>2️⃣</span> <span>Thả lỏng vai, đặt lòng bàn tay bao bọc nhẹ nhàng lên lưng chuột.</span>
                  </div>
                  <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
                    <span>3️⃣</span> <span>Thử nhấp nhẹ ngón trỏ xem có nghe tiếng "tách" giòn tan không!</span>
                  </div>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                ✨ <strong>Bí kíp công thái học:</strong> Thả lỏng vai, cổ tay thẳng tắp để lướt chuột êm ái suốt buổi học!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 05 — KỸ NĂNG 1: NHẤP CHUỘT TRÁI (SINGLE CLICK)
         ========================================================================== */
      {
        id: 'slide-05',
        type: 'concept',
        icon: '👆',
        eyebrow: 'SLIDE 05 · KỸ NĂNG 1 · NHẤP CHUỘT TRÁI (SINGLE CLICK)',
        title: 'Kỹ năng 1: Nhấp chuột trái (Single Click) — Lệnh chọn quyền lực',
        badge: { text: 'Kỹ năng nền tảng', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: Định nghĩa & Ứng dụng -->
            <div class="d-flex flex-column justify-between">
              <div>
                <div class="p-3 rounded mb-3" style="background: var(--color-primary-light); border-left: 4px solid var(--color-primary);">
                  <strong style="color: var(--color-primary); font-size: 1.05rem;">Bản chất thao tác:</strong>
                  <p style="margin: 4px 0 0; color: var(--text-primary); font-size: 0.95rem;">Dùng <strong>ngón trỏ</strong> nhấn dứt khoát nút chuột trái <strong>1 lần duy nhất</strong> rồi nhấc ngón tay lên ngay. Âm thanh phát ra một tiếng <em>"tách"</em> dứt khoát.</p>
                </div>

                <h4 style="margin: 16px 0 10px;">Khi nào chúng ta dùng Nhấp chuột trái?</h4>
                <div class="d-flex flex-column gap-2">
                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                    <span style="font-size: 1.5rem;">🎯</span>
                    <div>
                      <strong>1. Chọn đối tượng (Select):</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Click vào 1 icon trên Desktop để đánh dấu chọn (icon sẽ đổi sang màu xanh sáng).</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                    <span style="font-size: 1.5rem;">🔘</span>
                    <div>
                      <strong>2. Bấm các nút lệnh (Buttons):</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Bấm nút "Bắt đầu", "Lưu bài", "Gửi tin nhắn", hoặc 3 nút điều khiển cửa sổ — □ ✕.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                    <span style="font-size: 1.5rem;">🔗</span>
                    <div>
                      <strong>3. Bấm vào đường link trang web:</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Khi con trỏ biến thành hình Bàn tay 👆, click 1 lần để chuyển sang trang web mới.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #f8fafc; font-size: 0.9rem; color: var(--text-secondary);">
                ⚠️ <strong>Lưu ý:</strong> Khi nhấp chuột, giữ cổ tay yên tĩnh, tránh để thân chuột bị xê dịch trượt khỏi mục tiêu!
              </div>
            </div>

            <!-- Cột phải: Khu vực thử nghiệm Click trực tiếp -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center">
              <div>
                <h4 style="color: var(--color-primary); margin-bottom: 6px;">Khu thử nghiệm Single Click</h4>
                <p class="text-secondary" style="font-size: 0.88rem; margin-bottom: 16px;">Em hãy nhấp chuột trái vào ô bên dưới ít nhất 5 lần:</p>

                <div class="click-tester-box">
                  <div style="font-size: 3rem; margin-bottom: 8px;">👆</div>
                  <strong style="font-size: 1.15rem; color: var(--color-primary);">NHẤP VÀO ĐÂY!</strong>
                  <div class="text-secondary mt-1" style="font-size: 0.9rem;">Số lần nhấp: <span class="click-tester-counter font-bold" style="font-size: 1.3rem; color: var(--color-primary);">0</span></div>
                  <div class="click-tester-feedback mt-2" style="font-size: 0.88rem; min-height: 24px; color: var(--color-success); font-weight: 600;"></div>
                </div>
              </div>

              <div class="p-3 rounded mt-3 text-left" style="background: var(--bg-page-secondary); font-size: 0.85rem;">
                <strong>💡 Thử thách nhỏ:</strong> Bấm 5 lần nhấp chuột thật dứt khoát để nhận ngay +5 XP rèn luyện ngón tay!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 06 — KỸ NĂNG 2: NHÁY ĐÚP CHUỘT (DOUBLE CLICK)
         ========================================================================== */
      {
        id: 'slide-06',
        type: 'concept',
        icon: '⚡',
        eyebrow: 'SLIDE 06 · KỸ NĂNG 2 · NHÁY ĐÚP CHUỘT (DOUBLE CLICK)',
        title: 'Kỹ năng 2: Nháy đúp chuột (Double Click) — Nhịp điệu “Cạch - Cạch”',
        badge: { text: 'Mở ứng dụng & tệp', type: 'energy' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: Phân biệt Nhấp 1 lần vs Nháy đúp -->
            <div class="d-flex flex-column justify-between">
              <div>
                <div class="p-3 rounded mb-3" style="background: #eff6ff; border-left: 4px solid var(--color-energy);">
                  <strong style="color: var(--color-energy); font-size: 1.05rem;">Bản chất Double Click:</strong>
                  <p style="margin: 4px 0 0; color: var(--text-primary); font-size: 0.95rem;">Bấm nút chuột trái <strong>2 lần liên tiếp thật nhanh</strong> tại cùng một vị trí. Nhịp điệu chuẩn như tiếng gõ cửa: <em>"Cạch - cạch!"</em> (khoảng cách giữa 2 lần bấm dưới 0.5 giây).</p>
                </div>

                <h4 style="margin: 16px 0 10px;">Bảng so sánh sống còn: Chọn hay Mở?</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <div class="p-3 rounded" style="background: #ffffff; border: 2px solid var(--border-soft);">
                    <div class="d-flex items-center gap-2 mb-1">
                      <span style="font-size: 1.4rem;">👆</span>
                      <strong style="color: var(--color-primary);">NHẤP 1 LẦN (Single)</strong>
                    </div>
                    <div class="badge badge--primary mb-2">CHỈ CHỌN</div>
                    <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Icon sáng đèn viền xanh. Ứng dụng vẫn <strong>CHƯA MỞ</strong>.</p>
                  </div>

                  <div class="p-3 rounded" style="background: #f0fdf4; border: 2px solid var(--color-success);">
                    <div class="d-flex items-center gap-2 mb-1">
                      <span style="font-size: 1.4rem;">⚡⚡</span>
                      <strong style="color: #065f46;">NHÁY ĐÚP 2 LẦN (Double)</strong>
                    </div>
                    <div class="badge badge--success mb-2">MỞ HẲN RA</div>
                    <p style="font-size: 0.85rem; margin: 0; color: #047857;">Mở ngay cửa sổ ứng dụng, mở thư mục, mở video hoặc bài hát!</p>
                  </div>
                </div>

                <div class="mt-3 p-3 rounded bg-page-secondary">
                  <strong>💡 Mẹo nháy đúp thành công 100%:</strong>
                  <p class="text-secondary mt-1" style="font-size: 0.88rem; margin: 0;">Cổ tay và thân chuột phải <strong>đứng yên</strong>! Nếu ngón tay vừa bấm vừa làm chuột trượt đi, máy tính sẽ tưởng em đang kéo rê icon thay vì nháy đúp.</p>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #fffbeb; font-size: 0.88rem; color: #92400e;">
                🎯 <em>Ứng dụng nâng cao: Nháy đúp vào một từ văn bản sẽ bôi đen ngay từ đó!</em>
              </div>
            </div>

            <!-- Cột phải: Hộp quà bí mật Double Click -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center">
              <div>
                <h4 style="color: var(--color-energy); margin-bottom: 6px;">Thử thách Hộp Quà Bí Mật</h4>
                <p class="text-secondary" style="font-size: 0.88rem; margin-bottom: 20px;">Hộp quà được khóa chặt. Em hãy <strong>nháy đúp chuột thật nhanh</strong> vào chiếc hộp để mở quà:</p>

                <div class="double-click-gift" title="Nháy đúp 2 lần để mở">
                  <div class="gift-emoji" style="font-size: 3.5rem;">🎁</div>
                  <div class="gift-status-text font-bold mt-1" style="font-size: 0.85rem; letter-spacing: 0.02em;">Nháy đúp 2 lần để mở!</div>
                </div>
              </div>

              <div class="p-3 rounded mt-3 text-left" style="background: var(--bg-page-secondary); font-size: 0.85rem;">
                <strong>🎮 Luyện nhịp điệu:</strong> Nhấn ngón trỏ 2 lần thật nhanh "Tách - Tách"! Khi hộp quà mở thành công, em sẽ nhận ngay +10 XP mở khóa!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 07 — KỸ NĂNG 3: BẤM CHUỘT PHẢI (RIGHT CLICK)
         ========================================================================== */
      {
        id: 'slide-07',
        type: 'concept',
        icon: '📋',
        eyebrow: 'SLIDE 07 · KỸ NĂNG 3 · BẤM CHUỘT PHẢI (RIGHT CLICK)',
        title: 'Kỹ năng 3: Bấm chuột phải (Right Click) — Chiếc hộp thần kỳ',
        badge: { text: 'Menu ngữ cảnh', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: Ý nghĩa và các lệnh thường dùng -->
            <div class="d-flex flex-column justify-between">
              <div>
                <div class="p-3 rounded mb-3" style="background: #f5f3ff; border-left: 4px solid var(--color-purple);">
                  <strong style="color: var(--color-purple); font-size: 1.05rem;">Chuột phải dùng để làm gì?</strong>
                  <p style="margin: 4px 0 0; color: var(--text-primary); font-size: 0.95rem;">Khi bấm <strong>ngón giữa vào nút chuột phải</strong>, máy tính sẽ hiện ra một bảng chọn lệnh gọi là <strong>Menu ngữ cảnh (Context Menu)</strong>. Bấm vào vị trí nào, máy tính sẽ gợi ý các lệnh phù hợp nhất cho vị trí đó!</p>
                </div>

                <h4 style="margin: 16px 0 10px;">Các lệnh quen thuộc trong Menu chuột phải:</h4>
                <div class="d-flex flex-column gap-2">
                  <div class="p-2 rounded d-flex items-center gap-3 bg-page-secondary">
                    <span style="font-size: 1.3rem;">👁️</span>
                    <div><strong>View (Hiển thị):</strong> Đổi icon Desktop to, vừa hay nhỏ</div>
                  </div>
                  <div class="p-2 rounded d-flex items-center gap-3 bg-page-secondary">
                    <span style="font-size: 1.3rem;">🔄</span>
                    <div><strong>Refresh (Làm mới):</strong> Làm tươi lại màn hình máy tính</div>
                  </div>
                  <div class="p-2 rounded d-flex items-center gap-3 bg-page-secondary">
                    <span style="font-size: 1.3rem;">📋</span>
                    <div><strong>Copy / Paste:</strong> Sao chép và dán đối tượng</div>
                  </div>
                  <div class="p-2 rounded d-flex items-center gap-3 bg-page-secondary">
                    <span style="font-size: 1.3rem;">🗑️</span>
                    <div><strong>Delete / Rename:</strong> Xóa file hoặc đổi tên file mới</div>
                  </div>
                </div>

                <!-- Phao cứu sinh bấm nhầm -->
                <div class="mt-3 p-3 rounded" style="background: var(--color-warning-light); border: 1.5px solid rgba(245, 158, 11, 0.4);">
                  <strong style="color: #92400e;">🛟 QUY TẮC CỨU CÁNH: Lỡ bấm nhầm chuột phải thì sao?</strong>
                  <p style="color: #78350f; font-size: 0.9rem; margin: 4px 0 0;">Đừng hoảng sợ! Em chỉ cần <strong>nhấp chuột trái 1 lần ra khoảng trống màn hình</strong> là menu tự động biến mất ngay tức khắc!</p>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                🎯 <strong>Bí quyết ngón tay:</strong> Giữ ngón trỏ thả lỏng, chỉ dùng riêng ngón giữa nhấn một tiếng "tách" giòn tan!
              </div>
            </div>

            <!-- Cột phải: Khu vực thử nghiệm chuột phải trực tiếp -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center">
              <div>
                <h4 style="color: var(--color-purple); margin-bottom: 6px;">Thử nghiệm Chuột Phải Trực Tiếp</h4>
                <p class="text-secondary" style="font-size: 0.88rem; margin-bottom: 12px;">Em hãy <strong>nhấp chuột phải</strong> vào vùng kẻ sọc dưới đây:</p>

                <div class="mock-context-zone">
                  <div style="font-size: 2.8rem; margin-bottom: 6px;">🖱️</div>
                  <strong style="color: var(--color-purple); font-size: 1.05rem;">BẤM CHUỘT PHẢI VÀO ĐÂY</strong>
                  <span class="text-secondary" style="font-size: 0.82rem; margin-top: 4px;">(Menu ảo sẽ xuất hiện ngay tại vị trí con trỏ)</span>

                  <!-- Virtual Context Menu -->
                  <div class="mock-context-menu">
                    <div class="mock-menu-item" data-action="view">👁️ View (Xem cỡ icon)</div>
                    <div class="mock-menu-item" data-action="sort">🗂️ Sort by (Sắp xếp)</div>
                    <div class="mock-menu-item" data-action="refresh">🔄 Refresh (Làm mới)</div>
                    <div class="mock-menu-divider"></div>
                    <div class="mock-menu-item" data-action="new">📁 New Folder (Tạo thư mục)</div>
                    <div class="mock-menu-item" data-action="gift">🎁 Mở hộp quà bí mật</div>
                  </div>

                  <div class="context-feedback mt-3 font-semibold text-primary" style="font-size: 0.88rem; min-height: 20px;"></div>
                </div>
              </div>

              <div class="p-3 rounded mt-3 text-left" style="background: var(--bg-page-secondary); font-size: 0.85rem;">
                <strong>Thử nghiệm quy tắc cứu cánh:</strong> Sau khi menu hiện lên, thử click chuột trái ra ngoài để xem nó tự đóng lại nhé!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 08 — KỸ NĂNG 4: CON LĂN CUỘN TRANG (SCROLL WHEEL)
         ========================================================================== */
      {
        id: 'slide-08',
        type: 'concept',
        icon: '📜',
        eyebrow: 'SLIDE 08 · KỸ NĂNG 4 · CON LĂN CUỘN TRANG (SCROLL WHEEL)',
        title: 'Kỹ năng 4: Con lăn cuộn trang (Scroll Wheel) & Phím tắt Siêu cấp',
        badge: { text: 'Duyệt tài liệu & Zoom', type: 'energy' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: 2 Chức năng chính của con lăn -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p class="mb-3" style="font-size: 1.05rem;">Bánh xe nhỏ nằm giữa 2 nút chuột sở hữu <strong>2 siêu năng lực</strong> cực kỳ hữu ích:</p>
                <div class="d-flex flex-column gap-3">
                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 2rem;">📜</span>
                    <div>
                      <strong style="color: var(--color-energy); font-size: 1rem;">1. Cuộn trang lên & xuống (Scroll Up / Down):</strong>
                      <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;">Khi đọc truyện tranh, xem báo hoặc lướt web dài, chỉ cần lăn con lăn về phía sau để trượt xuống, và lăn về phía trước để trượt lên trên mà không cần kéo thanh cuộn bên mép màn hình.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 2rem;">🔍</span>
                    <div>
                      <strong style="color: var(--color-primary); font-size: 1rem;">2. Siêu phím tắt Zoom In / Zoom Out:</strong>
                      <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;">Giữ phím <kbd class="keycap" style="padding: 2px 8px; font-size: 0.8rem;">Ctrl</kbd> trên bàn phím + <strong>Lăn chuột</strong> = Phóng to chữ nếu bị nhỏ, hoặc Thu nhỏ màn hình để nhìn bao quát toàn bộ trang!</p>
                    </div>
                  </div>
                </div>

                <div class="p-3 rounded mt-3 bg-page-secondary d-flex items-center gap-3">
                  <span style="font-size: 1.8rem;">💡</span>
                  <div>
                    <strong>Bí mật con lăn: Nó cũng là 1 chiếc nút bấm!</strong>
                    <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Khi lướt web trên Chrome, bấm thẳng con lăn vào một link sẽ mở link đó trong một <strong>Tab mới riêng biệt</strong> mà không làm mất trang hiện tại!</p>
                  </div>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                🎯 <strong>Cảm giác ngón tay:</strong> Dùng đầu ngón trỏ miết nhẹ bánh xe cao su để lướt trang siêu mượt mà!
              </div>
            </div>

            <!-- Cột phải: Khu vực thử nghiệm Cuộn & Zoom tương tác -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center">
              <div>
                <h4 style="color: var(--color-energy); margin-bottom: 6px;">Thử nghiệm Cuộn & Phóng to (Zoom)</h4>
                <p class="text-secondary" style="font-size: 0.88rem; margin-bottom: 12px;">Đặt con trỏ vào ô bên dưới và thử <strong>lăn con lăn chuột</strong>:</p>

                <div class="scroll-zoom-box p-4 rounded text-center" data-scale="1" style="background: #f8fafc; border: 2px dashed #cbd5e1; min-height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden;">
                  <div class="scroll-zoom-target" style="transition: transform 0.15s ease-out; font-size: 3.5rem;">
                    🚀
                  </div>
                  <div class="mt-2 font-bold text-primary">Tỉ lệ Zoom: <span class="scroll-zoom-label">100%</span></div>
                  <span class="text-secondary" style="font-size: 0.8rem;">(Lăn chuột lên để phóng to, lăn xuống để thu nhỏ)</span>
                </div>
              </div>

              <div class="p-3 rounded mt-3 text-left" style="background: var(--bg-page-secondary); font-size: 0.85rem;">
                <strong>Mẹo thực tế:</strong> Khi học online gặp tài liệu chữ nhỏ, hãy nhấn giữ Ctrl và lăn chuột lên để đọc rõ ràng nhé!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 09 — KỸ NĂNG 5: KÉO VÀ THẢ (DRAG & DROP)
         ========================================================================== */
      {
        id: 'slide-09',
        type: 'concept',
        icon: '🖐️',
        eyebrow: 'SLIDE 09 · KỸ NĂNG 5 · KÉO VÀ THẢ (DRAG & DROP)',
        title: 'Kỹ năng 5: Kéo và Thả (Drag & Drop) — Di dời vạn vật',
        badge: { text: 'Kỹ năng cao cấp', type: 'warning' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: 3 bước vàng của Drag & Drop -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p class="mb-3" style="font-size: 1.05rem;">Kéo và Thả là kỹ năng phối hợp khéo léo nhất của chuột theo <strong>quy trình 3 bước vàng</strong>:</p>
                <div class="d-flex flex-column gap-2">
                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                    <div class="step-number-circle">1</div>
                    <div>
                      <strong style="color: var(--color-primary); font-size: 0.98rem;">BƯỚC 1: ĐẶT & NHẤN GIỮ (Press & Hold)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Di chuyển con trỏ chuột trúng đối tượng cần chuyển, nhấn ngón trỏ xuống và <strong>KHÔNG ĐƯỢC THẢ TAY RA</strong>.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                    <div class="step-number-circle" style="background: #e0f2fe; color: #0284c7;">2</div>
                    <div>
                      <strong style="color: var(--color-energy); font-size: 0.98rem;">BƯỚC 2: RÊ CHUỘT (Drag)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Vẫn giữ chặt ngón trỏ, nhẹ nhàng di chuyển chuột sang vị trí mới. Đối tượng sẽ bay theo con trỏ chuột.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                    <div class="step-number-circle" style="background: #ecfdf5; color: #059669;">3</div>
                    <div>
                      <strong style="color: var(--color-success); font-size: 0.98rem;">BƯỚC 3: THẢ TAY (Drop)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Khi con trỏ đã đến đúng nơi mong muốn, buông ngón trỏ ra. Đối tượng sẽ đáp xuống vị trí mới an toàn!</p>
                    </div>
                  </div>
                </div>

                <div class="mt-3 p-3 rounded" style="background: #fdf2f8; border-left: 3px solid #db2777;">
                  <strong style="color: #be185d;">🎮 Tại sao kỹ năng này siêu quan trọng?</strong>
                  <p style="color: #9d174d; font-size: 0.88rem; margin: 2px 0 0;">Đến Giai đoạn 3 (Scratch), toàn bộ các khối lệnh lập trình (Code Blocks) đều được xây dựng bằng thao tác Kéo & Thả này!</p>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                ✨ <em>Mẹo: Đừng ấn quá mạnh làm lún phím chuột, chỉ cần nhấn giữ vừa đủ lực là được!</em>
              </div>
            </div>

            <!-- Cột phải: Khu thử nghiệm Kéo Thả trực tiếp -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <h4 style="color: var(--color-primary); margin: 0 0 6px;">Khu thử nghiệm Kéo & Thả (Drag & Drop)</h4>
                <p class="text-secondary" style="font-size: 0.88rem; margin-bottom: 12px;">Em hãy kéo các tệp từ khung trái thả vào <strong>"Thư mục Học tập"</strong> bên phải:</p>

                <div class="drag-drop-arena">
                  <!-- Source Zone -->
                  <div class="drag-source-zone">
                    <span class="text-secondary font-bold" style="font-size: 0.8rem; text-transform: uppercase;">📂 Tệp tin chờ xếp:</span>
                    <div class="draggable-chip" draggable="true" id="file_1">📄 Bai_Tap_Toan.docx</div>
                    <div class="draggable-chip" draggable="true" id="file_2">🎨 Tranh_Ve_Lop7.png</div>
                    <div class="draggable-chip" draggable="true" id="file_3">🎵 Nhac_Tieng_Anh.mp3</div>
                  </div>

                  <!-- Target Zone -->
                  <div class="drag-target-zone">
                    <span class="text-primary font-bold" style="font-size: 0.8rem; text-transform: uppercase;">📁 Thư mục Học tập:</span>
                    <div class="drag-drop-placeholder text-muted" style="font-size: 0.85rem; margin-top: auto; margin-bottom: auto; text-align: center;">
                      Thả tệp vào đây ⬇️
                    </div>
                  </div>
                </div>

                <div class="drag-drop-feedback mt-2 font-bold text-success" style="font-size: 0.88rem; min-height: 20px; text-align: center;"></div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: var(--bg-page-secondary); font-size: 0.85rem;">
                👍 Thử chuyển hết cả 3 tệp tin sang thư mục để hoàn thành nhiệm vụ nhé!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 10 — ĐẤU TRƯỜNG CHUỘT TRỰC QUAN (INTERACTIVE SANDBOX)
         ========================================================================== */
      {
        id: 'slide-10',
        type: 'concept',
        icon: '🎛️',
        eyebrow: 'SLIDE 10 · ĐẤU TRƯỜNG TƯƠNG TÁC · TEST PHÍM CHUỘT',
        title: 'Đấu trường Chuột Trực quan: Thử nghiệm toàn diện',
        badge: { text: 'Interactive Sandbox', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: Bảng tổng kết 5 thao tác chuột -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p class="mb-3" style="font-size: 1.05rem;">Trước khi bước sang thực chiến trên máy tính thật, cùng ôn lại <strong>5 vũ khí chuột</strong>:</p>
                <div class="d-flex flex-column gap-2">
                  <div class="p-3 rounded d-flex justify-between items-center bg-page-secondary">
                    <div>
                      <strong>1. Single Click (Nhấp đơn chuột trái)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Chọn mục, bấm nút lệnh, chọn ô checkbox.</p>
                    </div>
                    <span class="badge badge--primary">Chọn</span>
                  </div>

                  <div class="p-3 rounded d-flex justify-between items-center bg-page-secondary">
                    <div>
                      <strong>2. Double Click (Nháy đúp 2 lần)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Mở ứng dụng, mở thư mục, mở file văn bản.</p>
                    </div>
                    <span class="badge badge--energy">Mở</span>
                  </div>

                  <div class="p-3 rounded d-flex justify-between items-center bg-page-secondary">
                    <div>
                      <strong>3. Right Click (Chuột phải)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Mở Context Menu với các lệnh bổ sung đặc biệt.</p>
                    </div>
                    <span class="badge badge--secondary">Menu</span>
                  </div>

                  <div class="p-3 rounded d-flex justify-between items-center bg-page-secondary">
                    <div>
                      <strong>4. Scroll Wheel (Con lăn cuộn trang)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Lướt trang dài, zoom in/out khi giữ Ctrl.</p>
                    </div>
                    <span class="badge badge--warning">Cuộn</span>
                  </div>

                  <div class="p-3 rounded d-flex justify-between items-center bg-page-secondary">
                    <div>
                      <strong>5. Drag & Drop (Kéo và thả)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 0;">Nhấn giữ, di chuyển và thả vào vị trí mới.</p>
                    </div>
                    <span class="badge badge--success">Di dời</span>
                  </div>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                🎮 <strong>Thử tài phản xạ:</strong> Bấm thử từng phím chuột thật trên bàn để chiêm ngưỡng mô hình 3D sáng đèn tức thì!
              </div>
            </div>

            <!-- Cột phải: Mô hình chuột 3D Sandbox -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center">
              <div>
                <h4 style="color: var(--color-primary); margin-bottom: 4px;">Mô hình Chuột 3D Phản hồi Tức thì</h4>
                <p class="text-secondary" style="font-size: 0.85rem; margin-bottom: 16px;">Bấm chuột trái, chuột phải hoặc cuộn con lăn để kiểm tra:</p>

                <div class="mouse-visualizer-container" style="border: 2px solid var(--border-soft);">
                  <div class="mouse-device">
                    <div class="mouse-buttons-row">
                      <button class="mouse-zone" data-mouse="left">TRÁI</button>
                      <button class="mouse-zone" data-mouse="scroll"></button>
                      <button class="mouse-zone" data-mouse="right">PHẢI</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded mt-3 text-left" style="background: var(--bg-page-secondary); font-size: 0.85rem; line-height: 1.6;">
                <div>⚡ <strong>Kiểm tra độ nảy:</strong> Khi bấm, nút ảo sẽ sáng đèn và phát âm thanh phản hồi.</div>
                <div>🛡️ <strong>Chuột phải:</strong> Click chuột phải lên vùng PHẢI không bị chặn menu trình duyệt!</div>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 11 — HANDS-ON LAB 01: THỰC HÀNH MÁY THẬT
         ========================================================================== */
      {
        id: 'slide-11',
        type: 'lab',
        icon: '💻',
        eyebrow: 'SLIDE 11 · THỰC CHIẾN TẠI LỚP · BẬT MÀN HÌNH DESKTOP',
        title: 'Hands-on Lab 01: Làm chủ Desktop trên máy tính thật',
        badge: { text: 'Hands-on Lab', type: 'energy' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: 4 nhiệm vụ thực hành -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p class="mb-3" style="font-size: 1.05rem;">Em hãy chia sẻ màn hình và hoàn thành lần lượt <strong>4 thử thách thực chiến</strong> trên Desktop thật:</p>
                <div class="lab-steps">
                  <div class="lab-step" data-state="pending">
                    <div class="lab-step__number">1</div>
                    <div class="lab-step__content">
                      <h4 style="margin: 0 0 4px;">Double Click mở 1 ứng dụng bất kỳ</h4>
                      <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">Tìm icon ứng dụng Calculator (Máy tính) hoặc Paint trên Desktop, nháy đúp thật nhanh để mở cửa sổ ➔ Sau đó bấm dấu ✕ để đóng lại.</p>
                    </div>
                  </div>

                  <div class="lab-step" data-state="pending">
                    <div class="lab-step__number">2</div>
                    <div class="lab-step__content">
                      <h4 style="margin: 0 0 4px;">Khám phá Menu Chuột Phải Desktop</h4>
                      <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">Bấm chuột phải vào khoảng trống Desktop ➔ Rê chuột vào mục <strong>View</strong> ➔ Thử chọn <strong>Large icons</strong> (Icon to) rồi đổi lại <strong>Medium icons</strong>.</p>
                    </div>
                  </div>

                  <div class="lab-step" data-state="pending">
                    <div class="lab-step__number">3</div>
                    <div class="lab-step__content">
                      <h4 style="margin: 0 0 4px;">Kéo & Thả (Drag & Drop) dọn dẹp Desktop</h4>
                      <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">Chọn 2–3 icon trên màn hình, dùng kỹ thuật kéo thả đưa chúng sang góc bên phải màn hình rồi xếp lại ngay ngắn.</p>
                    </div>
                  </div>

                  <div class="lab-step" data-state="pending">
                    <div class="lab-step__number">4</div>
                    <div class="lab-step__content">
                      <h4 style="margin: 0 0 4px;">Làm mới màn hình bằng lệnh Refresh</h4>
                      <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">Click chuột phải vào khoảng trống Desktop ➔ Bấm chọn dòng <strong>Refresh</strong> để làm tươi lại màn hình máy tính.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                ✨ <strong>Mục tiêu thử thách:</strong> Thao tác dứt khoát, giữ chuột êm tay và tích trọn vẹn <strong>+40 XP</strong>!
              </div>
            </div>

            <!-- Cột phải: Checklist tích điểm hoàn thành -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <div class="d-flex justify-between items-center mb-3">
                  <h4 style="margin: 0; color: var(--color-primary);">Tiến độ Hands-on Lab 01:</h4>
                  <span class="progress-text font-bold text-primary">0/4 (0%)</span>
                </div>

                <div class="progress-bar mb-4">
                  <div class="progress-fill" style="width: 0%;"></div>
                </div>

                <div class="checklist-group">
                  <div class="checklist-item" data-id="l02_lab1_1" data-xp="10">
                    <div class="checklist-box"></div>
                    <span class="checklist-label">Mở thành công ứng dụng bằng Double Click</span>
                    <span class="checklist-reward">+10 XP</span>
                  </div>

                  <div class="checklist-item" data-id="l02_lab1_2" data-xp="10">
                    <div class="checklist-box"></div>
                    <span class="checklist-label">Bấm chuột phải đổi cỡ icon Desktop sang Large/Medium</span>
                    <span class="checklist-reward">+10 XP</span>
                  </div>

                  <div class="checklist-item" data-id="l02_lab1_3" data-xp="10">
                    <div class="checklist-box"></div>
                    <span class="checklist-label">Kéo thả icon Desktop sang vị trí mới mượt mà</span>
                    <span class="checklist-reward">+10 XP</span>
                  </div>

                  <div class="checklist-item" data-id="l02_lab1_4" data-xp="10">
                    <div class="checklist-box"></div>
                    <span class="checklist-label">Thực hiện lệnh Refresh làm mới màn hình chuẩn xác</span>
                    <span class="checklist-reward">+10 XP</span>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded mt-3 text-center" style="background: #f0fdf4; border: 1px solid #bbf7d0;">
                <span class="font-bold text-success">🏆 Hoàn thành cả 4 nhiệm vụ nhận ngay +40 XP Lab!</span>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 12 — KỸ NĂNG NÂNG CAO: CHỌN NHIỀU ĐỐI TƯỢNG (MARQUEE SELECTION)
         ========================================================================== */
      {
        id: 'slide-12',
        type: 'concept',
        icon: '🔲',
        eyebrow: 'SLIDE 12 · KỸ NĂNG NÂNG CAO · QUÉT KHỐI CHỮ NHẬT',
        title: 'Kỹ năng Nâng cao: Chọn nhiều đối tượng cùng lúc (Marquee Selection)',
        badge: { text: 'Thao tác chuyên nghiệp', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: 2 phương pháp chọn nhiều file -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p class="mb-3" style="font-size: 1.05rem;">Khi có hàng chục file hoặc icon cần di chuyển, không ai click từng cái một! Em hãy dùng <strong>2 tuyệt chiêu chọn hàng loạt</strong> sau:</p>
                <div class="d-flex flex-column gap-3">
                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 2rem;">🔲</span>
                    <div>
                      <strong style="color: var(--color-primary); font-size: 1rem;">1. Quét khối chữ nhật (Marquee Selection):</strong>
                      <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;">Đặt chuột ở một <strong>khoảng trống gần các icon</strong> ➔ Nhấn giữ chuột trái ➔ Kéo chéo con trỏ để vẽ một khung chữ nhật màu xanh mờ ➔ Mọi icon nằm trong khung đều được chọn!</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 2rem;">🎯</span>
                    <div>
                      <strong style="color: var(--color-energy); font-size: 1rem;">2. Chọn rời rạc với phím Ctrl:</strong>
                      <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;">Giữ phím <kbd class="keycap" style="padding: 2px 8px; font-size: 0.8rem;">Ctrl</kbd> trên bàn phím + <strong>Click chuột trái</strong> vào từng icon muốn chọn. Những icon không bấm vào sẽ không bị chọn nhầm!</p>
                    </div>
                  </div>
                </div>

                <div class="p-3 rounded mt-3 bg-page-secondary">
                  <strong>💡 Mẹo cao cấp:</strong> Sau khi đã quét chọn nhiều icon, em chỉ cần <strong>kéo 1 icon bất kỳ</strong> trong nhóm đó thì <strong>TOÀN BỘ</strong> các icon khác đều sẽ bay theo cùng lúc!
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                ✨ <em>Giúp tiết kiệm 90% thời gian khi dọn dẹp hàng trăm bức ảnh hoặc bài tập!</em>
              </div>
            </div>

            <!-- Cột phải: Minh họa trực quan và lưu ý -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center">
              <div>
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">Minh họa Quét Khối Chữ Nhật</h4>
                <div class="p-4 rounded text-center my-3" style="background: #f8fafc; border: 2px dashed #93c5fd; position: relative; min-height: 190px; display: flex; align-items: center; justify-content: center;">
                  <div style="position: absolute; inset: 20px; background: rgba(59, 130, 246, 0.12); border: 2px solid #3b82f6; border-radius: 8px; pointer-events: none;"></div>
                  <div class="d-flex gap-3 justify-center">
                    <div class="p-2 rounded bg-white shadow-sm" style="border: 2px solid #3b82f6;">📁 Bài 1</div>
                    <div class="p-2 rounded bg-white shadow-sm" style="border: 2px solid #3b82f6;">📁 Bài 2</div>
                    <div class="p-2 rounded bg-white shadow-sm" style="border: 2px solid #3b82f6;">📁 Bài 3</div>
                  </div>
                </div>
                <p class="text-secondary" style="font-size: 0.88rem;">Khung xanh bao trùm tới đâu, các thư mục và tệp tin sẽ tự động được chọn tới đó!</p>
              </div>

              <div class="p-3 rounded mt-3 text-left" style="background: var(--bg-page-secondary); font-size: 0.85rem;">
                <strong>Hủy chọn nhanh:</strong> Nếu lỡ quét nhầm, chỉ cần click chuột trái 1 lần ra ngoài khoảng trống là tất cả trở về bình thường!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 13 — GIẢI MÃ 6 HÌNH DẠNG CON TRỎ CHUỘT
         ========================================================================== */
      {
        id: 'slide-13',
        type: 'concept',
        icon: '🧭',
        eyebrow: 'SLIDE 13 · BÍ MẬT CON TRỎ · 6 HÌNH DẠNG BIẾN HÓA',
        title: 'Giải mã 6 Hình dạng Con trỏ chuột (Mouse Cursor Shapes)',
        badge: { text: 'Ngôn ngữ máy tính', type: 'primary' },
        contentHtml: `
          <div class="d-flex flex-column justify-between">
            <div>
              <p class="mb-3" style="font-size: 1.05rem;">Con trỏ chuột biết "biến hình" để báo hiệu cho em biết nó chuẩn bị làm được gì. Hãy <strong>rê chuột lên từng thẻ dưới đây</strong> để quan sát con trỏ biến đổi thực tế:</p>
              <div class="cursor-gallery-grid">
                <div class="cursor-card" style="cursor: default;">
                  <div class="cursor-icon-box">↖️</div>
                  <div>
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">1. Mũi tên mặc định</strong>
                    <div class="badge badge--secondary my-1">Normal Select</div>
                    <p class="text-secondary" style="font-size: 0.82rem; margin: 0;">Trạng thái bình thường để chỉ và chọn đối tượng.</p>
                  </div>
                </div>

                <div class="cursor-card" style="cursor: pointer;">
                  <div class="cursor-icon-box" style="color: var(--color-primary);">👆</div>
                  <div>
                    <strong style="color: var(--color-primary); font-size: 0.95rem;">2. Bàn tay chỉ liên kết</strong>
                    <div class="badge badge--primary my-1">Link Pointer</div>
                    <p class="text-secondary" style="font-size: 0.82rem; margin: 0;">Xuất hiện khi rê vào nút bấm hoặc đường link web.</p>
                  </div>
                </div>

                <div class="cursor-card" style="cursor: text;">
                  <div class="cursor-icon-box" style="color: var(--color-energy);">I</div>
                  <div>
                    <strong style="color: var(--color-energy); font-size: 0.95rem;">3. Vạch chữ I gõ văn bản</strong>
                    <div class="badge badge--energy my-1">Text Select</div>
                    <p class="text-secondary" style="font-size: 0.82rem; margin: 0;">Xuất hiện khi rê vào vùng có chữ để đặt con trỏ gõ phím.</p>
                  </div>
                </div>

                <div class="cursor-card" style="cursor: wait;">
                  <div class="cursor-icon-box" style="color: var(--color-warning);">⏳</div>
                  <div>
                    <strong style="color: var(--color-warning); font-size: 0.95rem;">4. Vòng tròn xoay bận</strong>
                    <div class="badge badge--warning my-1">Busy / Loading</div>
                    <p class="text-secondary" style="font-size: 0.82rem; margin: 0;">Máy tính đang bận xử lý tác vụ, hãy kiên nhẫn chờ chút!</p>
                  </div>
                </div>

                <div class="cursor-card" style="cursor: move;">
                  <div class="cursor-icon-box" style="color: var(--color-purple);">✥</div>
                  <div>
                    <strong style="color: var(--color-purple); font-size: 0.95rem;">5. Mũi tên 4 chiều</strong>
                    <div class="badge badge--secondary my-1">Move</div>
                    <p class="text-secondary" style="font-size: 0.82rem; margin: 0;">Có thể nhấn giữ để di chuyển cả khối hoặc cửa sổ.</p>
                  </div>
                </div>

                <div class="cursor-card" style="cursor: nwse-resize;">
                  <div class="cursor-icon-box" style="color: var(--color-success);">⤢</div>
                  <div>
                    <strong style="color: var(--color-success); font-size: 0.95rem;">6. Mũi tên 2 đầu</strong>
                    <div class="badge badge--success my-1">Resize</div>
                    <p class="text-secondary" style="font-size: 0.82rem; margin: 0;">Kéo mép hoặc góc cửa sổ để chỉnh kích thước to/nhỏ.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-3 rounded mt-3 d-flex justify-between items-center" style="background: #f8fafc; border: 1px solid var(--border-soft);">
              <span>💡 <strong>Bài tập phản xạ:</strong> Nhìn hình dạng con trỏ chuột, em sẽ đoán ngay được máy tính đang sẵn sàng cho thao tác nào!</span>
              <span class="badge badge--primary">Đã mở khóa 6 hình dạng</span>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 14 — HANDS-ON LAB 02: MINI GAME LUYỆN CHUỘT
         ========================================================================== */
      {
        id: 'slide-14',
        type: 'lab',
        icon: '🎮',
        eyebrow: 'SLIDE 14 · ĐẤU TRƯỜNG MINI GAME · BẮN BÓNG PHẢN XẠ',
        title: 'Hands-on Lab 02: Mini Game Luyện Chuột Siêu Phản Xạ',
        badge: { text: 'Mini Game 30s', type: 'energy' },
        contentHtml: `
          <div class="bubble-game-wrapper">
            <div class="game-hud-bar">
              <div class="d-flex items-center gap-3">
                <span style="font-size: 1.3rem;">🎯</span>
                <div>
                  <span class="text-secondary" style="font-size: 0.85rem;">Điểm số:</span>
                  <span class="game-score-val font-extrabold text-primary" style="font-size: 1.3rem; margin-left: 4px;">0</span>
                </div>
              </div>

              <div class="d-flex items-center gap-3">
                <div>
                  <span class="text-secondary" style="font-size: 0.85rem;">Thời gian còn lại:</span>
                  <span class="game-time-val font-extrabold text-danger" style="font-size: 1.3rem; margin-left: 4px;">30s</span>
                </div>
                <button class="btn btn--primary bubble-game-start-btn">▶ Bắt đầu Game</button>
              </div>
            </div>

            <div class="bubble-game-board">
              <div class="d-flex flex-column items-center justify-center h-100 text-center p-4">
                <div style="font-size: 3.5rem; margin-bottom: 8px;">🎈🎯</div>
                <h3 style="margin-bottom: 6px;">Thử thách Bắn Bóng Phản Xạ Chuột!</h3>
                <p class="text-secondary" style="max-width: 520px; font-size: 0.95rem; margin: 0 auto 16px;">
                  Bấm nút <strong>"Bắt đầu Game"</strong>. Các quả bóng tròn sẽ xuất hiện ngẫu nhiên trong 30 giây. Nhiệm vụ của em là rê chuột và nhấp chuột trái thật nhanh để nổ bóng và ghi điểm!
                </p>
                <div class="game-feedback-text font-bold text-primary" style="font-size: 1rem; min-height: 24px;"></div>
              </div>
            </div>

            <div class="d-flex justify-between items-center p-3 rounded mt-3" style="background: var(--bg-page-secondary); font-size: 0.9rem;">
              <span>⭐ <strong>Mục tiêu thử thách:</strong> Đạt từ <strong>100 điểm trở lên</strong> (nhấp trúng tối thiểu 10 bóng) để nhận ngay +20 XP thưởng!</span>
              <span class="badge badge--warning">Thưởng +20 XP</span>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 15 — BÁC SĨ MÁY TÍNH: 5 LỖI THƯỜNG GẶP KHI DÙNG CHUỘT
         ========================================================================== */
      {
        id: 'slide-15',
        type: 'concept',
        icon: '🩺',
        eyebrow: 'SLIDE 15 · CẨM NANG BÁC SĨ · 5 LỖI THƯỜNG GẶP',
        title: 'Bác sĩ Máy tính: 5 Lỗi thường gặp với Chuột & Cách xử lý',
        badge: { text: 'Troubleshooting', type: 'warning' },
        contentHtml: `
          <div class="d-flex flex-column justify-between">
            <div>
              <p class="mb-3" style="font-size: 1.05rem;">Khi dùng chuột, nếu gặp 5 tình huống khó xử này, em chỉ cần áp dụng ngay bài thuốc sau:</p>
              <div class="d-flex flex-column gap-2">
                <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                  <span style="font-size: 1.8rem;">📏</span>
                  <div>
                    <strong style="color: var(--color-danger); font-size: 0.98rem;">1. Rê chuột bị kịch mép bàn di chuột (hết chỗ di):</strong>
                    <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;"><strong>Cách xử lý:</strong> Nhấc bổng chuột lên khỏi mặt bàn khoảng 1–2cm, đặt chuột trở lại vị trí chính giữa bàn di rồi tiếp tục rê. Con trỏ trên màn hình sẽ không bị xê dịch khi nhấc bổng chuột!</p>
                  </div>
                </div>

                <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                  <span style="font-size: 1.8rem;">🐢</span>
                  <div>
                    <strong style="color: var(--color-warning); font-size: 0.98rem;">2. Nháy đúp nhưng máy không mở ứng dụng:</strong>
                    <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;"><strong>Nguyên nhân:</strong> Do em bấm 2 lần quá chậm (máy tưởng 2 lần bấm lẻ), hoặc khi bấm làm thân chuột bị rung trượt. Hãy giữ tay thật yên và bấm <em>"Cạch - cạch"</em> nhanh hơn!</p>
                  </div>
                </div>

                <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                  <span style="font-size: 1.8rem;">🧹</span>
                  <div>
                    <strong style="color: var(--color-energy); font-size: 0.98rem;">3. Con trỏ chuột bị nhảy loạn xạ hoặc đứng đơ:</strong>
                    <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;"><strong>Nguyên nhân:</strong> Có sợi lông, bụi bám vào mắt đọc quang học bên dưới đáy chuột. Lật ngửa chuột lên, thổi nhẹ bụi đi và dùng khăn lau sạch bề mặt bàn di.</p>
                  </div>
                </div>

                <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                  <span style="font-size: 1.8rem;">📋</span>
                  <div>
                    <strong style="color: var(--color-purple); font-size: 0.98rem;">4. Lỡ bấm nhầm chuột phải hiện bảng menu lạ:</strong>
                    <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;"><strong>Cách xử lý:</strong> Không bấm linh tinh vào bảng đó! Chỉ cần nhấp chuột trái 1 lần ra khoảng trống màn hình Desktop để tắt menu.</p>
                  </div>
                </div>

                <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft);">
                  <span style="font-size: 1.8rem;">🔋</span>
                  <div>
                    <strong style="color: var(--color-primary); font-size: 0.98rem;">5. Chuột không dây bỗng nhiên không phản hồi:</strong>
                    <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0;"><strong>Cách kiểm tra:</strong> 1. Kiểm tra công tắc ON/OFF dưới đáy chuột; 2. Cắm lại đầu thu USB (Dongle) sang cổng khác; 3. Thay pin tiểu AA/AAA mới.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-3 rounded mt-3 text-center" style="background: var(--color-warning-light); color: #92400e; font-weight: 700; font-size: 0.92rem;">
              💡 3 BƯỚC VÀNG KHI GẶP LỖI: 1. DỪNG LẠI ➔ 2. QUAN SÁT MÀN HÌNH ➔ 3. HỎI THẦY CÔ HỖ TRỢ!
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 16 — QUICK QUIZ: TRẮC NGHIỆM PHẢN XẠ 5 CÂU
         ========================================================================== */
      {
        id: 'slide-16',
        type: 'quiz',
        icon: '🎯',
        eyebrow: 'SLIDE 16 · ĐẤU TRƯỜNG TRẮC NGHIỆM · 5 CÂU HỎI NHANH',
        title: 'Quick Quiz: Kiểm tra phản xạ & Củng cố kiến thức Chuột',
        badge: { text: 'Kiểm tra nhanh', type: 'primary' },
        contentHtml: `
          <p class="mb-3" style="font-size: 1rem;">Em hãy đọc kỹ và chọn đáp án chính xác nhất cho 5 câu hỏi dưới đây:</p>
          <div class="d-flex flex-column gap-3">
            <!-- Câu 1 -->
            <div class="quiz-box" data-qid="l02_q1" data-correct="1" data-hint="Để mở một ứng dụng hoặc tệp tin trên Desktop, em cần bấm chuột trái 2 lần liên tiếp thật nhanh.">
              <div class="quiz-question">Câu 1: Để mở một ứng dụng hoặc thư mục trên màn hình Desktop bằng chuột, em cần thực hiện thao tác nào?</div>
              <div class="quiz-options">
                <button class="quiz-option"><span>A.</span> Nhấp chuột phải 1 lần</button>
                <button class="quiz-option"><span>B.</span> Nháy đúp chuột trái (Double click)</button>
                <button class="quiz-option"><span>C.</span> Cuộn con lăn chuột xuống dưới</button>
                <button class="quiz-option"><span>D.</span> Chỉ cần rê chuột chỉ vào icon đó</button>
              </div>
              <div class="quiz-feedback"></div>
            </div>

            <!-- Câu 2 -->
            <div class="quiz-box" data-qid="l02_q2" data-correct="2" data-hint="Khi bấm chuột phải vào một vùng trống hay đối tượng, máy tính sẽ hiện ra bảng menu tùy chọn bổ sung (Context Menu).">
              <div class="quiz-question">Câu 2: Thao tác bấm chuột phải (Right Click) có tác dụng chính là gì?</div>
              <div class="quiz-options">
                <button class="quiz-option"><span>A.</span> Tắt máy tính ngay lập tức</button>
                <button class="quiz-option"><span>B.</span> Phóng to toàn màn hình</button>
                <button class="quiz-option"><span>C.</span> Mở menu ngữ cảnh (Context Menu) chứa các tùy chọn bổ sung</button>
                <button class="quiz-option"><span>D.</span> Xóa file đang chọn vào thùng rác</button>
              </div>
              <div class="quiz-feedback"></div>
            </div>

            <!-- Câu 3 -->
            <div class="quiz-box" data-qid="l02_q3" data-correct="0" data-hint="Giữ phím Ctrl trên bàn phím kết hợp với cuộn chuột là phím tắt thần kỳ để phóng to hoặc thu nhỏ nội dung.">
              <div class="quiz-question">Câu 3: Để phóng to hoặc thu nhỏ trang web nhanh nhất bằng chuột, em kết hợp thao tác nào?</div>
              <div class="quiz-options">
                <button class="quiz-option"><span>A.</span> Giữ phím Ctrl + Cuộn con lăn chuột</button>
                <button class="quiz-option"><span>B.</span> Nhấp đúp chuột phải 3 lần</button>
                <button class="quiz-option"><span>C.</span> Kéo thả chuột ra khỏi màn hình</button>
                <button class="quiz-option"><span>D.</span> Giữ chuột trái và bấm phím cách Space</button>
              </div>
              <div class="quiz-feedback"></div>
            </div>

            <!-- Câu 4 -->
            <div class="quiz-box" data-qid="l02_q4" data-correct="2" data-hint="Chỉ cần nhấp chuột trái một lần ra khoảng trống bên ngoài để đóng bảng menu ngữ cảnh.">
              <div class="quiz-question">Câu 4: Khi lỡ bấm nhầm chuột phải hiện ra bảng menu lạ, cách xử lý chuẩn xác nhất là gì?</div>
              <div class="quiz-options">
                <button class="quiz-option"><span>A.</span> Rút dây điện máy tính ngay</button>
                <button class="quiz-option"><span>B.</span> Bấm vào dòng chữ đầu tiên trong menu</button>
                <button class="quiz-option"><span>C.</span> Bấm nhẹ chuột trái 1 lần ra khoảng trống ngoài màn hình để tắt</button>
                <button class="quiz-option"><span>D.</span> Lắc mạnh chuột liên tục</button>
              </div>
              <div class="quiz-feedback"></div>
            </div>

            <!-- Câu 5 -->
            <div class="quiz-box" data-qid="l02_q5" data-correct="1" data-hint="Quy trình 3 bước: 1. Nhấn giữ chuột trái ➔ 2. Rê chuột đến vị trí mới ➔ 3. Thả ngón tay.">
              <div class="quiz-question">Câu 5: Để di chuyển một tệp tin vào thư mục bằng kỹ thuật Kéo và Thả (Drag & Drop), thứ tự chuẩn là:</div>
              <div class="quiz-options">
                <button class="quiz-option"><span>A.</span> Bấm chuột phải ➔ Bấm chuột trái ➔ Nháy đúp</button>
                <button class="quiz-option"><span>B.</span> Nhấn giữ chuột trái ➔ Rê chuột đến thư mục ➔ Thả ngón tay ra</button>
                <button class="quiz-option"><span>C.</span> Cuộn chuột ➔ Nhấn giữ con lăn ➔ Bấm nút nguồn</button>
                <button class="quiz-option"><span>D.</span> Nháy đúp chuột ➔ Kéo rê chuột ➔ Bấm chuột phải</button>
              </div>
              <div class="quiz-feedback"></div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 17 — BOSS CHALLENGE VỀ ĐÍCH
         ========================================================================== */
      {
        id: 'slide-17',
        type: 'boss',
        icon: '🔨',
        eyebrow: 'SLIDE 17 · BOSS ARENA VỀ ĐÍCH · ĐẠI CHIẾN ĐẬP CHUỘT',
        title: 'Đại Chiến Đập Chuột: Thử thách Kỹ năng Chuột Siêu Cấp',
        badge: { text: 'Whac-A-Mole Arena · +30 XP', type: 'danger' },
        contentHtml: `
          <div class="whack-game-container">
            <!-- HUD Bar -->
            <div class="whack-hud">
              <div class="whack-hud-group">
                <div class="whack-hud-badge">
                  <span class="label">🎯 Điểm:</span>
                  <span class="value whack-score-val">0</span>
                </div>
                <div class="whack-hud-badge whack-hud-badge--combo">
                  <span class="label">🔥 Combo:</span>
                  <span class="value whack-combo-val">0</span>
                </div>
                <div class="whack-hud-badge">
                  <span class="label">🏆 Kỷ Lục:</span>
                  <span class="value whack-highscore-val">0</span>
                </div>
              </div>

              <div class="whack-hud-group">
                <div class="whack-hud-badge whack-hud-badge--time">
                  <span class="label">⏱️ Thời Gian:</span>
                  <span class="value whack-time-val">60s</span>
                </div>
              </div>
            </div>

            <!-- Grass Arena with 9 Holes -->
            <div class="whack-arena">
              <div class="whack-grid">
                <!-- 9 hang chuột được JS tự động sinh động -->
              </div>

              <!-- Start / Game Over Overlay Dialog -->
              <div class="whack-overlay">
                <div class="whack-overlay-dialog">
                  <div style="font-size: 2.2rem; line-height: 1;">🔨🐭⚡</div>
                  <h3 style="font-size: 1.35rem; margin: 0; font-weight: 900;">Đại Chiến Đập Chuột Siêu Cấp</h3>
                  <p class="text-secondary" style="font-size: 0.85rem; margin: 0; max-width: 440px;">
                    Thử thách phản xạ chuột 60 giây! Dùng đúng kỹ năng chuột đã học để chinh phục:
                  </p>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; text-align: left; font-size: 0.8rem;">
                    <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
                      <span style="font-size: 1.3rem;">🐭</span> <div><strong>Chuột thường:</strong><br><span class="text-primary font-semibold">Click trái (+10đ)</span></div>
                    </div>
                    <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
                      <span style="font-size: 1.3rem;">🛡️</span> <div><strong>Chuột giáp sắt:</strong><br><span class="text-energy font-semibold">Nháy đúp (+25đ)</span></div>
                    </div>
                    <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
                      <span style="font-size: 1.3rem;">🧙‍♂️</span> <div><strong>Chuột phù thủy:</strong><br><span style="color: #9333ea; font-weight: 600;">Chuột phải (+30đ)</span></div>
                    </div>
                    <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
                      <span style="font-size: 1.3rem;">💣</span> <div><strong>Chuột ôm bom:</strong><br><span class="text-danger font-semibold">TRÁNH BẤM (-20đ)</span></div>
                    </div>
                  </div>

                  <div class="w-100">
                    <span class="text-secondary font-bold" style="font-size: 0.78rem; text-transform: uppercase;">Chọn Mức Độ Thử Thách:</span>
                    <div class="whack-diff-selector mt-1">
                      <button class="whack-diff-btn" data-diff="easy">🟢 Dễ (Tập Sự)</button>
                      <button class="whack-diff-btn is-active" data-diff="medium">🟡 Vừa (Chuẩn)</button>
                      <button class="whack-diff-btn" data-diff="hard">🔴 Khó (Cao Thủ)</button>
                    </div>
                  </div>

                  <button class="btn btn--primary w-100 justify-center whack-start-btn" style="font-size: 1rem; padding: 10px 20px; font-weight: 800;">
                    🚀 BẮT ĐẦU ĐẬP CHUỘT (60S)
                  </button>
                </div>
              </div>
            </div>

            <!-- Mole Legend Bar -->
            <div class="whack-mole-legend">
              <div class="whack-legend-card">
                <div class="whack-legend-icon">🐭</div>
                <div class="whack-legend-info">
                  <span class="whack-legend-title">Chuột Nâu</span>
                  <span class="whack-legend-skill text-primary">Click Trái (+10)</span>
                </div>
              </div>

              <div class="whack-legend-card">
                <div class="whack-legend-icon">🛡️</div>
                <div class="whack-legend-info">
                  <span class="whack-legend-title">Chuột Giáp</span>
                  <span class="whack-legend-skill text-energy">Double Click (+25)</span>
                </div>
              </div>

              <div class="whack-legend-card">
                <div class="whack-legend-icon">🧙‍♂️</div>
                <div class="whack-legend-info">
                  <span class="whack-legend-title">Chuột Phù Thủy</span>
                  <span class="whack-legend-skill" style="color: #9333ea;">Chuột Phải (+30)</span>
                </div>
              </div>

              <div class="whack-legend-card">
                <div class="whack-legend-icon">💣</div>
                <div class="whack-legend-info">
                  <span class="whack-legend-title">Chuột Bom</span>
                  <span class="whack-legend-skill text-danger">TRÁNH BẤM (-20)</span>
                </div>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 18 — TỔNG KẾT & TRAO HUY HIỆU
         ========================================================================== */
      {
        id: 'slide-18',
        type: 'complete',
        icon: '🎉',
        eyebrow: 'SLIDE 18 · TỔNG KẾT TUẦN 01 · TRAO HUY HIỆU VÀNG',
        title: 'Hoàn thành xuất sắc Buổi 02 & Tuần 01!',
        badge: { text: 'Tuần 01 Master', type: 'success' },
        contentHtml: `
          <div class="mission-complete-card" style="max-width: 780px; margin: 0 auto;">
            <div class="mission-complete-card__emoji" style="font-size: 4rem;">🐭⚡🏆</div>
            <h3 style="font-size: 1.7rem; margin-bottom: 8px;">Vinh danh: Master Tay Lái Chuột Chuẩn Xác!</h3>
            <p class="text-secondary" style="max-width: 580px; margin: 0 auto 16px; font-size: 1.05rem;">
              Chúc mừng em đã chinh phục trọn vẹn cả <strong>5 kỹ năng chuột cốt lõi</strong> và hoàn thành tuần học đầu tiên của khóa học Lập trình Lớp 7!
            </p>

            <!-- Tóm tắt năng lực Tuần 01 -->
            <div class="p-3 rounded mb-3 text-left" style="background: #ffffff; border: 1.5px solid var(--border-soft); width: 100%; max-width: 580px;">
              <strong style="color: var(--color-primary); font-size: 0.95rem;">🏅 Năng lực em đã làm chủ trong Tuần 01:</strong>
              <div class="d-flex flex-column gap-1 mt-2 text-secondary" style="font-size: 0.9rem;">
                <div>✅ Nhận biết 4 bộ phận phần cứng & quy trình bật/tắt máy tính an toàn</div>
                <div>✅ Làm chủ Desktop, Taskbar và điều khiển cửa sổ ứng dụng (Minimize, Maximize, Close)</div>
                <div>✅ Thành thạo Single click, Double click mở app, Right click mở Context Menu</div>
                <div>✅ Kỹ thuật Kéo và Thả (Drag & Drop) di dời tệp và dọn dẹp màn hình</div>
              </div>
            </div>

            <!-- Bài tập về nhà & Xem trước Tuần 02 -->
            <div class="p-3 rounded mb-4 text-left" style="background: #fffbeb; border: 1.5px solid #fde68a; width: 100%; max-width: 580px;">
              <strong style="color: #92400e;">📝 Nhiệm vụ về nhà (15 phút):</strong>
              <p style="color: #78350f; font-size: 0.9rem; margin: 4px 0 0;">
                1. Luyện tập nháy đúp và kéo thả icon Desktop thêm 5 phút mỗi ngày.<br>
                2. Chơi mini game luyện chuột để nâng độ chính xác lên trên 85%!<br>
                3. Chuẩn bị tinh thần cho <strong>Tuần 02: Bàn phím máy tính & Kỹ thuật gõ 10 ngón thần tốc!</strong>
              </p>
            </div>

            <div class="d-flex justify-center gap-3">
              <a href="../index.html" class="btn btn--secondary">
                🏠 Về Cổng Khóa học
              </a>
              <button class="btn btn--energy" onclick="window.LearningEngine.goToSlide(16);">
                🔨 Chơi Game Đập Chuột
              </button>
              <button class="btn btn--primary" onclick="window.print();">
                🖨️ In / Lưu Phiếu Học Tập
              </button>
            </div>
          </div>
        `
      }
    ]
  };

  // Đăng ký vào Global Lesson Registry
  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w01-l02'] = lessonData;

  // Nếu query param là gd1-w01-l02 thì gán active
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('id') === 'gd1-w01-l02') {
    window.currentLessonData = lessonData;
  }
})();
