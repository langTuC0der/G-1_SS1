/**
 * VISUALIZERS MANAGER — Bright & Friendly Modern Edu
 * Quản lý tương tác Bàn phím 3D (Keycap) và Chuột trực quan (Mouse Visualizer)
 */

(function () {
  'use strict';

  const VisualizerManager = {
    init: function () {
      this.initKeycaps();
      this.initMouseVisualizer();
      this.initMockWindow();
      this.initPowerButton();
      this.initChoiceCards();
      this.initDeviceHotspots();
      this.initMockDesktop();
      this.initAppCardsModal();
      this.initTaskbarSwitcher();
      this.initShutdownFlow();
      this.bindKeyboardEvents();
    },

    /* Khởi tạo tương tác click trên các phím ảo */
    initKeycaps: function () {
      document.addEventListener('click', (e) => {
        const keycap = e.target.closest('.keycap');
        if (keycap) {
          this.triggerKeyPress(keycap);
        }
      });
    },

    /* Kích hoạt trạng thái bấm phím */
    triggerKeyPress: function (keycapElement) {
      if (!keycapElement) return;
      keycapElement.classList.add('is-pressed');
      if (window.SoundManager) {
        window.SoundManager.playClick();
      }
      setTimeout(() => {
        keycapElement.classList.remove('is-pressed');
      }, 150);
    },

    /* ==========================================================================
       MOCK WINDOW INTERACTION (Điều khiển cửa sổ ảo)
       ========================================================================== */
    initMockWindow: function () {
      document.addEventListener('click', (e) => {
        // Nút Minimize
        const minBtn = e.target.closest('[data-win-action="minimize"]');
        if (minBtn) {
          const winWrapper = minBtn.closest('.mock-window-wrapper');
          const win = winWrapper?.querySelector('.mock-window');
          const taskbarItem = winWrapper?.querySelector('.mock-taskbar-item');
          const feedback = winWrapper?.querySelector('.mock-window-feedback');
          if (win) {
            win.classList.add('is-minimized');
            if (taskbarItem) taskbarItem.classList.remove('is-active');
            if (feedback) feedback.textContent = '💡 Cửa sổ đã được thu nhỏ xuống thanh Taskbar bên dưới!';
            if (window.SoundManager) window.SoundManager.playPop();
          }
        }

        // Nút Maximize
        const maxBtn = e.target.closest('[data-win-action="maximize"]');
        if (maxBtn) {
          const winWrapper = maxBtn.closest('.mock-window-wrapper');
          const win = winWrapper?.querySelector('.mock-window');
          const feedback = winWrapper?.querySelector('.mock-window-feedback');
          if (win) {
            win.classList.toggle('is-maximized');
            if (feedback) feedback.textContent = win.classList.contains('is-maximized') 
              ? '🔍 Cửa sổ đã được phóng to toàn màn hình!' 
              : '📏 Cửa sổ đã trở về kích thước chuẩn!';
            if (window.SoundManager) window.SoundManager.playClick();
          }
        }

        // Nút Close
        const closeBtn = e.target.closest('[data-win-action="close"]');
        if (closeBtn) {
          const winWrapper = closeBtn.closest('.mock-window-wrapper');
          const win = winWrapper?.querySelector('.mock-window');
          const reopenBtn = winWrapper?.querySelector('.mock-reopen-btn');
          const feedback = winWrapper?.querySelector('.mock-window-feedback');
          if (win) {
            win.classList.add('is-closed');
            if (reopenBtn) reopenBtn.style.display = 'inline-flex';
            if (feedback) feedback.textContent = '❌ Cửa sổ đã được đóng lại.';
            if (window.SoundManager) window.SoundManager.playClick();
          }
        }

        // Nút Mở lại (Restore / Reopen)
        const reopenBtn = e.target.closest('.mock-reopen-btn');
        if (reopenBtn) {
          const winWrapper = reopenBtn.closest('.mock-window-wrapper');
          const win = winWrapper?.querySelector('.mock-window');
          const taskbarItem = winWrapper?.querySelector('.mock-taskbar-item');
          const feedback = winWrapper?.querySelector('.mock-window-feedback');
          if (win) {
            win.classList.remove('is-closed', 'is-minimized');
            reopenBtn.style.display = 'none';
            if (taskbarItem) taskbarItem.classList.add('is-active');
            if (feedback) feedback.textContent = '✨ Cửa sổ đã được mở lại thành công!';
            if (window.SoundManager) window.SoundManager.playPop();
          }
        }

        // Click trên Taskbar item để khôi phục cửa sổ
        const taskbarItem = e.target.closest('.mock-taskbar-item');
        if (taskbarItem) {
          const winWrapper = taskbarItem.closest('.mock-window-wrapper');
          const win = winWrapper?.querySelector('.mock-window');
          const feedback = winWrapper?.querySelector('.mock-window-feedback');
          if (win) {
            const isMin = win.classList.contains('is-minimized');
            if (isMin) {
              win.classList.remove('is-minimized');
              taskbarItem.classList.add('is-active');
              if (feedback) feedback.textContent = '✨ Đã mở lại cửa sổ từ thanh Taskbar!';
            } else {
              win.classList.add('is-minimized');
              taskbarItem.classList.remove('is-active');
              if (feedback) feedback.textContent = '💡 Đã thu nhỏ cửa sổ xuống Taskbar!';
            }
            if (window.SoundManager) window.SoundManager.playClick();
          }
        }
      });
    },

    /* ==========================================================================
       POWER BUTTON SIMULATION
       ========================================================================== */
    initPowerButton: function () {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.power-btn');
        if (btn) {
          btn.classList.toggle('is-powered');
          const feedback = document.querySelector('.power-feedback');
          if (btn.classList.contains('is-powered')) {
            if (feedback) feedback.innerHTML = '🟢 <strong>Tuyệt vời!</strong> Máy tính đã bật nguồn và màn hình đang khởi động!';
            if (window.SoundManager) window.SoundManager.playSuccess();
          } else {
            if (feedback) feedback.innerHTML = '⚪ Máy tính đang ở trạng thái tắt.';
            if (window.SoundManager) window.SoundManager.playClick();
          }
        }
      });
    },

    /* ==========================================================================
       CHOICE CARDS (Thẻ câu hỏi khởi động)
       ========================================================================== */
    initChoiceCards: function () {
      document.addEventListener('click', (e) => {
        const card = e.target.closest('.choice-card');
        if (card) {
          const container = card.closest('.choice-cards-container');
          const allCards = container?.querySelectorAll('.choice-card');
          allCards?.forEach(c => c.classList.remove('is-active'));
          card.classList.add('is-active');

          const feedback = container?.querySelector('.choice-feedback');
          if (feedback) {
            feedback.style.display = 'block';
            feedback.innerHTML = `🎉 Hay lắm! Dù là ${card.dataset.label || 'làm gì'}, máy tính đều là người bạn hỗ trợ đắc lực cho em!`;
          }

          if (window.SoundManager) window.SoundManager.playPop();

          document.dispatchEvent(new CustomEvent('lesson:xp', {
            detail: { amount: 5, reason: 'warmup_choice' }
          }));
        }
      });
    },

    /* ==========================================================================
       DEVICE HOTSPOTS (Nhận diện bộ phận máy tính)
       ========================================================================== */
    initDeviceHotspots: function () {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.device-hotspot-btn');
        if (btn) {
          const container = btn.closest('.device-hotspots-container');
          const allBtns = container?.querySelectorAll('.device-hotspot-btn');
          allBtns?.forEach(b => b.classList.remove('btn--primary'));
          allBtns?.forEach(b => b.classList.add('btn--secondary'));
          btn.classList.remove('btn--secondary');
          btn.classList.add('btn--primary');

          const infoBox = container?.querySelector('.device-info-display');
          if (infoBox) {
            infoBox.innerHTML = `
              <div class="d-flex items-center gap-2 mb-1">
                <span style="font-size: 1.5rem;">${btn.dataset.icon || '📌'}</span>
                <h4 style="margin: 0;">${btn.dataset.name}</h4>
              </div>
              <p class="text-secondary" style="margin: 0; font-size: 0.95rem;">${btn.dataset.desc}</p>
            `;
          }
          if (window.SoundManager) window.SoundManager.playClick();
        }
      });
    },

    /* Lắng nghe phím thật từ bàn phím học sinh để làm sáng phím ảo tương ứng trên màn hình */
    bindKeyboardEvents: function () {
      window.addEventListener('keydown', (e) => {
        // Tránh kích hoạt nếu đang gõ trong ô input/textarea
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        const key = e.key.toLowerCase();
        let selector = `.keycap[data-key="${key}"]`;

        if (e.key === ' ') selector = '.keycap[data-key="space"]';
        else if (e.key === 'Control') selector = '.keycap[data-key="ctrl"]';
        else if (e.key === 'Alt') selector = '.keycap[data-key="alt"]';
        else if (e.key === 'Shift') selector = '.keycap[data-key="shift"]';
        else if (e.key === 'Enter') selector = '.keycap[data-key="enter"]';
        else if (e.key === 'Backspace') selector = '.keycap[data-key="backspace"]';
        else if (e.key === 'Delete') selector = '.keycap[data-key="delete"]';

        const matchedKeycaps = document.querySelectorAll(selector);
        matchedKeycaps.forEach(kc => {
          kc.classList.add('is-pressed');
        });
      });

      window.addEventListener('keyup', (e) => {
        const pressedKeycaps = document.querySelectorAll('.keycap.is-pressed');
        pressedKeycaps.forEach(kc => {
          kc.classList.remove('is-pressed');
        });
      });
    },

    /* Khởi tạo chuột trực quan */
    initMouseVisualizer: function () {
      document.addEventListener('mousedown', (e) => {
        const zone = e.target.closest('.mouse-zone');
        if (zone) {
          e.preventDefault();
          this.triggerMouseZone(zone);
        }
      });

      // Hỗ trợ click chuột phải trực tiếp trên vùng chuột phải của visualizer mà không bị chặn
      document.addEventListener('contextmenu', (e) => {
        const rightZone = e.target.closest('.mouse-zone[data-mouse="right"]');
        if (rightZone) {
          e.preventDefault();
          this.triggerMouseZone(rightZone);
        }
      });
    },

    triggerMouseZone: function (zoneElement) {
      if (!zoneElement) return;
      zoneElement.classList.add('is-active');
      if (window.SoundManager) {
        window.SoundManager.playClick();
      }
      setTimeout(() => {
        zoneElement.classList.remove('is-active');
      }, 200);
    },

    /* ==========================================================================
       MOCK DESKTOP INTERACTIVE (Slide 07)
       ========================================================================== */
    initMockDesktop: function () {
      document.addEventListener('click', (e) => {
        const item = e.target.closest('[data-desktop-part]');
        if (item) {
          const container = item.closest('.mock-desktop-container');
          if (!container) return;

          const allParts = container.querySelectorAll('[data-desktop-part]');
          allParts.forEach(p => p.classList.remove('is-highlighted'));
          item.classList.add('is-highlighted');

          const partName = item.dataset.desktopPart;
          const partDesc = item.dataset.desktopDesc;
          const feedback = container.querySelector('.desktop-feedback-box');
          if (feedback) {
            feedback.innerHTML = `
              <strong>✨ ${partName}:</strong> ${partDesc}
            `;
          }
          if (window.SoundManager) window.SoundManager.playPop();
        }
      });
    },

    /* ==========================================================================
       APP CARDS MODAL / EXPAND (Slide 08)
       ========================================================================== */
    initAppCardsModal: function () {
      document.addEventListener('click', (e) => {
        const card = e.target.closest('.app-card-interactive');
        if (card) {
          const appName = card.dataset.appName;
          const appRole = card.dataset.appRole;
          const appDetail = card.dataset.appDetail;
          const appIcon = card.dataset.appIcon || '📱';

          const modal = document.querySelector('.app-detail-modal');
          if (modal) {
            modal.querySelector('.modal-app-icon').textContent = appIcon;
            modal.querySelector('.modal-app-name').textContent = appName;
            modal.querySelector('.modal-app-role').textContent = appRole;
            modal.querySelector('.modal-app-detail').textContent = appDetail;
            modal.classList.add('is-open');
            if (window.SoundManager) window.SoundManager.playPop();
          }
        }

        // Đóng modal
        const closeBtn = e.target.closest('.app-modal-close-btn') || (e.target.classList.contains('app-detail-modal') ? e.target : null);
        if (closeBtn) {
          const modal = document.querySelector('.app-detail-modal');
          if (modal) {
            modal.classList.remove('is-open');
            if (window.SoundManager) window.SoundManager.playClick();
          }
        }
      });
    },

    /* ==========================================================================
       TASKBAR SWITCHER INTERACTIVE (Slide 12)
       ========================================================================== */
    initTaskbarSwitcher: function () {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.taskbar-switch-btn');
        if (btn) {
          const demo = btn.closest('.taskbar-switcher-demo');
          if (!demo) return;

          const targetApp = btn.dataset.targetApp;
          const allBtns = demo.querySelectorAll('.taskbar-switch-btn');
          const allWins = demo.querySelectorAll('.mini-window');

          allBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');

          allWins.forEach(w => {
            if (w.dataset.appId === targetApp) {
              w.classList.add('is-active');
            } else {
              w.classList.remove('is-active');
            }
          });

          const feedback = demo.querySelector('.switcher-feedback');
          if (feedback) {
            feedback.innerHTML = `✨ Em đang xem ứng dụng: <strong>${btn.textContent.trim()}</strong>!`;
          }

          if (window.SoundManager) window.SoundManager.playPop();
        }
      });
    },

    /* ==========================================================================
       SHUT DOWN FLOW SIMULATOR (Slide 15)
       ========================================================================== */
    initShutdownFlow: function () {
      document.addEventListener('click', (e) => {
        const startBtn = e.target.closest('.sim-start-btn');
        if (startBtn) {
          const sim = startBtn.closest('.shutdown-simulator');
          const menu = sim?.querySelector('.sim-start-menu');
          if (menu) {
            menu.classList.toggle('is-open');
            if (window.SoundManager) window.SoundManager.playClick();
          }
        }

        const powerBtn = e.target.closest('.sim-power-option');
        if (powerBtn) {
          const sim = powerBtn.closest('.shutdown-simulator');
          const sub = sim?.querySelector('.sim-power-sub');
          if (sub) {
            sub.classList.toggle('is-open');
            if (window.SoundManager) window.SoundManager.playClick();
          }
        }

        const shutdownAction = e.target.closest('.sim-action-shutdown');
        if (shutdownAction) {
          const sim = shutdownAction.closest('.shutdown-simulator');
          const screen = sim?.querySelector('.sim-screen');
          if (screen) {
            screen.classList.add('is-off');
            if (window.SoundManager) window.SoundManager.playSuccess();
          }
        }

        const restartSimBtn = e.target.closest('.sim-reset-btn');
        if (restartSimBtn) {
          const sim = restartSimBtn.closest('.shutdown-simulator');
          const screen = sim?.querySelector('.sim-screen');
          const menu = sim?.querySelector('.sim-start-menu');
          const sub = sim?.querySelector('.sim-power-sub');
          if (screen) screen.classList.remove('is-off');
          if (menu) menu.classList.remove('is-open');
          if (sub) sub.classList.remove('is-open');
          if (window.SoundManager) window.SoundManager.playPop();
        }
      });
    }
  };

  window.VisualizerManager = VisualizerManager;
})();

