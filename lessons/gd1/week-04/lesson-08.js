/**
 * LESSON DATA — GĐ1 · Tuần 04 · Buổi 08
 * Chủ đề: Upload & An toàn Internet (Assessment Tổng Kết Giai Đoạn 1)
 * Thiết kế chuẩn Slide Trình chiếu Giảng dạy 1:1 (Teacher-Led Slide Deck)
 */

(function () {
  'use strict';

  const lessonData = {
    id: 'gd1-w04-l08',
    stage: 'GĐ1',
    stageName: 'Nhập môn máy tính',
    week: 4,
    lesson: 8,
    duration: '90 phút',
    title: 'Upload & An toàn Internet — Đại Thử Thách GĐ1',
    subtitle: 'Nắm vững kỹ năng Upload nộp bài, bảo mật mật khẩu, vạch trần link lạ độc hại và hoàn thành Chiến dịch "Thám tử Internet"',
    totalXP: 100,

    cheatsheet: {
      vocabulary: [
        'Upload',
        'Download',
        'Google Drive',
        'Cloud Storage',
        'Password Security',
        'Phishing',
        'Malware',
        'Digital Footprint'
      ],
      icons: [
        { symbol: '📤', name: 'Upload', desc: 'Tải tệp tin từ máy tính cá nhân lên mạng (Google Drive, Form nộp bài)' },
        { symbol: '📥', name: 'Download', desc: 'Tải tệp tin từ mạng về máy tính cá nhân' },
        { symbol: '🛡️', name: 'Password', desc: 'Mật khẩu mạnh: Ít nhất 8 ký tự gồm chữ hoa, thường, số và ký tự đặc biệt' },
        { symbol: '🎣', name: 'Phishing', desc: 'Bẫy lừa đảo: Trang web mạo danh lừa đánh cắp tài khoản' },
        { symbol: '🕵️', name: 'Internet Detective', desc: 'Thám tử Internet: Kỹ năng điều tra thông tin và kiểm tra an toàn số' }
      ],
      shortcuts: [
        { keys: ['Ctrl', 'Shift', 'N'], desc: 'Mở cửa sổ Ẩn danh (Incognito) duyệt web không lưu lịch sử' },
        { keys: ['Ctrl', 'H'], desc: 'Mở Lịch sử duyệt web (History) để xem lại hoặc xóa dấu vết' },
        { keys: ['Ctrl', 'Shift', 'Delete'], desc: 'Xóa nhanh dữ liệu duyệt web, cache và cookie' }
      ],
      troubleshooting: 'Nếu gặp một trang web yêu cầu nhập mật khẩu hoặc hiện thông báo "Máy tính bạn bị nhiễm virus, bấm vào đây để quét": HÃY TẮT NGAY TAB ĐÓ BẰNG PHÍM CTRL + W! Tuyệt đối không bấm vào bất kỳ nút nào!'
    },

    sections: [
      /* SLIDE 01: WELCOME & FINAL MISSION */
      {
        id: 'w04-l08-s01',
        type: 'concept',
        icon: '🛡️',
        eyebrow: 'BUỔI 08 · TUẦN 04',
        title: 'Đại Thử Thách Về Đích Giai Đoạn 1',
        badge: { type: 'energy', text: '🏆 Trận Chiến Cuối Cùng' },
        contentHtml: `
          <div class="hero-mission-box">
            <div class="hero-mission-content">
              <span class="badge badge--danger mb-2 font-bold">Chặng Cuối: Sát Hạch Toàn Diện GĐ1</span>
              <h2 style="font-size: 1.75rem; margin-bottom: 8px;">Chào mừng Hiệp sĩ An toàn Không gian Mạng!</h2>
              <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.6;">
                Hôm nay là buổi học thứ 8 — dấu mốc tổng kết toàn bộ Giai đoạn 1 "Nhập môn máy tính". Em sẽ được trang bị "lá chắn hộ thân" tối thượng trên Internet trước khi bước vào <strong>Đại thử thách Thám tử Internet</strong>!
              </p>
              
              <div class="grid-2-col gap-3 mt-3">
                <div class="learning-target-card">
                  <div class="target-icon">📤</div>
                  <div>
                    <strong>Kỹ năng Upload bài tập</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Tải bài tập từ máy tính lên Google Drive và nộp qua Google Form chuẩn quy cách.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🔐</div>
                  <div>
                    <strong>Pháo đài Mật khẩu</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Quy tắc đặt mật khẩu siêu cấp chống hack và bảo vệ thông tin cá nhân.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🎣</div>
                  <div>
                    <strong>Vạch trần Link lừa đảo</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Nhận diện bẫy Phishing, tin nhắn trúng thưởng giả mạo và virus độc hại.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🕵️</div>
                  <div>
                    <strong>Chiến dịch Thám Tử Internet</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Bài thi thực chiến 5 bước liên hoàn để chính thức tốt nghiệp Giai đoạn 1!</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-mascot-badge">
              <div style="font-size: 4rem;">🎖️</div>
              <span class="badge badge--warning mt-2 font-bold">+100 XP Thưởng</span>
              <p class="text-muted text-center mt-2" style="font-size: 0.8rem;">Vinh danh Bảng vàng Hoàn thành GĐ1</p>
            </div>
          </div>
        `
      },

      /* SLIDE 02: UPLOAD VS DOWNLOAD */
      {
        id: 'w04-l08-s02',
        type: 'concept',
        icon: '📤',
        eyebrow: 'LUỒNG DỮ LIỆU SỐ',
        title: 'Tải Lên (Upload) vs Tải Xuống (Download)',
        badge: { type: 'primary', text: 'Phân biệt chiều dữ liệu' },
        contentHtml: `
          <div class="grid-2-col gap-4 text-center">
            <div class="p-4 bg-card rounded border" style="border-top: 5px solid #2563eb;">
              <span style="font-size: 3rem;">📥</span>
              <h3 style="color: #2563eb; margin: 8px 0 4px;">DOWNLOAD (Tải xuống)</h3>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                <strong>Chiều mũi tên:</strong> Từ Internet / Đám mây ➔ <strong>Đưa về Ổ cứng máy tính</strong> của em.
              </p>
              <div class="p-2 rounded bg-page-secondary text-left" style="font-size: 0.85rem;">
                <em>Ví dụ:</em> Tải ảnh trên Google về máy tính, tải đề thi của thầy cô về xem.
              </div>
            </div>

            <div class="p-4 bg-card rounded border" style="border-top: 5px solid #10b981;">
              <span style="font-size: 3rem;">📤</span>
              <h3 style="color: #10b981; margin: 8px 0 4px;">UPLOAD (Tải lên)</h3>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                <strong>Chiều mũi tên:</strong> Từ Ổ cứng máy tính của em ➔ <strong>Đưa lên Mạng Internet / Drive</strong>.
              </p>
              <div class="p-2 rounded bg-page-secondary text-left" style="font-size: 0.85rem;">
                <em>Ví dụ:</em> Tải bài tập làm xong lên Google Drive nộp bài, gửi ảnh đại diện lên trang cá nhân.
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 03: GOOGLE DRIVE UPLOAD GUIDE */
      {
        id: 'w04-l08-s03',
        type: 'concept',
        icon: '☁️',
        eyebrow: 'LƯU TRỮ ĐÁM MÂY',
        title: '3 Bước Tải File Lên Google Drive / Form Nộp Bài',
        badge: { type: 'energy', text: 'Kỹ năng nộp bài' },
        contentHtml: `
          <div class="p-4 bg-card rounded border mb-4">
            <h3 class="text-primary mb-3">Quy trình nộp bài qua Google Drive:</h3>
            <div class="grid-3-col gap-3">
              <div class="p-3 rounded bg-page-secondary">
                <span class="badge badge--primary mb-1">Bước 1</span>
                <strong>Mở Drive & Đăng nhập</strong>
                <p class="text-muted mt-1" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                  Truy cập <code>drive.google.com</code> và đăng nhập tài khoản học tập của em.
                </p>
              </div>

              <div class="p-3 rounded bg-page-secondary">
                <span class="badge badge--primary mb-1">Bước 2</span>
                <strong>Bấm nút "Mới" (+ New)</strong>
                <p class="text-muted mt-1" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                  Bấm nút <strong>+ Mới</strong> lớn ở góc trái ➔ Chọn <strong>Tải tệp lên (File upload)</strong> hoặc <em>Kéo thả trực tiếp file</em> từ File Explorer vào cửa sổ Drive!
                </p>
              </div>

              <div class="p-3 rounded bg-page-secondary">
                <span class="badge badge--primary mb-1">Bước 3</span>
                <strong>Kiểm tra dấu tích xanh</strong>
                <p class="text-muted mt-1" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                  Đợi thanh tiến trình chạy đến khi hiện biểu tượng tròn màu xanh lá cây ✅ thông báo đã tải lên hoàn tất!
                </p>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 04: PASSWORD FORTRESS */
      {
        id: 'w04-l08-s04',
        type: 'concept',
        icon: '🔐',
        eyebrow: 'LÁ CHẮN BẢO MẬT',
        title: 'Quy Tắc Xây Dựng "Pháo Đài Mật Khẩu" Chống Hack',
        badge: { type: 'danger', text: 'Bảo mật cá nhân' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-3 bg-card rounded border" style="border-left: 4px solid #ef4444;">
              <h4 style="color: #ef4444; margin: 0 0 6px;">❌ 4 KIỂU MẬT KHẨU CỰC KỲ NGUY HIỂM:</h4>
              <ul style="margin: 6px 0 0 20px; font-size: 0.88rem; line-height: 1.7;" class="text-secondary">
                <li>Đặt số thứ tự: <code>123456</code>, <code>12345678</code> ➔ <em>Hacker bẻ khóa trong 0.001 giây!</em></li>
                <li>Đặt ngày tháng năm sinh của mình: <code>nam15082012</code></li>
                <li>Đặt số điện thoại hoặc họ tên trần trụi: <code>nguyenvannam</code></li>
                <li>Dùng chung đúng 1 mật khẩu cho tất cả tài khoản Facebook, Zalo, Gmail, Game!</li>
              </ul>
            </div>

            <div class="p-3 bg-card rounded border" style="border-left: 4px solid #10b981;">
              <h4 style="color: #10b981; margin: 0 0 6px;">✅ CÔNG THỨC MẬT KHẨU MẠNH CHUẨN QUỐC TẾ:</h4>
              <ul style="margin: 6px 0 0 20px; font-size: 0.88rem; line-height: 1.7;" class="text-secondary">
                <li><strong>Độ dài:</strong> Tối thiểu từ <strong>8 đến 12 ký tự</strong> trở lên.</li>
                <li><strong>Chữ HOA:</strong> Có ít nhất 1 chữ cái viết hoa (A, B, C).</li>
                <li><strong>Chữ thường:</strong> Các chữ cái viết thường (a, b, c).</li>
                <li><strong>Chữ số:</strong> Các con số ngẫu nhiên (1, 8, 9).</li>
                <li><strong>Ký tự đặc biệt:</strong> Chứa các ký hiệu đặc biệt như <code>@</code>, <code>#</code>, <code>$</code>, <code>!</code>.</li>
              </ul>
              <div class="p-2 rounded mt-2 font-mono text-center" style="background: #ecfdf5; color: #065f46; font-weight: 700; font-size: 0.95rem;">
                Ví dụ mật khẩu mạnh: LapTrinh#2026!
              </div>
            </div>
          </div>

          <div class="callout callout--warning mt-3">
            <strong>⚠️ Nguyên tắc số 1:</strong> Mật khẩu giống như bàn chải đánh răng — <strong>KHÔNG BAO GIỜ CHO BẤT KỲ AI DÙNG CHUNG</strong> (kể cả bạn thân nhất ở lớp)!
          </div>
        `
      },

      /* SLIDE 05: PHISHING & MALICIOUS LINKS */
      {
        id: 'w04-l08-s05',
        type: 'concept',
        icon: '🎣',
        eyebrow: 'BẪY TRÊN MẠNG',
        title: 'Vạch Trần Bẫy Lừa Đảo Phishing & Link Độc Hại',
        badge: { type: 'danger', text: 'Cảnh giác cao độ' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Kẻ xấu trên mạng thường giăng các "chiếc bẫy ngọt ngào" để lừa học sinh bấm vào:
          </p>

          <div class="grid-3-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border">
              <span class="badge badge--danger mb-1">Bẫy 1</span>
              <h4 style="margin: 0 0 4px; color: #dc2626;">Tin nhắn Trúng thưởng ảo</h4>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                <em>"Chúc mừng bạn đã trúng iPhone 16! Bấm vào đây để nhận thưởng..."</em> ➔ Bấm vào sẽ bị mất tài khoản hoặc lộ thông tin gia đình!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--danger mb-1">Bẫy 2</span>
              <h4 style="margin: 0 0 4px; color: #dc2626;">Trang web giả mạo (Phishing)</h4>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Địa chỉ web nhìn gần giống thật: <code>faceb00k-login.com</code> thay vì <code>facebook.com</code>. Nếu gõ mật khẩu vào là dâng tài khoản cho kẻ xấu!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--danger mb-1">Bẫy 3</span>
              <h4 style="margin: 0 0 4px; color: #dc2626;">Tải Game Lậu / Phần mềm Crack</h4>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Các tệp tin có đuôi <code>.exe</code>, <code>.bat</code> tải từ các trang web lạ có chứa Virus hoặc mã độc gián điệp theo dõi bàn phím của em!
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 06: DIGITAL FOOTPRINT */
      {
        id: 'w04-l08-s06',
        type: 'concept',
        icon: '👣',
        eyebrow: 'DẤU VẾT KỸ THUẬT SỐ',
        title: 'Dấu Chân Số (Digital Footprint) & Bảo Vệ Mình Trên Mạng',
        badge: { type: 'primary', text: 'Công dân số văn minh' },
        contentHtml: `
          <div class="grid-2-col gap-4 items-center">
            <div>
              <h3 style="color: var(--color-primary); margin-top: 0;">Mọi thứ em đăng lên mạng đều để lại dấu vết!</h3>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Dù em có xóa bài viết hay tin nhắn, dữ liệu đó vẫn có thể bị lưu lại trên máy chủ hoặc ai đó đã chụp lại màn hình.
              </p>

              <div class="callout callout--danger mt-2">
                <h4 class="callout__title">🚫 4 điều TUYỆT ĐỐI KHÔNG đăng lên mạng công khai:</h4>
                <ul style="margin: 4px 0 0 20px; font-size: 0.88rem; line-height: 1.7;">
                  <li>Địa chỉ nhà riêng, trường lớp cụ thể em đang học.</li>
                  <li>Số Căn cước công dân (CCCD) hoặc số tài khoản ngân hàng của bố mẹ.</li>
                  <li>Lịch trình gia đình đi du lịch vắng nhà nhiều ngày.</li>
                  <li>Hình ảnh nhạy cảm hoặc mật khẩu cá nhân.</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-card rounded border text-center">
              <span style="font-size: 3.5rem;">👣</span>
              <h4 class="mt-2 mb-1">Dấu Chân Số</h4>
              <p class="text-muted" style="font-size: 0.85rem; margin: 0;">
                Hãy suy nghĩ kỹ 5 giây trước khi bấm nút Đăng (Post) bất kỳ điều gì lên Internet!
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 07: INTERNET DETECTIVE CHALLENGE */
      {
        id: 'w04-l08-s07',
        type: 'boss',
        icon: '🕵️',
        eyebrow: 'ĐẠI THỬ THÁCH SÁT HẠCH GĐ1',
        title: 'Chiến Dịch Tổng Hợp: "Thám Tử Internet" (Internet Detective)',
        badge: { type: 'danger', text: 'Assessment GĐ1 · 25 Phút' },
        contentHtml: `
          <div class="callout callout--info mb-3">
            <h4 class="callout__title">📜 Hồ sơ Nhiệm Vụ Mật của Thám tử Lớp 7:</h4>
            <p style="margin: 0; line-height: 1.6;">
              Em hãy chia sẻ màn hình với Thầy/Cô và hoàn thành chuỗi 5 nhiệm vụ liên hoàn để kiểm tra toàn bộ kỹ năng đã học trong 4 tuần qua:
            </p>
          </div>

          <div class="checklist-suite">
            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 1 (Truy vết Web):</strong> Mở Google Chrome bằng bàn phím (<kbd class="keycap">Win</kbd> ➔ gõ <code>chrome</code> ➔ <kbd class="keycap">Enter</kbd>). Tra cứu thông tin: <em>"Nhà bác học đầu tiên phát minh ra thuật toán là ai?"</em> (Gợi ý: Ada Lovelace).
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 2 (Tải & Đổi tên):</strong> Tải đúng 1 bức chân dung của nhà bác học đó về máy ➔ Lưu vào đúng thư mục <code>HocTap_Lop7/LapTrinh</code> ➔ Dùng phím <kbd class="keycap">F2</kbd> đổi tên thành <code>NhaBacHoc_AdaLovelace.png</code>.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 3 (Soạn thảo Báo cáo):</strong> Mở Notepad, gõ 3 dòng tóm tắt thông tin vừa tra cứu được bằng tiếng Việt có dấu chuẩn Telex ➔ Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">S</kbd> lưu vào thư mục <code>LapTrinh</code> với tên <code>BaoCao_LichSu_MayTinh.txt</code>.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 4 (Đánh dấu Bookmark):</strong> Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">D</kbd> để lưu lại trang web chứa thông tin lịch sử đó vào Bookmark trình duyệt.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Nhiệm vụ 5 (Upload nộp bài):</strong> Mở thư mục nộp bài Google Drive / Form của lớp ➔ Tải file báo cáo <code>BaoCao_LichSu_MayTinh.txt</code> lên hệ thống an toàn!
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 08: FINAL QUIZ */
      {
        id: 'w04-l08-s08',
        type: 'quiz',
        icon: '❓',
        eyebrow: 'SÁT HẠCH AN TOÀN SỐ',
        title: 'Final Quiz: Phát Hiện Link Lạ & Bảo Mật Cá Nhân',
        badge: { type: 'quiz', text: '3 Câu hỏi sát hạch' },
        contentHtml: `
          <div class="quiz-container">
            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 1: Nhận được tin nhắn từ người lạ: "Em bấm vào link này nhận 100.000 Robux miễn phí nhé!", em sẽ làm gì?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Quá xuất sắc! Không bao giờ tin quà tặng miễn phí từ link lạ trên mạng.')">A. Tuyệt đối không bấm vào, chặn tin nhắn và báo cho bố mẹ/thầy cô</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Nguy hiểm! Đây là bẫy lừa đảo 100%.')">B. Bấm vào ngay để lấy Robux chơi game</button>
              </div>
            </div>

            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 2: Mật khẩu nào sau đây được coi là an toàn và khó bị bẻ khóa nhất?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Chuẩn xác! Đủ chữ hoa, thường, số và ký tự đặc biệt #.')">A. TinHocLop7#2026</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, '12345678 là mật khẩu yếu nhất thế giới.')">B. 12345678</button>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 09: STAGE 1 SKILL CHECKLIST */
      {
        id: 'w04-l08-s09',
        type: 'complete',
        icon: '📋',
        eyebrow: 'BẢNG ĐÁNH GIÁ CHUẨN ĐẦU RA',
        title: 'Checklist Toàn Diện Kỹ Năng Máy Tính Giai Đoạn 1',
        badge: { type: 'success', text: '100% Đạt Chuẩn' },
        contentHtml: `
          <div class="p-4 bg-card rounded border mb-4">
            <h3 class="text-primary mb-3">8 Tiêu chí vàng Học sinh Lớp 7 đã làm chủ:</h3>
            <div class="grid-2-col gap-3 font-semibold text-secondary" style="font-size: 0.92rem;">
              <div class="p-2 rounded bg-page-secondary">✅ 1. Bật/tắt máy tính đúng quy trình, tư thế ngồi chuẩn an toàn</div>
              <div class="p-2 rounded bg-page-secondary">✅ 2. Điều khiển cửa sổ thành thạo: Minimize, Maximize, Close</div>
              <div class="p-2 rounded bg-page-secondary">✅ 3. Làm chủ 5 kỹ năng chuột: Click, Double click, Right click, Drag & Drop</div>
              <div class="p-2 rounded bg-page-secondary">✅ 4. Đặt tay chuẩn 10 ngón hàng Home Row (F, J) & gõ tiếng Việt Telex</div>
              <div class="p-2 rounded bg-page-secondary">✅ 5. Thành thạo phím tắt tốc độ: Ctrl+C, V, X, Z, S, Alt+Tab, Win+D</div>
              <div class="p-2 rounded bg-page-secondary">✅ 6. Hiểu File/Folder, xây dựng Cây thư mục cá nhân ngăn nắp</div>
              <div class="p-2 rounded bg-page-secondary">✅ 7. Quản lý dữ liệu an toàn với Save / Save As và Thùng rác Recycle Bin</div>
              <div class="p-2 rounded bg-page-secondary">✅ 8. Lướt web thông minh, tìm kiếm tài liệu, Upload bài và an toàn số</div>
            </div>
          </div>
        `
      },

      /* SLIDE 10: GRADUATION STAGE 1 & NEXT STAGE */
      {
        id: 'w04-l08-s10',
        type: 'complete',
        icon: '🎓',
        eyebrow: 'TỔNG KẾT & TỐT NGHIỆP GIAI ĐOẠN 1',
        title: 'Vinh Danh Tốt Nghiệp Giai Đoạn 1: Nhập Môn Máy Tính!',
        badge: { type: 'success', text: '⭐ 800 XP Xuất Sắc' },
        contentHtml: `
          <div class="p-4 bg-card rounded border text-center">
            <div style="font-size: 4.5rem;" class="mb-2">🏆🎖️🎓</div>
            <h2 style="color: var(--color-success); margin-bottom: 8px;">CHÚC MỪNG EM ĐÃ HOÀN THÀNH XUẤT SẮC GIAI ĐOẠN 1!</h2>
            <p class="text-secondary" style="max-width: 680px; margin: 0 auto; font-size: 1.1rem; line-height: 1.7;">
              Từ con số 0 ban đầu, qua 4 tuần học (8 buổi 1:1), em đã chính thức trở thành một <strong>Người dùng máy tính độc lập, tự tin và an toàn</strong>. Đây chính là bệ phóng vững chắc nhất để em bước sang thế giới lập trình!
            </p>

            <div class="p-4 rounded mt-4 text-left" style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 2px solid #2563eb; max-width: 680px; margin-left: auto; margin-right: auto;">
              <div class="d-flex items-center gap-2 mb-2">
                <span style="font-size: 1.8rem;">🚀</span>
                <strong style="color: #1d4ed8; font-size: 1.15rem;">BƯỚC SANG GIAI ĐOẠN 2: TIN HỌC CƠ BẢN & SOẠN THẢO VĂN BẢN SỐ</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6; margin: 0;">
                Ở Giai đoạn 2, em sẽ được học cách dùng <strong>Microsoft Word / Google Docs</strong> để làm báo cáo thuyết trình môn học đẹp mắt, tính toán bảng biểu bằng <strong>Excel</strong> và chuẩn bị tư duy thuật toán với <strong>Scratch</strong>!
              </p>
            </div>

            <div class="d-flex justify-center gap-3 mt-4">
              <a href="../index.html" class="btn btn--primary" style="padding: 12px 32px; font-size: 1.05rem;">
                🏠 Về Cổng Khóa Học & Nhận Bảng Điểm Tổng Kết
              </a>
            </div>
          </div>
        `
      }
    ]
  };

  // Đăng ký vào Global Lesson Registry
  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w04-l08'] = lessonData;

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('id') === 'gd1-w04-l08') {
    window.currentLessonData = lessonData;
  }
})();
