/**
 * LESSON DATA — GĐ1 · Tuần 01 · Buổi 01
 * Chủ đề: Làm quen với máy tính
 * Thiết kế chuẩn Slide Trình chiếu Giảng dạy 1:1 (Teacher-Led Slide Deck)
 */

(function () {
  'use strict';

  const lessonData = {
    id: 'gd1-w01-l01',
    stage: 'GĐ1',
    stageName: 'Nhập môn máy tính',
    week: 1,
    lesson: 1,
    duration: '90 phút',
    title: 'Làm quen với máy tính',
    subtitle: 'Khám phá Desktop, cửa sổ ứng dụng và cách bật/tắt máy tính an toàn',

    cheatsheet: {
      vocabulary: [
        'Desktop',
        'Application',
        'Window',
        'Taskbar',
        'Minimize',
        'Maximize',
        'Close',
        'Shut down'
      ],
      icons: [
        { symbol: '—', name: 'Minimize', desc: 'Thu nhỏ cửa sổ xuống Taskbar' },
        { symbol: '□', name: 'Maximize', desc: 'Phóng to cửa sổ gần toàn màn hình' },
        { symbol: 'X', name: 'Close', desc: 'Đóng và thoát hẳn ứng dụng' },
        { symbol: '⏻', name: 'Power', desc: 'Nút bật nguồn máy tính' }
      ],
      shortcuts: [
        { keys: ['Alt', 'Tab'], desc: 'Chuyển nhanh giữa các cửa sổ ứng dụng' },
        { keys: ['Win'], desc: 'Mở menu Start để tìm ứng dụng' },
        { keys: ['Win', 'D'], desc: 'Ẩn tất cả về màn hình Desktop' },
        { keys: ['Alt', 'F4'], desc: 'Đóng cửa sổ đang chọn' }
      ],
      troubleshooting: 'Nếu không biết phải làm gì: 1. Dừng lại ➔ 2. Đọc kỹ màn hình ➔ 3. Hỏi thầy cô hỗ trợ!'
    },

    sections: [
      /* ==========================================================================
         SLIDE 01 — MISSION START (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-01',
        type: 'concept',
        icon: '🚀',
        eyebrow: 'SLIDE 01 · KHỞI ĐẦU BUỔI HỌC · NHẬP MÔN',
        title: 'Mission 01: Làm quen với người bạn mới – Máy tính',
        badge: { text: 'Mục tiêu buổi học', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: Hình ảnh góc học tập chuẩn -->
            <div class="d-flex flex-column gap-3 justify-between">
              <div class="edu-illustration-card" style="margin: 0;">
                <img src="../design-system/assets/illustrations/computer_setup.jpg" alt="Học sinh lớp 7 bên máy tính" class="rounded-img" style="max-height: 300px; object-fit: cover; width: 100%;">
                <p class="img-caption">📸 Góc học tập máy tính chuẩn: Màn hình vừa tầm mắt, tư thế lưng thẳng, bàn phím và chuột ngay ngắn</p>
              </div>

              <blockquote style="border-left: 4px solid var(--color-primary); padding-left: 16px; margin: 0; font-size: 1.15rem; font-weight: 700; color: var(--color-primary); background: #eff6ff; padding: 12px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                “Chào mừng em đến với thế giới công nghệ! Hôm nay chúng mình sẽ cùng làm chủ chiếc máy tính như một người dùng thực thụ!”
              </blockquote>
            </div>

            <!-- Cột phải: 4 Trọng tâm buổi học & Nút bắt đầu -->
            <div class="d-flex flex-column gap-3 justify-between">
              <div>
                <h4 style="font-size: 1.1rem; color: var(--text-primary); margin: 0 0 12px;">🎯 4 mục tiêu trọng tâm buổi học hôm nay:</h4>
                <div class="d-flex flex-column gap-2">
                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 1.6rem;">🖥️</span>
                    <div>
                      <strong style="font-size: 0.98rem;">1. Nhận biết 4 bộ phận phần cứng</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Màn hình, bàn phím, chuột và thân máy tính.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 1.6rem;">🪟</span>
                    <div>
                      <strong style="font-size: 0.98rem;">2. Làm chủ màn hình Desktop & Taskbar</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Mặt bàn làm việc số và thanh công cụ điều phối.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 1.6rem;">📱</span>
                    <div>
                      <strong style="font-size: 0.98rem;">3. Mở & điều khiển cửa sổ ứng dụng</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Thu nhỏ, phóng to, đóng và chuyển giữa nhiều app.</p>
                    </div>
                  </div>

                  <div class="p-3 rounded d-flex items-center gap-3" style="background: #ffffff; border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                    <span style="font-size: 1.6rem;">⚡</span>
                    <div>
                      <strong style="font-size: 0.98rem;">4. Bật và tắt máy tính an toàn tuyệt đối</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Quy trình chuẩn giúp bảo vệ linh kiện và dữ liệu.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-between items-center p-3 rounded" style="background: var(--bg-page-secondary); border: 1px solid var(--border-soft);">
                <span>🎯 <strong>Mục tiêu:</strong> Làm chủ 4 năng lực nền tảng & Tự tin thao tác!</span>
                <button class="btn btn--primary" onclick="window.LearningEngine.nextSlide();">
                  🚀 Bắt đầu bài học ➔
                </button>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 02 — WARM-UP: EM ĐÃ TỪNG LÀM GÌ VỚI MÁY TÍNH?
         ========================================================================== */
      {
        id: 'slide-02',
        type: 'warmup',
        icon: '🤔',
        eyebrow: 'SLIDE 02 · KHỞI ĐỘNG · GIAO LƯU',
        title: 'Em đã từng làm gì với máy tính?',
        badge: { text: 'Khởi động & Trò chuyện', type: 'warning' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: 5 thẻ tương tác chọn hoạt động -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p class="mb-3" style="font-size: 1.05rem;">Hãy nhấp chọn một hoạt động em thường thấy hoặc từng làm nhất trên máy tính nhé:</p>
                <div class="choice-cards-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                  <div class="choice-card" data-label="Chơi game" style="padding: 16px;">
                    <span style="font-size: 2rem;">🎮</span>
                    <strong>Chơi game</strong>
                  </div>
                  <div class="choice-card" data-label="Xem video" style="padding: 16px;">
                    <span style="font-size: 2rem;">🎬</span>
                    <strong>Xem video</strong>
                  </div>
                  <div class="choice-card" data-label="Học bài" style="padding: 16px;">
                    <span style="font-size: 2rem;">📚</span>
                    <strong>Học bài</strong>
                  </div>
                  <div class="choice-card" data-label="Nói chuyện với bạn bè" style="padding: 16px;">
                    <span style="font-size: 2rem;">💬</span>
                    <strong>Nói chuyện</strong>
                  </div>
                  <div class="choice-card" data-label="Bắt đầu từ số 0" style="grid-column: span 2; padding: 14px;">
                    <span style="font-size: 1.8rem;">❓</span>
                    <strong>Chưa từng dùng nhiều — Bắt đầu từ số 0!</strong>
                  </div>
                </div>
              </div>
              <div class="choice-feedback mt-3 p-3 rounded" style="display: none; background: var(--color-success-light); color: #065f46; border: 1px solid rgba(16, 185, 129, 0.4); font-size: 0.95rem;"></div>
            </div>

            <!-- Cột phải: Góc giao lưu học sinh -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <div class="d-flex items-center gap-2 mb-3">
                  <span style="font-size: 1.6rem;">🗣️</span>
                  <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-primary);">Góc giao lưu: Người bạn máy tính</h4>
                </div>
                <div class="d-flex flex-column gap-3">
                  <div class="p-3 rounded" style="background: #f8fafc; border-left: 3px solid var(--color-primary);">
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">1. Máy tính khác điện thoại thông minh ở điểm nào?</strong>
                    <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">Màn hình lớn, có chuột và bàn phím thật, cho phép làm việc và học tập chuyên sâu hơn nhiều!</p>
                  </div>

                  <div class="p-3 rounded" style="background: #f8fafc; border-left: 3px solid var(--color-energy);">
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">2. Em muốn dùng máy tính để làm điều gì tuyệt nhất?</strong>
                    <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">Tự làm trò chơi bằng Scratch/Python, vẽ tranh kỹ thuật số, hay làm bài thuyết trình ấn tượng trên lớp?</p>
                  </div>

                  <div class="p-3 rounded" style="background: #f8fafc; border-left: 3px solid var(--color-success);">
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">3. Em đã từng tự mình bật máy tính lên bao giờ chưa?</strong>
                    <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">Đừng lo nếu chưa từng nhé, hôm nay chúng mình sẽ cùng làm quen từng thao tác một!</p>
                  </div>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.88rem; color: var(--color-primary);">
                ✨ <strong>Bí kíp học tập:</strong> Hãy cùng khám phá cỗ máy thông minh với tinh thần thật hào hứng nhé!
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 03 — MÁY TÍNH LÀ GÌ? (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-03',
        type: 'concept',
        icon: '💻',
        eyebrow: 'SLIDE 03 · KHÁM PHÁ · BẢN CHẤT MÁY TÍNH',
        title: 'Máy tính là gì? — Bản chất công cụ xử lý thông tin',
        badge: { text: 'Khái niệm cốt lõi', type: 'primary' },
        contentHtml: `
          <!-- Thẻ định nghĩa trung tâm rộng rãi -->
          <div class="p-4 text-center rounded" style="background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%); border: 2px solid rgba(79, 70, 229, 0.25); box-shadow: var(--shadow-sm);">
            <span style="font-size: 2.4rem;">💡</span>
            <h3 style="color: var(--color-primary); margin: 6px 0; font-size: 1.35rem;">
              Máy tính là một thiết bị điện tử giúp con người <u>làm việc với thông tin</u>.
            </h3>
            <p class="text-secondary" style="margin: 0; font-size: 1rem; max-width: 800px; margin: 0 auto;">
              Máy tính tiếp nhận dữ liệu yêu cầu (Input) ➔ Tính toán xử lý siêu tốc (Process) ➔ Xuất kết quả trực quan (Output) cho con người.
            </p>
          </div>

          <!-- Lưới 4 Siêu năng lực toàn màn hình -->
          <div class="radiating-concept-grid">
            <div class="radiating-card">
              <div class="d-flex items-center gap-2">
                <span style="font-size: 2rem;">✍️</span>
                <strong style="font-size: 1.05rem;">Soạn thảo (Write)</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.55;">
                Gõ chữ, viết bài văn, làm báo tường số và lưu trữ hàng vạn cuốn sách trong ổ cứng tí hon.
              </p>
              <div class="mt-auto pt-2" style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700;">Ví dụ: Word, Notepad</div>
            </div>

            <div class="radiating-card">
              <div class="d-flex items-center gap-2">
                <span style="font-size: 2rem;">🔢</span>
                <strong style="font-size: 1.05rem;">Tính toán (Calculate)</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.55;">
                Giải hàng tỷ phép toán phức tạp mỗi giây, lập bảng thống kê và mô phỏng khoa học chính xác.
              </p>
              <div class="mt-auto pt-2" style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700;">Ví dụ: Calculator, Excel</div>
            </div>

            <div class="radiating-card">
              <div class="d-flex items-center gap-2">
                <span style="font-size: 2rem;">🎨</span>
                <strong style="font-size: 1.05rem;">Sáng tạo (Create)</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.55;">
                Vẽ tranh kỹ thuật số, thiết kế slide thuyết trình, dựng video và lập trình các trò chơi yêu thích.
              </p>
              <div class="mt-auto pt-2" style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700;">Ví dụ: Paint, Scratch, PPT</div>
            </div>

            <div class="radiating-card">
              <div class="d-flex items-center gap-2">
                <span style="font-size: 2rem;">🌐</span>
                <strong style="font-size: 1.05rem;">Kết nối (Connect)</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.55;">
                Truy cập mạng Internet toàn cầu, tra cứu bách khoa toàn thư thế giới và học trực tuyến 1:1.
              </p>
              <div class="mt-auto pt-2" style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700;">Ví dụ: Chrome, Google</div>
            </div>
          </div>

          <div class="p-3 bg-page-secondary rounded d-flex items-center justify-between" style="border-left: 4px solid var(--color-energy);">
            <div>
              <strong>🤔 Thử thách suy luận:</strong>
              <p class="text-secondary mt-1" style="font-size: 0.95rem; margin: 0;">
                “Nếu muốn làm một bài báo tường thuyết trình trước cả lớp, theo em máy tính sẽ hỗ trợ những siêu năng lực nào trong 4 điều trên?”
              </p>
            </div>
            <span class="badge badge--energy" style="white-space: nowrap; font-size: 0.85rem;">Tương tác trả lời</span>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 04 — NHẬN DIỆN CÁC BỘ PHẬN (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-04',
        type: 'concept',
        icon: '🔍',
        eyebrow: 'SLIDE 04 · QUAN SÁT & TƯƠNG TÁC · 4 BỘ PHẬN',
        title: 'Khám phá 4 bộ phận chính của máy tính',
        badge: { text: 'Kiến trúc phần cứng', type: 'energy' },
        contentHtml: `
          <div class="slide-split-2col slide-split-2col--wide-left">
            <!-- Cột trái: Hình ảnh trực quan & Sơ đồ luồng xử lý thông tin -->
            <div class="d-flex flex-column gap-3 justify-between">
              <div class="edu-illustration-card" style="margin: 0;">
                <img src="../design-system/assets/illustrations/computer_setup.jpg" alt="Bộ máy tính để bàn học tập" class="rounded-img" style="max-height: 250px; object-fit: cover; width: 100%;">
                <p class="img-caption">📸 Bộ máy tính để bàn tiêu chuẩn: Màn hình, bàn phím, chuột và thân máy tách rời</p>
              </div>

              <!-- Sơ đồ luồng xử lý thông tin Tin học 7 -->
              <div class="slide-panel slide-panel--white">
                <div class="d-flex items-center justify-between mb-1">
                  <strong style="color: var(--color-primary); font-size: 0.95rem;">🔄 Sơ đồ luồng xử lý thông tin (Data Flow)</strong>
                  <span class="badge badge--primary">Trọng tâm Tin học 7</span>
                </div>
                <div class="data-flow-pipeline">
                  <div class="data-flow-step">
                    <span style="font-size: 1.6rem;">⌨️ 🖱️</span>
                    <strong style="font-size: 0.85rem;">1. ĐẦU VÀO (Input)</strong>
                    <span class="text-secondary" style="font-size: 0.75rem;">Phím & Chuột nhận lệnh</span>
                  </div>
                  <div class="data-flow-arrow">➔</div>
                  <div class="data-flow-step" style="border-color: #a855f7; background: #faf5ff;">
                    <span style="font-size: 1.6rem;">📦</span>
                    <strong style="font-size: 0.85rem; color: #7e22ce;">2. XỬ LÝ (CPU)</strong>
                    <span class="text-secondary" style="font-size: 0.75rem;">Thân máy tính toán</span>
                  </div>
                  <div class="data-flow-arrow">➔</div>
                  <div class="data-flow-step" style="border-color: #3b82f6; background: #eff6ff;">
                    <span style="font-size: 1.6rem;">🖥️ 🔊</span>
                    <strong style="font-size: 0.85rem; color: #1d4ed8;">3. ĐẦU RA (Output)</strong>
                    <span class="text-secondary" style="font-size: 0.75rem;">Màn hình xuất kết quả</span>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded" style="background: var(--bg-page-secondary); border-left: 4px solid var(--color-primary);">
                <strong style="font-size: 0.92rem;">💡 Góc liên tưởng thú vị:</strong>
                <span class="text-secondary" style="font-size: 0.88rem; display: block; margin-top: 2px;">“4 bộ phận phối hợp như cơ thể con người: <em>Mắt</em> (Màn hình), <em>Tay</em> (Bàn phím & Chuột), <em>Bộ não</em> (Thân máy)!”</span>
              </div>
            </div>

            <!-- Cột phải: Lưới 4 Thẻ phần cứng chi tiết -->
            <div class="hardware-cards-grid">
              <!-- 1. Màn hình -->
              <div class="hardware-card">
                <div class="hardware-card__header">
                  <h4 class="hardware-card__title">🖥️ Màn hình (Monitor)</h4>
                  <span class="hardware-card__badge hardware-card__badge--output">Xuất (Output)</span>
                </div>
                <p class="hardware-card__desc">
                  Hiển thị hình ảnh, chữ viết, video và giao diện của các phần mềm để mắt con người quan sát trực quan.
                </p>
                <div class="hardware-card__tip">
                  👁️ <strong>Mẹo sức khỏe:</strong> Đặt màn hình cách mắt từ 50–70cm, mép trên ngang tầm mắt để không mỏi cổ.
                </div>
              </div>

              <!-- 2. Bàn phím -->
              <div class="hardware-card">
                <div class="hardware-card__header">
                  <h4 class="hardware-card__title">⌨️ Bàn phím (Keyboard)</h4>
                  <span class="hardware-card__badge hardware-card__badge--input">Nhập (Input)</span>
                </div>
                <p class="hardware-card__desc">
                  Nhập văn bản tiếng Việt, các chữ số, ký hiệu toán học và câu lệnh điều khiển hệ thống máy tính.
                </p>
                <div class="hardware-card__tip">
                  💡 <strong>Bí mật phím:</strong> Hai phím <strong>F</strong> và <strong>J</strong> có gờ nổi nhỏ giúp đặt ngón trỏ gõ 10 ngón!
                </div>
              </div>

              <!-- 3. Chuột -->
              <div class="hardware-card">
                <div class="hardware-card__header">
                  <h4 class="hardware-card__title">🖱️ Chuột (Mouse)</h4>
                  <span class="hardware-card__badge hardware-card__badge--input">Nhập (Input)</span>
                </div>
                <p class="hardware-card__desc">
                  Điều khiển con trỏ mũi tên trên màn hình qua 3 thao tác cơ bản: Click trái (chọn), Click phải (menu), Cuộn bánh xe (lên/xuống).
                </p>
                <div class="hardware-card__tip">
                  👆 <strong>Trên Laptop:</strong> Bàn rê cảm ứng (Touchpad) đóng vai trò thay thế cho chuột rời.
                </div>
              </div>

              <!-- 4. Thân máy -->
              <div class="hardware-card">
                <div class="hardware-card__header">
                  <h4 class="hardware-card__title">📦 Thân máy (PC Case/CPU)</h4>
                  <span class="hardware-card__badge hardware-card__badge--process">Xử lý (Process)</span>
                </div>
                <p class="hardware-card__desc">
                  Bộ não và trái tim của máy tính: Chứa chip xử lý CPU, bộ nhớ RAM và ổ cứng lưu trữ Windows, tài liệu, trò chơi.
                </p>
                <div class="hardware-card__tip">
                  ❄️ <strong>An toàn linh kiện:</strong> Đặt nơi khô thoáng, không chặn khe thoát nhiệt của quạt làm mát.
                </div>
              </div>
            </div>
          </div>

          <!-- Dải đối chiếu rộng chân slide: Máy tính bàn vs Laptop -->
          <div class="laptop-compare-bar">
            <div class="laptop-compare-item">
              <span style="font-size: 1.8rem;">🖥️</span>
              <div>
                <strong>Máy tính bàn (Desktop PC):</strong>
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">4 bộ phận tách rời nhau bằng dây cáp, màn hình to, cấu hình mạnh mẽ, đặt cố định tại góc học tập.</p>
              </div>
            </div>
            <div style="font-weight: 800; color: var(--color-primary); font-size: 1.1rem; padding: 0 10px;">SO VỚI</div>
            <div class="laptop-compare-item">
              <span style="font-size: 1.8rem;">💻</span>
              <div>
                <strong>Máy tính xách tay (Laptop):</strong>
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">Gộp cả 4 thành phần <em>(Màn hình + Phím + Touchpad + Thân máy)</em> thành 1 khối mỏng nhẹ, có pin sạc tiện mang đi học mọi nơi!</p>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 05 — MINI GAME: ĐÂY LÀ BỘ PHẬN NÀO?
         ========================================================================== */
      {
        id: 'slide-05',
        type: 'quiz',
        icon: '🎯',
        eyebrow: 'SLIDE 05 · MINI GAME · ĐOÁN BỘ PHẬN',
        title: 'Thử tài quan sát: Đây là bộ phận nào?',
        badge: { text: 'Thử tài quan sát', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col">
            <div class="d-flex flex-column gap-4">
              <!-- Câu 1 -->
              <div class="quiz-box" data-qid="mini_q1" data-correct="1" data-hint="Hãy nhìn thiết bị có rất nhiều phím chữ A, B, C và phím số..." data-correct-msg="🎉 Chính xác! Bàn phím giúp chúng ta nhập chữ, số và lệnh.">
                <div class="quiz-question" style="font-size: 1.1rem;">Câu 1: Thiết bị nào dùng để nhập chữ, số và câu lệnh vào máy tính?</div>
                <div class="quiz-options">
                  <button class="quiz-option"><span>🖱️</span> Chuột máy tính (Mouse)</button>
                  <button class="quiz-option"><span>⌨️</span> Bàn phím máy tính (Keyboard)</button>
                  <button class="quiz-option"><span>🖥️</span> Màn hình hiển thị (Monitor)</button>
                </div>
                <div class="quiz-feedback"></div>
              </div>

              <!-- Câu 2 -->
              <div class="quiz-box" data-qid="mini_q2" data-correct="0" data-hint="Thiết bị này vừa vặn trong lòng bàn tay và có con lăn ở giữa..." data-correct-msg="🎉 Chính xác! Chuột máy tính giúp chúng ta chọn và điều khiển đối tượng trên màn hình.">
                <div class="quiz-question" style="font-size: 1.1rem;">Câu 2: Thiết bị nào dùng để cầm trong tay và di chuyển con trỏ trên màn hình?</div>
                <div class="quiz-options">
                  <button class="quiz-option"><span>🖱️</span> Chuột máy tính (Mouse)</button>
                  <button class="quiz-option"><span>📦</span> Thân máy tính (PC Case)</button>
                  <button class="quiz-option"><span>🖥️</span> Màn hình hiển thị (Monitor)</button>
                </div>
                <div class="quiz-feedback"></div>
              </div>
            </div>

            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <div class="d-flex items-center gap-2 mb-2">
                  <span style="font-size: 1.6rem;">💡</span>
                  <h4 style="margin: 0; font-size: 1.1rem; color: var(--color-primary);">Bí quyết nhận diện nhanh</h4>
                </div>
                <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                  Em hãy quan sát kỹ công dụng chính của từng thiết bị:
                </p>
                <ul style="padding-left: 20px; line-height: 1.8; font-size: 0.92rem; color: var(--text-secondary);">
                  <li><strong>Muốn gõ chữ hoặc số:</strong> Dùng Bàn phím (Keyboard).</li>
                  <li><strong>Muốn bấm chọn, kéo thả biểu tượng:</strong> Dùng Chuột (Mouse).</li>
                  <li><strong>Muốn nhìn xem kết quả đang làm gì:</strong> Nhìn vào Màn hình (Monitor).</li>
                  <li><strong>Muốn cắm USB hoặc bấm nút bật máy:</strong> Tìm ở Thân máy (Case).</li>
                </ul>
              </div>

              <div class="p-3 rounded" style="background: var(--bg-page-secondary); border-left: 4px solid var(--color-energy);">
                <strong>🤔 Câu hỏi thử tài:</strong>
                <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">
                  “Nếu tháo dây chuột ra thì máy tính có bật lên được không? Và lúc đó chúng ta điều khiển máy tính bằng thiết bị nào?”
                </p>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 06 — BẬT MÁY ĐÚNG CÁCH (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-06',
        type: 'concept',
        icon: '⚡',
        eyebrow: 'SLIDE 06 · THAO TÁC CHUẨN · BẬT NGUỒN AN TOÀN',
        title: 'Quy trình khởi động máy tính an toàn',
        badge: { text: 'Quy trình chuẩn 3 bước', type: 'warning' },
        contentHtml: `
          <!-- Khối 3 bước hành trình nằm ngang toàn màn hình -->
          <div class="step-journey-3 mb-3">
            <div class="step-journey-card">
              <div class="step-journey-card__header">
                <div class="step-number-circle">1</div>
                <div>
                  <h4 style="margin: 0; font-size: 1.05rem;">Kiểm tra nguồn điện</h4>
                  <span class="text-secondary" style="font-size: 0.8rem;">Sẵn sàng dòng điện</span>
                </div>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.6;">
                Đảm bảo phích cắm điện đã ghim chắc chắn vào ổ điện tường. Nếu dùng Laptop, kiểm tra pin còn trên 20% hoặc đã cắm sạc.
              </p>
              <div class="d-flex items-center gap-2 p-2 rounded" style="background: #f8fafc; font-size: 0.85rem; color: #475569; margin-top: auto;">
                <span>🔌 Dây nguồn cắm chặt, không bị lỏng lẻo</span>
              </div>
            </div>

            <div class="step-journey-card" style="border-color: rgba(79, 70, 229, 0.4); background: #faf5ff;">
              <div class="step-journey-card__header">
                <div class="step-number-circle" style="background: var(--color-primary); color: #ffffff;">2</div>
                <div>
                  <h4 style="margin: 0; font-size: 1.05rem; color: var(--color-primary);">Bấm nút Power (⏻) 1 LẦN</h4>
                  <span class="text-secondary" style="font-size: 0.8rem;">Khởi phát tín hiệu</span>
                </div>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.6;">
                Nhấn dứt khoát 1 lần duy nhất vào nút nguồn (⏻) rồi thả tay ra ngay. Đèn tín hiệu sẽ sáng lên và quạt máy tính bắt đầu quay.
              </p>
              <div class="d-flex items-center gap-2 p-2 rounded" style="background: #ffffff; font-size: 0.85rem; color: #6d28d9; margin-top: auto; border: 1px solid rgba(139, 92, 246, 0.2);">
                <span>☝️ Nhấn 1 lần duy nhất — Không giữ lì!</span>
              </div>
            </div>

            <div class="step-journey-card">
              <div class="step-journey-card__header">
                <div class="step-number-circle">3</div>
                <div>
                  <h4 style="margin: 0; font-size: 1.05rem;">Chờ máy vào Desktop</h4>
                  <span class="text-secondary" style="font-size: 0.8rem;">Hệ điều hành nạp xong</span>
                </div>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.6;">
                Màn hình sẽ hiển thị logo của nhà sản xuất, sau đó là logo Windows và âm thanh khởi động nhẹ nhàng, đưa em đến màn hình Desktop.
              </p>
              <div class="d-flex items-center gap-2 p-2 rounded" style="background: #f8fafc; font-size: 0.85rem; color: #475569; margin-top: auto;">
                <span>⏳ Thời gian chờ thông thường: 15–40 giây</span>
              </div>
            </div>
          </div>

          <!-- Khu vực tương tác mô phỏng & Cảnh báo song song 2 cột -->
          <div class="slide-split-2col">
            <!-- Bên trái: Mô phỏng nút Power tương tác trực quan -->
            <div class="power-btn-container" style="flex: 1; margin: 0; padding: 24px; border-radius: var(--radius-lg); background: #ffffff; border: 1.5px solid var(--border-soft); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;">
              <span class="text-secondary font-semibold" style="font-size: 1rem;">Mô phỏng: Thử nhấp vào nút Power bên dưới</span>
              <button class="power-btn" aria-label="Bật nguồn máy tính" style="width: 84px; height: 84px; font-size: 2.2rem;">⏻</button>
              <div class="power-feedback text-secondary font-semibold" style="font-size: 0.95rem;">⚪ Máy tính đang ở trạng thái tắt. Nhấp để bật!</div>
            </div>

            <!-- Bên phải: 2 Lời dặn dò an toàn & Thử thách trên máy thật -->
            <div class="d-flex flex-column gap-3 justify-between">
              <div class="p-3 bg-page-secondary rounded" style="border-left: 4px solid var(--color-danger); background: #fff1f2; border: 1px solid rgba(244, 63, 94, 0.25);">
                <strong style="color: var(--color-danger); font-size: 0.95rem;">❌ NGUYÊN TẮC VÀNG — TUYỆT ĐỐI KHÔNG LÀM:</strong>
                <p style="font-size: 0.9rem; color: #9f1239; margin: 4px 0 0; line-height: 1.55;">
                  Không nhấn nút Power liên tục nhiều lần khi máy đang khởi động. Việc này khiến nguồn điện bị ngắt quãng đột ngột, dễ gây lỗi hệ điều hành và sốc điện linh kiện!
                </p>
              </div>

              <div class="p-3 rounded" style="background: var(--color-energy-light); border: 1px solid rgba(245, 158, 11, 0.3);">
                <strong style="color: #92400e; font-size: 0.95rem;">👉 Thử thách quan sát trên máy thật của em:</strong>
                <p style="font-size: 0.9rem; color: #78350f; margin: 4px 0 0; line-height: 1.55;">
                  “Em hãy xác định vị trí nút Power trên thân máy hoặc bàn phím của mình nhé! <em>(Lưu ý: Chỉ đưa tay chỉ vị trí, không bấm nút vì máy đang mở học trực tuyến nhé!)</em>”
                </p>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 07 — DESKTOP LÀ GÌ? (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-07',
        type: 'concept',
        icon: '🪟',
        eyebrow: 'SLIDE 07 · KHÁM PHÁ · MẶT BÀN DESKTOP',
        title: 'Chào mừng đến Desktop — Mặt bàn làm việc số',
        badge: { text: 'Không gian làm việc', type: 'primary' },
        contentHtml: `
          <div class="d-flex items-center justify-between mb-2">
            <blockquote style="border-left: 4px solid var(--color-energy); padding-left: 14px; margin: 0; font-size: 1.1rem; font-weight: 700; color: var(--color-energy);">
              “Desktop giống hệt một chiếc bàn học: Nơi em bày sách vở, bút thước và các công cụ cần dùng!”
            </blockquote>
            <span class="badge badge--primary">🖱️ Hãy nhấp vào các vùng trên màn hình ảo bên dưới</span>
          </div>

          <!-- Interactive Mock Desktop Toàn Màn Hình -->
          <div class="mock-desktop-container" style="margin: 0;">
            <div class="mock-desktop" data-desktop-part="Desktop (Màn hình nền)" data-desktop-desc="Khu vực làm việc chính sau khi khởi động xong, nơi em đặt ảnh nền yêu thích và sắp xếp tài liệu học tập.">
              <div class="mock-desktop-wallpaper">
                <div class="mock-desktop-icons" style="display: grid; grid-template-columns: repeat(2, 85px); gap: 12px; width: 180px;">
                  <div class="desktop-icon-btn" data-desktop-part="Icon (Biểu tượng)" data-desktop-desc="Thùng rác số (Recycle Bin): Nơi chứa các tệp tin hoặc hình ảnh em đã bấm xóa tạm thời.">
                    <span style="font-size: 1.6rem;">🗑️</span>
                    <span>Thùng rác</span>
                  </div>
                  <div class="desktop-icon-btn" data-desktop-part="Icon (Biểu tượng)" data-desktop-desc="Thư mục cá nhân (My Files): Nơi em lưu giữ bài tập, tranh vẽ và tài liệu học tập của mình.">
                    <span style="font-size: 1.6rem;">📁</span>
                    <span>Bài tập</span>
                  </div>
                  <div class="desktop-icon-btn" data-desktop-part="Icon (Biểu tượng)" data-desktop-desc="Trình duyệt Google Chrome: Cửa sổ mở ra thế giới Internet, tìm kiếm thông tin và xem video bài giảng.">
                    <span style="font-size: 1.6rem;">🌐</span>
                    <span>Chrome</span>
                  </div>
                  <div class="desktop-icon-btn" data-desktop-part="Icon (Biểu tượng)" data-desktop-desc="Soạn thảo văn bản (Word / Notepad): Công cụ giúp em tập gõ chữ, viết đoạn văn và ghi chú bài học.">
                    <span style="font-size: 1.6rem;">📝</span>
                    <span>Tập gõ</span>
                  </div>
                  <div class="desktop-icon-btn" data-desktop-part="Icon (Biểu tượng)" data-desktop-desc="Phần mềm vẽ tranh MS Paint: Ứng dụng sáng tạo giúp em vẽ các khối hình và phối màu bằng chuột.">
                    <span style="font-size: 1.6rem;">🎨</span>
                    <span>Vẽ tranh</span>
                  </div>
                  <div class="desktop-icon-btn" data-desktop-part="Icon (Biểu tượng)" data-desktop-desc="Cài đặt hệ thống (Settings): Nơi chỉnh độ sáng màn hình, âm lượng loa và kết nối mạng Wi-Fi.">
                    <span style="font-size: 1.6rem;">⚙️</span>
                    <span>Cài đặt</span>
                  </div>
                </div>
              </div>

              <div class="mock-desktop-taskbar" data-desktop-part="Taskbar (Thanh tác vụ)" data-desktop-desc="Thanh tác vụ nằm ở mép dưới cùng, giúp em xem các ứng dụng đang chạy và chuyển đổi cửa sổ nhanh chóng.">
                <div class="taskbar-left">
                  <button class="taskbar-start-btn" data-desktop-part="Nút Start (⊞)" data-desktop-desc="Menu Start: Cánh cửa trung tâm để tìm kiếm mọi ứng dụng, mở tài liệu và bấm lệnh Tắt máy an toàn.">⊞ Start</button>
                  <span style="font-size: 0.8rem; color: #94a3b8; background: rgba(255,255,255,0.12); padding: 4px 10px; border-radius: 4px;">🔍 Gõ để tìm ứng dụng...</span>
                  <span title="Google Chrome" style="font-size: 1.1rem;">🌐</span>
                  <span title="File Explorer" style="font-size: 1.1rem;">📁</span>
                  <span title="Notepad" style="font-size: 1.1rem;">📝</span>
                </div>
                <div class="taskbar-right" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <span>🔊 100%</span>
                  <span>📶 Wi-Fi</span>
                  <span>🕐 15:30</span>
                </div>
              </div>
            </div>

            <div class="desktop-feedback-box" style="margin-top: 8px; font-size: 0.95rem;">
              👉 Thử nhấp chuột vào hình nền, các biểu tượng Icon, thanh Taskbar mép dưới hoặc nút ⊞ Start để xem bí mật của từng vùng!
            </div>
          </div>

          <!-- Dải 3 thẻ giải thích chi tiết lấp đầy chân slide -->
          <div class="slide-split-3col mt-2">
            <div class="p-3 bg-white rounded" style="border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
              <div class="d-flex items-center gap-2 mb-1">
                <span style="font-size: 1.3rem;">🖼️</span>
                <strong style="font-size: 0.95rem; color: var(--text-primary);">Màn hình nền (Wallpaper)</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; margin: 0; line-height: 1.55;">
                Mặt bàn làm việc số — nơi em có thể đặt hình ảnh yêu thích và sắp xếp các tệp tài liệu học tập ngay ngắn.
              </p>
            </div>

            <div class="p-3 bg-white rounded" style="border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
              <div class="d-flex items-center gap-2 mb-1">
                <span style="font-size: 1.3rem;">📑</span>
                <strong style="font-size: 0.95rem; color: var(--text-primary);">Biểu tượng (Desktop Icons)</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; margin: 0; line-height: 1.55;">
                Các cánh cửa lối tắt — đại diện cho từng ứng dụng và thư mục, chỉ cần nhấp đúp chuột là mở được ngay!
              </p>
            </div>

            <div class="p-3 bg-white rounded" style="border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
              <div class="d-flex items-center gap-2 mb-1">
                <span style="font-size: 1.3rem;">📏</span>
                <strong style="font-size: 0.95rem; color: var(--text-primary);">Thanh tác vụ (Taskbar & Start)</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; margin: 0; line-height: 1.55;">
                Thanh công cụ mép dưới — hiển thị các ứng dụng đang chạy, đồng hồ, loa, mạng và nút ⊞ Start thần kỳ.
              </p>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 08 — APPLICATION LÀ GÌ? (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-08',
        type: 'concept',
        icon: '📦',
        eyebrow: 'SLIDE 08 · TÌM HIỂU · THẾ GIỚI ỨNG DỤNG',
        title: 'Application (Ứng dụng) là gì? — Các công cụ số đắc lực',
        badge: { text: 'Công cụ số', type: 'purple' },
        contentHtml: `
          <blockquote style="border-left: 4px solid var(--color-purple); padding-left: 14px; margin: 0 0 12px; font-size: 1.12rem; font-weight: 700; color: var(--color-purple); background: #faf5ff; padding: 10px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            “Application (Ứng dụng) là một chương trình phần mềm được tạo ra để giúp em làm một công việc cụ thể!”
          </blockquote>

          <p class="text-secondary mb-2" style="font-size: 0.98rem;">Nhấp vào từng ứng dụng bên dưới để xem chi tiết tính năng và nhiệm vụ:</p>

          <!-- 4 Khối ứng dụng chính dàn ngang toàn màn hình -->
          <div class="slide-split-2col" style="grid-template-columns: repeat(4, 1fr); gap: 16px; flex: 1;">
            <div class="app-card-interactive" 
                 data-app-name="Google Chrome" 
                 data-app-icon="🌐" 
                 data-app-role="Duyệt web & Tra cứu Internet" 
                 data-app-detail="Chrome là trình duyệt web hàng đầu thế giới, giúp em xem video bài giảng YouTube, học trực tuyến, tra cứu tài liệu học tập trên Google và đọc báo.">
              <span class="app-card-badge">Trình duyệt</span>
              <span style="font-size: 2.2rem;">🌐</span>
              <h4 style="margin: 4px 0 0; font-size: 1.05rem;">Google Chrome</h4>
              <p class="text-secondary" style="font-size: 0.85rem; margin: 0; line-height: 1.5;">Duyệt web, tra cứu tài liệu học tập và xem video.</p>
              <div class="mt-auto pt-2" style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700;">Nhấp xem chi tiết ➔</div>
            </div>

            <div class="app-card-interactive" 
                 data-app-name="Microsoft Word / Notepad" 
                 data-app-icon="📝" 
                 data-app-role="Soạn thảo & Viết văn bản" 
                 data-app-detail="Dùng để gõ chữ, viết bài văn, ghi chép nội dung bài học, định dạng cỡ chữ to nhỏ và lưu thành các tệp văn bản bài vở (.docx, .txt).">
              <span class="app-card-badge">Văn bản</span>
              <span style="font-size: 2.2rem;">📝</span>
              <h4 style="margin: 4px 0 0; font-size: 1.05rem;">Word / Notepad</h4>
              <p class="text-secondary" style="font-size: 0.85rem; margin: 0; line-height: 1.5;">Tập gõ 10 ngón, làm bài tập văn và viết nhật ký.</p>
              <div class="mt-auto pt-2" style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700;">Nhấp xem chi tiết ➔</div>
            </div>

            <div class="app-card-interactive" 
                 data-app-name="MS Paint" 
                 data-app-icon="🎨" 
                 data-app-role="Vẽ tranh & Sáng tạo đồ họa" 
                 data-app-detail="Công cụ tuyệt vời để em tập rê chuột, phối màu sắc, vẽ các khối hình học và thỏa sức sáng tạo những bức tranh kỹ thuật số đầu tay.">
              <span class="app-card-badge">Đồ họa</span>
              <span style="font-size: 2.2rem;">🎨</span>
              <h4 style="margin: 4px 0 0; font-size: 1.05rem;">MS Paint</h4>
              <p class="text-secondary" style="font-size: 0.85rem; margin: 0; line-height: 1.5;">Tập vẽ bằng chuột, tô màu và sáng tạo hình ảnh.</p>
              <div class="mt-auto pt-2" style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700;">Nhấp xem chi tiết ➔</div>
            </div>

            <div class="app-card-interactive" 
                 data-app-name="File Explorer" 
                 data-app-icon="📁" 
                 data-app-role="Quản lý thư mục & Tệp tin" 
                 data-app-detail="Chiếc tủ ngăn kéo thông minh của máy tính, giúp em quản lý các thư mục học tập, ổ đĩa C, D và tìm kiếm bài tập đã lưu.">
              <span class="app-card-badge">Hệ thống</span>
              <span style="font-size: 2.2rem;">📁</span>
              <h4 style="margin: 4px 0 0; font-size: 1.05rem;">File Explorer</h4>
              <p class="text-secondary" style="font-size: 0.85rem; margin: 0; line-height: 1.5;">Ngăn kéo quản lý file, thư mục và ảnh tải về.</p>
              <div class="mt-auto pt-2" style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700;">Nhấp xem chi tiết ➔</div>
            </div>
          </div>

          <!-- Khối câu hỏi tương tác tình huống chân slide -->
          <div class="p-3 bg-page-secondary rounded mt-2 d-flex items-center justify-between" style="border-left: 4px solid var(--color-purple);">
            <div>
              <strong>🤔 Tình huống thực tế:</strong>
              <p class="text-secondary mt-1" style="font-size: 0.95rem; margin: 0;">
                “Nếu muốn tra cứu thông tin về hành tinh Sao Hỏa, em mở ứng dụng nào? Còn nếu muốn viết một bài văn tả người bạn thân thì sao?”
              </p>
            </div>
            <span class="badge badge--purple" style="white-space: nowrap; font-size: 0.85rem;">Hỏi đáp trực tiếp</span>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 09 — HANDS-ON LAB 01: MỞ ỨNG DỤNG (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-09',
        type: 'lab',
        icon: '💻',
        eyebrow: 'SLIDE 09 · THỰC CHIẾN TẠI LỚP · TỰ MỞ ỨNG DỤNG',
        title: 'Hands-on Lab 01: Tự mở ứng dụng trên máy tính thật',
        badge: { text: 'Thực hành thao tác', type: 'energy' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: 3 bước mở chuẩn xác -->
            <div class="d-flex flex-column justify-between">
              <div>
                <p style="font-size: 1.02rem; margin: 0 0 12px;">Em hãy thực hành mở lần lượt 3 ứng dụng quen thuộc theo 3 bước:</p>

                <div class="lab-steps mb-3">
                  <div class="lab-step" data-state="pending">
                    <div class="lab-step__number">1</div>
                    <div class="lab-step__content">
                      <h4>Bước 1: Bấm nút Start</h4>
                      <p>Nhấp chuột vào biểu tượng ⊞ Start ở góc trái Taskbar hoặc bấm phím <kbd class="keycap">Win</kbd> trên bàn phím.</p>
                    </div>
                  </div>
                  <div class="lab-step" data-state="pending">
                    <div class="lab-step__number">2</div>
                    <div class="lab-step__content">
                      <h4>Bước 2: Gõ tên ứng dụng</h4>
                      <p>Gõ tên ứng dụng muốn mở (ví dụ gõ <code>chrome</code>, <code>calc</code> hoặc <code>notepad</code>).</p>
                    </div>
                  </div>
                  <div class="lab-step" data-state="pending">
                    <div class="lab-step__number">3</div>
                    <div class="lab-step__content">
                      <h4>Bước 3: Nhấn Enter để mở</h4>
                      <p>Nhấp chuột trái vào kết quả hiển thị đầu tiên hoặc bấm phím <kbd class="keycap">Enter</kbd>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded" style="background: #eff6ff; border: 1px solid rgba(59, 130, 246, 0.3);">
                <strong>💡 Mẹo siêu tốc của chuyên gia:</strong>
                <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">
                  Chỉ cần bấm phím <kbd class="keycap">Win</kbd> ➔ gõ ngay <code>calc</code> ➔ bấm <kbd class="keycap">Enter</kbd> là mở ngay máy tính trong vòng 1 giây!
                </p>
              </div>
            </div>

            <!-- Cột phải: Bảng Checklist đánh giá thành tích -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <div class="d-flex items-center justify-between mb-3">
                  <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-energy);">📋 Danh sách nhiệm vụ Lab 01</h4>
                  <span class="badge badge--energy">Thực hành trên máy thật</span>
                </div>

                <div class="checklist-group">
                  <div class="checklist-item" data-id="lab1_chrome" style="padding: 14px 16px;">
                    <div class="checklist-box"></div>
                    <div>
                      <strong class="checklist-label" style="font-size: 1rem;">1. Mở Google Chrome</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Duyệt web và tìm kiếm thông tin</p>
                    </div>
                  </div>

                  <div class="checklist-item" data-id="lab1_calc" style="padding: 14px 16px;">
                    <div class="checklist-box"></div>
                    <div>
                      <strong class="checklist-label" style="font-size: 1rem;">2. Mở Calculator (Máy tính)</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Thực hiện phép tính toán số học</p>
                    </div>
                  </div>

                  <div class="checklist-item" data-id="lab1_explorer" style="padding: 14px 16px;">
                    <div class="checklist-box"></div>
                    <div>
                      <strong class="checklist-label" style="font-size: 1rem;">3. Mở File Explorer</strong>
                      <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Quản lý tệp tin và thư mục cá nhân</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-3 bg-page-secondary rounded mt-3">
                <strong>👉 Bí kíp làm chủ:</strong>
                <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">
                  Em hãy thử thao tác bằng cả 2 cách: dùng chuột click nút Start và dùng phím tắt <kbd class="keycap">Win</kbd>!
                </p>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 10 — WINDOW LÀ GÌ? (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-10',
        type: 'concept',
        icon: '🪟',
        eyebrow: 'SLIDE 10 · GIẢI PHÃU CỬA SỔ · WINDOW ANATOMY',
        title: 'Mỗi ứng dụng sống trong một “Cửa sổ” (Window)',
        badge: { text: 'Kiến thức cốt lõi', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: Cấu trúc giải phẫu một Cửa sổ ứng dụng -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <h4 style="margin: 0 0 12px; font-size: 1.15rem; color: var(--color-primary);">📐 Giải phẫu cấu tạo một Cửa sổ (Window Anatomy)</h4>
                <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">
                  Hệ điều hành Windows có tên là "Windows" (những ô cửa sổ) chính vì mỗi ứng dụng khi mở ra đều nằm gọn trong một khung chữ nhật riêng biệt.
                </p>

                <div class="p-3 rounded" style="background: #f8fafc; border: 1.5px solid var(--border-soft); margin-bottom: 12px;">
                  <div class="d-flex items-center justify-between pb-2 mb-2" style="border-bottom: 1px solid var(--border-soft);">
                    <strong style="color: var(--color-primary);">1. Thanh tiêu đề (Title Bar)</strong>
                    <span style="font-size: 0.8rem; background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">Nằm ở trên cùng</span>
                  </div>
                  <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">
                    Hiển thị tên của ứng dụng và tên tệp tin em đang mở. Nhấp giữ chuột vào thanh này để kéo di chuyển cửa sổ quanh màn hình!
                  </p>
                </div>

                <div class="p-3 rounded" style="background: #f8fafc; border: 1.5px solid var(--border-soft);">
                  <div class="d-flex items-center justify-between pb-2 mb-2" style="border-bottom: 1px solid var(--border-soft);">
                    <strong style="color: var(--color-primary);">2. Khung nội dung (Window Body)</strong>
                    <span style="font-size: 0.8rem; background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">Vùng làm việc</span>
                  </div>
                  <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">
                    Không gian chính để xem video, gõ bài văn hoặc chơi game.
                  </p>
                </div>
              </div>

              <div class="p-3 bg-page-secondary rounded mt-3">
                <strong>🤔 Câu hỏi thử thách:</strong>
                <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">“Nếu mở cùng lúc 3 cửa sổ, làm sao em biết cửa sổ nào đang được chọn làm việc?”</p>
              </div>
            </div>

            <!-- Cột phải: 3 nút quyền lực ở góc trên bên phải -->
            <div class="d-flex flex-column gap-3 justify-between">
              <h4 style="margin: 0; font-size: 1.15rem; color: var(--text-primary);">🎮 3 nút điều khiển quyền lực ở góc phải:</h4>

              <div class="p-3 bg-white rounded d-flex items-center gap-3" style="border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                <kbd class="keycap" style="cursor: default; font-weight: 800; min-width: 48px; height: 38px; font-size: 1.2rem; text-align: center;">—</kbd>
                <div>
                  <strong style="font-size: 1rem; color: var(--text-primary);">Nút Thu nhỏ (Minimize)</strong>
                  <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0; line-height: 1.5;">
                    Tạm thời cất cửa sổ xuống thanh Taskbar để dọn chỗ cho màn hình rộng rãi. Ứng dụng vẫn chạy và không bị mất bài làm!
                  </p>
                </div>
              </div>

              <div class="p-3 bg-white rounded d-flex items-center gap-3" style="border: 1.5px solid var(--border-soft); box-shadow: var(--shadow-sm);">
                <kbd class="keycap" style="cursor: default; font-weight: 800; min-width: 48px; height: 38px; font-size: 1.1rem; text-align: center;">□</kbd>
                <div>
                  <strong style="font-size: 1rem; color: var(--text-primary);">Nút Phóng to / Thu lại (Maximize / Restore)</strong>
                  <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0; line-height: 1.5;">
                    Phóng to cửa sổ chiếm trọn màn hình để nhìn chữ to rõ nhất, hoặc nhấp lại để phục hồi kích thước cũ.
                  </p>
                </div>
              </div>

              <div class="p-3 bg-white rounded d-flex items-center gap-3" style="border: 1.5px solid rgba(244, 63, 94, 0.3); background: #fff5f5; box-shadow: var(--shadow-sm);">
                <kbd class="keycap" style="cursor: default; font-weight: 800; min-width: 48px; height: 38px; font-size: 1.1rem; text-align: center; background: var(--color-danger); color: #fff; border-color: var(--color-danger);">✖</kbd>
                <div>
                  <strong style="font-size: 1rem; color: var(--color-danger);">Nút Đóng (Close)</strong>
                  <p class="text-secondary" style="font-size: 0.88rem; margin: 2px 0 0; line-height: 1.5;">
                    Đóng và thoát hẳn ứng dụng, giải phóng bộ nhớ RAM cho máy tính. Nhớ bấm <em>Save</em> (Lưu bài) trước khi bấm nút này nhé!
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 11 — WINDOW CONTROL INTERACTIVE (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-11',
        type: 'lab',
        icon: '🎮',
        eyebrow: 'SLIDE 11 · ĐẤU TRƯỜNG TƯƠNG TÁC · 3 NÚT CỬA SỔ',
        title: 'Hãy thử điều khiển cửa sổ ảo trực tiếp',
        badge: { text: 'Thử nghiệm trực tiếp', type: 'energy' },
        contentHtml: `
          <div class="d-flex items-center justify-between mb-2">
            <p style="font-size: 1.05rem; margin: 0;">Em hãy nhấp vào 3 nút ở góc trên bên phải cửa sổ ảo dưới đây để quan sát hiệu ứng:</p>
            <span class="badge badge--energy">🖱️ Tương tác trực tiếp trên slide</span>
          </div>

          <div class="mock-window-wrapper" style="min-height: 320px; margin: 0;">
            <div class="mock-window">
              <div class="mock-window__titlebar">
                <span class="d-flex items-center gap-2 font-semibold" style="font-size: 0.95rem;">
                  🌐 Cửa sổ mô phỏng: Trình duyệt Google Chrome
                </span>
                <div class="mock-window__controls">
                  <button class="mock-win-btn" data-win-action="minimize" title="Thu nhỏ (Minimize)">—</button>
                  <button class="mock-win-btn" data-win-action="maximize" title="Phóng to (Maximize)">□</button>
                  <button class="mock-win-btn mock-win-btn--close" data-win-action="close" title="Đóng (Close)">✖</button>
                </div>
              </div>
              <div class="mock-window__body" style="min-height: 160px;">
                <span style="font-size: 2.2rem; margin-bottom: 8px;">🎬</span>
                <h4 style="margin: 0; font-size: 1.15rem;">Đây là vùng không gian nội dung của ứng dụng!</h4>
                <p class="text-secondary" style="font-size: 0.95rem; margin: 4px 0 0;">
                  Em có thể gõ văn bản, lướt web hoặc xem bài giảng. Hãy bấm thử các nút ở góc phải trên cùng!
                </p>
              </div>
            </div>

            <button class="btn btn--primary mock-reopen-btn mt-3" style="display: none; align-self: center;">
              ↻ Mở lại cửa sổ ảo
            </button>

            <div class="mock-window-feedback text-center mt-3 font-semibold text-primary" style="font-size: 0.98rem;">
              👉 Thử bấm nút [—] để thu nhỏ, [□] để phóng to, hoặc [✖] màu đỏ để đóng cửa sổ!
            </div>

            <div class="mock-taskbar mt-3">
              <span class="text-secondary" style="font-size: 0.85rem;">Thanh Taskbar:</span>
              <div class="mock-taskbar-item is-active">🌐 Google Chrome (Đang mở)</div>
            </div>
          </div>

          <!-- Lời khuyên so sánh chân slide -->
          <div class="slide-split-2col mt-3">
            <div class="p-3 bg-white rounded" style="border: 1px solid var(--border-soft);">
              <strong>➖ Khi Thu nhỏ (Minimize):</strong>
              <p class="text-secondary mt-1" style="font-size: 0.88rem; margin: 0;">Chương trình vẫn chạy dưới ngầm, video vẫn phát tiếp, nhấp vào biểu tượng dưới Taskbar là hiện lên lại ngay!</p>
            </div>
            <div class="p-3 bg-white rounded" style="border: 1px solid var(--border-soft);">
              <strong>✖ Khi Đóng (Close):</strong>
              <p class="text-secondary mt-1" style="font-size: 0.88rem; margin: 0;">Chương trình dừng hẳn, mọi dữ liệu chưa lưu sẽ bị đóng. Cần mở lại từ đầu bằng Start menu hoặc Desktop.</p>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 12 — CHUYỂN GIỮA NHIỀU ỨNG DỤNG (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-12',
        type: 'concept',
        icon: '🔄',
        eyebrow: 'SLIDE 12 · MẸO THAO TÁC · CHUYỂN ĐỔI ỨNG DỤNG',
        title: 'Khi mở cùng lúc nhiều ứng dụng thì làm sao?',
        badge: { text: 'Kỹ năng làm việc', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: Bộ chuyển đổi Taskbar ảo -->
            <div>
              <blockquote style="border-left: 4px solid var(--color-primary); padding-left: 14px; margin: 0 0 12px; font-size: 1.08rem; font-weight: 700; color: var(--color-primary);">
                “Nhấp vào biểu tượng của ứng dụng trên thanh Taskbar để đưa ứng dụng đó lên trên cùng!”
              </blockquote>

              <p class="text-secondary mb-2" style="font-size: 0.95rem;">Thử nhấp vào các nút bên dưới để chuyển qua lại giữa 3 ứng dụng đang mở:</p>

              <!-- Interactive Taskbar Switcher Demo -->
              <div class="taskbar-switcher-demo">
                <div class="mini-window-stage" style="height: 220px;">
                  <!-- Window 1: Chrome -->
                  <div class="mini-window is-active" data-app-id="chrome">
                    <div class="mini-win-titlebar">
                      <span>🌐 Google Chrome</span>
                      <span>— □ ✖</span>
                    </div>
                    <div class="mini-win-body">
                      <strong>YouTube Học tập</strong>
                      <p style="margin: 4px 0 0;">Đang phát bài giảng Tin học lớp 7...</p>
                    </div>
                  </div>

                  <!-- Window 2: Calculator -->
                  <div class="mini-window" data-app-id="calc">
                    <div class="mini-win-titlebar">
                      <span>🧮 Calculator</span>
                      <span>— □ ✖</span>
                    </div>
                    <div class="mini-win-body">
                      <strong>Máy tính phép toán</strong>
                      <p style="margin: 4px 0 0; font-size: 1.2rem; font-family: monospace;">125 x 8 = 1000</p>
                    </div>
                  </div>

                  <!-- Window 3: Explorer -->
                  <div class="mini-window" data-app-id="explorer">
                    <div class="mini-win-titlebar">
                      <span>📁 File Explorer</span>
                      <span>— □ ✖</span>
                    </div>
                    <div class="mini-win-body">
                      <strong>Thư mục cá nhân</strong>
                      <p style="margin: 4px 0 0;">Documents / Bài tập tuần 01</p>
                    </div>
                  </div>
                </div>

                <div class="taskbar-switch-bar">
                  <button class="taskbar-switch-btn is-active" data-target-app="chrome">
                    🌐 Chrome
                  </button>
                  <button class="taskbar-switch-btn" data-target-app="calc">
                    🧮 Calculator
                  </button>
                  <button class="taskbar-switch-btn" data-target-app="explorer">
                    📁 File Explorer
                  </button>
                </div>

                <div class="switcher-feedback" style="font-size: 0.95rem;">
                  ✨ Em đang xem ứng dụng: <strong>Google Chrome</strong>!
                </div>
              </div>
            </div>

            <!-- Cột phải: Mẹo phím tắt siêu tốc Alt + Tab -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <div class="d-flex items-center gap-2 mb-2">
                  <span class="badge badge--energy">🌟 Mẹo Pro siêu tốc</span>
                  <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-primary);">Tổ hợp phím thần tốc: Alt + Tab</h4>
                </div>
                <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6; margin: 8px 0 16px;">
                  Người dùng máy tính chuyên nghiệp không cần di chuột xuống Taskbar. Họ dùng tổ hợp 2 phím để chuyển ứng dụng trong chớp mắt!
                </p>

                <div class="keycap-showcase my-3" style="justify-content: center; gap: 12px;">
                  <kbd class="keycap" data-key="alt" style="font-size: 1.2rem; padding: 10px 20px;">Alt</kbd>
                  <span class="key-plus" style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary);">+</span>
                  <kbd class="keycap" data-key="tab" style="font-size: 1.2rem; padding: 10px 20px;">Tab</kbd>
                </div>

                <div class="p-3 rounded" style="background: #f8fafc; border: 1px solid var(--border-soft); line-height: 1.6; font-size: 0.9rem;">
                  <strong>Cách bấm chuẩn:</strong>
                  <ol style="margin: 4px 0 0; padding-left: 18px; color: var(--text-secondary);">
                    <li>Ngón cái tay trái giữ phím <kbd class="keycap">Alt</kbd>.</li>
                    <li>Ngón trỏ bấm nhẹ 1 lần phím <kbd class="keycap">Tab</kbd>.</li>
                    <li>Thả tay ra để vào ngay ứng dụng mong muốn!</li>
                  </ol>
                </div>
              </div>

              <div class="p-2 text-center rounded mt-3" style="background: #eff6ff; font-size: 0.85rem; color: var(--color-primary);">
                💡 <em>Em hãy thử ngay trên máy tính của mình tổ hợp phím thần kỳ này nhé!</em>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 13 — HANDS-ON LAB 02: THỰC CHIẾN (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-13',
        type: 'lab',
        icon: '🛠',
        eyebrow: 'SLIDE 13 · THỰC CHIẾN TỔNG HỢP · LÀM CHỦ MÁY TÍNH',
        title: 'Hands-on Lab 02: Em làm chủ máy tính',
        badge: { text: 'Thực hành tổng hợp', type: 'energy' },
        contentHtml: `
          <p style="font-size: 1.05rem; margin-bottom: 14px;">Em hãy hoàn thành lần lượt 6 nhiệm vụ điều khiển thực tế trên máy tính của mình:</p>

          <div class="checklist-group" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; flex: 1;">
            <div class="checklist-item" data-id="lab2_m1" style="padding: 16px;">
              <div class="checklist-box"></div>
              <div>
                <strong class="checklist-label" style="font-size: 1rem;">Nhiệm vụ A: Mở Chrome</strong>
                <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Bấm phím Win và gõ chrome ➔ Enter</p>
              </div>
            </div>

            <div class="checklist-item" data-id="lab2_m2" style="padding: 16px;">
              <div class="checklist-box"></div>
              <div>
                <strong class="checklist-label" style="font-size: 1rem;">Nhiệm vụ B: Mở Calculator</strong>
                <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Bấm phím Win và gõ calc ➔ Enter</p>
              </div>
            </div>

            <div class="checklist-item" data-id="lab2_m3" style="padding: 16px;">
              <div class="checklist-box"></div>
              <div>
                <strong class="checklist-label" style="font-size: 1rem;">Nhiệm vụ C: Chuyển qua lại Chrome & Calc</strong>
                <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Click Taskbar hoặc bấm phím Alt + Tab</p>
              </div>
            </div>

            <div class="checklist-item" data-id="lab2_m4" style="padding: 16px;">
              <div class="checklist-box"></div>
              <div>
                <strong class="checklist-label" style="font-size: 1rem;">Nhiệm vụ D: Thu nhỏ (Minimize) Calculator</strong>
                <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Bấm nút dấu trừ [—] ở góc phải cửa sổ</p>
              </div>
            </div>

            <div class="checklist-item" data-id="lab2_m5" style="padding: 16px;">
              <div class="checklist-box"></div>
              <div>
                <strong class="checklist-label" style="font-size: 1rem;">Nhiệm vụ E: Mở lại Calculator từ Taskbar</strong>
                <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Click vào biểu tượng máy tính ở mép dưới</p>
              </div>
            </div>

            <div class="checklist-item" data-id="lab2_m6" style="padding: 16px;">
              <div class="checklist-box"></div>
              <div>
                <strong class="checklist-label" style="font-size: 1rem;">Nhiệm vụ F: Đóng cả hai ứng dụng an toàn</strong>
                <p class="text-secondary" style="font-size: 0.85rem; margin: 2px 0 0;">Bấm nút [✖] màu đỏ trên cả hai cửa sổ</p>
              </div>
            </div>
          </div>

          <div class="p-3 rounded mt-3 d-flex items-center justify-between" style="background: var(--bg-page-secondary); border-left: 4px solid var(--color-energy);">
            <div>
              <strong>👉 Mục tiêu hoàn thành:</strong>
              <span class="text-secondary" style="font-size: 0.9rem; margin-left: 6px;">Em hãy tích chọn từng nhiệm vụ khi đã thực hiện thành công trên máy tính nhé!</span>
            </div>
            <span class="badge badge--success">Đạt chuẩn 6/6</span>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 14 — NHỮNG ĐIỀU KHÔNG NÊN LÀM (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-14',
        type: 'concept',
        icon: '⚠️',
        eyebrow: 'SLIDE 14 · BẢO VỆ MÁY TÍNH · THÓI QUEN VÀNG',
        title: 'Chăm sóc người bạn máy tính đúng cách',
        badge: { text: 'An toàn sử dụng', type: 'warning' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Khối KHÔNG NÊN -->
            <div class="dont-card" style="padding: 24px; border-radius: var(--radius-lg); background: #fff1f2; border: 1.5px solid rgba(244, 63, 94, 0.3); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div class="d-flex items-center gap-2 mb-3">
                  <span style="font-size: 1.8rem;">❌</span>
                  <h4 style="color: var(--color-danger); margin: 0; font-size: 1.2rem;">4 ĐIỀU CẤM KỴ — KHÔNG ĐƯỢC LÀM:</h4>
                </div>
                <ul style="padding-left: 20px; line-height: 2; font-size: 0.98rem; color: #9f1239;">
                  <li><strong>Rút phích điện đột ngột để tắt máy:</strong> Gây cháy nổ nguồn và hỏng ổ cứng chứa dữ liệu.</li>
                  <li><strong>Nhấn nút Power liên tục nhiều lần:</strong> Gây sốc điện linh kiện và lỗi hệ điều hành Windows.</li>
                  <li><strong>Đập mạnh bàn phím hoặc rê chuột thô bạo:</strong> Gây kẹt phím, hỏng cảm biến chuột quang.</li>
                  <li><strong>Để nước ngọt, đồ ăn vặt gần máy tính:</strong> Nếu đổ nước vào máy sẽ gây chập mạch cháy máy ngay lập tức!</li>
                </ul>
              </div>
              <div class="p-2 rounded mt-3" style="background: rgba(244, 63, 94, 0.1); font-size: 0.88rem; color: #881337;">
                ⚠️ <em>Hậu quả: Mất toàn bộ bài tập và tốn nhiều tiền sửa chữa!</em>
              </div>
            </div>

            <!-- Khối NÊN LÀM -->
            <div class="do-card" style="padding: 24px; border-radius: var(--radius-lg); background: #f0fdf4; border: 1.5px solid rgba(16, 185, 129, 0.3); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div class="d-flex items-center gap-2 mb-3">
                  <span style="font-size: 1.8rem;">✅</span>
                  <h4 style="color: var(--color-success); margin: 0; font-size: 1.2rem;">4 THÓI QUEN VÀNG CỦA HỌC SINH CHUẨN:</h4>
                </div>
                <ul style="padding-left: 20px; line-height: 2; font-size: 0.98rem; color: #065f46;">
                  <li><strong>Tắt máy đúng quy trình phần mềm:</strong> Luôn chọn Start ➔ Power ➔ Shut down để máy lưu bài an toàn.</li>
                  <li><strong>Rửa tay sạch và lau khô ráo:</strong> Trước khi ngồi vào bàn học để giữ bàn phím chuột luôn vệ sinh.</li>
                  <li><strong>Đặt máy nơi thông thoáng:</strong> Không để sách vở che kín khe quạt tản nhiệt của thân máy/laptop.</li>
                  <li><strong>Hỏi người lớn hoặc thầy cô:</strong> Ngay khi thấy màn hình xuất hiện thông báo lỗi lạ hoặc virus.</li>
                </ul>
              </div>
              <div class="p-2 rounded mt-3" style="background: rgba(16, 185, 129, 0.1); font-size: 0.88rem; color: #064e3b;">
                🌟 <em>Lợi ích: Máy tính luôn chạy mượt mà, bền bỉ suốt nhiều năm học tập!</em>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 15 — CÁCH TẮT MÁY (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-15',
        type: 'concept',
        icon: '🌙',
        eyebrow: 'SLIDE 15 · QUY TRÌNH AN TOÀN · TẮT MÁY CHUẨN',
        title: 'Quy trình tắt máy tính an toàn (Shut down)',
        badge: { text: 'Quy trình an toàn', type: 'primary' },
        contentHtml: `
          <!-- 3 Bước tắt máy nằm ngang toàn màn hình -->
          <div class="step-journey-3 mb-3">
            <div class="step-journey-card">
              <div class="step-journey-card__header">
                <div class="step-number-circle">1</div>
                <div>
                  <h4 style="margin: 0; font-size: 1.05rem;">Bấm nút Start (⊞)</h4>
                  <span class="text-secondary" style="font-size: 0.8rem;">Mép dưới bên trái Taskbar</span>
                </div>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.6;">
                Nhấp chuột vào biểu tượng Start hoặc nhấn phím <kbd class="keycap">Win</kbd> trên bàn phím để mở menu hệ thống.
              </p>
            </div>

            <div class="step-journey-card">
              <div class="step-journey-card__header">
                <div class="step-number-circle">2</div>
                <div>
                  <h4 style="margin: 0; font-size: 1.05rem;">Chọn biểu tượng Power (⏻)</h4>
                  <span class="text-secondary" style="font-size: 0.8rem;">Menu nguồn năng lượng</span>
                </div>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.6;">
                Bấm vào biểu tượng nút nguồn để mở ra 3 tùy chọn: Sleep (Ngủ), Restart (Khởi động lại) và Shut down (Tắt máy).
              </p>
            </div>

            <div class="step-journey-card" style="border-color: rgba(79, 70, 229, 0.4); background: #faf5ff;">
              <div class="step-journey-card__header">
                <div class="step-number-circle" style="background: var(--color-primary); color: #ffffff;">3</div>
                <div>
                  <h4 style="margin: 0; font-size: 1.05rem; color: var(--color-primary);">Chọn lệnh Shut down</h4>
                  <span class="text-secondary" style="font-size: 0.8rem;">Tắt máy an toàn</span>
                </div>
              </div>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0; line-height: 1.6;">
                Nhấp chọn lệnh <strong>Shut down</strong> và ngồi đợi đèn tín hiệu của máy tắt hẳn. Không cần bấm thêm bất kỳ nút nào khác!
              </p>
            </div>
          </div>

          <!-- Khu vực Simulator tắt máy & Lý giải song song 2 cột -->
          <div class="slide-split-2col">
            <!-- Bên trái: Trình mô phỏng tắt máy ảo -->
            <div class="shutdown-simulator" style="margin: 0; padding: 18px; border-radius: var(--radius-lg); background: #ffffff; border: 1.5px solid var(--border-soft);">
              <span class="text-secondary font-semibold" style="font-size: 0.95rem;">Thực hành trên máy ảo: Bấm nút ⊞ Start ➔ Power ➔ Shut down</span>
              <div class="sim-screen mt-2" style="height: 160px;">
                <div class="sim-screen-off-msg">
                  <span>🌙 Máy tính đã tắt hoàn toàn an toàn!</span>
                  <button class="btn btn--secondary btn--sm sim-reset-btn">Bật lại màn hình ảo</button>
                </div>

                <div class="sim-start-menu">
                  <div class="sim-menu-item">📁 Documents</div>
                  <div class="sim-menu-item">⚙️ Settings</div>
                  <button class="sim-menu-item sim-power-option">⏻ Power ▾</button>
                  <div class="sim-power-sub">
                    <button class="sim-sub-item">💤 Sleep</button>
                    <button class="sim-sub-item">🔄 Restart</button>
                    <button class="sim-sub-item sim-action-shutdown">🔴 Shut down</button>
                  </div>
                </div>

                <div class="sim-taskbar">
                  <button class="sim-start-btn" title="Menu Start">⊞ Start</button>
                </div>
              </div>
            </div>

            <!-- Bên phải: Lý giải khoa học -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <h4 style="margin: 0 0 8px; font-size: 1.1rem; color: var(--color-primary);">🔬 Vì sao máy tính cần thời gian để Shut down?</h4>
                <p class="text-secondary" style="font-size: 0.92rem; line-height: 1.6; margin: 0;">
                  Khi em chọn <strong>Shut down</strong>, máy tính phải thực hiện hàng loạt việc quan trọng:
                </p>
                <ul style="padding-left: 18px; margin: 8px 0 0; line-height: 1.7; font-size: 0.9rem; color: var(--text-secondary);">
                  <li>Lưu lại các tệp tin bài học còn dang dở vào ổ cứng.</li>
                  <li>Dọn dẹp và giải phóng bộ nhớ tạm RAM.</li>
                  <li>Đưa đầu đọc của ổ đĩa cứng về vị trí an toàn trước khi ngắt hẳn điện.</li>
                </ul>
              </div>

              <div class="p-2 rounded mt-2" style="background: #fff1f2; font-size: 0.88rem; color: #9f1239; border-left: 3px solid var(--color-danger);">
                ❌ <em>Rút dây điện đột ngột sẽ khiến máy không kịp làm những việc trên, gây mất bài và hỏng ổ cứng!</em>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 16 — QUICK QUIZ (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-16',
        type: 'quiz',
        icon: '⚡',
        eyebrow: 'SLIDE 16 · QUICK QUIZ · TRẮC NGHIỆM 5 CÂU',
        title: 'Quick Quiz: Kiểm tra phản xạ & Củng cố kiến thức',
        badge: { text: 'Củng cố kiến thức', type: 'primary' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: Câu 1, Câu 2, Câu 3 -->
            <div class="d-flex flex-column gap-3">
              <!-- Câu 1 -->
              <div class="quiz-box" data-qid="s16_q1" data-correct="1" data-hint="Desktop chính là màn hình đầu tiên xuất hiện khi máy tính bật xong.">
                <div class="quiz-question" style="font-size: 1.02rem;">Câu 1: Desktop là gì?</div>
                <div class="quiz-options">
                  <button class="quiz-option"><span>A.</span> Một trò chơi điện tử</button>
                  <button class="quiz-option"><span>B.</span> Mặt bàn làm việc chính của máy tính</button>
                  <button class="quiz-option"><span>C.</span> Bàn phím máy tính</button>
                </div>
                <div class="quiz-feedback"></div>
              </div>

              <!-- Câu 2 -->
              <div class="quiz-box" data-qid="s16_q2" data-correct="2" data-hint="Nút đóng cửa sổ có biểu tượng chữ X màu đỏ ở góc phải.">
                <div class="quiz-question" style="font-size: 1.02rem;">Câu 2: Nút nào dùng để đóng cửa sổ ứng dụng?</div>
                <div class="quiz-options">
                  <button class="quiz-option"><span>—</span> Nút dấu trừ (Minimize)</button>
                  <button class="quiz-option"><span>□</span> Nút ô vuông (Maximize)</button>
                  <button class="quiz-option"><span>X</span> Nút dấu nhân màu đỏ (Close)</button>
                </div>
                <div class="quiz-feedback"></div>
              </div>

              <!-- Câu 3 -->
              <div class="quiz-box" data-qid="s16_q3" data-correct="1" data-hint="Thiết bị có các phím chữ cái A, B, C và số 1, 2, 3...">
                <div class="quiz-question" style="font-size: 1.02rem;">Câu 3: Thiết bị nào dùng để nhập chữ và số?</div>
                <div class="quiz-options">
                  <button class="quiz-option"><span>🖱️</span> Chuột (Mouse)</button>
                  <button class="quiz-option"><span>⌨️</span> Bàn phím (Keyboard)</button>
                  <button class="quiz-option"><span>🖥️</span> Màn hình (Monitor)</button>
                </div>
                <div class="quiz-feedback"></div>
              </div>
            </div>

            <!-- Cột phải: Câu 4, Câu 5 & Bảng tổng kết -->
            <div class="d-flex flex-column gap-3 justify-between">
              <!-- Câu 4 -->
              <div class="quiz-box" data-qid="s16_q4" data-correct="1" data-hint="Minimize không đóng hẳn chương trình mà chỉ cất tạm xuống thanh tác vụ.">
                <div class="quiz-question" style="font-size: 1.02rem;">Câu 4: Nút Thu nhỏ (Minimize) có tác dụng gì?</div>
                <div class="quiz-options">
                  <button class="quiz-option"><span>A.</span> Đóng hẳn chương trình</button>
                  <button class="quiz-option"><span>B.</span> Cất tạm cửa sổ xuống Taskbar</button>
                  <button class="quiz-option"><span>C.</span> Tắt máy tính</button>
                </div>
                <div class="quiz-feedback"></div>
              </div>

              <!-- Câu 5 -->
              <div class="quiz-box" data-qid="s16_q5" data-correct="2" data-hint="Cách tắt máy đúng là thông qua Start menu để hệ điều hành lưu dữ liệu.">
                <div class="quiz-question" style="font-size: 1.02rem;">Câu 5: Cách nào tắt máy tính đúng quy trình?</div>
                <div class="quiz-options">
                  <button class="quiz-option"><span>A.</span> Rút thẳng phích cắm điện</button>
                  <button class="quiz-option"><span>B.</span> Nhấn giữ lì nút Power</button>
                  <button class="quiz-option"><span>C.</span> Chọn Start ➔ Power ➔ Shut down</button>
                </div>
                <div class="quiz-feedback"></div>
              </div>

              <div class="p-3 rounded text-center" style="background: #eff6ff; border: 1.5px solid rgba(79, 70, 229, 0.25);">
                <strong style="color: var(--color-primary); font-size: 1.05rem;">🎯 Mục tiêu: Trả lời đúng 5/5 câu hỏi!</strong>
                <p class="text-secondary mt-1" style="font-size: 0.9rem; margin: 0;">Em hãy nhấp chọn trực tiếp trên màn hình, hệ thống sẽ phát âm thanh và báo kết quả tức thì.</p>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 17 — BOSS CHALLENGE (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-17',
        type: 'boss',
        icon: '🏆',
        eyebrow: 'SLIDE 17 · BOSS CHALLENGE · 5 PHÚT TỰ DO',
        title: 'Thử thách độc lập: Em là Người điều khiển máy tính',
        badge: { text: 'Thử thách 5 phút độc lập', type: 'danger' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: Đồng hồ đếm ngược 5 phút cực lớn -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center" style="border: 2px solid rgba(244, 63, 94, 0.3);">
              <div>
                <span style="font-size: 2.8rem;">⏱️</span>
                <h3 style="color: var(--color-danger); margin: 6px 0; font-size: 1.3rem;">Đồng hồ thử thách 5 phút</h3>
                <p class="text-secondary" style="font-size: 0.95rem;">
                  Em hãy tự mình thao tác độc lập trên máy tính và bấm hoàn thành từng bước nhé!
                </p>

                <div class="boss-banner timer-widget my-3" data-duration="300" style="padding: 24px; background: #fff1f2; border: 1.5px solid rgba(244, 63, 94, 0.25);">
                  <div class="timer-display" style="font-size: 3.6rem; font-weight: 900; color: var(--color-danger); font-family: monospace; letter-spacing: 2px;">05:00</div>
                  <div class="timer-controls mt-3 d-flex justify-center gap-2">
                    <button class="btn btn--primary" data-timer-action="start" style="font-size: 1rem; padding: 10px 24px;">▶ Bắt đầu tính giờ</button>
                    <button class="btn btn--secondary" data-timer-action="pause" disabled>⏸ Tạm dừng</button>
                    <button class="btn btn--secondary" data-timer-action="reset">🔄 Đặt lại</button>
                  </div>
                </div>
              </div>

              <div class="p-2 rounded" style="background: #f8fafc; font-size: 0.88rem; color: #475569;">
                🔥 <em>Hoàn thành trước khi đồng hồ điểm 00:00 để nhận huy hiệu Siêu Cấp Điều Khiển!</em>
              </div>
            </div>

            <!-- Cột phải: 7 Nhiệm vụ độc lập -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <h4 style="margin: 0 0 12px; font-size: 1.15rem; color: var(--text-primary);">🎯 7 Bước thử thách độc lập:</h4>
                <div class="checklist-group">
                  <div class="checklist-item" data-id="boss_m1" style="padding: 10px 14px;">
                    <div class="checklist-box"></div>
                    <span class="checklist-label" style="font-size: 0.95rem;">1. Tự mở ứng dụng Google Chrome</span>
                  </div>
                  <div class="checklist-item" data-id="boss_m2" style="padding: 10px 14px;">
                    <div class="checklist-box"></div>
                    <span class="checklist-label" style="font-size: 0.95rem;">2. Tự mở ứng dụng Calculator (Máy tính)</span>
                  </div>
                  <div class="checklist-item" data-id="boss_m3" style="padding: 10px 14px;">
                    <div class="checklist-box"></div>
                    <span class="checklist-label" style="font-size: 0.95rem;">3. Chuyển màn hình về lại Chrome</span>
                  </div>
                  <div class="checklist-item" data-id="boss_m4" style="padding: 10px 14px;">
                    <div class="checklist-box"></div>
                    <span class="checklist-label" style="font-size: 0.95rem;">4. Thu nhỏ (Minimize) Chrome xuống Taskbar</span>
                  </div>
                  <div class="checklist-item" data-id="boss_m5" style="padding: 10px 14px;">
                    <div class="checklist-box"></div>
                    <span class="checklist-label" style="font-size: 0.95rem;">5. Mở lại Chrome từ thanh Taskbar</span>
                  </div>
                  <div class="checklist-item" data-id="boss_m6" style="padding: 10px 14px;">
                    <div class="checklist-box"></div>
                    <span class="checklist-label" style="font-size: 0.95rem;">6. Đóng hoàn toàn Calculator bằng nút [✖]</span>
                  </div>
                  <div class="checklist-item" data-id="boss_m7" style="padding: 10px 14px;">
                    <div class="checklist-box"></div>
                    <span class="checklist-label" style="font-size: 0.95rem;">7. Đóng hoàn toàn Chrome bằng nút [✖]</span>
                  </div>
                </div>
              </div>

              <div class="p-3 bg-page-secondary rounded mt-2">
                <strong>🌟 Thử thách mở rộng (Bonus):</strong>
                <p class="text-secondary mt-1" style="font-size: 0.88rem; margin: 0;">
                  Thử dùng tổ hợp phím <kbd class="keycap">Alt</kbd> + <kbd class="keycap">Tab</kbd> để chuyển đổi giữa 2 ứng dụng mà không cần dùng chuột!
                </p>
              </div>
            </div>
          </div>
        `
      },

      /* ==========================================================================
         SLIDE 18 — MISSION COMPLETE (FULL-SCREEN WIDESCREEN PRESENTATION)
         ========================================================================== */
      {
        id: 'slide-18',
        type: 'complete',
        icon: '🎉',
        eyebrow: 'SLIDE 18 · TỔNG KẾT BUỔI HỌC · VINH DANH',
        title: 'Hoàn thành xuất sắc Buổi 01!',
        badge: { text: 'Tổng kết & Chuẩn bị', type: 'success' },
        contentHtml: `
          <div class="slide-split-2col">
            <!-- Cột trái: Vinh danh & 5 Kỹ năng đã làm chủ -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between text-center" style="border: 2px solid rgba(16, 185, 129, 0.3);">
              <div>
                <span style="font-size: 3.2rem;">🏅</span>
                <h3 style="font-size: 1.4rem; color: #065f46; margin: 6px 0;">Chúc mừng em đã hoàn thành Buổi 01!</h3>
                <p class="text-secondary" style="font-size: 0.95rem; margin-bottom: 16px;">
                  Em đã làm quen và làm chủ các thao tác điều khiển máy tính cơ bản nhất một cách tự tin!
                </p>

                <div class="p-3 bg-page-secondary rounded text-left" style="border: 1px solid var(--border-soft);">
                  <strong style="font-size: 1rem; color: var(--text-primary);">🎯 5 Kỹ năng em đã làm chủ hôm nay:</strong>
                  <ul style="padding-left: 20px; margin: 8px 0 0; line-height: 1.8; font-size: 0.92rem; color: var(--text-secondary);">
                    <li>✅ Nhận biết và phân biệt 4 bộ phận phần cứng (Màn hình, Phím, Chuột, Thân máy).</li>
                    <li>✅ Hiểu rõ không gian màn hình Desktop, biểu tượng Icon và thanh Taskbar.</li>
                    <li>✅ Tự tìm và mở nhanh bất kỳ ứng dụng nào bằng nút Start và phím <kbd class="keycap">Win</kbd>.</li>
                    <li>✅ Điều khiển thành thạo 3 nút cửa sổ (Thu nhỏ —, Phóng to □, Đóng ✖).</li>
                    <li>✅ Nắm vững quy trình bật và tắt máy tính an toàn tuyệt đối.</li>
                  </ul>
                </div>
              </div>

              <div class="p-2 rounded mt-3" style="background: #f0fdf4; font-size: 0.88rem; color: #064e3b;">
                🎉 <em>Huy hiệu hoàn thành Session 1 đã được trao cho em!</em>
              </div>
            </div>

            <!-- Cột phải: Cảm nhận học sinh & Giới thiệu Buổi 02 -->
            <div class="slide-panel slide-panel--white d-flex flex-column justify-between">
              <div>
                <div class="p-3 rounded mb-3" style="background: #f8fafc; border: 1.5px solid var(--border-soft);">
                  <strong style="font-size: 1rem; color: var(--text-primary);">💬 Góc chia sẻ cảm nhận:</strong>
                  <p class="text-secondary mt-1" style="font-size: 0.92rem; margin: 0 0 10px;">
                    “Hôm nay điều gì làm em thấy thú vị và bất ngờ nhất về chiếc máy tính?”
                  </p>
                  <div class="d-flex flex-wrap gap-2">
                    <button class="btn btn--secondary btn--sm" onclick="this.classList.toggle('btn--primary'); window.SoundManager.playPop();">🖥️ Các bộ phận máy</button>
                    <button class="btn btn--secondary btn--sm" onclick="this.classList.toggle('btn--primary'); window.SoundManager.playPop();">🪟 Màn hình Desktop</button>
                    <button class="btn btn--secondary btn--sm" onclick="this.classList.toggle('btn--primary'); window.SoundManager.playPop();">📱 Mở ứng dụng</button>
                    <button class="btn btn--secondary btn--sm" onclick="this.classList.toggle('btn--primary'); window.SoundManager.playPop();">🎮 Điều khiển cửa sổ</button>
                    <button class="btn btn--secondary btn--sm" onclick="this.classList.toggle('btn--primary'); window.SoundManager.playPop();">⏱️ Thử thách 5 phút</button>
                  </div>
                </div>

                <div class="p-3 rounded" style="background: #eff6ff; border: 1px solid rgba(59, 130, 246, 0.3);">
                  <strong style="color: var(--color-primary); font-size: 1rem;">🚀 Bật mí Buổi học số 02 (Chủ nhật):</strong>
                  <p class="text-secondary mt-1" style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
                    Chủ đề: <strong>Chuột & Thao tác cơ bản</strong><br>
                    Em sẽ được học cách cầm chuột chuẩn công thái học, thành thạo Click, Double click, Right click, Kéo thả (Drag & Drop) và tranh tài trong <strong>Mini game luyện chuột siêu tốc</strong>!
                  </p>
                </div>
              </div>

              <div class="d-flex gap-3 mt-4">
                <a href="../index.html" class="btn btn--secondary flex-1 justify-center">🏠 Về Cổng Khóa học</a>
                <a href="lesson.html?id=gd1-w01-l02" class="btn btn--success flex-1 justify-center">Sang Buổi 02: Chuột máy tính ➔</a>
              </div>
            </div>
          </div>
        `
      }
    ]
  };

  // Đăng ký vào Global Lesson Registry
  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w01-l01'] = lessonData;
  window.currentLessonData = lessonData;
})();
