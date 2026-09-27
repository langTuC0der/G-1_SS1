/**
 * LEARNING ENGINE — Bright & Friendly Modern Edu
 * Trình điều phối trung tâm: Nạp Lesson Data, Render giao diện, quản lý XP, Mission Bar, Cheatsheet Drawer
 */

(function () {
  'use strict';

  const LearningEngine = {
    currentLesson: null,
    totalXP: 0,

    init: function (lessonData = null) {
      this.currentLesson = lessonData || window.currentLessonData || null;

      // Khởi động các hệ thống con
      if (window.SoundManager) window.SoundManager.init();
      if (window.VisualizerManager) window.VisualizerManager.init();
      if (window.TimerManager) window.TimerManager.init();

      if (this.currentLesson) {
        this.renderLesson(this.currentLesson);
        if (window.ChecklistManager) window.ChecklistManager.init(this.currentLesson.id);
        if (window.QuizManager) window.QuizManager.init(this.currentLesson.id);
      } else {
        if (window.ChecklistManager) window.ChecklistManager.init('static');
        if (window.QuizManager) window.QuizManager.init('static');
      }

      // Khởi tạo Game Đập Chuột nếu có trong slide
      if (window.WhackAMoleGame) {
        document.querySelectorAll('.whack-game-container').forEach(c => {
          if (!c.dataset.initialized) {
            new window.WhackAMoleGame(c);
            c.dataset.initialized = 'true';
          }
        });
      }

      // Khởi tạo Game Bắn Chữ (Typing Shooter) nếu có trong slide
      if (window.initTypingShooter) {
        document.querySelectorAll('.typing-game-container').forEach(c => {
          window.initTypingShooter(c);
        });
      }

      this.initCheatsheetDrawer();
      this.initSlideMode();
      this.initPresentationBar();
    },

    /* ==========================================================================
       SLIDE PRESENTATION MODE (Trình chiếu Slide Bài giảng)
       ========================================================================== */
    isSlideMode: true,
    currentSlideIndex: 0,
    slideSections: [],

    initSlideMode: function () {
      this.slideSections = Array.from(document.querySelectorAll('.lesson-section'));
      if (this.slideSections.length === 0) return;

      document.body.classList.add('mode-slide');

      // Cập nhật tổng số slide
      document.querySelectorAll('.total-slides-num').forEach(el => {
        el.textContent = this.slideSections.length;
      });

      this.renderSlideControls();

      // Đọc slide ban đầu từ URL nếu có (?slide=2)
      const urlParams = new URLSearchParams(window.location.search);
      const startSlide = parseInt(urlParams.get('slide') || '1', 10) - 1;
      this.goToSlide(startSlide >= 0 && startSlide < this.slideSections.length ? startSlide : 0, false);

      // Lắng nghe phím mũi tên trái / phải để lật slide
      window.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.key === 'ArrowRight') {
          this.nextSlide();
        } else if (e.key === 'ArrowLeft') {
          this.prevSlide();
        }
      });
    },

    initPresentationBar: function () {
      // Nút Toàn màn hình
      const fsBtn = document.querySelector('.presentation-fullscreen-btn');
      if (fsBtn) {
        fsBtn.addEventListener('click', () => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            fsBtn.innerHTML = '⛶ Thoát toàn màn hình';
          } else {
            document.exitFullscreen();
            fsBtn.innerHTML = '⛶ Toàn màn hình';
          }
        });
      }

      // Nút mở Sổ tay trên thanh tiêu đề
      const csBtn = document.querySelector('.presentation-cheatsheet-btn');
      if (csBtn) {
        csBtn.addEventListener('click', () => {
          const backdrop = document.querySelector('.cheatsheet-drawer-backdrop');
          if (backdrop) {
            backdrop.classList.add('is-open');
            if (window.SoundManager) window.SoundManager.playPop();
          }
        });
      }
    },

    renderSlideControls: function () {
      let controlsBar = document.querySelector('.slide-controls-bar');
      const mainContainer = document.querySelector('.lesson-main');
      if (!controlsBar && mainContainer) {
        controlsBar = document.createElement('div');
        controlsBar.className = 'slide-controls-bar';
        controlsBar.innerHTML = `
          <button class="btn btn--secondary btn--prev-slide" aria-label="Quay lại slide trước">
            ◀ Slide trước (←)
          </button>
          <span class="slide-counter-badge">Slide 1 / ${this.slideSections.length}</span>
          <button class="btn btn--primary btn--next-slide" aria-label="Sang slide tiếp theo">
            Slide tiếp theo (→) ▶
          </button>
        `;
        mainContainer.appendChild(controlsBar);

        // Bắt sự kiện click cho tất cả các nút prev/next
        document.querySelectorAll('.btn--prev-slide').forEach(b => {
          b.addEventListener('click', () => this.prevSlide());
        });
        document.querySelectorAll('.btn--next-slide').forEach(b => {
          b.addEventListener('click', () => this.nextSlide());
        });
      }
    },

    goToSlide: function (index, playSound = true) {
      if (index < 0 || index >= this.slideSections.length) return;

      this.currentSlideIndex = index;

      this.slideSections.forEach((sec, idx) => {
        if (idx === index) {
          sec.classList.add('is-active-slide');
        } else {
          sec.classList.remove('is-active-slide');
        }
      });

      // Cập nhật số trang ở top bar
      document.querySelectorAll('.current-slide-num').forEach(el => {
        el.textContent = index + 1;
      });

      // Cập nhật thanh điều hướng slide ở dưới
      const counterBadge = document.querySelector('.slide-counter-badge');
      if (counterBadge) {
        const activeSec = this.slideSections[index];
        const secTitle = activeSec ? (activeSec.querySelector('h2')?.textContent || `Slide ${index + 1}`) : '';
        counterBadge.textContent = `Slide ${index + 1} / ${this.slideSections.length} · ${secTitle}`;
      }

      // Trạng thái nút Trước / Tiếp
      document.querySelectorAll('.btn--prev-slide').forEach(btn => {
        btn.disabled = (index === 0);
      });

      document.querySelectorAll('.btn--next-slide').forEach(btn => {
        if (index === this.slideSections.length - 1) {
          btn.innerHTML = '🎉 Hoàn thành';
          btn.className = 'btn btn--success btn--next-slide';
        } else {
          btn.innerHTML = 'Slide tiếp theo (→) ▶';
          btn.className = 'btn btn--primary btn--next-slide';
        }
      });

      // Cuộn nhẹ lên đầu
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Kích hoạt game Typing Shooter nếu slide có chứa game
      const currentSlideEl = this.slideSections[index];
      if (currentSlideEl && window.initTypingShooter) {
        const gameContainer = currentSlideEl.querySelector('.typing-game-container');
        if (gameContainer) {
          window.initTypingShooter(gameContainer);
        }
      }

      if (playSound && window.SoundManager) {
        window.SoundManager.playPop();
      }
    },

    nextSlide: function () {
      if (this.currentSlideIndex < this.slideSections.length - 1) {
        this.goToSlide(this.currentSlideIndex + 1);
      } else {
        // Nếu ở slide cuối, mở chúc mừng
        if (window.SoundManager) window.SoundManager.playSuccess();
      }
    },

    prevSlide: function () {
      if (this.currentSlideIndex > 0) {
        this.goToSlide(this.currentSlideIndex - 1);
      }
    },

    /* Lắng nghe sự kiện cộng điểm XP */
    bindXPEvents: function () {
      document.addEventListener('lesson:xp', (e) => {
        const amount = (e.detail && e.detail.amount) ? e.detail.amount : 10;
        this.addXP(amount);
      });
    },

    addXP: function (amount) {
      this.totalXP += amount;
      this.updateXPUI(true);

      if (this.currentLesson && window.StorageManager) {
        window.StorageManager.saveLessonState(this.currentLesson.id, { xp: this.totalXP });
      }
    },

    updateXPUI: function (shouldAnimate = false) {
      const xpElements = document.querySelectorAll('.xp-count');
      xpElements.forEach(el => {
        el.textContent = this.totalXP;
      });

      const xpBadges = document.querySelectorAll('.xp-badge');
      if (shouldAnimate) {
        xpBadges.forEach(b => {
          b.classList.remove('has-earned');
          void b.offsetWidth; // trigger reflow
          b.classList.add('has-earned');
        });
      }
    },

    /* Khởi tạo thanh Mission Bar và chuyển slide khi click */
    /* Khởi tạo Cheatsheet Drawer (mở bằng nút hoặc phím Escape để đóng) */
    initCheatsheetDrawer: function () {
      const drawerBackdrop = document.querySelector('.cheatsheet-drawer-backdrop');
      const closeBtn = document.querySelector('.cheatsheet-close-btn');

      const openDrawer = () => {
        if (drawerBackdrop) {
          drawerBackdrop.classList.add('is-open');
          if (window.SoundManager) window.SoundManager.playPop();
        }
      };

      const closeDrawer = () => {
        if (drawerBackdrop) {
          drawerBackdrop.classList.remove('is-open');
          if (window.SoundManager) window.SoundManager.playClick();
        }
      };

      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

      // Bấm vào vùng mờ bên ngoài để đóng
      if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', (e) => {
          if (e.target === drawerBackdrop) closeDrawer();
        });
      }

      // Phím Escape để đóng
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
      });
    },

    /* Render động bài học từ Lesson Data */
    renderLesson: function (data) {
      // 1. Cập nhật Meta & Tiêu đề trên Presentation Bar
      const badgeEl = document.querySelector('.presentation-badge');
      if (badgeEl) {
        badgeEl.textContent = `${data.stage}: ${data.stageName} · Tuần ${data.week.toString().padStart(2, '0')} · Buổi ${data.lesson.toString().padStart(2, '0')}`;
      }

      const titleEl = document.querySelector('.presentation-lesson-title');
      if (titleEl) titleEl.textContent = data.title;

      // 2. Render nội dung chính nếu container có mặt
      const mainContainer = document.querySelector('.lesson-main');
      if (mainContainer && data.sections) {
        mainContainer.innerHTML = '';
        data.sections.forEach(sec => {
          mainContainer.appendChild(this.buildSection(sec));
        });
      }

      // 3. Render Cheatsheet nếu có
      if (data.cheatsheet) {
        const csBody = document.querySelector('.cheatsheet-drawer__body');
        if (csBody) {
          csBody.innerHTML = `
            ${data.cheatsheet.vocabulary ? `
              <div class="mb-4">
                <h4 class="mb-2">📖 Các từ cần nhớ</h4>
                <div class="d-flex flex-wrap gap-2">
                  ${data.cheatsheet.vocabulary.map(w => `<span class="concept-chip font-bold">${w}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${data.cheatsheet.icons ? `
              <div class="mb-4">
                <h4 class="mb-2">🔘 Các biểu tượng quan trọng</h4>
                <div class="d-flex flex-column gap-2">
                  ${data.cheatsheet.icons.map(i => `
                    <div class="d-flex items-center gap-3 p-2 bg-page-secondary rounded">
                      <kbd class="keycap" style="min-width: 36px; text-align: center; cursor: default; font-weight: 800;">${i.symbol}</kbd>
                      <span class="font-bold text-primary" style="font-size: 0.95rem;">${i.name}</span>
                      <span class="text-secondary" style="font-size: 0.85rem;">— ${i.desc || ''}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${data.cheatsheet.shortcuts ? `
              <div class="mb-4">
                <h4 class="mb-2">⌨️ Phím tắt buổi học</h4>
                <div class="d-flex flex-column gap-2">
                  ${data.cheatsheet.shortcuts.map(s => `
                    <div class="d-flex justify-between items-center p-2 bg-page-secondary rounded">
                      <span class="key-combo">${s.keys.map(k => `<kbd class="keycap">${k}</kbd>`).join('<span class="key-plus">+</span>')}</span>
                      <span class="text-secondary" style="font-size: 0.85rem;">${s.desc}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3 rounded" style="background: var(--color-warning-light); border: 1px solid rgba(245, 158, 11, 0.4);">
              <h4 class="mb-2" style="color: #92400e;">💡 Mẹo: Nếu không biết phải làm gì</h4>
              <ol style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 0.9rem; color: #92400e; font-weight: 600;">
                <li>Dừng lại</li>
                <li>Đọc màn hình</li>
                <li>Hỏi giáo viên</li>
              </ol>
            </div>
          `;
        }
      }
    },

    buildSection: function (sec) {
      const sectionEl = document.createElement('section');
      sectionEl.className = 'lesson-section';
      if (sec.id) sectionEl.id = sec.id;

      let cardTypeClass = 'edu-card--concept';
      if (sec.type === 'warmup') cardTypeClass = 'edu-card--warning';
      else if (sec.type === 'lab' || sec.type === 'practice') cardTypeClass = 'edu-card--lab';
      else if (sec.type === 'quiz') cardTypeClass = 'edu-card--quiz';
      else if (sec.type === 'boss') cardTypeClass = 'edu-card--boss';
      else if (sec.type === 'complete') cardTypeClass = 'edu-card--success';

      const card = document.createElement('div');
      card.className = `edu-card ${cardTypeClass}`;

      card.innerHTML = `
        <div class="edu-card__header">
          <div class="edu-card__icon">${sec.icon || '📌'}</div>
          <div class="edu-card__title-group">
            <span class="eyebrow">${sec.eyebrow || sec.type.toUpperCase()}</span>
            <h2>${sec.title}</h2>
          </div>
          ${sec.badge ? `<span class="badge badge--${sec.badge.type || 'primary'}">${sec.badge.text}</span>` : ''}
        </div>
        <div class="edu-card__body">
          ${sec.contentHtml || ''}
        </div>
      `;

      sectionEl.appendChild(card);
      return sectionEl;
    }
  };

  window.LearningEngine = LearningEngine;
})();

