/**
 * LESSON DATA — GĐ1 · Tuần 01 · Buổi 02
 * Chủ đề: Chuột & Thao tác cơ bản
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
    subtitle: 'Làm chủ click, double click, chuột phải và thao tác kéo thả (drag & drop)',
    totalXP: 100,

    cheatsheet: {
      shortcuts: [
        { keys: ['Chuột trái'], desc: 'Chọn đối tượng, bấm nút' },
        { keys: ['Nháy đúp'], desc: 'Mở tệp tin hoặc ứng dụng' },
        { keys: ['Chuột phải'], desc: 'Mở bảng chọn (Context Menu)' }
      ],
      troubleshooting: 'Nếu lỡ bấm nhầm chuột phải ra bảng menu lạ, em chỉ cần click nhẹ chuột trái ra ngoài khoảng trống màn hình để tắt menu nhé!'
    },

    sections: [
      /* 01. KHỞI ĐỘNG */
      {
        id: 'warmup',
        type: 'warmup',
        icon: '🚀',
        eyebrow: '01. KHỞI ĐỘNG & ÔN TẬP NHANH (5–10 PHÚT)',
        title: 'Khởi động ngón tay: Bạn biết gì về chú chuột máy tính?',
        badge: { text: '+10 XP Warm-up', type: 'warning' },
        contentHtml: `
          <p>Chào mừng em đến với Buổi 2! Ở buổi 1, chúng mình đã biết cách mở và đóng cửa sổ ứng dụng. Hôm nay chúng mình sẽ biến "chú chuột máy tính" thành vũ khí điều khiển siêu chuẩn xác!</p>
          <div class="concept-chip-group">
            <span class="concept-chip">🖱️ Chuột trái (Left Click)</span>
            <span class="concept-chip">📜 Con lăn (Scroll Wheel)</span>
            <span class="concept-chip">🖱️ Chuột phải (Right Click)</span>
            <span class="concept-chip">🖐️ Kéo và Thả (Drag & Drop)</span>
          </div>
        `
      },

      /* 02. KHÁM PHÁ KIẾN THỨC */
      {
        id: 'concept',
        type: 'concept',
        icon: '🔍',
        eyebrow: '02. KHÁM PHÁ KIẾN THỨC (15–20 PHÚT)',
        title: '4 Kỹ năng Chuột Bắt Buộc Phải Thuộc',
        badge: { text: 'Kiến thức cốt lõi', type: 'primary' },
        contentHtml: `
          <p>Hãy quan sát cách đặt tay và ngón tay chuẩn xác trên chuột máy tính:</p>

          <div class="edu-illustration-card mb-3">
            <img src="../design-system/assets/illustrations/mouse_guide.jpg" alt="Cách cầm chuột chuẩn cho học sinh" class="rounded-img">
            <p class="img-caption">📸 Tư thế cầm chuột chuẩn: Ngón trỏ đặt nhẹ lên Chuột trái, ngón giữa đặt lên Chuột phải, lòng bàn tay ôm nhẹ thân chuột</p>
          </div>

          <p>Thử click trực tiếp vào mô hình chuột dưới đây để trải nghiệm phản hồi:</p>
          
          <div class="mouse-visualizer-container my-3">
            <div class="mouse-device">
              <div class="mouse-buttons-row">
                <button class="mouse-zone" data-mouse="left">TRÁI</button>
                <button class="mouse-zone" data-mouse="scroll"></button>
                <button class="mouse-zone" data-mouse="right">PHẢI</button>
              </div>
            </div>
            <div class="mouse-legend">
              <div class="mouse-legend-item">
                <span class="mouse-legend-dot" style="background: var(--color-primary);"></span>
                <div><strong>1. Single Click (Nhấp đơn):</strong> Bấm chuột trái 1 lần để chọn mục.</div>
              </div>
              <div class="mouse-legend-item">
                <span class="mouse-legend-dot" style="background: var(--color-energy);"></span>
                <div><strong>2. Double Click (Nháy đúp):</strong> Bấm chuột trái 2 lần liên tiếp nhanh để mở ứng dụng/tệp.</div>
              </div>
              <div class="mouse-legend-item">
                <span class="mouse-legend-dot" style="background: var(--color-purple);"></span>
                <div><strong>3. Right Click (Chuột phải):</strong> Mở menu tùy chọn bổ sung (Context Menu).</div>
              </div>
              <div class="mouse-legend-item">
                <span class="mouse-legend-dot" style="background: var(--color-warning);"></span>
                <div><strong>4. Drag & Drop (Kéo & Thả):</strong> Nhấn giữ chuột trái, di chuyển đối tượng và thả ra.</div>
              </div>
            </div>
          </div>
        `
      },

      /* 03. THỰC CHIẾN TẠI LỚP */
      {
        id: 'lab',
        type: 'lab',
        icon: '💻',
        eyebrow: '03. THỰC CHIẾN TẠI LỚP (30 PHÚT)',
        title: 'Luyện Chuột Chuẩn Xác: Mini Game & Thao Tác Desktop',
        badge: { text: 'Hands-on Lab', type: 'energy' },
        contentHtml: `
          <p>Học sinh chia sẻ màn hình và thực hành lần lượt các bài tập:</p>
          
          <div class="lab-steps">
            <div class="lab-step" data-state="pending">
              <div class="lab-step__number">1</div>
              <div class="lab-step__content">
                <h4>Kéo & Thả (Drag & Drop) sắp xếp icon trên Desktop</h4>
                <p>Nhấn giữ chuột trái vào icon bất kỳ trên Desktop, kéo sang vị trí mới và thả tay.</p>
              </div>
            </div>

            <div class="lab-step" data-state="pending">
              <div class="lab-step__number">2</div>
              <div class="lab-step__content">
                <h4>Khám phá Menu chuột phải trên Desktop</h4>
                <p>Click chuột phải vào khoảng trống màn hình Desktop ➔ Xem menu View, Sort by ➔ Click chuột trái ra ngoài để đóng.</p>
              </div>
            </div>

            <div class="lab-step" data-state="pending">
              <div class="lab-step__number">3</div>
              <div class="lab-step__content">
                <h4>Thử thách Mini Game Luyện Chuột</h4>
                <p>Giáo viên hướng dẫn mở mini game click trúng bóng bóng hoặc bài tập kéo thả vật phẩm trực tuyến.</p>
              </div>
            </div>
          </div>

          <h4 class="mt-4 mb-2">Checklist kỹ năng chuột:</h4>
          <div class="checklist-group">
            <div class="checklist-item" data-id="l02_chk_1" data-xp="10">
              <div class="checklist-box"></div>
              <span class="checklist-label">Cầm chuột đúng tư thế (cổ tay thẳng, không gồng)</span>
              <span class="checklist-reward">+10 XP</span>
            </div>
            <div class="checklist-item" data-id="l02_chk_2" data-xp="10">
              <div class="checklist-box"></div>
              <span class="checklist-label">Nháy đúp (double click) mượt mà để mở file/ứng dụng</span>
              <span class="checklist-reward">+10 XP</span>
            </div>
            <div class="checklist-item" data-id="l02_chk_3" data-xp="10">
              <div class="checklist-box"></div>
              <span class="checklist-label">Kéo thả (drag & drop) icon chính xác đến vị trí mới</span>
              <span class="checklist-reward">+10 XP</span>
            </div>
            <div class="checklist-item" data-id="l02_chk_4" data-xp="10">
              <div class="checklist-box"></div>
              <span class="checklist-label">Sử dụng chuột phải để mở menu ngữ cảnh tự tin</span>
              <span class="checklist-reward">+10 XP</span>
            </div>
          </div>
        `
      },

      /* 04. TRẮC NGHIỆM NHANH */
      {
        id: 'quiz',
        type: 'quiz',
        icon: '🎯',
        eyebrow: '04. TRẮC NGHIỆM PHẢN XẠ (5 PHÚT)',
        title: 'Bạn đã hiểu rõ về chú chuột máy tính?',
        badge: { text: 'Kiểm tra nhanh', type: 'primary' },
        contentHtml: `
          <div class="quiz-box" data-qid="l02_q1" data-correct="1" data-hint="Để mở một biểu tượng, ta cần bấm chuột trái 2 lần liên tục thật nhanh.">
            <div class="quiz-question">Câu 1: Để mở một ứng dụng trên màn hình Desktop bằng chuột, em cần thực hiện thao tác nào?</div>
            <div class="quiz-options">
              <button class="quiz-option"><span>A.</span> Nhấp chuột phải 1 lần</button>
              <button class="quiz-option"><span>B.</span> Nhấp đúp chuột trái (Double click)</button>
              <button class="quiz-option"><span>C.</span> Cuộn con lăn chuột xuống</button>
            </div>
            <div class="quiz-feedback"></div>
          </div>

          <div class="quiz-box mt-4" data-qid="l02_q2" data-correct="2" data-hint="Khi bấm chuột phải vào một vùng trống hay đối tượng, máy tính sẽ hiện ra bảng menu tùy chọn bổ sung.">
            <div class="quiz-question">Câu 2: Thao tác bấm chuột phải (Right-click) có tác dụng chính là gì?</div>
            <div class="quiz-options">
              <button class="quiz-option"><span>A.</span> Tắt máy tính ngay lập tức</button>
              <button class="quiz-option"><span>B.</span> Phóng to toàn màn hình</button>
              <button class="quiz-option"><span>C.</span> Mở menu ngữ cảnh (Context Menu) với các tùy chọn</button>
            </div>
            <div class="quiz-feedback"></div>
          </div>
        `
      },

      /* 05. BOSS CHALLENGE */
      {
        id: 'boss',
        type: 'boss',
        icon: '🏆',
        eyebrow: '05. BOSS CHALLENGE VỀ ĐÍCH (10–15 PHÚT)',
        title: 'Thử thách: Tay Lái Chuột Siêu Tốc',
        badge: { text: '+30 XP Thưởng Boss', type: 'danger' },
        contentHtml: `
          <p>Học sinh tham gia thử thách tính giờ kéo thả và sắp xếp 5 icon lộn xộn trên Desktop về đúng hàng thẳng lối trong vòng 3 phút:</p>

          <div class="boss-banner timer-widget" data-duration="180">
            <div>
              <span class="text-secondary font-semibold" style="font-size: 0.9rem;">⏱ Thời gian thử thách:</span>
              <div class="timer-display">03:00</div>
            </div>
            <div class="timer-controls">
              <button class="btn btn--primary" data-timer-action="start">▶ Bắt đầu</button>
              <button class="btn btn--secondary" data-timer-action="pause" disabled>⏸ Tạm dừng</button>
              <button class="btn btn--secondary" data-timer-action="reset">🔄 Đặt lại</button>
            </div>
          </div>
        `
      },

      /* 06. HOÀN THÀNH NHIỆM VỤ */
      {
        id: 'complete',
        type: 'complete',
        icon: '🎉',
        eyebrow: 'TỔNG KẾT TUẦN 01',
        title: 'Chúc mừng em đã hoàn thành trọn vẹn Tuần 01!',
        badge: { text: 'Tuần 01 Master', type: 'success' },
        contentHtml: `
          <div class="mission-complete-card">
            <div class="mission-complete-card__emoji">🐭⚡</div>
            <h3>Huy hiệu: Tay Lái Chuột Chuẩn Xác</h3>
            <p class="text-secondary" style="max-width: 480px;">Em đã thành thạo cả 4 kỹ năng chuột cơ bản. Tuần sau (Tuần 02), chúng mình sẽ bước sang chinh phục Bàn phím và Phím tắt thần tốc!</p>
            
            <div class="mt-3 p-3 bg-page-secondary rounded text-left" style="width: 100%; max-width: 480px;">
              <strong>📝 Bài tập về nhà (15 phút):</strong>
              <p class="text-secondary mt-1" style="font-size: 0.9rem;">Vào trang web luyện chuột mà thầy cô gửi, luyện 3 ván để đạt tối thiểu 70% độ chính xác nhé!</p>
            </div>

            <a href="../../index.html" class="btn btn--primary mt-4">⬅ Về Trang chủ Khóa học</a>
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
