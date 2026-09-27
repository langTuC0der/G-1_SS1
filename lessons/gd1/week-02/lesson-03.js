/**
 * LESSON DATA — GĐ1 · Tuần 02 · Buổi 03
 * Chủ đề: Bàn phím & Gõ văn bản
 * Thiết kế chuẩn Slide Trình chiếu Giảng dạy 1:1 (Teacher-Led Slide Deck)
 */

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
    subtitle: 'Làm chủ các hàng phím, tư thế gõ 10 ngón, phân biệt Backspace/Delete và quy tắc gõ tiếng Việt Telex chuẩn',
    totalXP: 100,

    cheatsheet: {
      vocabulary: [
        'Keyboard',
        'Home Row',
        'Spacebar',
        'Backspace',
        'Delete',
        'Caps Lock',
        'Shift',
        'Telex'
      ],
      icons: [
        { symbol: '␣', name: 'Spacebar', desc: 'Phím cách: Tạo 1 khoảng trống giữa các từ' },
        { symbol: '⏎', name: 'Enter', desc: 'Phím xuống dòng: Hoàn tất lệnh hoặc sang đoạn mới' },
        { symbol: '⌫', name: 'Backspace', desc: 'Xóa lùi: Xóa ký tự nằm BÊN TRÁI con trỏ' },
        { symbol: '⌦', name: 'Delete', desc: 'Xóa tiến: Xóa ký tự nằm BÊN PHẢI con trỏ' },
        { symbol: '⇧', name: 'Shift', desc: 'Giữ Shift để gõ chữ HOA hoặc ký tự hàng trên (@, #, $)' },
        { symbol: '🔒', name: 'Caps Lock', desc: 'Bật/tắt chế độ gõ chữ HOA liên tục' }
      ],
      shortcuts: [
        { keys: ['Shift', 'Ký tự'], desc: 'Gõ chữ HOA tạm thời hoặc ký hiệu đặc biệt (!, @, #, $, %)' },
        { keys: ['Ctrl', 'Backspace'], desc: 'Xóa nhanh cả một từ nằm bên trái con trỏ' },
        { keys: ['Ctrl', 'Delete'], desc: 'Xóa nhanh cả một từ nằm bên phải con trỏ' },
        { keys: ['Ctrl', 'Shift'], desc: 'Chuyển nhanh chế độ gõ tiếng Việt (V) / tiếng Anh (E)' }
      ],
      troubleshooting: 'Nếu gõ chữ bị nhảy chữ hoặc không ra dấu: 1. Kiểm tra góc phải màn hình xem Unikey/EVKey đang ở icon V (Việt) hay E (Anh). 2. Bấm phím Ctrl + Shift để đổi lại thành chữ V.'
    },

    sections: [
      /* SLIDE 01: WELCOME & MISSION */
      {
        id: 'w02-l03-s01',
        type: 'concept',
        icon: '⌨️',
        eyebrow: 'BUỔI 03 · TUẦN 02',
        title: 'Chinh phục Bàn phím & Gõ văn bản chuẩn',
        badge: { type: 'primary', text: '⭐ Khởi đầu Tuần 02' },
        contentHtml: `
          <div class="hero-mission-box">
            <div class="hero-mission-content">
              <span class="badge badge--energy mb-2">Chặng 1: Nền tảng Gõ chữ</span>
              <h2 style="font-size: 1.75rem; margin-bottom: 8px;">Chào mừng em đến với Đấu trường Bàn phím!</h2>
              <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.6;">
                Ở Tuần 1, chúng mình đã làm chủ Chú chuột máy tính. Hôm nay, em sẽ bước lên nấc thang mới: <strong>Bàn phím (Keyboard)</strong> — công cụ truyền tải ý nghĩ và điều khiển máy tính nhanh nhất của mọi lập trình viên tương lai!
              </p>
              
              <div class="grid-2-col gap-3 mt-3">
                <div class="learning-target-card">
                  <div class="target-icon">🗺️</div>
                  <div>
                    <strong>Bản đồ Bàn phím</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Khám phá các hàng phím, khu vực điều khiển và 2 phím gai thần kỳ F & J.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">⚔️</div>
                  <div>
                    <strong>Đại chiến Phím Xóa</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Phân biệt rạch ròi Backspace (xóa lùi) và Delete (xóa tiến) không bao giờ nhầm lẫn.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🇻🇳</div>
                  <div>
                    <strong>Bí thuật gõ Telex</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Nằm lòng quy tắc gõ dấu tiếng Việt (s, f, r, x, j, w) và dấu câu chuẩn ngữ pháp.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🏆</div>
                  <div>
                    <strong>Tác phẩm đầu tay</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Tự tay soạn thảo đoạn văn giới thiệu bản thân chuẩn chính tả và vượt qua Boss Challenge.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-mascot-badge">
              <div style="font-size: 4rem;">⌨️</div>
              <span class="badge badge--warning mt-2 font-bold">+100 XP Thưởng</span>
              <p class="text-muted text-center mt-2" style="font-size: 0.8rem;">Dành cho Học sinh hoàn thành toàn bộ bài học</p>
            </div>
          </div>
        `
      },

      /* SLIDE 02: WARM-UP & REVIEW */
      {
        id: 'w02-l03-s02',
        type: 'warmup',
        icon: '🤔',
        eyebrow: 'KHỞI ĐỘNG 5 PHÚT',
        title: 'Ôn tập Buổi 02 & Khảo sát Bàn phím',
        badge: { type: 'warning', text: 'Phá băng & Ôn bài' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Hãy cùng thầy/cô ôn nhanh 4 thao tác chuột cốt lõi của Buổi 2 trước khi khai phá sức mạnh bàn phím nhé:
          </p>

          <div class="grid-4-col gap-3 mb-4">
            <div class="choice-card p-3" style="text-align: center;">
              <span style="font-size: 2rem;">👆</span>
              <h4 class="mt-2 mb-1" style="font-size: 0.95rem;">Single Click</h4>
              <p class="text-muted" style="font-size: 0.8rem; margin: 0;">Chuột trái: Chọn đối tượng, bấm nút</p>
            </div>
            <div class="choice-card p-3" style="text-align: center;">
              <span style="font-size: 2rem;">⚡</span>
              <h4 class="mt-2 mb-1" style="font-size: 0.95rem;">Double Click</h4>
              <p class="text-muted" style="font-size: 0.8rem; margin: 0;">Nháy đúp 2 lần nhanh: Mở ứng dụng/tệp</p>
            </div>
            <div class="choice-card p-3" style="text-align: center;">
              <span style="font-size: 2rem;">📋</span>
              <h4 class="mt-2 mb-1" style="font-size: 0.95rem;">Right Click</h4>
              <p class="text-muted" style="font-size: 0.8rem; margin: 0;">Chuột phải: Bật menu ngữ cảnh tùy chọn</p>
            </div>
            <div class="choice-card p-3" style="text-align: center;">
              <span style="font-size: 2rem;">🖐️</span>
              <h4 class="mt-2 mb-1" style="font-size: 0.95rem;">Drag & Drop</h4>
              <p class="text-muted" style="font-size: 0.8rem; margin: 0;">Nhấn giữ kéo thả di chuyển vị trí</p>
            </div>
          </div>

          <div class="callout callout--info">
            <h4 class="callout__title">💬 Khảo sát khởi động:</h4>
            <p style="margin: 0; line-height: 1.6;">
              Em đang sử dụng <strong>Bàn phím Laptop</strong> hay <strong>Bàn phím rời máy bàn (Desktop Keyboard)</strong>? Em đã từng tập gõ chữ bằng 10 ngón tay hay thường dùng "phong cách mổ cò 2 ngón trỏ"? Hãy chia sẻ cùng thầy/cô nhé!
            </p>
          </div>
        `
      },

      /* SLIDE 03: KEYBOARD ANATOMY */
      {
        id: 'w02-l03-s03',
        type: 'concept',
        icon: '🗺️',
        eyebrow: 'BẢN ĐỒ BÀN PHÍM',
        title: 'Các khu vực & Hàng phím chính',
        badge: { type: 'primary', text: 'Cấu tạo Bàn phím' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Bàn phím tiêu chuẩn (Full-size) thường có khoảng 104 phím, được phân bổ thành 4 khu vực chức năng rõ ràng:
          </p>

          <div class="grid-2-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border">
              <span class="badge badge--primary mb-2">1. Hàng phím Chức năng (Function Keys)</span>
              <h4 style="margin: 0 0 6px;">Hàng trên cùng: Từ F1 đến F12</h4>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Mỗi phím đảm nhiệm lối tắt nhanh trong hệ thống: F1 (Trợ giúp), F2 (Đổi tên file), F5 (Tải lại trang web), F11 (Toàn màn hình), F12 (Lưu tệp mới).
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--energy mb-2">2. Khu vực Gõ chữ & Số (Alphanumeric Keys)</span>
              <h4 style="margin: 0 0 6px;">Trái tim của bàn phím: 4 hàng phím chính</h4>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Bao gồm hàng phím số (1 đến 0), hàng phím trên (Q-W-E-R-T-Y), hàng phím cơ sở Home Row (A-S-D-F-G-H-J-K-L) và hàng phím dưới (Z-X-C-V-B-N-M).
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--warning mb-2">3. Cụm phím Điều khiển (Control & Navigation)</span>
              <h4 style="margin: 0 0 6px;">Enter, Spacebar, Shift, Ctrl, Alt, 4 mũi tên</h4>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Dùng để điều khiển luồng văn bản, di chuyển con trỏ (Lên, Xuống, Trái, Phải), Home (về đầu dòng), End (xuống cuối dòng), Page Up / Page Down.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--success mb-2">4. Bàn phím số phụ (Numpad)</span>
              <h4 style="margin: 0 0 6px;">Khối số bên tay phải (Bàn phím máy tính để bàn)</h4>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Sắp xếp dạng máy tính cầm tay giúp người dùng nhập liệu số liệu và tính toán cộng trừ nhân chia cực nhanh với phím NumLock.
              </p>
            </div>
          </div>

          <div class="p-3 rounded" style="background: #eff6ff; border: 1px solid rgba(59, 130, 246, 0.3);">
            <strong class="text-primary">💡 Em có biết:</strong>
            <span class="text-secondary" style="font-size: 0.9rem;">
              Bàn phím chúng ta đang dùng gọi là bàn phím <strong>QWERTY</strong> — đặt theo 6 chữ cái đầu tiên ở hàng phím trên cùng!
            </span>
          </div>
        `
      },

      /* SLIDE 04: HOME ROW & F, J KEYS */
      {
        id: 'w02-l03-s04',
        type: 'concept',
        icon: '🖐️',
        eyebrow: 'CÔNG THÁI HỌC BÀN PHÍM',
        title: 'Hàng cơ sở (Home Row) & 2 phím gai đặc biệt F – J',
        badge: { type: 'energy', text: 'Tư thế 10 ngón' },
        contentHtml: `
          <div class="grid-2-col gap-4 items-center">
            <div>
              <h3 style="margin-top: 0; color: var(--color-primary);">Vạch xuất phát của 10 ngón tay</h3>
              <p class="text-secondary" style="line-height: 1.6;">
                Hàng phím cơ sở (Home Row) là hàng phím nằm ở chính giữa bàn phím: <strong>A - S - D - F - G - H - J - K - L</strong>. Khi bắt đầu gõ, 10 ngón tay luôn luôn nghỉ ở hàng này!
              </p>

              <div class="p-3 rounded mb-3" style="background: var(--bg-page-secondary); border-left: 4px solid var(--color-primary);">
                <strong style="font-size: 0.95rem;">🖐️ Phân chia 2 bàn tay:</strong>
                <ul style="margin: 6px 0 0 20px; padding: 0; font-size: 0.88rem; line-height: 1.7;" class="text-secondary">
                  <li><strong>Tay trái:</strong> Ngón út đặt ở phím <strong>A</strong>, áp út ở <strong>S</strong>, giữa ở <strong>D</strong>, ngón trỏ ở <strong>F</strong>.</li>
                  <li><strong>Tay phải:</strong> Ngón trỏ đặt ở phím <strong>J</strong>, giữa ở <strong>K</strong>, áp út ở <strong>L</strong>, ngón út ở <strong>;</strong></li>
                  <li><strong>Hai ngón tay cái:</strong> Nhẹ nhàng nghỉ trên thanh dài <strong>Spacebar (Phím cách)</strong>.</li>
                </ul>
              </div>

              <div class="callout callout--warning">
                <h4 class="callout__title">🔍 Bí mật 2 chiếc gai nhỏ ở phím F và J:</h4>
                <p style="margin: 0; font-size: 0.88rem; line-height: 1.6;">
                  Em hãy dùng 2 ngón tay trỏ sờ nhẹ lên phím <strong>F</strong> và <strong>J</strong> trên bàn phím thật của mình xem nào! Em có thấy một vệt gờ nhỏ nhô lên không? Hai chiếc gai đó giúp em <strong>định vị bàn tay trong bóng tối mà không cần nhìn bàn phím</strong>!
                </p>
              </div>
            </div>

            <div class="text-center p-4 bg-card rounded border">
              <h4 class="mb-3 text-secondary">Mô phỏng Hàng phím cơ sở (Home Row)</h4>
              <div class="d-flex justify-center gap-2 mb-3">
                <kbd class="keycap" style="background: #fef3c7;">A<br><small style="font-size: 0.65rem; color: #92400e;">Út L</small></kbd>
                <kbd class="keycap" style="background: #fef3c7;">S<br><small style="font-size: 0.65rem; color: #92400e;">Áp L</small></kbd>
                <kbd class="keycap" style="background: #fef3c7;">D<br><small style="font-size: 0.65rem; color: #92400e;">Giữa L</small></kbd>
                <kbd class="keycap" style="background: #dbeafe; border-bottom-color: #2563eb; transform: scale(1.08); font-weight: 800;">F ⎽<br><small style="font-size: 0.65rem; color: #1d4ed8;">Trỏ L (Gai)</small></kbd>
                <kbd class="keycap">G</kbd>
                <kbd class="keycap">H</kbd>
                <kbd class="keycap" style="background: #dbeafe; border-bottom-color: #2563eb; transform: scale(1.08); font-weight: 800;">J ⎽<br><small style="font-size: 0.65rem; color: #1d4ed8;">Trỏ R (Gai)</small></kbd>
                <kbd class="keycap" style="background: #d1fae5;">K<br><small style="font-size: 0.65rem; color: #065f46;">Giữa R</small></kbd>
                <kbd class="keycap" style="background: #d1fae5;">L<br><small style="font-size: 0.65rem; color: #065f46;">Áp R</small></kbd>
                <kbd class="keycap" style="background: #d1fae5;">;<br><small style="font-size: 0.65rem; color: #065f46;">Út R</small></kbd>
              </div>
              <div class="d-flex justify-center">
                <kbd class="keycap" style="width: 260px; background: #f3f4f6;">SPACEBAR (2 Ngón Cái)</kbd>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 05: SPACEBAR & ENTER */
      {
        id: 'w02-l03-s05',
        type: 'concept',
        icon: '␣',
        eyebrow: 'ĐIỀU HƯỚNG VĂN BẢN',
        title: 'Phím Spacebar & Phím Enter',
        badge: { type: 'primary', text: '2 Phím cơ bản' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-3 mb-2">
                <kbd class="keycap" style="min-width: 120px; text-align: center; font-size: 1.1rem;">Spacebar ␣</kbd>
                <h3 style="margin: 0;">Phím Cách (Phím dài nhất)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Nằm ở hàng dưới cùng, dùng để chèn <strong>đúng 1 khoảng trắng</strong> ngăn cách giữa hai từ viết liền nhau.
              </p>
              <div class="callout callout--danger mt-3">
                <strong>🚫 Lỗi cấm kỵ của người mới học:</strong>
                <p style="margin: 4px 0 0; font-size: 0.85rem;">
                  Không bao giờ bấm phím Space nhiều lần liên tiếp để thụt lề hay đẩy chữ sang phải! (Muốn thụt đầu dòng, chúng mình sẽ dùng phím <strong>Tab</strong> chuyên nghiệp).
                </p>
              </div>
            </div>

            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-3 mb-2">
                <kbd class="keycap" style="min-width: 90px; text-align: center; font-size: 1.1rem;">Enter ⏎</kbd>
                <h3 style="margin: 0;">Phím Xuống Dòng & Thực thi</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Có biểu tượng mũi tên quặp xuống và sang trái. Có 2 nhiệm vụ tối quan trọng:
              </p>
              <ul style="margin: 8px 0 0 20px; padding: 0; font-size: 0.9rem; line-height: 1.6;" class="text-secondary">
                <li><strong>Trong soạn thảo văn bản:</strong> Kết thúc đoạn văn hiện tại và đưa con trỏ xuống đầu dòng mới.</li>
                <li><strong>Trong duyệt web & ứng dụng:</strong> Đồng ý thực hiện lệnh (như gửi tin nhắn, tìm kiếm trên Google).</li>
              </ul>
            </div>
          </div>
        `
      },

      /* SLIDE 06: SHIFT & CAPS LOCK */
      {
        id: 'w02-l03-s06',
        type: 'concept',
        icon: '⇧',
        eyebrow: 'CHỮ HOA & KÝ TỰ ĐẶC BIỆT',
        title: 'Khi nào dùng Shift? Khi nào dùng Caps Lock?',
        badge: { type: 'energy', text: 'Kỹ thuật gõ hoa' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Rất nhiều bạn mới làm quen máy tính thường bật Caps Lock lên để gõ 1 chữ cái đầu câu, rồi lại bấm Caps Lock lần nữa để tắt. Đó là thói quen làm chậm tốc độ gõ rất nhiều!
          </p>

          <div class="grid-2-col gap-4 mb-4">
            <div class="p-3 bg-card rounded border" style="border-top: 4px solid var(--color-primary);">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Shift ⇧</kbd>
                <h3 style="margin: 0; font-size: 1.15rem;">Giữ Shift: Gõ 1 chữ HOA tạm thời</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                <strong>Công thức:</strong> Dùng ngón út tay này giữ phím Shift + ngón tay kia nhấn phím chữ cần viết hoa ➔ Buông tay ra chữ tiếp theo sẽ tự động trở lại chữ thường!
              </p>
              <div class="p-2 rounded bg-page-secondary mt-2" style="font-size: 0.85rem;">
                <strong>Ký tự hàng trên:</strong> Giữ Shift + gõ số để ra các ký hiệu: <code>Shift + 1 = !</code>, <code>Shift + 2 = @</code>, <code>Shift + 8 = *</code>, <code>Shift + 9 = (</code>, <code>Shift + 0 = )</code>
              </div>
            </div>

            <div class="p-3 bg-card rounded border" style="border-top: 4px solid var(--color-warning);">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Caps Lock 🔒</kbd>
                <h3 style="margin: 0; font-size: 1.15rem;">Bật Caps Lock: Gõ cả đoạn HOA</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Chỉ dùng khi em cần viết một tiêu đề to lớn hoặc một cụm từ viết tắt dài: <strong>VIỆT NAM</strong>, <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA</strong>.
              </p>
              <div class="p-2 rounded bg-page-secondary mt-2" style="font-size: 0.85rem;">
                <strong>Đèn báo:</strong> Khi bật, trên bàn phím sẽ sáng đèn LED nhỏ ở phím Caps Lock hoặc góc trên bên phải bàn phím.
              </div>
            </div>
          </div>

          <div class="callout callout--success">
            <strong class="text-success">🎯 Mẹo vàng ghi nhớ:</strong> Viết hoa 1 chữ cái đầu câu hoặc tên riêng (Hà Nội, Nam, Tuấn) ➔ <strong>DÙNG PHÍM SHIFT</strong>!
          </div>
        `
      },

      /* SLIDE 07: BACKSPACE VS DELETE */
      {
        id: 'w02-l03-s07',
        type: 'concept',
        icon: '⚔️',
        eyebrow: 'ĐẠI CHIẾN PHÍM XÓA',
        title: 'Phân biệt Backspace (Lùi) vs Delete (Tiến)',
        badge: { type: 'danger', text: 'Cốt lõi dễ nhầm lẫn' },
        contentHtml: `
          <div class="text-center mb-4">
            <h3 style="color: var(--color-primary); margin-bottom: 6px;">Vị trí của Con Trỏ Nhấp Nháy (Text Cursor <code>|</code>)</h3>
            <p class="text-secondary" style="max-width: 600px; margin: 0 auto; font-size: 0.95rem;">
              Vạch thẳng đứng nhấp nháy trên màn hình chính là ranh giới phân định sức mạnh của 2 phím xóa:
            </p>
          </div>

          <div class="p-4 bg-card rounded border mb-4 text-center">
            <div style="font-size: 1.75rem; letter-spacing: 2px; font-family: monospace; padding: 16px; background: var(--bg-page-secondary); border-radius: 8px; display: inline-block;">
              Lập trình <span style="background: #fecaca; color: #b91c1c; padding: 2px 4px; border-radius: 4px;">L</span><span style="border-right: 3px solid #2563eb; animation: blink 1s infinite;"></span><span style="background: #bfdbfe; color: #1d4ed8; padding: 2px 4px; border-radius: 4px;">ớ</span>p 7
            </div>

            <div class="d-flex justify-center gap-5 mt-4">
              <div style="max-width: 280px; text-align: center;">
                <kbd class="keycap mb-2" style="background: #fee2e2; border-bottom-color: #dc2626; font-size: 1.1rem;">⌫ Backspace</kbd>
                <div style="font-weight: 700; color: #dc2626;">XÓA LÙI VỀ BÊN TRÁI ⬅️</div>
                <p class="text-muted mt-1" style="font-size: 0.85rem;">Bấm Backspace sẽ xóa chữ <strong>"L"</strong> (chữ nằm ngay trước con trỏ).</p>
              </div>

              <div style="max-width: 280px; text-align: center;">
                <kbd class="keycap mb-2" style="background: #dbeafe; border-bottom-color: #2563eb; font-size: 1.1rem;">⌦ Delete</kbd>
                <div style="font-weight: 700; color: #2563eb;">XÓA TIẾN VỀ BÊN PHẢI ➡️</div>
                <p class="text-muted mt-1" style="font-size: 0.85rem;">Bấm Delete sẽ xóa chữ <strong>"ớ"</strong> (chữ nằm ngay sau con trỏ).</p>
              </div>
            </div>
          </div>

          <div class="p-3 rounded" style="background: #fffbeb; border: 1px solid #fde68a;">
            <strong style="color: #92400e;">💡 Thao tác nâng cao của Pro:</strong>
            <span class="text-secondary" style="font-size: 0.88rem;">
              Nếu muốn xóa một đoạn văn dài, em hãy dùng chuột kéo bôi đen cả đoạn đó rồi bấm phím <strong>Backspace</strong> hoặc <strong>Delete</strong> đúng 1 lần là xong!
            </span>
          </div>
        `
      },

      /* SLIDE 08: UNIKEY & EVKEY */
      {
        id: 'w02-l03-s08',
        type: 'concept',
        icon: '🇻🇳',
        eyebrow: 'BỘ GÕ TIẾNG VIỆT',
        title: 'Bí mật đằng sau Unikey & EVKey',
        badge: { type: 'primary', text: 'Phần mềm gõ dấu' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Bàn phím vật lý của chúng ta được thiết kế theo tiếng Anh (không có phím riêng cho chữ ă, â, đ, ê, ô, ơ, ư). Vì thế, người Việt Nam đã sáng tạo ra <strong>Bộ gõ tiếng Việt</strong> để gõ chữ tiếng mẹ đẻ!
          </p>

          <div class="grid-2-col gap-4 mb-4">
            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <span style="font-size: 2rem;">🔤</span>
                <h4 style="margin: 0;">1. Bảng mã chuẩn quốc tế: Unicode</h4>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Luôn luôn chọn <strong>Unicode dựng sẵn</strong>. Đây là bảng mã tiêu chuẩn của toàn thế giới, giúp chữ tiếng Việt của em gửi lên mạng, Facebook, Zalo, Word hay lập trình Scratch/Python đều không bị lỗi font biến thành ô vuông ký tự lạ!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <span style="font-size: 2rem;">⚡</span>
                <h4 style="margin: 0;">2. Kiểu gõ số 1 hiện nay: Telex</h4>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Kiểu gõ Telex sử dụng chính các phím chữ cái lặp lại hoặc các phụ âm ít dùng (s, f, r, x, j, w) để biến hóa thành dấu tiếng Việt nhanh chóng mà không cần với tay lên hàng phím số (như kiểu VNI).
              </p>
            </div>
          </div>

          <div class="callout callout--info">
            <h4 class="callout__title">👀 Nhìn xuống khay đồng hồ ở góc phải màn hình máy tính:</h4>
            <div class="d-flex items-center gap-3 mt-2">
              <span class="badge badge--danger" style="font-size: 1.1rem; padding: 6px 12px; font-weight: 800;">V</span>
              <span class="text-secondary" style="font-size: 0.9rem;">Biểu tượng chữ <strong>V (Đỏ)</strong> nghĩa là đang bật gõ Tiếng Việt.</span>
            </div>
            <div class="d-flex items-center gap-3 mt-2">
              <span class="badge badge--primary" style="font-size: 1.1rem; padding: 6px 12px; font-weight: 800;">E</span>
              <span class="text-secondary" style="font-size: 0.9rem;">Biểu tượng chữ <strong>E (Xanh)</strong> nghĩa là đang ở chế độ gõ Tiếng Anh (không dấu). Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Shift</kbd> để đổi qua lại!</span>
            </div>
          </div>
        `
      },

      /* SLIDE 09: TELEX RULES TABLE */
      {
        id: 'w02-l03-s09',
        type: 'concept',
        icon: '📜',
        eyebrow: 'BẢNG QUY TẮC VÀNG',
        title: 'Quy tắc gõ dấu tiếng Việt kiểu Telex',
        badge: { type: 'energy', text: 'Học thuộc lòng' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div>
              <h4 class="mb-2 text-primary">1. Bảng 5 Dấu Thanh Cơ Bản</h4>
              <div class="table-responsive">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                  <thead>
                    <tr style="background: var(--bg-page-secondary); text-align: left;">
                      <th style="padding: 8px 12px; border: 1px solid var(--border-soft);">Dấu thanh</th>
                      <th style="padding: 8px 12px; border: 1px solid var(--border-soft);">Phím gõ</th>
                      <th style="padding: 8px 12px; border: 1px solid var(--border-soft);">Ví dụ gõ</th>
                      <th style="padding: 8px 12px; border: 1px solid var(--border-soft);">Kết quả</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Dấu Sắc (ˊ)</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">s</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>cas</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #2563eb;">cá</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Dấu Huyền (ˋ)</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">f</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>caf</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #2563eb;">cà</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Dấu Hỏi (ˀ)</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">r</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>car</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #2563eb;">cả</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Dấu Ngã (~)</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">x</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>cax</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #2563eb;">cã</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Dấu Nặng (.)</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">j</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>caj</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #2563eb;">cạ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 class="mb-2 text-primary">2. Bảng Chữ Cái Có Mũ & Móc</h4>
              <div class="table-responsive">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                  <thead>
                    <tr style="background: var(--bg-page-secondary); text-align: left;">
                      <th style="padding: 8px 12px; border: 1px solid var(--border-soft);">Chữ cái</th>
                      <th style="padding: 8px 12px; border: 1px solid var(--border-soft);">Phím gõ</th>
                      <th style="padding: 8px 12px; border: 1px solid var(--border-soft);">Ví dụ gõ</th>
                      <th style="padding: 8px 12px; border: 1px solid var(--border-soft);">Kết quả</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Chữ ă</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">aw</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>anw</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #10b981;">ăn</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Chữ â / ê / ô</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">aa / ee / oo</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>coom</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #10b981;">cơm (hoặc cô)</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Chữ ơ / ư</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">ow / uw / w</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>tuw</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #10b981;">tư</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Chữ đ</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">dd</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>ddi</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #10b981;">đi</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><strong>Xóa dấu lỡ gõ</strong></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><kbd class="keycap">z</kbd></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft);"><code>toasz</code></td>
                      <td style="padding: 8px 12px; border: 1px solid var(--border-soft); font-weight: 700; color: #f59e0b;">toa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 10: PUNCTUATION RULES */
      {
        id: 'w02-l03-s10',
        type: 'concept',
        icon: '✍️',
        eyebrow: 'CHUẨN MỰC CHÍNH TẢ',
        title: 'Quy tắc đặt Dấu Câu trong Văn bản',
        badge: { type: 'warning', text: 'Chính tả chuẩn' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Một văn bản chuyên nghiệp của học sinh xuất sắc luôn tuân thủ nguyên tắc vàng về khoảng trắng (Space) với các dấu câu:
          </p>

          <div class="grid-2-col gap-4 mb-4">
            <div class="p-3 bg-card rounded border" style="border-left: 4px solid #10b981;">
              <h4 style="color: #10b981; margin: 0 0 8px;">✅ QUY TẮC ĐÚNG CHUẨN:</h4>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Các dấu chấm (<code>.</code>), dấu phẩy (<code>,</code>), hai chấm (<code>:</code>), chấm phẩy (<code>;</code>), chấm hỏi (<code>?</code>), chấm than (<code>!</code>) phải:
              </p>
              <ul style="margin: 8px 0 0 20px; padding: 0; font-size: 0.88rem; line-height: 1.6;">
                <li><strong>Viết DÍNH LIỀN</strong> với từ đứng ngay trước nó.</li>
                <li><strong>CÁCH 1 KHOẢNG TRẮNG (Space)</strong> rồi mới viết từ tiếp theo!</li>
              </ul>
              <div class="p-2 rounded mt-2" style="background: #ecfdf5; font-family: monospace; font-size: 0.88rem;">
                "Hôm nay trời đẹp, em đi học máy tính."
              </div>
            </div>

            <div class="p-3 bg-card rounded border" style="border-left: 4px solid #ef4444;">
              <h4 style="color: #ef4444; margin: 0 0 8px;">❌ CÁC LỖI SAI PHỔ BIẾN CẦN TRÁNH:</h4>
              <ul style="margin: 8px 0 0 20px; padding: 0; font-size: 0.88rem; line-height: 1.7;" class="text-secondary">
                <li>Cách khoảng trắng trước dấu: <code>Hôm nay trời đẹp ,em đi học</code> ❌</li>
                <li>Dính liền từ sau dấu: <code>Hôm nay trời đẹp,em đi học.rất vui!</code> ❌</li>
                <li>Bấm 2-3 dấu cách liên tục: <code>Em&nbsp;&nbsp;&nbsp;&nbsp;học lớp 7</code> ❌</li>
              </ul>
            </div>
          </div>

          <div class="p-3 rounded bg-page-secondary border">
            <strong>Dấu ngoặc đơn <code>( )</code> và Dấu ngoặc kép <code>" "</code>:</strong>
            <span class="text-secondary" style="font-size: 0.88rem;">
              Ký tự mở ngoặc <code>(</code> phải viết cách từ trước và dính liền từ sau. Ký tự đóng ngoặc <code>)</code> phải dính liền từ trước và cách từ sau! Ví dụ: <code>Thủ đô Hà Nội (Việt Nam) rất đẹp.</code>
            </span>
          </div>
        `
      },

      /* SLIDE 11: INTERACTIVE TYPING SANDBOX */
      {
        id: 'w02-l03-s11',
        type: 'lab',
        icon: '💻',
        eyebrow: 'THỰC HÀNH TƯƠNG TÁC',
        title: 'Khu vực Luyện gõ Trực tiếp (Typing Sandbox)',
        badge: { type: 'energy', text: 'Tương tác Web' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Em hãy bấm chuột vào ô nhập văn bản bên dưới và thử gõ một vài câu tiếng Việt để kiểm tra tốc độ và độ chuẩn xác của bộ gõ nhé:
          </p>

          <div class="typing-sandbox-card p-4 bg-card rounded border mb-4">
            <div class="d-flex justify-between items-center mb-3">
              <div class="d-flex items-center gap-2">
                <span class="badge badge--primary">Câu mẫu luyện tập:</span>
                <strong style="color: var(--color-primary); font-size: 1.05rem;">"Học sinh lớp 7 làm chủ bàn phím máy tính."</strong>
              </div>
              <button class="btn btn--secondary btn--sm" onclick="const input = document.getElementById('demo-typing-input'); if(input) { input.value = ''; input.focus(); }">Xóa trắng ô</button>
            </div>

            <textarea 
              id="demo-typing-input" 
              rows="3" 
              placeholder="👉 Bấm chuột vào đây và bắt đầu gõ thử câu mẫu bên trên..."
              style="width: 100%; padding: 12px; font-size: 1.1rem; border: 2px solid var(--border-soft); border-radius: 8px; font-family: inherit; resize: none; transition: border-color 0.2s;"
              onfocus="this.style.borderColor='var(--color-primary)';"
              onblur="this.style.borderColor='var(--border-soft)';"
              oninput="
                const val = this.value;
                const counter = document.getElementById('typing-char-count');
                if (counter) counter.innerText = val.length + ' ký tự | ' + (val.trim() ? val.trim().split(/\\s+/).length : 0) + ' từ';
                if (val.includes('Học sinh lớp 7 làm chủ bàn phím máy tính.')) {
                  const alert = document.getElementById('typing-success-msg');
                  if (alert) alert.style.display = 'block';
                  if (window.SoundManager) window.SoundManager.playSuccess();
                }
              "
            ></textarea>

            <div class="d-flex justify-between items-center mt-2 text-muted" style="font-size: 0.85rem;">
              <span id="typing-char-count">0 ký tự | 0 từ</span>
              <span>Gợi ý gõ Telex: <code>Hocj sinh lowps 7 lamf chur banf phims mayis tinhs.</code></span>
            </div>

            <div id="typing-success-msg" class="callout callout--success mt-3" style="display: none;">
              <strong>🎉 Xuất sắc!</strong> Em đã gõ hoàn toàn chính xác câu mẫu tiếng Việt có dấu chuẩn!
            </div>
          </div>
        `
      },

      /* SLIDE 12: HANDS-ON LAB 01 */
      {
        id: 'w02-l03-s12',
        type: 'lab',
        icon: '📝',
        eyebrow: 'THỰC HÀNH MÁY THẬT',
        title: 'Hands-on Lab 01: Mở Notepad & Kiểm tra Unikey',
        badge: { type: 'energy', text: 'Thực hành 10 phút' },
        contentHtml: `
          <div class="callout callout--info mb-3">
            <h4 class="callout__title">🎯 Nhiệm vụ của em trên màn hình máy tính cá nhân:</h4>
            <p style="margin: 0; line-height: 1.6;">
              Em hãy chia sẻ màn hình với Thầy/Cô và thực hiện chuỗi thao tác sau:
            </p>
          </div>

          <div class="checklist-suite">
            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Bước 1:</strong> Bấm phím <kbd class="keycap">Win</kbd> trên bàn phím, gõ từ <code>notepad</code> và bấm <kbd class="keycap">Enter</kbd> để mở ứng dụng Sổ tay Notepad.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Bước 2:</strong> Nhìn xuống góc phải Taskbar (gần đồng hồ), xác nhận icon Unikey/EVKey đang là chữ <strong>V</strong> màu đỏ.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Bước 3:</strong> Gõ dòng chữ đầu tiên: <code>Xin chào! Em là học sinh lớp 7.</code>
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Bước 4:</strong> Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Shift</kbd> để chuyển icon sang chữ <strong>E</strong>, gõ thử một từ để thấy sự khác biệt, rồi bấm lại để về chữ <strong>V</strong>.
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 13: HANDS-ON LAB 02 */
      {
        id: 'w02-l03-s13',
        type: 'lab',
        icon: '⚡',
        eyebrow: 'LUYỆN TẬP GÕ DẤU',
        title: 'Hands-on Lab 02: Luyện tập 5 Bộ Từ Thách Thức',
        badge: { type: 'warning', text: 'Thử thách tốc độ' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Hãy mở file Notepad vừa tạo và gõ chính xác 5 dòng danh sách sau, chú ý không để dính lỗi font hay gõ nhầm dấu:
          </p>

          <div class="grid-2-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border">
              <strong class="text-primary">1. Nhóm từ có Mũ & Dấu ngã:</strong>
              <div class="p-2 rounded bg-page-secondary mt-1 font-mono" style="font-size: 1rem;">
                Chiếc thuyền bồng bềnh giữa bão lũ.
              </div>
              <small class="text-muted">Gợi ý Telex: <code>Chieecs thuyeenf boongf beenfh giuwxa baox lux.</code></small>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong class="text-primary">2. Nhóm từ có Chữ Đ & Dấu nặng:</strong>
              <div class="p-2 rounded bg-page-secondary mt-1 font-mono" style="font-size: 1rem;">
                Đồng hồ quả lắc điểm mười hai giờ.
              </div>
              <small class="text-muted">Gợi ý Telex: <code>Ddoongf hoof quar lawsc ddieemr muowfi hai giowf.</code></small>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong class="text-primary">3. Nhóm từ có Ký hiệu & Số:</strong>
              <div class="p-2 rounded bg-page-secondary mt-1 font-mono" style="font-size: 1rem;">
                Giá vé: 50.000 VNĐ (giảm giá 20% cho học sinh).
              </div>
              <small class="text-muted">Dùng phím Shift để gõ dấu hai chấm <code>:</code>, phần trăm <code>%</code> và ngoặc đơn <code>()</code>.</small>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong class="text-primary">4. Nhóm từ Lập trình Tin học:</strong>
              <div class="p-2 rounded bg-page-secondary mt-1 font-mono" style="font-size: 1rem;">
                Thuật toán, Biến số, Vòng lặp, Gỡ lỗi (Debug).
              </div>
              <small class="text-muted">Các thuật ngữ quen thuộc sẽ theo em suốt 36 tuần học!</small>
            </div>
          </div>
        `
      },

      /* SLIDE 14: TROUBLESHOOTING */
      {
        id: 'w02-l03-s14',
        type: 'concept',
        icon: '🩺',
        eyebrow: 'BÁC SĨ MÁY TÍNH',
        title: '4 Sự Cố Bàn Phím Thường Gặp & Cách Trị',
        badge: { type: 'danger', text: 'Bảo trì & Khắc phục' },
        contentHtml: `
          <div class="grid-2-col gap-3">
            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-1">
                <span class="badge badge--danger">Bệnh 1</span>
                <strong>Gõ chữ bị nhân đôi: <code>hhoocc ssiinhh</code></strong>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                <strong>Nguyên nhân & Cách sửa:</strong> Máy đang bật 2 bộ gõ cùng lúc (Ví dụ vừa bật Unikey vừa bật bộ gõ tiếng Việt mặc định của Windows). Em hãy tắt 1 trong 2 đi là hết ngay!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-1">
                <span class="badge badge--danger">Bệnh 2</span>
                <strong>Gõ số bên bàn phím phụ (Numpad) không ra số</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                <strong>Nguyên nhân & Cách sửa:</strong> Phím khóa số <strong>NumLock</strong> đang bị tắt. Chỉ cần bấm phím <code>Num Lock</code> trên bàn phím để đèn sáng lên là gõ số bình thường.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-1">
                <span class="badge badge--danger">Bệnh 3</span>
                <strong>Gõ chữ tiếng Việt mà ra chữ tiếng Anh không dấu</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                <strong>Nguyên nhân & Cách sửa:</strong> Bộ gõ đang ở chế độ chữ <strong>E</strong>. Bấm nhanh tổ hợp phím <code>Ctrl + Shift</code> hoặc nhấp chuột vào icon đổi sang chữ <strong>V</strong> màu đỏ.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-1">
                <span class="badge badge--danger">Bệnh 4</span>
                <strong>Vừa gõ chữ mới thì chữ cũ bên cạnh tự biến mất!</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                <strong>Nguyên nhân & Cách sửa:</strong> Em lỡ tay chạm vào phím <strong>Insert (Ins)</strong> kích hoạt chế độ gõ đè (Overwrite). Chỉ cần bấm phím <code>Insert</code> lại 1 lần nữa để trở về chế độ chèn bình thường!
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 15: CHALLENGE - INTRODUCE YOURSELF */
      {
        id: 'w02-l03-s15',
        type: 'practice',
        icon: '🏆',
        eyebrow: 'THỬ THÁCH SÁNG TẠO',
        title: 'Sản phẩm Buổi 03: Đoạn văn Giới thiệu Bản thân',
        badge: { type: 'energy', text: 'Tác phẩm đầu tay' },
        contentHtml: `
          <div class="callout callout--success mb-3">
            <h4 class="callout__title">📜 Thử thách Tác phẩm Văn bản Đầu tay (10 phút):</h4>
            <p style="margin: 0; line-height: 1.6;">
              Em hãy tự soạn thảo trong Notepad một đoạn văn ngắn khoảng 4 đến 6 câu giới thiệu về chính mình theo khung dàn ý sau:
            </p>
          </div>

          <div class="p-4 bg-card rounded border mb-4">
            <h4 class="text-primary mb-2">📋 Khung dàn ý gợi ý:</h4>
            <ol style="margin: 0 0 16px 20px; padding: 0; font-size: 0.95rem; line-height: 1.8;" class="text-secondary">
              <li><strong>Câu 1 (Họ tên & Tuổi):</strong> Tên em là gì? Năm nay em bao nhiêu tuổi và học lớp mấy?</li>
              <li><strong>Câu 2 (Trường học):</strong> Em đang theo học tại trường THCS nào?</li>
              <li><strong>Câu 3 (Sở thích):</strong> Ngoài giờ học, em thích làm gì (chơi thể thao, đọc sách, chơi game, vẽ tranh)?</li>
              <li><strong>Câu 4 (Mục tiêu học tập):</strong> Em mong muốn học lập trình để tạo ra trò chơi hay ứng dụng gì cho tương lai?</li>
            </ol>

            <div class="p-3 rounded" style="background: #f8fafc; border: 1px dashed var(--border-soft);">
              <span class="badge badge--warning mb-1">Tiêu chí chấm điểm:</span>
              <div class="d-flex flex-wrap gap-3 mt-1" style="font-size: 0.85rem;">
                <span>✅ Viết hoa chữ cái đầu câu & tên riêng</span>
                <span>✅ Dấu câu đặt sát từ trước, cách từ sau</span>
                <span>✅ Đủ 5 dấu tiếng Việt không sai chính tả</span>
                <span>✅ Bấm Ctrl + S để lưu tệp</span>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 16: QUICK QUIZ */
      {
        id: 'w02-l03-s16',
        type: 'quiz',
        icon: '❓',
        eyebrow: 'CỦNG CỐ KIẾN THỨC',
        title: 'Quick Quiz: Phản xạ Bàn phím & Telex',
        badge: { type: 'quiz', text: '5 Câu hỏi trắc nghiệm' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Chọn đáp án đúng nhất để kiểm tra khả năng phản xạ kiến thức của em nhé:
          </p>

          <div class="quiz-container">
            <!-- Câu 1 -->
            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 1: Hai phím nào trên hàng cơ sở (Home Row) có gờ gai nhỏ để định vị ngón tay?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Chưa đúng rồi! Hãy sờ lại phím F và J nhé.')">A. Phím A và phím S</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Chính xác! F và J là 2 phím gai dành cho 2 ngón tay trỏ.')">B. Phím F và phím J</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'G và H là 2 phím ở giữa, không có gai.')">C. Phím G và phím H</button>
              </div>
            </div>

            <!-- Câu 2 -->
            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 2: Để xóa ký tự nằm BÊN TRÁI của con trỏ văn bản, em dùng phím nào?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Tuyệt vời! Backspace xóa lùi về bên trái.')">A. Phím Backspace (⌫)</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Delete là xóa tiến về bên phải con trỏ.')">B. Phím Delete (⌦)</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Enter là phím xuống dòng.')">C. Phím Enter (⏎)</button>
              </div>
            </div>

            <!-- Câu 3 -->
            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 3: Trong kiểu gõ Telex, phím nào dùng để gõ Dấu Nặng?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Phím f là gõ Dấu Huyền.')">A. Phím f</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Phím r là gõ Dấu Hỏi.')">B. Phím r</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Chuẩn xác! Phím j dùng để tạo Dấu Nặng (ví dụ: hocj = học).')">C. Phím j</button>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 17: BOSS CHALLENGE */
      {
        id: 'w02-l03-s17',
        type: 'boss',
        icon: '🔥',
        eyebrow: 'THỬ THÁCH TỐI HẬU',
        title: 'Boss Challenge: 120 Giây Gõ Thần Tốc & Sửa Lỗi',
        badge: { type: 'danger', text: 'Boss Fight 120s' },
        contentHtml: `
          <div class="boss-arena-box p-4 rounded text-center" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); color: #ffffff;">
            <span class="badge badge--energy mb-2 font-bold" style="font-size: 0.9rem;">THỬ THÁCH SÁT HẠCH CUỐI BUỔI</span>
            <h2 style="font-size: 1.8rem; margin: 4px 0 12px; color: #fbbf24;">Quái Vật Lỗi Chính Tả (Typo Monster)</h2>
            <p style="max-width: 650px; margin: 0 auto 20px; font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
              Quái vật Typo đã gõ một đoạn văn đầy lỗi chính tả và khoảng trắng cẩu thả bên dưới. Nhiệm vụ của dũng sĩ là <strong>sửa lại thật hoàn hảo</strong> trong vòng 120 giây!
            </p>

            <div class="p-3 rounded mb-3 text-left" style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15); font-family: monospace; font-size: 0.95rem; color: #fca5a5;">
              "hom  nay toi hoc may tinh  ,rat  la vui .toi  muon lam  ra  tro choi game  ."
            </div>

            <div class="d-flex justify-center items-center gap-3">
              <button class="btn btn--energy font-bold" style="padding: 12px 28px; font-size: 1.05rem;" onclick="
                if (window.TimerManager) window.TimerManager.start(120);
                if (window.SoundManager) window.SoundManager.playPop();
              ">
                ⏱️ Bắt đầu Tính giờ 120s!
              </button>
            </div>
          </div>
        `
      },

      /* SLIDE 18: SUMMARY & NEXT MISSION */
      {
        id: 'w02-l03-s18',
        type: 'complete',
        icon: '🎉',
        eyebrow: 'TỔNG KẾT BUỔI 03',
        title: 'Chúc mừng Em đã Hoàn thành Buổi 03!',
        badge: { type: 'success', text: '⭐ +100 XP Toàn năng' },
        contentHtml: `
          <div class="p-4 bg-card rounded border text-center">
            <div style="font-size: 4rem;" class="mb-2">🏅</div>
            <h2 style="color: var(--color-success); margin-bottom: 8px;">Em đã là Bậc thầy Bàn phím Cấp độ 1!</h2>
            <p class="text-secondary" style="max-width: 640px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6;">
              Hôm nay em đã nắm chắc tư thế gõ 10 ngón, bản đồ bàn phím, phân biệt chính xác Backspace và Delete, cùng quy tắc gõ tiếng Việt Telex chuẩn ngữ pháp.
            </p>

            <div class="p-3 rounded mt-4 text-left" style="background: #eff6ff; border: 1px solid rgba(59, 130, 246, 0.3); max-width: 640px; margin-left: auto; margin-right: auto;">
              <strong class="text-primary" style="font-size: 1rem;">🚀 Bật mí Buổi học số 04 (Chủ nhật):</strong>
              <p class="text-secondary mt-1" style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Chủ đề: <strong>Phím tắt hữu ích</strong><br>
                Em sẽ được trang bị "tuyệt chiêu bí truyền" của các cao thủ công nghệ: Copy (<kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">C</kbd>), Paste (<kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">V</kbd>), Cứu nguy hoàn tác (<kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Z</kbd>), Chuyển cửa sổ chớp mắt (<kbd class="keycap">Alt</kbd> + <kbd class="keycap">Tab</kbd>) và vượt qua Đấu trường Tốc độ Phím tắt!
              </p>
            </div>

            <div class="d-flex justify-center gap-3 mt-4">
              <a href="../index.html" class="btn btn--secondary">🏠 Về Cổng Khóa học</a>
              <a href="lesson.html?id=gd1-w02-l04" class="btn btn--primary">Sang Buổi 04: Phím tắt hữu ích ➔</a>
            </div>
          </div>
        `
      }
    ]
  };

  // Đăng ký vào Global Lesson Registry
  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w02-l03'] = lessonData;

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('id') === 'gd1-w02-l03') {
    window.currentLessonData = lessonData;
  }
})();
