/**
 * TYPING SPACE DEFENDER — Bright & Friendly Modern Edu
 * Mini-game bắn chữ luyện phản xạ bàn phím:
 * - Thiên thạch từ vựng rơi từ trên xuống
 * - Học sinh gõ chữ trên bàn phím -> Pháo đài bắn đạn Laser tiêu diệt từng chữ cái
 * - Gõ xong cả từ -> Thiên thạch nổ tung, cộng điểm & tăng combo!
 * - Hỗ trợ 3 cấp độ: Home Row (F, J cơ bản), Từ vựng Tin học & Cụm từ Lập trình
 * - Âm thanh Web Audio API sống động: tiếng bắn la-de, tiếng nổ, tiếng khiên bảo vệ
 */

(function () {
  'use strict';

  // Kho từ vựng theo cấp độ
  const WORD_POOLS = {
    level1: [
      'f', 'j', 'a', 's', 'd', 'k', 'l',
      'fa', 'da', 'la', 'ha', 'an', 'ca', 'ba', 'di', 'ga',
      'kho', 'meo', 'cho', 'nha', 'hoc', 'lop'
    ],
    level2: [
      'chuot', 'phim', 'telex', 'enter', 'shift', 'space',
      'delete', 'code', 'game', 'python', 'scratch', 'luu',
      'sua', 'dong', 'mo', 'khoa', 'nhap'
    ],
    level3: [
      'laptrinh', 'maytinh', 'thuattoan', 'bienso', 'vonglap',
      'goloi', 'dulieu', 'phimtat', 'antoan', 'internet',
      'chinhxac', 'thaotac', 'tuduy'
    ]
  };

  class TypingShooterGame {
    constructor(containerElement) {
      this.container = containerElement;
      this.container._typingShooterInstance = this;
      window.TypingShooter = this;

      this.arenaEl = this.container.querySelector('.typing-arena');
      this.scoreEl = this.container.querySelector('.typing-score-val');
      this.hpEl = this.container.querySelector('.typing-hp-val');
      this.streakEl = this.container.querySelector('.typing-streak-val');
      this.wpmEl = this.container.querySelector('.typing-wpm-val');
      this.levelSelectEl = this.container.querySelector('.typing-level-select');
      this.startBtn = this.container.querySelector('.typing-start-btn');
      this.overlayEl = this.container.querySelector('.typing-overlay');
      this.dialogEl = this.container.querySelector('.typing-dialog');
      this.cannonEl = this.container.querySelector('.typing-cannon');

      this.score = 0;
      this.hp = 3;
      this.maxHp = 3;
      this.streak = 0;
      this.wordsTypedCount = 0;
      this.charsTypedCount = 0;
      this.startTime = 0;
      this.isPlaying = false;
      this.difficulty = 'level1';

      this.fallingWords = []; // array of { id, word, typedSoFar, x, y, speed, el }
      this.targetWord = null; // currently locked word
      this.nextId = 1;
      this.animationFrameId = null;
      this.spawnTimerId = null;

      this.audioCtx = null;
      this.initEvents();
      this.updateHUD();
    }

    /* Khởi tạo Web Audio Synthesizer */
    getAudioContext() {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    }

    playLaserSound() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } catch (e) {
        console.warn('Audio error:', e);
      }
    }

    playExplosionSound() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } catch (e) {
        console.warn('Audio error:', e);
      }
    }

    playHitSound() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } catch (e) {
        console.warn('Audio error:', e);
      }
    }

    playDamageSound() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(110, ctx.currentTime);
        osc.frequency.setValueAtTime(85, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } catch (e) {
        console.warn('Audio error:', e);
      }
    }

    playVictorySound() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
          gain.gain.setValueAtTime(0.25, ctx.currentTime + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.12 + 0.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.12);
          osc.stop(ctx.currentTime + idx * 0.12 + 0.2);
        });
      } catch (e) {
        console.warn('Audio error:', e);
      }
    }

    initEvents() {
      if (this.startBtn) {
        this.startBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.startGame();
        });
      }

      if (this.levelSelectEl) {
        this.levelSelectEl.addEventListener('change', (e) => {
          this.difficulty = e.target.value;
          if (this.isPlaying) {
            this.endGame(false, 'Đã đổi cấp độ!');
          }
        });
      }

      // Lắng nghe gõ phím
      window.addEventListener('keydown', (e) => this.handleKeyDown(e));

      // Bấm vào arena tự động kích hoạt Audio
      if (this.arenaEl) {
        this.arenaEl.addEventListener('click', () => {
          this.getAudioContext();
        });
      }
    }

    startGame() {
      this.getAudioContext();
      this.score = 0;
      this.hp = this.maxHp;
      this.streak = 0;
      this.wordsTypedCount = 0;
      this.charsTypedCount = 0;
      this.startTime = Date.now();
      this.isPlaying = true;
      this.targetWord = null;

      // Xóa các từ cũ
      this.clearAllWords();

      // Ẩn overlay
      if (this.overlayEl) {
        this.overlayEl.style.display = 'none';
      }

      this.updateHUD();

      // Bắt đầu game loop
      let lastTime = performance.now();
      const loop = (currentTime) => {
        if (!this.isPlaying) return;
        const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
        lastTime = currentTime;
        this.updatePhysics(delta);
        this.animationFrameId = requestAnimationFrame(loop);
      };
      this.animationFrameId = requestAnimationFrame(loop);

      // Bắt đầu nhả từ theo chu kỳ
      this.scheduleNextSpawn();
    }

    scheduleNextSpawn() {
      if (!this.isPlaying) return;
      let delay = 2200; // ms
      if (this.difficulty === 'level2') delay = 2800;
      if (this.difficulty === 'level3') delay = 3400;

      // Càng điểm cao nhả càng nhanh nhẹ
      delay = Math.max(1200, delay - Math.floor(this.score / 200) * 150);

      this.spawnTimerId = setTimeout(() => {
        if (this.isPlaying) {
          this.spawnWord();
          this.scheduleNextSpawn();
        }
      }, delay);
    }

    spawnWord() {
      const pool = WORD_POOLS[this.difficulty] || WORD_POOLS.level1;
      const wordText = pool[Math.floor(Math.random() * pool.length)];

      const arenaWidth = this.arenaEl ? this.arenaEl.clientWidth : 600;
      const margin = 60;
      const x = margin + Math.random() * Math.max(100, arenaWidth - margin * 2 - 100);
      const y = -30;

      let speed = 45; // pixel per second
      if (this.difficulty === 'level2') speed = 40;
      if (this.difficulty === 'level3') speed = 36;
      speed += Math.floor(this.score / 300) * 5;

      const wordObj = {
        id: this.nextId++,
        word: wordText,
        typedSoFar: '',
        x: x,
        y: y,
        speed: speed,
        el: null
      };

      const wordEl = document.createElement('div');
      wordEl.className = 'falling-word-item';
      wordEl.dataset.id = wordObj.id;
      wordEl.innerHTML = `
        <div class="meteor-body">
          <span class="meteor-icon">☄️</span>
          <span class="word-text"><span class="typed"></span><span class="untyped">${wordText}</span></span>
        </div>
      `;
      wordEl.style.transform = `translate(${x}px, ${y}px)`;

      if (this.arenaEl) {
        this.arenaEl.appendChild(wordEl);
      }
      wordObj.el = wordEl;
      this.fallingWords.push(wordObj);
    }

    updatePhysics(delta) {
      const arenaHeight = this.arenaEl ? this.arenaEl.clientHeight : 440;
      const hitLineY = arenaHeight - 75; // ranh giới căn cứ

      for (let i = this.fallingWords.length - 1; i >= 0; i--) {
        const item = this.fallingWords[i];
        item.y += item.speed * delta;
        if (item.el) {
          item.el.style.transform = `translate(${item.x}px, ${item.y}px)`;
        }

        // Chạm đáy phòng thủ
        if (item.y >= hitLineY) {
          this.handleWordBreach(item, i);
        }
      }

      this.updateWPM();
    }

    handleWordBreach(wordObj, index) {
      // Mất máu căn cứ
      this.hp--;
      this.streak = 0;
      this.playDamageSound();

      // Hiệu ứng cảnh báo đỏ màn hình
      if (this.arenaEl) {
        this.arenaEl.classList.add('is-breached');
        setTimeout(() => this.arenaEl.classList.remove('is-breached'), 300);
      }

      // Xóa phần tử
      if (wordObj.el && wordObj.el.parentNode) {
        wordObj.el.parentNode.removeChild(wordObj.el);
      }
      this.fallingWords.splice(index, 1);

      if (this.targetWord && this.targetWord.id === wordObj.id) {
        this.targetWord = null;
      }

      this.updateHUD();

      // Kiểm tra Game Over
      if (this.hp <= 0) {
        this.endGame(false, 'Khiên Phòng Thủ Cạn Kiệt!');
      }
    }

    handleKeyDown(e) {
      if (!this.isPlaying) return;

      // Phím bấm không hợp lệ hoặc các phím chức năng
      if (e.key === 'Escape') {
        this.endGame(false, 'Đã Tạm Dừng');
        return;
      }

      // Chỉ bắt ký tự chữ và số
      const char = e.key.toLowerCase();
      if (char.length !== 1) return;

      // Không chặn các phím tắt hệ thống như F1-F12
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      e.preventDefault(); // Ngăn cuộn trang

      // 1. Nếu chưa khóa mục tiêu, tìm từ gần nhất bắt đầu bằng ký tự này
      if (!this.targetWord) {
        let candidate = null;
        let lowestY = -9999;

        for (const item of this.fallingWords) {
          if (item.word.startsWith(char) && item.y > lowestY) {
            lowestY = item.y;
            candidate = item;
          }
        }

        if (candidate) {
          this.targetWord = candidate;
          if (candidate.el) {
            candidate.el.classList.add('is-targeted');
          }
        }
      }

      // 2. Nếu đã có mục tiêu, kiểm tra ký tự tiếp theo
      if (this.targetWord) {
        const nextIndex = this.targetWord.typedSoFar.length;
        const expectedChar = this.targetWord.word[nextIndex];

        if (char === expectedChar) {
          // Bắn trúng ký tự tiếp theo!
          this.targetWord.typedSoFar += char;
          this.charsTypedCount++;
          this.playLaserSound();

          // Xoay nòng súng về hướng mục tiêu
          this.aimCannonAt(this.targetWord);

          // Tạo đạn laser bay lên
          this.fireLaser(this.targetWord);

          // Cập nhật giao diện chữ
          this.updateWordText(this.targetWord);

          // Nếu hoàn thành trọn vẹn cả từ
          if (this.targetWord.typedSoFar === this.targetWord.word) {
            this.destroyTargetWord();
          }
        } else {
          // Gõ sai phím! Mất chuỗi combo
          this.streak = 0;
          this.updateHUD();
          if (this.targetWord.el) {
            this.targetWord.el.classList.add('shake-error');
            setTimeout(() => {
              if (this.targetWord && this.targetWord.el) {
                this.targetWord.el.classList.remove('shake-error');
              }
            }, 200);
          }
        }
      }
    }

    updateWordText(wordObj) {
      if (!wordObj || !wordObj.el) return;
      const typedSpan = wordObj.el.querySelector('.typed');
      const untypedSpan = wordObj.el.querySelector('.untyped');
      if (typedSpan && untypedSpan) {
        typedSpan.textContent = wordObj.typedSoFar;
        untypedSpan.textContent = wordObj.word.slice(wordObj.typedSoFar.length);
      }
    }

    destroyTargetWord() {
      if (!this.targetWord) return;

      this.playExplosionSound();
      this.wordsTypedCount++;
      this.streak++;
      const wordScore = this.targetWord.word.length * 15 + this.streak * 5;
      this.score += wordScore;

      // Tạo hiệu ứng hạt nổ Particle
      this.spawnParticles(this.targetWord.x + 30, this.targetWord.y + 15);

      // Tạo popup điểm thưởng
      this.spawnScorePopup(this.targetWord.x + 20, this.targetWord.y, `+${wordScore}`);

      // Xóa khỏi danh sách
      const index = this.fallingWords.findIndex(w => w.id === this.targetWord.id);
      if (index !== -1) {
        if (this.targetWord.el && this.targetWord.el.parentNode) {
          this.targetWord.el.parentNode.removeChild(this.targetWord.el);
        }
        this.fallingWords.splice(index, 1);
      }

      this.targetWord = null;
      this.updateHUD();

      // Kiểm tra mục tiêu chiến thắng
      if (this.score >= 500) {
        this.endGame(true, 'Hoàn Thành Xuất Sắc Chiến Dịch!');
      }
    }

    aimCannonAt(targetObj) {
      if (!this.cannonEl || !this.arenaEl) return;
      const cannonRect = this.cannonEl.getBoundingClientRect();
      const arenaRect = this.arenaEl.getBoundingClientRect();

      const cannonCenterX = cannonRect.left - arenaRect.left + cannonRect.width / 2;
      const cannonCenterY = cannonRect.top - arenaRect.top;

      const targetCenterX = targetObj.x + 40;
      const targetCenterY = targetObj.y + 15;

      const angleRad = Math.atan2(targetCenterX - cannonCenterX, cannonCenterY - targetCenterY);
      const angleDeg = (angleRad * 180) / Math.PI;

      this.cannonEl.style.transform = `translateX(-50%) rotate(${Math.max(-65, Math.min(65, angleDeg))}deg)`;
    }

    fireLaser(targetObj) {
      if (!this.arenaEl) return;
      const laser = document.createElement('div');
      laser.className = 'laser-projectile';

      const arenaWidth = this.arenaEl.clientWidth;
      const arenaHeight = this.arenaEl.clientHeight;

      const startX = arenaWidth / 2;
      const startY = arenaHeight - 45;
      const endX = targetObj.x + 35;
      const endY = targetObj.y + 15;

      laser.style.left = `${startX}px`;
      laser.style.top = `${startY}px`;

      const dx = endX - startX;
      const dy = endY - startY;
      const distance = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;

      laser.style.width = `${distance}px`;
      laser.style.transform = `rotate(${angle}deg)`;

      this.arenaEl.appendChild(laser);

      setTimeout(() => {
        if (laser && laser.parentNode) {
          laser.parentNode.removeChild(laser);
        }
      }, 100);
    }

    spawnParticles(x, y) {
      if (!this.arenaEl) return;
      const colors = ['#f59e0b', '#ef4444', '#3b82f6', '#10b981', '#ffffff'];
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const angle = Math.random() * Math.PI * 2;
        const dist = 25 + Math.random() * 45;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        this.arenaEl.appendChild(particle);
        setTimeout(() => {
          if (particle && particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 500);
      }
    }

    spawnScorePopup(x, y, text) {
      if (!this.arenaEl) return;
      const popup = document.createElement('div');
      popup.className = 'score-popup-float';
      popup.textContent = text;
      popup.style.left = `${x}px`;
      popup.style.top = `${y}px`;
      this.arenaEl.appendChild(popup);
      setTimeout(() => {
        if (popup && popup.parentNode) {
          popup.parentNode.removeChild(popup);
        }
      }, 700);
    }

    updateHUD() {
      if (this.scoreEl) this.scoreEl.textContent = this.score;
      if (this.streakEl) this.streakEl.textContent = `x${this.streak}`;
      if (this.hpEl) {
        this.hpEl.textContent = '❤️'.repeat(Math.max(0, this.hp));
      }
    }

    updateWPM() {
      if (!this.isPlaying || !this.wpmEl) return;
      const elapsedMin = (Date.now() - this.startTime) / 60000;
      if (elapsedMin > 0.05) {
        const words = this.charsTypedCount / 5;
        const wpm = Math.round(words / elapsedMin);
        this.wpmEl.textContent = `${wpm} WPM`;
      }
    }

    clearAllWords() {
      if (this.spawnTimerId) clearTimeout(this.spawnTimerId);
      if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);

      this.fallingWords.forEach(w => {
        if (w.el && w.el.parentNode) {
          w.el.parentNode.removeChild(w.el);
        }
      });
      this.fallingWords = [];
      this.targetWord = null;
    }

    endGame(isVictory, titleText) {
      this.isPlaying = false;
      this.clearAllWords();

      if (isVictory) {
        this.playVictorySound();
        // Bắn sự kiện cộng điểm XP toàn bài
        document.dispatchEvent(new CustomEvent('lesson:xp', { detail: { amount: 30 } }));
      }

      if (this.overlayEl && this.dialogEl) {
        this.overlayEl.style.display = 'flex';
        this.dialogEl.innerHTML = `
          <div style="font-size: 3.5rem;">${isVictory ? '🏆' : '💥'}</div>
          <h3 style="color: ${isVictory ? '#10b981' : '#ef4444'}; margin: 10px 0 6px;">
            ${titleText || (isVictory ? 'Chiến Thắng!' : 'Trò Chơi Kết Thúc')}
          </h3>
          <p class="text-secondary" style="font-size: 0.95rem; margin-bottom: 16px;">
            Điểm số: <strong style="color: var(--color-primary); font-size: 1.2rem;">${this.score}</strong> | 
            Số từ đã bắn: <strong>${this.wordsTypedCount}</strong> | 
            Tốc độ: <strong>${this.wpmEl ? this.wpmEl.textContent : '0 WPM'}</strong>
          </p>
          <div class="d-flex justify-center gap-3">
            <button class="btn btn--primary typing-restart-btn font-bold" style="cursor: pointer; z-index: 40;">
              🔄 Chơi Lại Ngay
            </button>
          </div>
        `;

        const restartBtn = this.dialogEl.querySelector('.typing-restart-btn');
        if (restartBtn) {
          restartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.startGame();
          });
        }
      }
    }
  }

  // Helper khởi tạo toàn cục bảo đảm không bao giờ lỗi
  function initTypingShooter(container) {
    if (!container) {
      container = document.querySelector('.typing-game-container');
    }
    if (!container) return null;

    if (!container._typingShooterInstance) {
      container._typingShooterInstance = new TypingShooterGame(container);
      window.TypingShooter = container._typingShooterInstance;
    }
    return container._typingShooterInstance;
  }

  function autoInitAll() {
    document.querySelectorAll('.typing-game-container').forEach(c => {
      initTypingShooter(c);
    });
  }

  // Bắt sự kiện click toàn cục (Event Delegation) dùng useCapture để KHÔNG BAO GIỜ bị chặn
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.typing-start-btn, .typing-restart-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const container = btn.closest('.typing-game-container') || document.querySelector('.typing-game-container');
      if (container) {
        const game = initTypingShooter(container);
        if (game) {
          game.startGame();
        }
      }
    }
  }, true);

  // Khởi tạo ở mọi thời điểm
  document.addEventListener('DOMContentLoaded', autoInitAll);
  window.addEventListener('load', autoInitAll);

  // Quan sát DOM để tự nạp ngay khi LearningEngine render xong
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      const c = document.querySelector('.typing-game-container');
      if (c && !c._typingShooterInstance) {
        autoInitAll();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  window.initTypingShooter = initTypingShooter;
  window.TypingShooterGame = TypingShooterGame;
})();
