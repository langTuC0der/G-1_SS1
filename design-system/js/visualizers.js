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
      this.initMouseMasterySuite();
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
    },

    /* ==========================================================================
       MOUSE MASTERY SUITE (Buổi 02: Tương tác Chuột)
       ========================================================================== */
    initMouseMasterySuite: function () {
      this.initClickTester();
      this.initDoubleClickGift();
      this.initRightClickDemo();
      this.initScrollZoomDemo();
      this.initDragDropArena();
      this.initMouseBubbleGame();
    },

    /* 1. Click Tester (Single Click Sandbox) */
    initClickTester: function () {
      let clickCount = 0;
      document.addEventListener('click', (e) => {
        const box = e.target.closest('.click-tester-box');
        if (box) {
          clickCount++;
          const counterEl = box.querySelector('.click-tester-counter');
          const feedbackEl = box.querySelector('.click-tester-feedback');
          if (counterEl) counterEl.textContent = clickCount;
          if (feedbackEl) {
            feedbackEl.innerHTML = `🎯 <strong>Bấm thành công!</strong> Đã nhấp ${clickCount} lần dứt khoát!`;
          }
          if (window.SoundManager) window.SoundManager.playClick();
          
          if (clickCount === 5) {
            document.dispatchEvent(new CustomEvent('lesson:xp', {
              detail: { amount: 5, reason: 'click_tester' }
            }));
          }
        }
      });
    },

    /* 2. Double Click Gift Box */
    initDoubleClickGift: function () {
      document.addEventListener('dblclick', (e) => {
        const gift = e.target.closest('.double-click-gift');
        if (gift) {
          gift.classList.toggle('is-opened');
          const statusEl = gift.querySelector('.gift-status-text');
          const emojiEl = gift.querySelector('.gift-emoji');
          if (gift.classList.contains('is-opened')) {
            if (emojiEl) emojiEl.textContent = '🎉';
            if (statusEl) statusEl.textContent = 'ĐÃ MỞ HỘP QUÀ!';
            if (window.SoundManager) window.SoundManager.playSuccess();
            document.dispatchEvent(new CustomEvent('lesson:xp', {
              detail: { amount: 10, reason: 'double_click_gift' }
            }));
          } else {
            if (emojiEl) emojiEl.textContent = '🎁';
            if (statusEl) statusEl.textContent = 'Nháy đúp 2 lần để mở!';
            if (window.SoundManager) window.SoundManager.playPop();
          }
        }
      });
    },

    /* 3. Right Click Context Menu Demo */
    initRightClickDemo: function () {
      document.addEventListener('contextmenu', (e) => {
        const zone = e.target.closest('.mock-context-zone');
        if (zone) {
          e.preventDefault();
          const menu = zone.querySelector('.mock-context-menu');
          const rect = zone.getBoundingClientRect();
          const posX = Math.min(e.clientX - rect.left, rect.width - 200);
          const posY = Math.min(e.clientY - rect.top, rect.height - 180);

          if (menu) {
            menu.style.left = `${Math.max(10, posX)}px`;
            menu.style.top = `${Math.max(10, posY)}px`;
            menu.classList.add('is-visible');
            if (window.SoundManager) window.SoundManager.playPop();
          }
        }
      });

      // Tắt menu khi click chuột trái ra ngoài
      document.addEventListener('click', (e) => {
        const menuItem = e.target.closest('.mock-menu-item');
        if (menuItem) {
          const action = menuItem.dataset.action;
          const feedback = menuItem.closest('.mock-context-zone')?.querySelector('.context-feedback');
          if (feedback) {
            feedback.innerHTML = `✨ Em vừa chọn lệnh: <strong>${menuItem.textContent.trim()}</strong>!`;
          }
          if (window.SoundManager) window.SoundManager.playClick();
        }

        const openMenus = document.querySelectorAll('.mock-context-menu.is-visible');
        openMenus.forEach(m => m.classList.remove('is-visible'));
      });
    },

    /* 4. Scroll Zoom Demo */
    initScrollZoomDemo: function () {
      document.addEventListener('wheel', (e) => {
        const zoomBox = e.target.closest('.scroll-zoom-box');
        if (zoomBox) {
          e.preventDefault();
          let currentScale = parseFloat(zoomBox.dataset.scale || '1');
          if (e.deltaY < 0) {
            currentScale = Math.min(1.8, currentScale + 0.1);
          } else {
            currentScale = Math.max(0.6, currentScale - 0.1);
          }
          zoomBox.dataset.scale = currentScale.toFixed(1);
          const target = zoomBox.querySelector('.scroll-zoom-target');
          const label = zoomBox.querySelector('.scroll-zoom-label');
          if (target) target.style.transform = `scale(${currentScale})`;
          if (label) label.textContent = `${Math.round(currentScale * 100)}%`;
        }
      }, { passive: false });
    },

    /* 5. Drag and Drop Arena */
    initDragDropArena: function () {
      let draggedElement = null;

      document.addEventListener('dragstart', (e) => {
        const item = e.target.closest('.draggable-chip');
        if (item) {
          draggedElement = item;
          item.classList.add('is-dragging');
          e.dataTransfer.setData('text/plain', item.id || '');
          if (window.SoundManager) window.SoundManager.playClick();
        }
      });

      document.addEventListener('dragend', (e) => {
        const item = e.target.closest('.draggable-chip');
        if (item) {
          item.classList.remove('is-dragging');
          draggedElement = null;
        }
      });

      document.addEventListener('dragover', (e) => {
        const targetZone = e.target.closest('.drag-target-zone, .drag-source-zone');
        if (targetZone) {
          e.preventDefault();
          targetZone.classList.add('is-dragover');
        }
      });

      document.addEventListener('dragleave', (e) => {
        const targetZone = e.target.closest('.drag-target-zone, .drag-source-zone');
        if (targetZone) {
          targetZone.classList.remove('is-dragover');
        }
      });

      document.addEventListener('drop', (e) => {
        const targetZone = e.target.closest('.drag-target-zone, .drag-source-zone');
        if (targetZone && draggedElement) {
          e.preventDefault();
          targetZone.classList.remove('is-dragover');
          targetZone.appendChild(draggedElement);
          if (window.SoundManager) window.SoundManager.playPop();

          const arena = targetZone.closest('.drag-drop-arena');
          if (arena) {
            const targetItems = arena.querySelectorAll('.drag-target-zone .draggable-chip').length;
            const feedback = arena.querySelector('.drag-drop-feedback');
            if (feedback) {
              if (targetItems >= 3) {
                feedback.innerHTML = `🎉 <strong>Tuyệt vời!</strong> Em đã kéo thả thành công toàn bộ ${targetItems} đối tượng! (+15 XP)`;
                if (window.SoundManager) window.SoundManager.playSuccess();
              } else {
                feedback.innerHTML = `👍 Đã chuyển ${targetItems} đối tượng vào vị trí mới!`;
              }
            }
          }
        }
      });
    },

    /* 6. Mouse Bubble Popping Game */
    initMouseBubbleGame: function () {
      let gameInterval = null;
      let timerInterval = null;
      let score = 0;
      let timeLeft = 30;
      let isPlaying = false;

      document.addEventListener('click', (e) => {
        const startBtn = e.target.closest('.bubble-game-start-btn');
        if (startBtn) {
          const gameWrapper = startBtn.closest('.bubble-game-wrapper');
          const gameBoard = gameWrapper?.querySelector('.bubble-game-board');
          const scoreEl = gameWrapper?.querySelector('.game-score-val');
          const timeEl = gameWrapper?.querySelector('.game-time-val');
          const feedbackEl = gameWrapper?.querySelector('.game-feedback-text');

          if (!gameBoard || isPlaying) return;

          isPlaying = true;
          score = 0;
          timeLeft = 30;
          startBtn.disabled = true;
          if (scoreEl) scoreEl.textContent = '0';
          if (timeEl) timeEl.textContent = '30s';
          if (feedbackEl) feedbackEl.innerHTML = '⚡ <em>Bấm thật nhanh vào các bong bóng đang xuất hiện!</em>';
          gameBoard.innerHTML = '';

          const spawnBubble = () => {
            if (!isPlaying) return;
            const bubble = document.createElement('div');
            bubble.className = 'game-target-bubble';
            const emojis = ['🎈', '🎯', '⭐', '💎', '🚀'];
            bubble.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            const maxX = Math.max(10, gameBoard.clientWidth - 70);
            const maxY = Math.max(10, gameBoard.clientHeight - 70);
            bubble.style.left = `${Math.floor(Math.random() * maxX)}px`;
            bubble.style.top = `${Math.floor(Math.random() * maxY)}px`;

            bubble.addEventListener('click', () => {
              score += 10;
              if (scoreEl) scoreEl.textContent = score;
              if (window.SoundManager) window.SoundManager.playPop();
              bubble.remove();
            });

            gameBoard.appendChild(bubble);

            setTimeout(() => {
              if (bubble.parentNode) bubble.remove();
            }, 2200);
          };

          gameInterval = setInterval(spawnBubble, 650);

          timerInterval = setInterval(() => {
            timeLeft--;
            if (timeEl) timeEl.textContent = `${timeLeft}s`;
            if (timeLeft <= 0) {
              clearInterval(timerInterval);
              clearInterval(gameInterval);
              isPlaying = false;
              startBtn.disabled = false;
              gameBoard.innerHTML = '';
              if (feedbackEl) {
                feedbackEl.innerHTML = `🏆 <strong>Hoàn thành!</strong> Em ghi được <strong>${score} điểm</strong>! Phản xạ chuột rất tuyệt vời!`;
              }
              if (window.SoundManager) window.SoundManager.playSuccess();
              document.dispatchEvent(new CustomEvent('lesson:xp', {
                detail: { amount: 20, reason: 'mouse_bubble_game' }
              }));
            }
          }, 1000);
        }
      });
    }
  };

  window.VisualizerManager = VisualizerManager;
})();

