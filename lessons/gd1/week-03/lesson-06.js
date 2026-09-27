/**
 * LESSON DATA — GĐ1 · Tuần 03 · Buổi 06
 * Chủ đề: Quản lý Dữ liệu (Data Management)
 * Thiết kế chuẩn Slide Trình chiếu Giảng dạy 1:1 (Teacher-Led Slide Deck)
 */

(function () {
  'use strict';

  const lessonData = {
    id: 'gd1-w03-l06',
    stage: 'GĐ1',
    stageName: 'Nhập môn máy tính',
    week: 3,
    lesson: 6,
    duration: '90 phút',
    title: 'Quản lý Dữ liệu — Sắp xếp & Bảo vệ Tệp',
    subtitle: 'Làm chủ Copy vs Move, phân biệt Save vs Save As, quản lý Thùng rác Recycle Bin và phân loại dữ liệu khoa học',
    totalXP: 100,

    cheatsheet: {
      vocabulary: [
        'Copy',
        'Move',
        'Save',
        'Save As',
        'Recycle Bin',
        'Restore',
        'Empty Recycle Bin',
        'Sort & Filter'
      ],
      icons: [
        { symbol: '📋', name: 'Copy & Paste', desc: 'Nhân bản thêm một file mới ở thư mục khác' },
        { symbol: '🚚', name: 'Cut & Paste (Move)', desc: 'Chuyển hẳn file sang nhà mới, chỗ cũ không còn' },
        { symbol: '💾', name: 'Save (Ctrl+S)', desc: 'Lưu đè nội dung mới vào file hiện tại' },
        { symbol: '📑', name: 'Save As (F12)', desc: 'Lưu thành một file mới toanh ở vị trí khác' },
        { symbol: '♻️', name: 'Recycle Bin', desc: 'Thùng rác: Nơi giữ lại các tệp đã xóa tạm thời' },
        { symbol: '↩️', name: 'Restore', desc: 'Khôi phục file từ Thùng rác về đúng chỗ cũ' }
      ],
      shortcuts: [
        { keys: ['Ctrl', 'S'], desc: 'Lưu đè nhanh vào file đang mở' },
        { keys: ['F12'], desc: 'Mở hộp thoại Save As để lưu file mới' },
        { keys: ['Ctrl', 'X'], desc: 'Cắt file để chuẩn bị Di chuyển (Move)' },
        { keys: ['Ctrl', 'V'], desc: 'Dán file vừa Cut vào thư mục đích' }
      ],
      troubleshooting: 'Nếu lỡ tay xóa mất một file quan trọng: Hãy mở biểu tượng Thùng rác Recycle Bin ngoài Desktop > tìm tên file > nhấp chuột phải chọn Restore!'
    },

    sections: [
      /* SLIDE 01: WELCOME & MISSION */
      {
        id: 'w03-l06-s01',
        type: 'concept',
        icon: '🗂️',
        eyebrow: 'BUỔI 06 · TUẦN 03',
        title: 'Nghệ Thuật Quản Trị Dữ Liệu Máy Tính',
        badge: { type: 'primary', text: '⭐ Buổi Thực chiến Tuần 03' },
        contentHtml: `
          <div class="hero-mission-box">
            <div class="hero-mission-content">
              <span class="badge badge--energy mb-2">Chặng 3: Tổ chức Dữ liệu Khoa học</span>
              <h2 style="font-size: 1.75rem; margin-bottom: 8px;">Chào mừng em đến với Nhiệm vụ Dọn dẹp & Quản lý!</h2>
              <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.6;">
                Ở Buổi 5, em đã dựng xong các "ngăn kéo" thư mục. Hôm nay, chúng ta sẽ học cách điều phối dữ liệu qua lại như một chuyên gia: di chuyển, nhân bản, lưu an toàn và làm chủ Thùng rác!
              </p>
              
              <div class="grid-2-col gap-3 mt-3">
                <div class="learning-target-card">
                  <div class="target-icon">🚚</div>
                  <div>
                    <strong>Copy vs Move (Di chuyển)</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Hiểu bản chất khi nào nên nhân đôi (Copy) và khi nào nên chuyển nhà hẳn (Move).</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">💾</div>
                  <div>
                    <strong>Save vs Save As</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Ranh giới sống còn: Lưu đè lên bản cũ hay lưu ra một bản sao mới riêng biệt.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">♻️</div>
                  <div>
                    <strong>Bí mật Thùng Rác (Recycle Bin)</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Cách khôi phục tệp bị xóa nhầm (Restore) và dọn sạch rác giải phóng ổ cứng.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🧹</div>
                  <div>
                    <strong>Đại chiến Thư mục Hỗn loạn</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Vượt qua thử thách phân loại 15 file bài tập lộn xộn vào đúng ngăn kéo trong 3 phút.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-mascot-badge">
              <div style="font-size: 4rem;">📦</div>
              <span class="badge badge--warning mt-2 font-bold">+100 XP Thưởng</span>
              <p class="text-muted text-center mt-2" style="font-size: 0.8rem;">Dành cho Học sinh dọn dẹp sạch sẽ 15 file</p>
            </div>
          </div>
        `
      },

      /* SLIDE 02: WARM-UP & REVIEW */
      {
        id: 'w03-l06-s02',
        type: 'warmup',
        icon: '🤔',
        eyebrow: 'KHỞI ĐỘNG 5 PHÚT',
        title: 'Ôn tập Buổi 05 & Đố vui Đuôi File',
        badge: { type: 'warning', text: 'Phá băng & Ôn bài' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Em hãy thử tài phân loại xem các tệp tin sau thuộc môn học hoặc loại dữ liệu nào nhé:
          </p>

          <div class="grid-4-col gap-3 mb-4">
            <div class="choice-card p-3" style="text-align: center;">
              <span style="font-size: 2rem;">📝</span>
              <h4 class="mt-2 mb-1" style="font-size: 0.95rem;">Bai_Van.docx</h4>
              <span class="badge badge--primary">Môn Văn (.docx)</span>
            </div>
            <div class="choice-card p-3" style="text-align: center;">
              <span style="font-size: 2rem;">📊</span>
              <h4 class="mt-2 mb-1" style="font-size: 0.95rem;">Bang_Diem.xlsx</h4>
              <span class="badge badge--success">Bảng tính (.xlsx)</span>
            </div>
            <div class="choice-card p-3" style="text-align: center;">
              <span style="font-size: 2rem;">🖼️</span>
              <h4 class="mt-2 mb-1" style="font-size: 0.95rem;">So_Do_Tu_Duy.png</h4>
              <span class="badge badge--warning">Hình ảnh (.png)</span>
            </div>
            <div class="choice-card p-3" style="text-align: center;">
              <span style="font-size: 2rem;">🎬</span>
              <h4 class="mt-2 mb-1" style="font-size: 0.95rem;">Thuyet_Trinh.mp4</h4>
              <span class="badge badge--energy">Video clip (.mp4)</span>
            </div>
          </div>
        `
      },

      /* SLIDE 03: COPY VS MOVE */
      {
        id: 'w03-l06-s03',
        type: 'concept',
        icon: '🚚',
        eyebrow: 'ĐIỀU PHỐI DỮ LIỆU',
        title: 'Sao Chép (Copy) vs Di Chuyển (Move)',
        badge: { type: 'primary', text: 'Khái niệm quan trọng' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border" style="border-top: 5px solid #2563eb;">
              <div class="d-flex items-center gap-3 mb-2">
                <span style="font-size: 2.2rem;">📋</span>
                <h3 style="margin: 0; color: #2563eb;">1. COPY (Sao chép / Nhân bản)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                <strong>Công thức:</strong> <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">C</kbd> ở thư mục nguồn ➔ Sang thư mục đích bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">V</kbd>.
              </p>
              <div class="p-2 rounded bg-page-secondary mt-2" style="font-size: 0.88rem; line-height: 1.6;">
                <strong>Kết quả:</strong> Tệp tin gốc ở chỗ cũ <strong>VẪN CÒN NGUYÊN</strong>. Em có thêm 1 bản sao y hệt ở thư mục mới (Tổng cộng có 2 file giống nhau).
              </div>
            </div>

            <div class="p-4 bg-card rounded border" style="border-top: 5px solid #10b981;">
              <div class="d-flex items-center gap-3 mb-2">
                <span style="font-size: 2.2rem;">🚚</span>
                <h3 style="margin: 0; color: #10b981;">2. MOVE (Di chuyển / Chuyển nhà)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                <strong>Công thức:</strong> <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">X</kbd> ở thư mục nguồn ➔ Sang thư mục đích bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">V</kbd>.
              </p>
              <div class="p-2 rounded bg-page-secondary mt-2" style="font-size: 0.88rem; line-height: 1.6;">
                <strong>Kết quả:</strong> Tệp tin ở chỗ cũ <strong>BIẾN MẤT HOÀN TOÀN</strong> và chuyển sang ở hẳn thư mục mới (Tổng cộng chỉ có đúng 1 file).
              </div>
            </div>
          </div>

          <div class="callout callout--warning mt-4">
            <strong>💡 Khi nào dùng Copy? Khi nào dùng Move?</strong>
            <p style="margin: 4px 0 0; font-size: 0.88rem; line-height: 1.6;">
              - Muốn gửi file bài tập vào USB nộp thầy hoặc sao lưu dự phòng ➔ <strong>DÙNG COPY</strong>!<br>
              - Muốn dọn dẹp file ảnh từ màn hình Desktop vào thư mục HinhAnh cho sạch máy ➔ <strong>DÙNG MOVE (Ctrl + X)</strong>!
            </p>
          </div>
        `
      },

      /* SLIDE 04: SAVE VS SAVE AS */
      {
        id: 'w03-l06-s04',
        type: 'concept',
        icon: '💾',
        eyebrow: 'BẢO TỒN DỮ LIỆU',
        title: 'Save (Ctrl + S) vs Save As (F12) — Khác biệt sống còn',
        badge: { type: 'danger', text: 'Tránh mất bài' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">S</kbd>
                <h3 style="margin: 0; color: #2563eb;">SAVE (Lưu Đè)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Em đang mở file <code>BaiTap_Toan.docx</code> và gõ thêm 3 bài giải mới.
              </p>
              <div class="p-3 rounded bg-page-secondary mt-2" style="font-size: 0.88rem; line-height: 1.6;">
                Khi bấm <code>Ctrl + S</code>: Máy tính sẽ <strong>ghi đè nội dung mới lên chính tệp tin đó</strong>. Tên file không đổi, vị trí lưu không đổi. Không có hộp thoại nào hiện lên làm phiền em cả!
              </div>
            </div>

            <div class="p-4 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">F12</kbd> (hoặc File > Save As)
                <h3 style="margin: 0; color: #f59e0b;">SAVE AS (Lưu Bản Mới)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Em muốn giữ lại bản cũ, đồng thời tạo ra một bản mới để chỉnh sửa:
              </p>
              <div class="p-3 rounded bg-page-secondary mt-2" style="font-size: 0.88rem; line-height: 1.6;">
                Khi bấm <code>Save As</code>: Máy tính sẽ <strong>mở một cửa sổ mới</strong> cho phép em: Đặt một cái tên mới (ví dụ: <code>BaiTap_Toan_SuaLai.docx</code>), chọn một thư mục mới hoặc đổi sang định dạng khác (như PDF)!
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 05: RECYCLE BIN */
      {
        id: 'w03-l06-s05',
        type: 'concept',
        icon: '♻️',
        eyebrow: 'THÙNG RÁC MÁY TÍNH',
        title: 'Làm Chủ Thùng Rác (Recycle Bin): Khôi Phục & Dọn Rác',
        badge: { type: 'energy', text: 'Cứu nguy dữ liệu' },
        contentHtml: `
          <div class="grid-2-col gap-4 items-center">
            <div>
              <h3 style="color: #059669; margin-top: 0;">Thùng rác không phải là nơi mất vĩnh viễn!</h3>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Khi em bấm phím <code>Delete</code> trên bàn phím, file chỉ tạm thời nằm trong phòng chờ Recycle Bin.
              </p>

              <div class="p-3 rounded mb-3 bg-page-secondary" style="border-left: 4px solid #10b981;">
                <strong style="color: #065f46;">↩️ Khôi phục tệp bị xóa nhầm (Restore):</strong>
                <ol style="margin: 6px 0 0 20px; font-size: 0.88rem; line-height: 1.7;" class="text-secondary">
                  <li>Nháy đúp vào icon <strong>Recycle Bin</strong> ngoài Desktop.</li>
                  <li>Tìm tệp tin em đã lỡ xóa.</li>
                  <li>Nhấp chuột phải vào tệp đó ➔ Chọn <strong>Restore</strong> (Khôi phục)! Tệp sẽ tự động bay về đúng thư mục cũ ban đầu!</li>
                </ol>
              </div>

              <div class="p-3 rounded bg-page-secondary" style="border-left: 4px solid #ef4444;">
                <strong style="color: #991b1b;">🧹 Dọn sạch Thùng rác (Empty Recycle Bin):</strong>
                <p style="margin: 4px 0 0; font-size: 0.85rem;" class="text-secondary">
                  Khi thùng rác chứa quá nhiều video nặng, nhấp chuột phải vào Recycle Bin ngoài Desktop chọn <strong>Empty Recycle Bin</strong> để xóa vĩnh viễn và lấy lại dung lượng ổ cứng!
                </p>
              </div>
            </div>

            <div class="p-4 bg-card rounded border text-center">
              <span style="font-size: 4rem;">♻️</span>
              <h4 class="mt-2 mb-1">Recycle Bin</h4>
              <p class="text-muted" style="font-size: 0.85rem;">Chiếc phao cứu sinh an toàn nhất của người dùng máy tính.</p>
            </div>
          </div>
        `
      },

      /* SLIDE 06: SORT & FILTER IN EXPLORER */
      {
        id: 'w03-l06-s06',
        type: 'concept',
        icon: '🔍',
        eyebrow: 'KỸ NĂNG TÌM KIẾM',
        title: 'Sắp Xếp & Tìm Kiếm Tệp Trong File Explorer',
        badge: { type: 'primary', text: 'Kỹ năng tìm file' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Khi một thư mục có hàng trăm bức ảnh, làm sao để tìm được bức ảnh vừa chụp hôm nay hoặc bức ảnh nặng nhất?
          </p>

          <div class="grid-3-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border">
              <strong class="text-primary">1. Sắp xếp theo Ngày (Date modified)</strong>
              <p class="text-secondary mt-1" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Bấm vào tiêu đề cột <em>Date modified</em> để đưa các file mới tạo hoặc vừa sửa lên đầu danh sách.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong class="text-primary">2. Sắp xếp theo Loại (Type)</strong>
              <p class="text-secondary mt-1" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Bấm vào cột <em>Type</em> để máy tính tự động gom tất cả file Word đứng cạnh nhau, file ảnh đứng cạnh nhau!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong class="text-primary">3. Thanh tìm kiếm Search Bar</strong>
              <p class="text-secondary mt-1" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Ở góc trên bên phải File Explorer, gõ từ khóa (ví dụ: <code>toan</code> hoặc <code>*.png</code>) để máy tính lọc ngay lập tức!
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 07: HANDS-ON LAB */
      {
        id: 'w03-l06-s07',
        type: 'lab',
        icon: '🧹',
        eyebrow: 'THỰC HÀNH THỰC CHIẾN',
        title: 'Hands-on Lab: Chiến Dịch Giải Cứu Thư Mục Hỗn Loạn',
        badge: { type: 'energy', text: 'Thực hành máy thật 15p' },
        contentHtml: `
          <div class="callout callout--info mb-3">
            <h4 class="callout__title">🎯 Nhiệm vụ dọn dẹp dữ liệu học tập cá nhân:</h4>
            <p style="margin: 0; line-height: 1.6;">
              Em hãy chia sẻ màn hình máy tính và cùng Thầy/Cô thực hiện chuỗi bài tập phân loại:
            </p>
          </div>

          <div class="checklist-suite">
            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 1:</strong> Mở thư mục <code>Downloads</code> trên máy em — nơi thường chứa đầy các tệp tải về lung tung từ trước đến nay.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 2:</strong> Chọn 1 tệp bài tập hoặc ảnh học tập, bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">X</kbd> để Cắt.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 3:</strong> Sang thư mục <code>HocTap_Lop7</code>, mở đúng thư mục môn học tương ứng và bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">V</kbd> để Dán vào.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 4:</strong> Bấm phím <kbd class="keycap">F2</kbd> đổi tên tệp vừa chuyển theo đúng chuẩn không dấu khoa học.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Thao tác 5 (Thử nghiệm khôi phục):</strong> Chọn 1 file nháp, bấm <kbd class="keycap">Delete</kbd> vào Thùng rác ➔ Rồi mở Recycle Bin bấm <strong>Restore</strong> cứu file về!
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 08: QUICK QUIZ */
      {
        id: 'w03-l06-s08',
        type: 'quiz',
        icon: '❓',
        eyebrow: 'CỦNG CỐ KIẾN THỨC',
        title: 'Quick Quiz: Thử Tài Quản Lý Dữ Liệu',
        badge: { type: 'quiz', text: '3 Câu hỏi trắc nghiệm' },
        contentHtml: `
          <div class="quiz-container">
            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 1: Khi nào em nên sử dụng lệnh "Save As" thay vì lệnh "Save"?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Chính xác! Khi muốn lưu thành bản sao mới với tên khác hoặc vị trí khác.')">A. Khi muốn tạo ra một bản sao mới với tên khác hoặc lưu sang thư mục khác</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Sai rồi! Lưu đè bình thường chỉ cần bấm Ctrl + S.')">B. Khi chỉ muốn lưu đè cập nhật vào file cũ đang mở</button>
              </div>
            </div>

            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 2: Muốn cứu lại một tệp tin lỡ tay bấm Delete xóa vào Thùng rác, em nhấp chuột phải chọn lệnh gì?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Rất giỏi! Lệnh Restore sẽ đưa tệp về lại thư mục ban đầu.')">A. Lệnh Restore (Khôi phục)</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Empty Recycle Bin là xóa sạch thùng rác vĩnh viễn!')">B. Lệnh Empty Recycle Bin</button>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 09: BOSS CHALLENGE */
      {
        id: 'w03-l06-s09',
        type: 'boss',
        icon: '🔥',
        eyebrow: 'THỬ THÁCH TỐI HẬU',
        title: 'Boss Challenge: 120 Giây Phân Loại & Dọn Rác Siêu Tốc',
        badge: { type: 'danger', text: 'Boss Fight 120s' },
        contentHtml: `
          <div class="boss-arena-box p-4 rounded text-center" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); color: #ffffff;">
            <span class="badge badge--energy mb-2 font-bold" style="font-size: 0.9rem;">SÁT HẠCH TỔNG KẾT TUẦN 03</span>
            <h2 style="font-size: 1.8rem; margin: 4px 0 12px; color: #fbbf24;">Chiến Dịch Bàn Học Sạch Bong</h2>
            <p style="max-width: 650px; margin: 0 auto 20px; font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
              Học sinh có 120 giây để dọn sạch toàn bộ các file rác hoặc file bài tập nằm bừa bãi ngoài màn hình Desktop vào đúng các ngăn thư mục <code>HocTap_Lop7</code> mà không để sót bất kỳ tệp tin nào!
            </p>

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

      /* SLIDE 10: SUMMARY & NEXT MISSION */
      {
        id: 'w03-l06-s10',
        type: 'complete',
        icon: '🎉',
        eyebrow: 'TỔNG KẾT TUẦN 03',
        title: 'Chúc mừng Em đã Hoàn thành Tuần 03!',
        badge: { type: 'success', text: '⭐ +100 XP Toàn năng' },
        contentHtml: `
          <div class="p-4 bg-card rounded border text-center">
            <div style="font-size: 4rem;" class="mb-2">🏆</div>
            <h2 style="color: var(--color-success); margin-bottom: 8px;">Em đã là Quản trị viên Dữ liệu Tài ba!</h2>
            <p class="text-secondary" style="max-width: 640px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6;">
              Sau Tuần 3, dữ liệu học tập của em đã được sắp xếp ngăn nắp, bảo vệ an toàn với Save / Save As và Thùng rác Recycle Bin.
            </p>

            <div class="p-3 rounded mt-4 text-left" style="background: #eff6ff; border: 1px solid rgba(59, 130, 246, 0.3); max-width: 640px; margin-left: auto; margin-right: auto;">
              <strong class="text-primary" style="font-size: 1rem;">🚀 Tiến vào Tuần 04: Internet, Trình duyệt & An toàn số (Tuần Về Đích GĐ1)</strong>
              <p class="text-secondary mt-1" style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Buổi 07 (Thứ 3 tới): Em sẽ khám phá thế giới Internet, làm chủ trình duyệt Google Chrome/Edge, kỹ thuật mở tab Ctrl+T/W, tìm kiếm tài liệu thông minh trên Google, đánh dấu Bookmark và tải file an toàn về máy!
              </p>
            </div>

            <div class="d-flex justify-center gap-3 mt-4">
              <a href="../index.html" class="btn btn--secondary">🏠 Về Cổng Khóa học</a>
              <a href="lesson.html?id=gd1-w04-l07" class="btn btn--primary">Sang Tuần 04: Buổi 07 (Internet & Trình duyệt) ➔</a>
            </div>
          </div>
        `
      }
    ]
  };

  // Đăng ký vào Global Lesson Registry
  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w03-l06'] = lessonData;

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('id') === 'gd1-w03-l06') {
    window.currentLessonData = lessonData;
  }
})();
