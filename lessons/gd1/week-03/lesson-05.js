/**
 * LESSON DATA — GĐ1 · Tuần 03 · Buổi 05
 * Chủ đề: File & Folder (Tệp tin & Thư mục)
 * Thiết kế chuẩn Slide Trình chiếu Giảng dạy 1:1 (Teacher-Led Slide Deck)
 */

(function () {
  'use strict';

  const lessonData = {
    id: 'gd1-w03-l05',
    stage: 'GĐ1',
    stageName: 'Nhập môn máy tính',
    week: 3,
    lesson: 5,
    duration: '90 phút',
    title: 'File & Folder — Quản lý Tệp & Thư mục',
    subtitle: 'Hiểu bản chất File vs Folder, giải mã các đuôi file, quy tắc đặt tên khoa học và tạo cây thư mục học tập cá nhân',
    totalXP: 100,

    cheatsheet: {
      vocabulary: [
        'File',
        'Folder',
        'Directory Tree',
        'File Extension',
        'Path',
        'Rename',
        'Create',
        'Delete'
      ],
      icons: [
        { symbol: '📁', name: 'Folder', desc: 'Thư mục: Ngăn kéo chứa nhiều tệp tin hoặc thư mục con' },
        { symbol: '📄', name: 'File', desc: 'Tệp tin: Một tài liệu, bức ảnh, bài hát hoặc video cụ thể' },
        { symbol: '🌳', name: 'Directory Tree', desc: 'Cây thư mục: Cấu trúc phân cấp cha - con ngăn nắp' },
        { symbol: '🏷️', name: 'File Extension', desc: 'Phần mở rộng (.docx, .png, .pdf): Giúp máy tính biết dùng app nào mở' },
        { symbol: '⌨️', name: 'F2', desc: 'Phím tắt đổi tên tệp/thư mục tức thì' },
        { symbol: '➕', name: 'Ctrl+Shift+N', desc: 'Tạo nhanh 1 thư mục mới trong File Explorer' }
      ],
      shortcuts: [
        { keys: ['Ctrl', 'Shift', 'N'], desc: 'Tạo thư mục mới (New Folder) ngay lập tức' },
        { keys: ['F2'], desc: 'Đổi tên (Rename) file hoặc folder đang chọn' },
        { keys: ['Delete'], desc: 'Xóa đưa vào Thùng rác (Recycle Bin) có thể cứu lại' },
        { keys: ['Shift', 'Delete'], desc: 'Xóa vĩnh viễn không qua Thùng rác (Cẩn thận!)' }
      ],
      troubleshooting: 'Nếu máy tính không hiện đuôi file (.png, .docx): Vào File Explorer > bấm thẻ View > tích chọn ô "File name extensions"!'
    },

    sections: [
      /* SLIDE 01: WELCOME & MISSION */
      {
        id: 'w03-l05-s01',
        type: 'concept',
        icon: '📁',
        eyebrow: 'BUỔI 05 · TUẦN 03',
        title: 'Khám phá Ngôi nhà Dữ liệu: File & Folder',
        badge: { type: 'primary', text: '⭐ Khởi đầu Tuần 03' },
        contentHtml: `
          <div class="hero-mission-box">
            <div class="hero-mission-content">
              <span class="badge badge--energy mb-2">Chặng 3: Tổ chức Dữ liệu Khoa học</span>
              <h2 style="font-size: 1.75rem; margin-bottom: 8px;">Chào mừng em đến với Thế giới Tệp & Thư mục!</h2>
              <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.6;">
                Một chiếc bàn học bừa bộn sẽ khiến em mất cả tiếng đồng hồ để tìm một cuốn vở. Máy tính cũng y như vậy! Hôm nay, em sẽ học cách trở thành một <strong>Kiến trúc sư Dữ liệu</strong> tài ba.
              </p>
              
              <div class="grid-2-col gap-3 mt-3">
                <div class="learning-target-card">
                  <div class="target-icon">📁</div>
                  <div>
                    <strong>Phân biệt File vs Folder</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Hiểu bản chất Ngăn kéo (Folder) và Tệp tài liệu (File) nằm bên trong.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🏷️</div>
                  <div>
                    <strong>Giải mã Đuôi File</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Hiểu ý nghĩa phần mở rộng: .docx, .xlsx, .pptx, .png, .jpg, .pdf, .mp4, .zip.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">⚡</div>
                  <div>
                    <strong>Tạo - Đổi tên - Xóa chuẩn</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Thành thạo phím tắt Ctrl+Shift+N, F2 và quy tắc đặt tên không dấu gạch nối.</p>
                  </div>
                </div>

                <div class="learning-target-card">
                  <div class="target-icon">🌳</div>
                  <div>
                    <strong>Cây Thư Mục Học Tập</strong>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Tự tay xây dựng cây thư mục cá nhân ngăn nắp phục vụ cả năm học lớp 7.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-mascot-badge">
              <div style="font-size: 4rem;">🗂️</div>
              <span class="badge badge--warning mt-2 font-bold">+100 XP Thưởng</span>
              <p class="text-muted text-center mt-2" style="font-size: 0.8rem;">Dành cho Học sinh xây xong Cây thư mục</p>
            </div>
          </div>
        `
      },

      /* SLIDE 02: WARM-UP & REVIEW */
      {
        id: 'w03-l05-s02',
        type: 'warmup',
        icon: '🤔',
        eyebrow: 'KHỞI ĐỘNG 5 PHÚT',
        title: 'Bàn Học Bừa Bộn & Chiếc Máy Tính Lộn Xộn',
        badge: { type: 'warning', text: 'Quan sát & Thảo luận' },
        contentHtml: `
          <div class="grid-2-col gap-4 items-center">
            <div>
              <h3 style="color: #b45309; margin-top: 0;">Hãy tưởng tượng 2 tình huống sau:</h3>
              <div class="p-3 rounded mb-3" style="background: #fee2e2; border-left: 4px solid #ef4444;">
                <strong style="color: #991b1b;">❌ Tình huống A (Bừa bộn):</strong>
                <p class="text-secondary mt-1" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                  Toàn bộ 200 bức ảnh đi chơi, 50 bài tập Văn, Toán, tiếng Anh đều vứt bừa bãi ra màn hình ngoài Desktop với các tên gọi như: <em>"New Folder (1)", "aaa.txt", "111.docx", "anh.jpg"</em>. Mỗi lần cần tìm bài nộp cô giáo mất 30 phút!
                </p>
              </div>

              <div class="p-3 rounded" style="background: #ecfdf5; border-left: 4px solid #10b981;">
                <strong style="color: #065f46;">✅ Tình huống B (Khoa học):</strong>
                <p class="text-secondary mt-1" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                  Dữ liệu được sắp xếp vào thư mục <code>HocTap</code>, bên trong có các ngăn <code>Toan</code>, <code>Van</code>, <code>TiengAnh</code>. Tên file ghi rõ: <code>Toan_Baitap_Tuan03.docx</code>. Chỉ 3 giây là tìm thấy ngay!
                </p>
              </div>
            </div>

            <div class="p-4 bg-card rounded border text-center">
              <span style="font-size: 3.5rem;">🎒 ➔ 🗄️</span>
              <h4 class="mt-2 mb-2 text-primary">Cặp sách & Tủ hồ sơ</h4>
              <p class="text-muted" style="font-size: 0.9rem; margin: 0;">
                Folder giống như những chiếc ngăn kéo, còn File giống như từng cuốn sách giáo khoa được đặt cẩn thận vào ngăn đó!
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 03: FILE VS FOLDER */
      {
        id: 'w03-l05-s03',
        type: 'concept',
        icon: '⚖️',
        eyebrow: 'BẢN CHẤT CỐT LÕI',
        title: 'Phân Biệt Tệp Tin (File) và Thư Mục (Folder)',
        badge: { type: 'primary', text: 'Khái niệm nền tảng' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border" style="border-top: 5px solid #f59e0b;">
              <div class="d-flex items-center gap-3 mb-2">
                <span style="font-size: 2.5rem;">📁</span>
                <div>
                  <h3 style="margin: 0; color: #d97706;">THƯ MỤC (FOLDER)</h3>
                  <small class="text-muted">Còn gọi là Thư mục, Thư viện, Directory</small>
                </div>
              </div>
              <ul style="margin: 10px 0 0 20px; padding: 0; font-size: 0.92rem; line-height: 1.7;" class="text-secondary">
                <li><strong>Biểu tượng:</strong> Luôn có hình <strong>kẹp giấy hoặc bìa hồ sơ màu vàng</strong>.</li>
                <li><strong>Bản chất:</strong> Là một "chiếc thùng" hoặc "ngăn kéo" dùng để chứa các tệp tin và các thư mục con khác.</li>
                <li><strong>Đặc điểm:</strong> Bản thân thư mục <strong>không có phần mở rộng (đuôi file)</strong>. Dung lượng của thư mục bằng tổng dung lượng của tất cả những gì nằm bên trong nó!</li>
              </ul>
            </div>

            <div class="p-4 bg-card rounded border" style="border-top: 5px solid #2563eb;">
              <div class="d-flex items-center gap-3 mb-2">
                <span style="font-size: 2.5rem;">📄</span>
                <div>
                  <h3 style="margin: 0; color: #2563eb;">TỆP TIN (FILE)</h3>
                  <small class="text-muted">Còn gọi là Tập tin, Tệp dữ liệu, Document</small>
                </div>
              </div>
              <ul style="margin: 10px 0 0 20px; padding: 0; font-size: 0.92rem; line-height: 1.7;" class="text-secondary">
                <li><strong>Biểu tượng:</strong> Hình tờ giấy có icon của phần mềm tạo ra nó (Word, Excel, ảnh, nhạc).</li>
                <li><strong>Bản chất:</strong> Là khối dữ liệu cụ thể (chứa văn bản, âm thanh, hình ảnh, mã lập trình).</li>
                <li><strong>Đặc điểm:</strong> <strong>Bắt buộc có Phần mở rộng (đuôi file)</strong> nằm sau dấu chấm (ví dụ: <code>.txt</code>, <code>.docx</code>). File không thể chứa file khác bên trong!</li>
              </ul>
            </div>
          </div>
        `
      },

      /* SLIDE 04: FILE EXTENSIONS */
      {
        id: 'w03-l05-s04',
        type: 'concept',
        icon: '🏷️',
        eyebrow: 'GIẢI MÃ PHẦN MỞ RỘNG',
        title: 'Cấu Trúc Tên Tệp & Các Đuôi File Thông Dụng',
        badge: { type: 'energy', text: 'Nhận biết định dạng' },
        contentHtml: `
          <div class="p-4 bg-card rounded border mb-4 text-center">
            <span class="text-secondary" style="font-size: 0.95rem;">Tên một tệp tin luôn gồm 2 phần ngăn cách bởi dấu chấm:</span>
            <div class="mt-2" style="font-size: 1.8rem; font-family: monospace; font-weight: 700;">
              <span style="color: #2563eb; background: #dbeafe; padding: 4px 12px; border-radius: 6px;">BaiTap_Toan_Lop7</span>
              <span style="color: #64748b;">.</span>
              <span style="color: #dc2626; background: #fee2e2; padding: 4px 12px; border-radius: 6px;">docx</span>
            </div>
            <div class="d-flex justify-center gap-5 mt-2 text-muted" style="font-size: 0.88rem;">
              <span>⬆️ <strong>Tên chính (File Name):</strong> Do con người tự đặt</span>
              <span>⬆️ <strong>Đuôi mở rộng (Extension):</strong> Do máy tính quy định</span>
            </div>
          </div>

          <h3 class="mb-2 text-primary">Các nhóm đuôi file em sẽ gặp suốt đời học sinh:</h3>
          <div class="grid-4-col gap-3">
            <div class="p-3 bg-card rounded border">
              <strong style="color: #2563eb;">📝 Soạn thảo Văn bản</strong>
              <div class="mt-1" style="font-size: 0.85rem; line-height: 1.6;">
                <code>.docx</code> — Microsoft Word<br>
                <code>.txt</code> — Văn bản thuần Notepad<br>
                <code>.pdf</code> — Tài liệu đóng băng chống sửa
              </div>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong style="color: #10b981;">📊 Bảng tính & Trình chiếu</strong>
              <div class="mt-1" style="font-size: 0.85rem; line-height: 1.6;">
                <code>.xlsx</code> — Bảng tính Excel<br>
                <code>.pptx</code> — Bài thuyết trình PowerPoint
              </div>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong style="color: #f59e0b;">🖼️ Hình ảnh & Đồ họa</strong>
              <div class="mt-1" style="font-size: 0.85rem; line-height: 1.6;">
                <code>.png</code> — Ảnh trong suốt sắc nét<br>
                <code>.jpg / .jpeg</code> — Ảnh chụp dung lượng nhẹ
              </div>
            </div>

            <div class="p-3 bg-card rounded border">
              <strong style="color: #8b5cf6;">🎬 Đa phương tiện & Nén</strong>
              <div class="mt-1" style="font-size: 0.85rem; line-height: 1.6;">
                <code>.mp4</code> — Video clip<br>
                <code>.mp3</code> — Bài hát / Âm thanh<br>
                <code>.zip / .rar</code> — Tệp nén gom gọn
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 05: DIRECTORY TREE & PATH */
      {
        id: 'w03-l05-s05',
        type: 'concept',
        icon: '🌳',
        eyebrow: 'CẤU TRÚC PHÂN CẤP',
        title: 'Cây Thư Mục (Directory Tree) & Đường Dẫn (Path)',
        badge: { type: 'primary', text: 'Cấu trúc cha - con' },
        contentHtml: `
          <div class="grid-2-col gap-4 items-center">
            <div>
              <h3 style="color: var(--color-primary); margin-top: 0;">Mô hình cây phân nhánh (Tree View)</h3>
              <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6;">
                Mọi dữ liệu trên máy tính đều xuất phát từ các <strong>Ổ đĩa gốc (Root Drive)</strong> như ổ <code>C:\</code> hoặc ổ <code>D:\</code>. Từ đó mọc ra các thư mục cha, thư mục con và tệp tin!
              </p>

              <div class="callout callout--info mt-3">
                <h4 class="callout__title">📍 Đường dẫn (Path) là gì?</h4>
                <p style="margin: 0; font-size: 0.88rem; line-height: 1.6;">
                  Là "địa chỉ nhà" chính xác của một tệp tin trên máy tính. Dấu gạch chéo ngược <code>\</code> dùng để ngăn cách giữa các cấp thư mục.<br>
                  Ví dụ: <code>D:\HocTap\Toan\BaiTap1.docx</code>
                </p>
              </div>
            </div>

            <div class="p-4 bg-card rounded border font-mono" style="font-size: 0.9rem; line-height: 1.8;">
              <div class="text-primary font-bold">💽 Ổ đĩa D: (Data)</div>
              <div style="padding-left: 20px;">
                └── 📁 HocTap/ (Thư mục Cha)
                <div style="padding-left: 24px;">
                  ├── 📁 Toan/ (Thư mục Con)
                  <div style="padding-left: 24px; color: #2563eb;">
                    └── 📄 De_Cuong_Ky1.docx
                  </div>
                  ├── 📁 Van/
                  <div style="padding-left: 24px; color: #2563eb;">
                    └── 📄 Bai_Van_Ta_Canh.docx
                  </div>
                  └── 📁 LapTrinh/
                  <div style="padding-left: 24px; color: #10b981;">
                    └── 📄 Game_Me_Cung.sb3
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 06: CREATE FOLDER */
      {
        id: 'w03-l05-s06',
        type: 'concept',
        icon: '➕',
        eyebrow: 'THAO TÁC CƠ BẢN 1',
        title: 'Cách Tạo Mới Thư Mục (Create Folder)',
        badge: { type: 'energy', text: '2 Cách tạo nhanh' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border">
              <span class="badge badge--primary mb-2">Cách 1: Tuyệt chiêu Phím tắt (Khuyên dùng)</span>
              <h3 style="margin: 0 0 8px;">Bấm Ctrl + Shift + N</h3>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Khi đang mở cửa sổ File Explorer hoặc đang ở ngoài Desktop:
              </p>
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Shift</kbd> + <kbd class="keycap">N</kbd>
              </div>
              <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">
                Chữ <strong>N</strong> viết tắt của <em>New</em>. Một thư mục màu vàng sẽ hiện ra ngay lập tức với tên mặc định là <code>New folder</code> và con trỏ chuột đã sẵn sàng để em gõ tên mới!
              </p>
            </div>

            <div class="p-4 bg-card rounded border">
              <span class="badge badge--secondary mb-2">Cách 2: Sử dụng Menu Chuột phải</span>
              <h3 style="margin: 0 0 8px;">Right Click > New > Folder</h3>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Thao tác truyền thống bằng chuột:
              </p>
              <ol style="margin: 0 0 0 20px; padding: 0; font-size: 0.88rem; line-height: 1.7;" class="text-secondary">
                <li>Nhấp chuột phải vào khoảng trống bất kỳ trong thư mục.</li>
                <li>Rê chuột chọn mục <strong>New</strong> (Mới).</li>
                <li>Bấm chuột trái vào mục <strong>Folder</strong> (Thư mục) ở đầu danh sách!</li>
              </ol>
            </div>
          </div>
        `
      },

      /* SLIDE 07: RENAME & NAMING RULES */
      {
        id: 'w03-l05-s07',
        type: 'concept',
        icon: '🏷️',
        eyebrow: 'THAO TÁC CƠ BẢN 2',
        title: 'Đổi Tên (F2) & Quy Tắc Đặt Tên Khoa Học',
        badge: { type: 'warning', text: 'Quy tắc vàng' },
        contentHtml: `
          <div class="grid-2-col gap-4 mb-4">
            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">F2</kbd>
                <h4 style="margin: 0;">Phím tắt Đổi Tên Tức Thì</h4>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Em chỉ cần bấm chuột chọn tệp hoặc thư mục cần đổi tên ➔ Bấm phím <strong>F2</strong> trên hàng phím chức năng ➔ Gõ tên mới ➔ Bấm <kbd class="keycap">Enter</kbd> là xong!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <h4 style="margin: 0 0 6px; color: #dc2626;">🚫 Ký tự cấm kỵ của hệ thống:</h4>
              <p class="text-secondary" style="font-size: 0.88rem; line-height: 1.5; margin: 0;">
                Hệ điều hành Windows nghiêm cấm đặt tên file chứa 9 ký tự sau vì trùng với lệnh hệ thống: <code>\\ / : * ? " &lt; &gt; |</code>
              </p>
            </div>
          </div>

          <div class="p-4 bg-card rounded border">
            <h3 class="text-primary mb-2">Quy chuẩn Đặt tên file của Lập trình viên chuyên nghiệp:</h3>
            <div class="grid-2-col gap-3">
              <div class="p-2 rounded bg-page-secondary">
                <span class="text-success font-bold">✅ NÊN LÀM:</span>
                <ul style="margin: 4px 0 0 20px; font-size: 0.85rem; line-height: 1.6;">
                  <li>Viết tiếng Việt <strong>KHÔNG DẤU</strong> (tránh lỗi font khi upload web).</li>
                  <li>Dùng dấu gạch dưới <code>_</code> hoặc gạch nối <code>-</code> thay cho khoảng trắng.</li>
                  <li>Kèm theo số tuần hoặc ngày tháng: <code>Toan_Tuan03_Baitap.docx</code></li>
                </ul>
              </div>

              <div class="p-2 rounded bg-page-secondary">
                <span class="text-danger font-bold">❌ KHÔNG NÊN LÀM:</span>
                <ul style="margin: 4px 0 0 20px; font-size: 0.85rem; line-height: 1.6;">
                  <li>Đặt tên quá chung chung: <code>baitap.docx</code>, <code>123.png</code></li>
                  <li>Đặt tên có dấu và nhiều khoảng trắng: <code>bài tập toán của em hôm nay.docx</code></li>
                  <li>Xóa mất phần đuôi file sau dấu chấm!</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 08: DELETE & RECYCLE BIN */
      {
        id: 'w03-l05-s08',
        type: 'concept',
        icon: '🗑️',
        eyebrow: 'THAO TÁC CƠ BẢN 3',
        title: 'Xóa Thường (Delete) vs Xóa Vĩnh Viễn (Shift + Delete)',
        badge: { type: 'danger', text: 'An toàn dữ liệu' },
        contentHtml: `
          <div class="grid-2-col gap-4">
            <div class="p-4 bg-card rounded border" style="border-top: 5px solid #10b981;">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Delete</kbd>
                <h3 style="margin: 0; color: #10b981;">XÓA VÀO THÙNG RÁC (An toàn)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Khi chọn file và bấm phím <code>Delete</code> (hoặc bấm chuột phải chọn Delete):
              </p>
              <ul style="margin: 6px 0 0 20px; padding: 0; font-size: 0.88rem; line-height: 1.6;" class="text-secondary">
                <li>Tệp tin chưa bị biến mất khỏi ổ cứng! Nó chỉ được chuyển vào <strong>Thùng rác (Recycle Bin)</strong>.</li>
                <li>Nếu lỡ xóa nhầm, em chỉ cần mở Thùng rác ra, bấm chuột phải chọn <strong>Restore</strong> là file quay về chỗ cũ nguyên vẹn!</li>
              </ul>
            </div>

            <div class="p-4 bg-card rounded border" style="border-top: 5px solid #dc2626;">
              <div class="d-flex items-center gap-2 mb-2">
                <kbd class="keycap">Shift</kbd> + <kbd class="keycap">Delete</kbd>
                <h3 style="margin: 0; color: #dc2626;">XÓA VĨNH VIỄN (Nguy hiểm!)</h3>
              </div>
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                Tổ hợp phím hủy diệt: Xóa bay màu tệp tin ngay lập tức mà <strong>KHÔNG QUA Thùng rác</strong>!
              </p>
              <div class="callout callout--danger mt-2">
                <strong>⚠️ Cảnh báo sống còn:</strong>
                <p style="margin: 4px 0 0; font-size: 0.85rem;">
                  Chỉ dùng <code>Shift + Delete</code> khi em 100% chắc chắn đó là file rác vô dụng và không bao giờ cần khôi phục lại!
                </p>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 09: HANDS-ON LAB 01 */
      {
        id: 'w03-l05-s09',
        type: 'lab',
        icon: '🌳',
        eyebrow: 'THỰC HÀNH XÂY DỰNG',
        title: 'Hands-on Lab 01: Thiết Lập Cây Thư Mục Cá Nhân',
        badge: { type: 'energy', text: 'Nhiệm vụ chính' },
        contentHtml: `
          <div class="callout callout--info mb-3">
            <h4 class="callout__title">🎯 Nhiệm vụ trên máy tính cá nhân của học sinh:</h4>
            <p style="margin: 0; line-height: 1.6;">
              Em hãy mở File Explorer và tạo dựng cấu trúc cây thư mục chuẩn sau đây trong ổ đĩa <code>D:\</code> (hoặc thư mục <code>Documents</code>):
            </p>
          </div>

          <div class="checklist-suite">
            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Bước 1:</strong> Bấm <kbd class="keycap">Ctrl</kbd> + <kbd class="keycap">Shift</kbd> + <kbd class="keycap">N</kbd> tạo thư mục cha có tên là: <code>HocTap_Lop7</code>
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Bước 2:</strong> Nháy đúp mở thư mục <code>HocTap_Lop7</code> ra.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Bước 3:</strong> Tạo 4 thư mục con bên trong lần lượt là: <code>Toan</code>, <code>Van</code>, <code>TiengAnh</code> và <code>LapTrinh</code>.
              </div>
            </div>

            <div class="checklist-item-row" onclick="this.classList.toggle('is-done'); if(window.SoundManager) window.SoundManager.playPop();">
              <span class="check-box">⬜</span>
              <div class="check-text">
                <strong>Bước 4:</strong> Dùng phím <kbd class="keycap">F2</kbd> thử đổi tên thư mục <code>Van</code> thành <code>NguVan</code> xem có nhanh không nhé!
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 10: HANDS-ON LAB 02 */
      {
        id: 'w03-l05-s10',
        type: 'lab',
        icon: '📄',
        eyebrow: 'THỰC HÀNH TẠO FILE',
        title: 'Hands-on Lab 02: Tạo File & Phân Loại Đúng Thư Mục',
        badge: { type: 'primary', text: 'Thực hành 10p' },
        contentHtml: `
          <p class="text-secondary mb-3">
            Bây giờ cây thư mục đã sẵn sàng, hãy tạo thử các tệp tin bài học đầu tiên và đặt vào đúng ngăn kéo của nó:
          </p>

          <div class="grid-2-col gap-3 mb-4">
            <div class="p-3 bg-card rounded border">
              <span class="badge badge--primary mb-1">Tệp 1</span>
              <h4 style="margin: 0 0 4px;">Bài tập Toán Tuần 3</h4>
              <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">
                Mở thư mục <code>Toan</code> ➔ Nhấp chuột phải chọn <em>New > Text Document</em> ➔ Đổi tên thành <code>BaiTap_Toan_Tuan03.txt</code>.
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <span class="badge badge--energy mb-1">Tệp 2</span>
              <h4 style="margin: 0 0 4px;">Dự án Lập trình Đầu tay</h4>
              <p class="text-secondary" style="font-size: 0.88rem; margin: 0;">
                Mở thư mục <code>LapTrinh</code> ➔ Nhấp chuột phải chọn <em>New > Text Document</em> ➔ Đổi tên thành <code>Y_Tuong_Game.txt</code>.
              </p>
            </div>
          </div>

          <div class="callout callout--success">
            <strong>🌟 Nhận xét của Giáo viên:</strong> Nhìn vào cây thư mục của em lúc này trông ngăn nắp và chuyên nghiệp như một lập trình viên thực thụ!
          </div>
        `
      },

      /* SLIDE 11: COMMON FILE PITFALLS */
      {
        id: 'w03-l05-s11',
        type: 'concept',
        icon: '⚠️',
        eyebrow: 'CẢNH BÁO SỰ CỐ',
        title: '4 Tai Nạn File & Folder Thường Thấy Ở Người Mới',
        badge: { type: 'danger', text: 'Phòng ngừa rủi ro' },
        contentHtml: `
          <div class="grid-2-col gap-3">
            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-1">
                <span class="badge badge--danger">Tai nạn 1</span>
                <strong>Lỡ xóa mất đuôi file khi đổi tên</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Đổi tên từ <code>anh.png</code> thành <code>anh_dep</code> (quên gõ <code>.png</code>) ➔ File bị biến thành biểu tượng màu trắng và máy tính không biết dùng app nào để mở! <em>Cách sửa: Bấm F2 và gõ thêm đuôi <code>.png</code> vào cuối là xong!</em>
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-1">
                <span class="badge badge--danger">Tai nạn 2</span>
                <strong>Lưu file vào ổ C:\ bừa bãi</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Ổ C:\ là ổ chứa hệ điều hành Windows. Nếu lưu quá nhiều video game hay tệp nặng vào ổ C sẽ khiến máy tính bị chậm và đơ. Luôn ưu tiên lưu vào ổ <code>D:\</code> hoặc thư mục cá nhân!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-1">
                <span class="badge badge--danger">Tai nạn 3</span>
                <strong>Đặt tên file chứa dấu tiếng Việt bị lỗi web</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Khi em nộp bài lên các hệ thống quốc tế hoặc nộp qua email, tên file có dấu như <code>bài tập lớp 7.docx</code> có thể bị đổi thành ký tự loằng ngoằng. Luôn đặt không dấu: <code>BaiTap_Lop7.docx</code>!
              </p>
            </div>

            <div class="p-3 bg-card rounded border">
              <div class="d-flex items-center gap-2 mb-1">
                <span class="badge badge--danger">Tai nạn 4</span>
                <strong>Xóa nhầm file hệ thống của máy tính</strong>
              </div>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                Những file lạ trong thư mục <code>Windows</code> hoặc <code>Program Files</code> tuyệt đối không bao giờ được bấm xóa lung tung kẻo máy tính bị lỗi hỏng Win!
              </p>
            </div>
          </div>
        `
      },

      /* SLIDE 12: QUICK QUIZ */
      {
        id: 'w03-l05-s12',
        type: 'quiz',
        icon: '❓',
        eyebrow: 'CỦNG CỐ KIẾN THỨC',
        title: 'Quick Quiz: Thử Tài Nhận Biết File & Folder',
        badge: { type: 'quiz', text: 'Trắc nghiệm 4 câu' },
        contentHtml: `
          <div class="quiz-container">
            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 1: Điểm khác biệt lớn nhất giữa File và Folder là gì?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Hoàn toàn chính xác! Folder là nơi chứa đựng, còn File là dữ liệu cụ thể có phần mở rộng.')">A. Folder dùng để chứa các file và thư mục khác; còn File chứa nội dung cụ thể và có phần mở rộng</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Sai rồi! File và Folder đều có thể đổi tên và xóa được.')">B. File thì xóa được còn Folder thì không thể xóa</button>
              </div>
            </div>

            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 2: Đuôi file <code>.docx</code> thường được mở bằng phần mềm nào?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Rất chuẩn! .docx là định dạng văn bản Microsoft Word.')">A. Microsoft Word (Soạn thảo văn bản)</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Excel dùng đuôi .xlsx.')">B. Microsoft Excel (Bảng tính)</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'Trình xem ảnh dùng .png hoặc .jpg.')">C. Trình xem ảnh</button>
              </div>
            </div>

            <div class="quiz-question-box mb-4 p-3 bg-card rounded border">
              <h4 class="mb-2">Câu 3: Phím tắt nào giúp đổi tên (Rename) file hoặc folder trong 1 nốt nhạc?</h4>
              <div class="quiz-options-group d-flex flex-column gap-2">
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'F5 là tải lại trang web.')">A. Phím F5</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, true, 'Chuẩn không cần chỉnh! Phím F2 chuyên dùng để đổi tên.')">B. Phím F2</button>
                <button class="quiz-option-btn btn btn--secondary text-left" onclick="window.LearningEngine.handleQuizAnswer(this, false, 'F1 là mở hướng dẫn Trợ giúp.')">C. Phím F1</button>
              </div>
            </div>
          </div>
        `
      },

      /* SLIDE 13: BOSS CHALLENGE */
      {
        id: 'w03-l05-s13',
        type: 'boss',
        icon: '🔥',
        eyebrow: 'THỬ THÁCH TỐI HẬU',
        title: 'Boss Challenge: 90 Giây Dựng Cây Thư Mục Thần Tốc',
        badge: { type: 'danger', text: 'Boss Fight 90s' },
        contentHtml: `
          <div class="boss-arena-box p-4 rounded text-center" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); color: #ffffff;">
            <span class="badge badge--energy mb-2 font-bold" style="font-size: 0.9rem;">SÁT HẠCH TỐC ĐỘ BUỔI 05</span>
            <h2 style="font-size: 1.8rem; margin: 4px 0 12px; color: #fbbf24;">Kiến Trúc Sư Cây Thư Mục</h2>
            <p style="max-width: 650px; margin: 0 auto 20px; font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
              Giáo viên sẽ bấm giờ 90 giây! Em phải dùng toàn bộ phím tắt <kbd class="keycap">Ctrl+Shift+N</kbd>, <kbd class="keycap">F2</kbd>, <kbd class="keycap">Enter</kbd> để tạo ra cây thư mục: <code>DuAn/Game/AmThanh</code> và <code>DuAn/Game/HinhAnh</code> hoàn hảo!
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

      /* SLIDE 14: SUMMARY & NEXT MISSION */
      {
        id: 'w03-l05-s14',
        type: 'complete',
        icon: '🎉',
        eyebrow: 'TỔNG KẾT BUỔI 05',
        title: 'Chúc mừng Em đã Hoàn thành Buổi 05!',
        badge: { type: 'success', text: '⭐ +100 XP Toàn năng' },
        contentHtml: `
          <div class="p-4 bg-card rounded border text-center">
            <div style="font-size: 4rem;" class="mb-2">📁</div>
            <h2 style="color: var(--color-success); margin-bottom: 8px;">Em đã là Chuyên gia Cây Thư Mục!</h2>
            <p class="text-secondary" style="max-width: 640px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6;">
              Hôm nay em đã hiểu cặn kẽ bản chất của File và Folder, nhận biết các loại đuôi file thông dụng, thành thạo tạo mới, đổi tên F2 và thiết lập cây thư mục học tập cá nhân cực kỳ khoa học.
            </p>

            <div class="p-3 rounded mt-4 text-left" style="background: #eff6ff; border: 1px solid rgba(59, 130, 246, 0.3); max-width: 640px; margin-left: auto; margin-right: auto;">
              <strong class="text-primary" style="font-size: 1rem;">🚀 Bật mí Buổi học số 06 (Chủ nhật):</strong>
              <p class="text-secondary mt-1" style="font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Chủ đề: <strong>Quản lý Dữ liệu & Dọn dẹp Thư mục</strong><br>
                Em sẽ học kỹ thuật Copy vs Move tệp tin giữa các thư mục, phân biệt Save vs Save As, làm chủ Thùng rác Recycle Bin và vượt qua bài thi thực chiến: <em>"Giải cứu thư mục lộn xộn chứa 15 file bài tập"</em>!
              </p>
            </div>

            <div class="d-flex justify-center gap-3 mt-4">
              <a href="../index.html" class="btn btn--secondary">🏠 Về Cổng Khóa học</a>
              <a href="lesson.html?id=gd1-w03-l06" class="btn btn--primary">Sang Buổi 06: Quản lý dữ liệu ➔</a>
            </div>
          </div>
        `
      }
    ]
  };

  // Đăng ký vào Global Lesson Registry
  window.LessonRegistry = window.LessonRegistry || {};
  window.LessonRegistry['gd1-w03-l05'] = lessonData;

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('id') === 'gd1-w03-l05') {
    window.currentLessonData = lessonData;
  }
})();
