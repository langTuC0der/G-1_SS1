/**
 * WHAC-A-MOLE MASTER ARENA — Bright & Friendly Modern Edu
 * Game đập chuột luyện toàn diện kỹ năng chuột:
 * - Chuột thường 🐭: Nhấp chuột trái (Single Click)
 * - Chuột giáp sắt 🛡️: Nháy đúp (Double Click) 2 lần nhanh
 * - Chuột phù thủy 🧙‍♂️: Bấm chuột phải (Right Click)
 * - Chuột ôm bom 💣: TRÁNH BẤM (Trừ điểm & mất combo)
 * - Chuột vàng 🌟: Siêu hiếm (+50 điểm & +5s thời gian)
 */

(function () {
  'use strict';

  const MOLE_TYPES = [
    { type: 'normal', name: 'Chuột Nâu', weight: 45, xp: 10, hitsNeeded: 1, action: 'left' },
    { type: 'armored', name: 'Chuột Giáp Sắt', weight: 25, xp: 25, hitsNeeded: 2, action: 'double' },
    { type: 'wizard', name: 'Chuột Phù Thủy', weight: 15, xp: 30, hitsNeeded: 1, action: 'right' },
    { type: 'bomb', name: 'Chuột Ôm Bom', weight: 12, xp: -20, hitsNeeded: 1, action: 'avoid' },
    { type: 'golden', name: 'Chuột Vàng', weight: 3, xp: 50, hitsNeeded: 1, action: 'bonus' }
  ];

  class WhackAMoleGame {
    constructor(containerElement) {
      this.container = containerElement;
      this.gridEl = this.container.querySelector('.whack-grid');
      this.scoreEl = this.container.querySelector('.whack-score-val');
      this.timeEl = this.container.querySelector('.whack-time-val');
      this.comboEl = this.container.querySelector('.whack-combo-val');
      this.highScoreEl = this.container.querySelector('.whack-highscore-val');
      this.overlayEl = this.container.querySelector('.whack-overlay');
      this.dialogEl = this.container.querySelector('.whack-overlay-dialog');

      this.score = 0;
      this.timeLeft = 60;
      this.combo = 0;
      this.highScore = parseInt(localStorage.getItem('whack_high_score') || '0', 10);
      this.isPlaying = false;
      this.difficulty = 'medium'; // 'easy', 'medium', 'hard'

      this.holes = [];
      this.gameTimer = null;
      this.spawnTimer = null;
      this.activeMoles = new Map(); // holeIndex -> moleData

      this.initHoles();
      this.initEvents();
      this.initHammer();
      this.updateHUD();
    }

    initHoles() {
      if (!this.gridEl) return;
      this.gridEl.innerHTML = '';
      this.holes = [];

      for (let i = 0; i < 9; i++) {
        const hole = document.createElement('div');
        hole.className = 'mole-hole';
        hole.dataset.holeIndex = i;

        hole.innerHTML = `
          <!-- Bóng đổ tiếp xúc nền cỏ 3D -->
          <div class="hole-ground-shadow"></div>
          
          <!-- Gò đất nổi phía sau 3D -->
          <div class="hole-mound-back"></div>
          
          <!-- Lòng hang sâu thẳm -->
          <div class="hole-pit"></div>
          
          <!-- Khoang trồi sụt của nhân vật Chuột -->
          <div class="mole-chamber">
            <div class="mole" data-index="${i}">
              <div class="mole-svg-wrap"></div>
            </div>
          </div>
          
          <!-- Bờ đất tự nhiên phía trước che chân chuột -->
          <div class="hole-dirt-front">
            <div class="dirt-front-texture"></div>
          </div>
          
          <!-- Khóm cỏ tiền cảnh sống động -->
          <div class="hole-grass-tuft hole-grass-left">🌱</div>
          <div class="hole-grass-tuft hole-grass-right">🌿</div>
          <div class="hole-grass-tuft hole-grass-center">☘️</div>

          <!-- Chùm hạt bụi đất văng lên khi chuột nhảy khỏi hang -->
          <div class="hole-dust-container">
            <span class="dust-particle dust-p1"></span>
            <span class="dust-particle dust-p2"></span>
            <span class="dust-particle dust-p3"></span>
            <span class="dust-particle dust-p4"></span>
          </div>
        `;

        this.gridEl.appendChild(hole);
        this.holes.push({
          element: hole,
          moleEl: hole.querySelector('.mole'),
          svgWrap: hole.querySelector('.mole-svg-wrap'),
          dustEl: hole.querySelector('.hole-dust-container'),
          isOccupied: false
        });
      }
    }

    getMoleSVG(type, state = 'normal') {
      if (type === 'bomb') {
        return `
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Tai chuột viền đỏ nguy hiểm -->
            <circle cx="22" cy="32" r="14" fill="#334155" stroke="#0f172a" stroke-width="2.5"/>
            <circle cx="22" cy="32" r="8" fill="#f43f5e"/>
            <circle cx="78" cy="32" r="14" fill="#334155" stroke="#0f172a" stroke-width="2.5"/>
            <circle cx="78" cy="32" r="8" fill="#f43f5e"/>
            
            <!-- Thân chuột màu xám đen -->
            <ellipse cx="50" cy="56" rx="35" ry="32" fill="#475569" stroke="#0f172a" stroke-width="2.5"/>
            
            <!-- Đôi mắt gian xảo / hoảng hốt -->
            <circle cx="36" cy="44" r="6" fill="#fef08a"/>
            <circle cx="36" cy="44" r="3" fill="#0f172a"/>
            <circle cx="64" cy="44" r="6" fill="#fef08a"/>
            <circle cx="64" cy="44" r="3" fill="#0f172a"/>
            
            <!-- Mũi mõm -->
            <ellipse cx="50" cy="54" rx="12" ry="8" fill="#64748b"/>
            <polygon points="47,52 53,52 50,56" fill="#0f172a"/>
            
            <!-- Biểu tượng Cảnh Báo Nguy Hiểm trên đầu -->
            <g transform="translate(42, 6)">
              <polygon points="8,0 16,14 0,14" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.5"/>
              <text x="8" y="12" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">!</text>
            </g>
            
            <!-- Quả bom to đùng ôm trước ngực -->
            <circle cx="50" cy="74" r="18" fill="#0f172a" stroke="#dc2626" stroke-width="2"/>
            <rect x="46" y="54" width="8" height="6" rx="1" fill="#64748b"/>
            <!-- Dây cháy chậm ngún lửa -->
            <path d="M50,54 Q56,46 62,48" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
            <!-- Tia lửa tóe ra từ ngòi nổ -->
            <polygon points="62,45 65,42 65,47 69,46 66,50 68,54 64,52 62,56 61,51 57,51" fill="#ef4444"/>
            <circle cx="63" cy="48" r="3" fill="#facc15"/>
            
            <!-- Hai bàn tay ôm chặt quả bom -->
            <ellipse cx="32" cy="74" rx="6" ry="8" fill="#64748b" stroke="#0f172a" stroke-width="1.5"/>
            <ellipse cx="68" cy="74" rx="6" ry="8" fill="#64748b" stroke="#0f172a" stroke-width="1.5"/>
          </svg>
        `;
      }

      if (type === 'wizard') {
        return `
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Hào quang phép thuật mờ ảo -->
            <circle cx="50" cy="50" r="42" fill="none" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
            
            <!-- Tai chuột phù thủy -->
            <circle cx="22" cy="38" r="12" fill="#581c87" stroke="#2e1065" stroke-width="2"/>
            <circle cx="78" cy="38" r="12" fill="#581c87" stroke="#2e1065" stroke-width="2"/>
            
            <!-- Thân áo choàng tím -->
            <ellipse cx="50" cy="62" rx="35" ry="32" fill="#6b21a8" stroke="#3b0764" stroke-width="2.5"/>
            
            <!-- Mũ phù thủy chóp nhọn cao vút -->
            <path d="M16,42 L84,42 L50,4 Z" fill="#4c1d95" stroke="#facc15" stroke-width="2.5"/>
            <!-- Vành mũ bầu cong -->
            <ellipse cx="50" cy="42" rx="36" ry="8" fill="#3b0764" stroke="#facc15" stroke-width="1.5"/>
            <!-- Ngôi sao vàng trên mũ -->
            <polygon points="50,20 52,26 58,26 53,30 55,36 50,32 45,36 47,30 42,26 48,26" fill="#fde047"/>
            
            <!-- Đôi mắt phát sáng xanh neon huyền ảo -->
            <ellipse cx="37" cy="52" rx="5" ry="6" fill="#67e8f9"/>
            <ellipse cx="37" cy="52" rx="2" ry="3" fill="#083344"/>
            <ellipse cx="63" cy="52" rx="5" ry="6" fill="#67e8f9"/>
            <ellipse cx="63" cy="52" rx="2" ry="3" fill="#083344"/>
            
            <!-- Mũi mõm chuột -->
            <ellipse cx="50" cy="60" rx="11" ry="8" fill="#9333ea"/>
            <polygon points="47,58 53,58 50,62" fill="#2e1065"/>
            
            <!-- Tay cầm Đũa Thần phát sáng -->
            <ellipse cx="28" cy="76" rx="7" ry="5" fill="#a855f7" stroke="#3b0764" stroke-width="1.5"/>
            <ellipse cx="72" cy="76" rx="7" ry="5" fill="#a855f7" stroke="#3b0764" stroke-width="1.5"/>
            <!-- Cây đũa phép -->
            <line x1="72" y1="76" x2="88" y2="58" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
            <!-- Ngôi sao phát sáng trên đầu đũa -->
            <circle cx="88" cy="58" r="7" fill="#facc15" opacity="0.4"/>
            <polygon points="88,53 90,57 94,57 91,60 92,64 88,61 84,64 85,60 82,57 86,57" fill="#fde047"/>
          </svg>
        `;
      }

      if (type === 'golden') {
        return `
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
              <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fffbeb"/>
                <stop offset="30%" stop-color="#fde047"/>
                <stop offset="70%" stop-color="#f59e0b"/>
                <stop offset="100%" stop-color="#b45309"/>
              </linearGradient>
            </defs>
            
            <!-- Tai chuột vàng -->
            <circle cx="22" cy="32" r="14" fill="#f59e0b" stroke="#78350f" stroke-width="2.5"/>
            <circle cx="22" cy="32" r="8" fill="#fef08a"/>
            <circle cx="78" cy="32" r="14" fill="#f59e0b" stroke="#78350f" stroke-width="2.5"/>
            <circle cx="78" cy="32" r="8" fill="#fef08a"/>
            
            <!-- Thân chuột dát vàng lấp lánh -->
            <ellipse cx="50" cy="58" rx="36" ry="34" fill="url(#goldGrad2)" stroke="#78350f" stroke-width="2.5"/>
            
            <!-- Vương miện vua chuột đính ngọc quý -->
            <polygon points="32,28 40,12 50,22 60,12 68,28" fill="#facc15" stroke="#78350f" stroke-width="2"/>
            <circle cx="40" cy="12" r="2.5" fill="#ef4444"/>
            <circle cx="50" cy="22" r="2.5" fill="#10b981"/>
            <circle cx="60" cy="12" r="2.5" fill="#3b82f6"/>
            
            <!-- Mắt lấp lánh ánh kim anime -->
            <circle cx="36" cy="48" r="6" fill="#451a03"/>
            <polygon points="36,44 37.5,47 40,48 37.5,49 36,52 34.5,49 32,48 34.5,47" fill="#ffffff"/>
            <circle cx="64" cy="48" r="6" fill="#451a03"/>
            <polygon points="64,44 65.5,47 68,48 65.5,49 64,52 62.5,49 60,48 62.5,47" fill="#ffffff"/>
            
            <!-- Mũi mõm hoàng gia -->
            <ellipse cx="50" cy="58" rx="13" ry="9" fill="#fef3c7"/>
            <polygon points="46,55 54,55 50,60" fill="#78350f"/>
            
            <!-- Hai tay ôm huy hiệu sao vàng -->
            <ellipse cx="28" cy="76" rx="8" ry="6" fill="#fef08a" stroke="#78350f" stroke-width="2"/>
            <ellipse cx="72" cy="76" rx="8" ry="6" fill="#fef08a" stroke="#78350f" stroke-width="2"/>
            <circle cx="50" cy="74" r="11" fill="#facc15" stroke="#78350f" stroke-width="1.5"/>
            <text x="50" y="78" font-size="11" font-weight="900" fill="#78350f" text-anchor="middle">★</text>
          </svg>
        `;
      }

      if (type === 'armored') {
        const hasHelmet = state !== 'broken';
        return `
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Tai chuột -->
            <circle cx="22" cy="36" r="13" fill="#52331b" stroke="#331c0e" stroke-width="2"/>
            <circle cx="78" cy="36" r="13" fill="#52331b" stroke="#331c0e" stroke-width="2"/>
            
            <!-- Thân chuột chiến binh -->
            <ellipse cx="50" cy="62" rx="36" ry="32" fill="#784522" stroke="#381b0a" stroke-width="2.5"/>
            
            <!-- Mắt quyết tâm -->
            <circle cx="36" cy="50" r="5" fill="#000000"/>
            <circle cx="35" cy="48.5" r="1.5" fill="#ffffff"/>
            <circle cx="64" cy="50" r="5" fill="#000000"/>
            <circle cx="63" cy="48.5" r="1.5" fill="#ffffff"/>
            <ellipse cx="50" cy="59" rx="12" ry="8" fill="#d4a373"/>
            <polygon points="47,57 53,57 50,61" fill="#381b0a"/>
            
            <!-- Mũ giáp sắt Viking / Knight -->
            ${hasHelmet ? `
              <g class="mole-helmet-svg">
                <path d="M18,40 Q50,8 82,40 Z" fill="#94a3b8" stroke="#334155" stroke-width="3"/>
                <rect x="18" y="36" width="64" height="8" rx="3" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                <!-- Đỉnh mào vàng -->
                <polygon points="50,8 55,20 45,20" fill="#f59e0b"/>
                <circle cx="50" cy="24" r="4" fill="#cbd5e1" stroke="#334155"/>
                <!-- Đinh tán giáp -->
                <circle cx="26" cy="40" r="2" fill="#f8fafc"/>
                <circle cx="50" cy="40" r="2" fill="#f8fafc"/>
                <circle cx="74" cy="40" r="2" fill="#f8fafc"/>
              </g>
            ` : `
              <!-- Băng dán urgo trên trán khi vỡ giáp -->
              <rect x="38" y="32" width="24" height="9" rx="3" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5" transform="rotate(-8 50 36)"/>
              <line x1="48" y1="33" x2="52" y2="39" stroke="#ea580c" stroke-width="1.5"/>
            `}
            
            <!-- Khiên sắt bảo hộ trên tay trái -->
            <g transform="translate(14, 60)">
              <path d="M0,4 Q14,0 20,6 Q18,22 10,26 Q2,22 0,4 Z" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
              <circle cx="10" cy="12" r="4" fill="#f59e0b"/>
            </g>
            <ellipse cx="76" cy="76" rx="8" ry="5.5" fill="#d4a373" stroke="#381b0a" stroke-width="2"/>
          </svg>
        `;
      }

      // Normal Cute Mole
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <!-- Tai chuột to tròn mềm mại -->
          <circle cx="22" cy="32" r="14" fill="#7d4b25" stroke="#45240e" stroke-width="2.5"/>
          <circle cx="22" cy="32" r="8" fill="#fda4af"/>
          <circle cx="78" cy="32" r="14" fill="#7d4b25" stroke="#45240e" stroke-width="2.5"/>
          <circle cx="78" cy="32" r="8" fill="#fda4af"/>
          
          <!-- Thân & Đầu chuột tròn trịa -->
          <ellipse cx="50" cy="58" rx="36" ry="34" fill="#9a6237" stroke="#45240e" stroke-width="2.5"/>
          <!-- Bụng sáng màu -->
          <ellipse cx="50" cy="72" rx="22" ry="18" fill="#fef3c7" opacity="0.85"/>
          
          <!-- Má hồng đáng yêu -->
          <circle cx="27" cy="56" r="6" fill="#fda4af" opacity="0.6"/>
          <circle cx="73" cy="56" r="6" fill="#fda4af" opacity="0.6"/>
          
          <!-- Đôi mắt long lanh anime -->
          <circle cx="36" cy="46" r="6.5" fill="#0f172a"/>
          <circle cx="34" cy="44" r="2.5" fill="#ffffff"/>
          <circle cx="38" cy="48" r="1" fill="#ffffff"/>
          <circle cx="64" cy="46" r="6.5" fill="#0f172a"/>
          <circle cx="62" cy="44" r="2.5" fill="#ffffff"/>
          <circle cx="66" cy="48" r="1" fill="#ffffff"/>
          
          <!-- Mõm & Mũi & Răng thỏ -->
          <ellipse cx="50" cy="56" rx="13" ry="9" fill="#fbcfe8"/>
          <polygon points="46,53 54,53 50,58" fill="#be185d"/>
          <rect x="47.5" y="61" width="5" height="5" rx="1" fill="#ffffff" stroke="#45240e" stroke-width="0.8"/>
          
          <!-- Râu chuột tinh nghịch -->
          <line x1="16" y1="55" x2="30" y2="56" stroke="#45240e" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="16" y1="60" x2="30" y2="59" stroke="#45240e" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="84" y1="55" x2="70" y2="56" stroke="#45240e" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="84" y1="60" x2="70" y2="59" stroke="#45240e" stroke-width="1.5" stroke-linecap="round"/>
          
          <!-- Hai bàn tay nhỏ xíu bám lên miệng hang -->
          <ellipse cx="28" cy="78" rx="8" ry="5.5" fill="#fbcfe8" stroke="#45240e" stroke-width="2"/>
          <ellipse cx="72" cy="78" rx="8" ry="5.5" fill="#fbcfe8" stroke="#45240e" stroke-width="2"/>
        </svg>
      `;
    }


    initHammer() {
      let hammer = document.querySelector('.whack-hammer');
      if (!hammer) {
        hammer = document.createElement('div');
        hammer.className = 'whack-hammer';
        hammer.innerHTML = '🔨';
        document.body.appendChild(hammer);
      }
      this.hammerEl = hammer;

      const arena = this.container.querySelector('.whack-arena');
      if (!arena) return;

      arena.addEventListener('mouseenter', () => {
        if (this.isPlaying && this.hammerEl) {
          this.hammerEl.style.display = 'block';
        }
      });

      arena.addEventListener('mouseleave', () => {
        if (this.hammerEl) {
          this.hammerEl.style.display = 'none';
        }
      });

      arena.addEventListener('mousemove', (e) => {
        if (this.hammerEl && this.isPlaying) {
          this.hammerEl.style.left = `${e.clientX}px`;
          this.hammerEl.style.top = `${e.clientY}px`;
        }
      });

      // Hammer swing animation
      arena.addEventListener('mousedown', () => {
        if (this.hammerEl && this.isPlaying) {
          this.hammerEl.classList.add('is-swinging');
        }
      });

      window.addEventListener('mouseup', () => {
        if (this.hammerEl) {
          this.hammerEl.classList.remove('is-swinging');
        }
      });
    }

    initEvents() {
      // 1. Chặn context menu mặc định bên trong Arena để hỗ trợ click chuột phải mượt mà
      const arena = this.container.querySelector('.whack-arena');
      if (arena) {
        arena.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          const moleEl = e.target.closest('.mole');
          if (moleEl && this.isPlaying) {
            const holeIdx = parseInt(moleEl.dataset.index, 10);
            this.handleMoleHit(holeIdx, 'right');
          }
        });
      }

      // 2. Nhấp chuột trái (Single Click)
      this.gridEl.addEventListener('click', (e) => {
        const moleEl = e.target.closest('.mole');
        if (moleEl && this.isPlaying) {
          const holeIdx = parseInt(moleEl.dataset.index, 10);
          this.handleMoleHit(holeIdx, 'left');
        }
      });

      // 3. Nháy đúp chuột (Double Click)
      this.gridEl.addEventListener('dblclick', (e) => {
        const moleEl = e.target.closest('.mole');
        if (moleEl && this.isPlaying) {
          const holeIdx = parseInt(moleEl.dataset.index, 10);
          this.handleMoleHit(holeIdx, 'double');
        }
      });

      // 4. Các nút điều khiển
      const startBtn = this.container.querySelector('.whack-start-btn');
      if (startBtn) {
        startBtn.addEventListener('click', () => this.startGame());
      }

      const restartBtn = this.container.querySelector('.whack-restart-btn');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => this.startGame());
      }

      // 5. Chọn độ khó
      const diffBtns = this.container.querySelectorAll('.whack-diff-btn');
      diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          diffBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          this.difficulty = btn.dataset.diff || 'medium';
          if (window.SoundManager) window.SoundManager.playClick();
        });
      });
    }

    getRandomMoleType() {
      const rand = Math.random() * 100;
      let cumWeight = 0;
      for (const m of MOLE_TYPES) {
        cumWeight += m.weight;
        if (rand <= cumWeight) return { ...m };
      }
      return { ...MOLE_TYPES[0] };
    }

    spawnMole() {
      if (!this.isPlaying) return;

      // Tìm các hang chưa có chuột
      const availableIndices = [];
      this.holes.forEach((h, idx) => {
        if (!h.isOccupied) availableIndices.push(idx);
      });

      if (availableIndices.length === 0) return;

      const randomHoleIdx = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      const hole = this.holes[randomHoleIdx];
      const moleData = this.getRandomMoleType();
      moleData.currentHits = 0;

      hole.isOccupied = true;
      hole.svgWrap.innerHTML = this.getMoleSVG(moleData.type, 'normal');
      hole.moleEl.className = `mole mole-type-${moleData.type} is-popped`;
      hole.element.classList.add('is-popping');

      // Kích hoạt chùm bụi đất văng lên sống động khi nhảy khỏi hang
      if (hole.dustEl) {
        hole.dustEl.classList.remove('is-active');
        void hole.dustEl.offsetWidth; // force reflow
        hole.dustEl.classList.add('is-active');
      }

      this.activeMoles.set(randomHoleIdx, moleData);

      // Thời gian chuột trồi lên trước khi tự thụt xuống
      let popDuration = 1400;
      if (this.difficulty === 'easy') popDuration = 1700;
      else if (this.difficulty === 'hard') popDuration = 950;
      if (moleData.type === 'golden') popDuration = 850;

      const timeoutId = setTimeout(() => {
        this.hideMole(randomHoleIdx);
      }, popDuration);

      moleData.timeoutId = timeoutId;
    }

    hideMole(holeIdx) {
      const hole = this.holes[holeIdx];
      if (!hole || !hole.isOccupied) return;

      const moleData = this.activeMoles.get(holeIdx);
      if (moleData && moleData.timeoutId) clearTimeout(moleData.timeoutId);

      hole.element.classList.remove('is-popping');
      hole.moleEl.classList.remove('is-popped');
      hole.moleEl.classList.add('is-hiding');

      setTimeout(() => {
        hole.moleEl.classList.remove('is-hiding');
        hole.isOccupied = false;
        this.activeMoles.delete(holeIdx);
      }, 260);
    }

    handleMoleHit(holeIdx, hitAction) {
      const moleData = this.activeMoles.get(holeIdx);
      const hole = this.holes[holeIdx];
      if (!moleData || !hole || !hole.isOccupied) return;

      // 1. XỬ LÝ CHUỘT ÔM BOM 💣
      if (moleData.type === 'bomb') {
        if (hitAction === 'left' || hitAction === 'right') {
          // BỊ NỔ BOM
          this.score = Math.max(0, this.score - 20);
          this.combo = 0;
          this.updateHUD();
          this.showFloatingText(hole.element, 'BOOM! -20', 'bomb');
          this.triggerScreenShake();
          if (window.SoundManager) window.SoundManager.playExplosion();
          this.hideMole(holeIdx);
        }
        return;
      }

      // 2. XỬ LÝ CHUỘT PHÙ THỦY 🧙‍♂️ (Phải click chuột phải)
      if (moleData.type === 'wizard') {
        if (hitAction === 'right') {
          // ĐẬP THÀNH CÔNG BẰNG CHUỘT PHẢI
          this.addScore(moleData.xp, 'magic');
          this.showFloatingText(hole.element, `+${moleData.xp} RIGHT CLICK!`, 'magic');
          if (window.SoundManager) window.SoundManager.playWhack();
          this.triggerMoleWhacked(holeIdx);
        } else {
          // ĐẬP BẰNG CHUỘT TRÁI KHÔNG CÓ TÁC DỤNG -> BÁO HIỆU
          this.showFloatingText(hole.element, 'CẦN CHUỘT PHẢI!', 'normal');
          if (window.SoundManager) window.SoundManager.playWarning();
        }
        return;
      }

      // 3. XỬ LÝ CHUỘT GIÁP SẮT 🛡️ (Phải Double Click)
      if (moleData.type === 'armored') {
        if (hitAction === 'double') {
          // Nháy đúp thành công ngay lập tức
          this.addScore(moleData.xp, 'bonus');
          this.showFloatingText(hole.element, `+${moleData.xp} DOUBLE!`, 'bonus');
          if (window.SoundManager) window.SoundManager.playDoubleWhack();
          this.triggerMoleWhacked(holeIdx);
        } else if (hitAction === 'left') {
          moleData.currentHits++;
          if (moleData.currentHits === 1) {
            // Cú đánh thứ 1: vỡ mũ giáp
            hole.svgWrap.innerHTML = this.getMoleSVG('armored', 'broken');
            this.showFloatingText(hole.element, 'VỠ GIÁP! NHẤP LẦN NỮA!', 'normal');
            if (window.SoundManager) window.SoundManager.playDoubleWhack();
          } else if (moleData.currentHits >= 2) {
            // Cú đánh thứ 2: hạ gục
            this.addScore(moleData.xp, 'bonus');
            this.showFloatingText(hole.element, `+${moleData.xp} DOUBLE!`, 'bonus');
            if (window.SoundManager) window.SoundManager.playWhack();
            this.triggerMoleWhacked(holeIdx);
          }
        }
        return;
      }

      // 4. XỬ LÝ CHUỘT VÀNG MAY MẮN 🌟
      if (moleData.type === 'golden') {
        if (hitAction === 'left' || hitAction === 'right') {
          this.addScore(50, 'bonus');
          this.timeLeft += 5;
          this.showFloatingText(hole.element, '+50 ĐIỂM & +5 GIÂY! 🌟', 'bonus');
          if (window.SoundManager) window.SoundManager.playGoldenChime();
          this.triggerMoleWhacked(holeIdx);
        }
        return;
      }

      // 5. XỬ LÝ CHUỘT NÂU THƯỜNG 🐭 (Click trái)
      if (moleData.type === 'normal') {
        if (hitAction === 'left') {
          this.addScore(moleData.xp, 'normal');
          this.showFloatingText(hole.element, `+${moleData.xp}`, 'normal');
          if (window.SoundManager) window.SoundManager.playWhack();
          this.triggerMoleWhacked(holeIdx);
        }
      }
    }

    triggerMoleWhacked(holeIdx) {
      const hole = this.holes[holeIdx];
      if (!hole) return;

      hole.moleEl.classList.remove('is-popped');
      hole.moleEl.classList.add('is-whacked');
      hole.element.classList.add('hole-whacked-impact');

      setTimeout(() => {
        hole.element.classList.remove('hole-whacked-impact');
      }, 320);

      setTimeout(() => {
        hole.moleEl.classList.remove('is-whacked');
        this.hideMole(holeIdx);
      }, 360);
    }

    addScore(points, type = 'normal') {
      this.combo++;
      let multiplier = 1;
      if (this.combo >= 5) multiplier = 2;
      else if (this.combo >= 3) multiplier = 1.5;

      const finalPoints = Math.round(points * multiplier);
      this.score += finalPoints;

      if (this.score > this.highScore) {
        this.highScore = this.score;
        localStorage.setItem('whack_high_score', this.highScore.toString());
      }

      this.updateHUD();
    }

    showFloatingText(container, text, type = 'normal') {
      const el = document.createElement('div');
      el.className = `whack-float-score whack-float-score--${type}`;
      el.textContent = text;
      el.style.left = '50%';
      el.style.top = '10%';
      container.appendChild(el);

      setTimeout(() => el.remove(), 700);
    }

    triggerScreenShake() {
      const arena = this.container.querySelector('.whack-arena');
      if (arena) {
        arena.classList.remove('screen-shake');
        void arena.offsetWidth; // reflow
        arena.classList.add('screen-shake');
      }
    }

    updateHUD() {
      if (this.scoreEl) this.scoreEl.textContent = this.score;
      if (this.timeEl) this.timeEl.textContent = `${this.timeLeft}s`;
      if (this.highScoreEl) this.highScoreEl.textContent = this.highScore;
      if (this.comboEl) {
        this.comboEl.textContent = this.combo > 1 ? `x${this.combo}` : '0';
        if (this.combo >= 5) this.comboEl.style.color = '#ef4444';
        else if (this.combo >= 3) this.comboEl.style.color = '#f59e0b';
        else this.comboEl.style.color = 'var(--text-secondary)';
      }
    }

    startGame() {
      this.score = 0;
      this.timeLeft = 60;
      this.combo = 0;
      this.isPlaying = true;

      // Xóa mọi chuột còn lại
      this.holes.forEach((h, idx) => this.hideMole(idx));

      // Ẩn overlay
      if (this.overlayEl) this.overlayEl.style.display = 'none';

      this.updateHUD();

      if (window.SoundManager) window.SoundManager.playPop();

      // Đồng hồ đếm ngược game
      if (this.gameTimer) clearInterval(this.gameTimer);
      this.gameTimer = setInterval(() => {
        this.timeLeft--;
        this.updateHUD();

        if (this.timeLeft <= 0) {
          this.endGame();
        }
      }, 1000);

      // Nhịp sinh chuột (Spawn Rate)
      let spawnInterval = 750;
      if (this.difficulty === 'easy') spawnInterval = 900;
      else if (this.difficulty === 'hard') spawnInterval = 520;

      if (this.spawnTimer) clearInterval(this.spawnTimer);
      this.spawnTimer = setInterval(() => {
        this.spawnMole();
      }, spawnInterval);
    }

    endGame() {
      this.isPlaying = false;
      clearInterval(this.gameTimer);
      clearInterval(this.spawnTimer);

      this.holes.forEach((h, idx) => this.hideMole(idx));

      if (window.SoundManager) window.SoundManager.playSuccess();

      // Đánh giá danh hiệu
      let title = 'Tập Sự Luyện Tay';
      let stars = '⭐☆☆';
      let badgeColor = 'var(--color-primary)';
      if (this.score >= 400) {
        title = '👑 Đệ Nhất Thần Chuột Lớp 7!';
        stars = '⭐⭐⭐';
        badgeColor = '#ea580c';
      } else if (this.score >= 250) {
        title = '🥇 Xạ Thủ Chuột Siêu Cấp';
        stars = '⭐⭐⭐';
        badgeColor = 'var(--color-success)';
      } else if (this.score >= 120) {
        title = '🥈 Tay Lái Chuột Cừ Khôi';
        stars = '⭐⭐☆';
        badgeColor = 'var(--color-energy)';
      }

      // Thưởng XP vào hệ thống học tập
      document.dispatchEvent(new CustomEvent('lesson:xp', {
        detail: { amount: 30, reason: 'whack_a_mole_boss' }
      }));

      // Hiển thị Dialog tổng kết
      if (this.overlayEl && this.dialogEl) {
        this.overlayEl.style.display = 'flex';
        this.dialogEl.innerHTML = `
          <div style="font-size: 2.2rem; line-height: 1;">🏆🐭⚡</div>
          <h3 style="font-size: 1.35rem; margin: 0; font-weight: 900;">${title}</h3>
          <div class="whack-stars-row" style="font-size: 1.8rem;">${stars}</div>
          <div class="p-2 rounded bg-page-secondary w-100 text-center">
            <div style="font-size: 0.8rem; color: var(--text-secondary);">Tổng điểm ghi được:</div>
            <div style="font-size: 2rem; font-weight: 900; color: ${badgeColor}; line-height: 1.1;">${this.score} ĐIỂM</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">Kỷ lục của bạn: <strong>${this.highScore} điểm</strong> · Thưởng: <strong>+30 XP</strong></div>
          </div>
          <p class="text-secondary" style="font-size: 0.82rem; margin: 0;">
            Em đã làm chủ cả Click trái, Nháy đúp, Chuột phải và phản xạ tránh bom cực kỳ chuẩn xác!
          </p>
          <div class="d-flex gap-2 w-100 mt-1">
            <button class="btn btn--secondary flex-1 whack-diff-retry-btn" style="padding: 8px 12px; font-size: 0.88rem;">Đổi Độ Khó</button>
            <button class="btn btn--primary flex-1 whack-restart-btn" style="padding: 8px 12px; font-size: 0.88rem;">🔄 Chơi Lại Ngay</button>
          </div>
        `;

        this.dialogEl.querySelector('.whack-restart-btn')?.addEventListener('click', () => this.startGame());
        this.dialogEl.querySelector('.whack-diff-retry-btn')?.addEventListener('click', () => {
          this.overlayEl.style.display = 'flex';
          this.renderStartDialog();
        });
      }
    }

    renderStartDialog() {
      if (!this.dialogEl) return;
      this.dialogEl.innerHTML = `
        <div style="font-size: 2.2rem; line-height: 1;">🔨🐭⚡</div>
        <h3 style="font-size: 1.35rem; margin: 0; font-weight: 900;">Đại Chiến Đập Chuột Siêu Cấp</h3>
        <p class="text-secondary" style="font-size: 0.85rem; margin: 0; max-width: 440px;">
          Thử thách phản xạ chuột 60 giây! Dùng đúng kỹ năng chuột đã học để chinh phục:
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; text-align: left; font-size: 0.8rem;">
          <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
            <span style="font-size: 1.3rem;">🐭</span> <div><strong>Chuột thường:</strong><br><span class="text-primary font-semibold">Click trái (+10đ)</span></div>
          </div>
          <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
            <span style="font-size: 1.3rem;">🛡️</span> <div><strong>Chuột giáp sắt:</strong><br><span class="text-energy font-semibold">Nháy đúp (+25đ)</span></div>
          </div>
          <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
            <span style="font-size: 1.3rem;">🧙‍♂️</span> <div><strong>Chuột phù thủy:</strong><br><span style="color: #9333ea; font-weight: 600;">Chuột phải (+30đ)</span></div>
          </div>
          <div class="p-2 rounded bg-page-secondary d-flex items-center gap-2">
            <span style="font-size: 1.3rem;">💣</span> <div><strong>Chuột ôm bom:</strong><br><span class="text-danger font-semibold">TRÁNH BẤM (-20đ)</span></div>
          </div>
        </div>

        <div class="w-100">
          <span class="text-secondary font-bold" style="font-size: 0.78rem; text-transform: uppercase;">Chọn Mức Độ Thử Thách:</span>
          <div class="whack-diff-selector mt-1">
            <button class="whack-diff-btn ${this.difficulty === 'easy' ? 'is-active' : ''}" data-diff="easy">🟢 Dễ (Tập Sự)</button>
            <button class="whack-diff-btn ${this.difficulty === 'medium' ? 'is-active' : ''}" data-diff="medium">🟡 Vừa (Chuẩn)</button>
            <button class="whack-diff-btn ${this.difficulty === 'hard' ? 'is-active' : ''}" data-diff="hard">🔴 Khó (Cao Thủ)</button>
          </div>
        </div>

        <button class="btn btn--primary w-100 justify-center whack-start-btn" style="font-size: 1rem; padding: 10px 20px; font-weight: 800;">
          🚀 BẮT ĐẦU ĐẬP CHUỘT (60S)
        </button>
      `;

      // Gắn lại sự kiện
      const diffBtns = this.dialogEl.querySelectorAll('.whack-diff-btn');
      diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          diffBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          this.difficulty = btn.dataset.diff || 'medium';
          if (window.SoundManager) window.SoundManager.playClick();
        });
      });

      this.dialogEl.querySelector('.whack-start-btn')?.addEventListener('click', () => this.startGame());
    }
  }

  // Khởi tạo tự động khi trang tải xong hoặc khi chuyển slide
  window.WhackAMoleGame = WhackAMoleGame;

  document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.whack-game-container');
    containers.forEach(c => new WhackAMoleGame(c));
  });
})();
