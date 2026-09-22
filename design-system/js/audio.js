/**
 * SOUND MANAGER — Bright & Friendly Modern Edu
 * Tạo hiệu ứng âm thanh dịu nhẹ bằng Web Audio API (không cần tải file mp3 ngoài)
 */

(function () {
  'use strict';

  const SoundManager = {
    audioCtx: null,
    muted: false,

    init: function () {
      // Đọc cài đặt âm thanh từ Storage
      if (window.StorageManager) {
        const pref = window.StorageManager.get('sound_muted', false);
        this.muted = !!pref;
      }
      this.updateUI();
    },

    getAudioContext: function () {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    },

    toggleMute: function () {
      this.muted = !this.muted;
      if (window.StorageManager) {
        window.StorageManager.set('sound_muted', this.muted);
      }
      this.updateUI();
      if (!this.muted) {
        this.playPop();
      }
      return this.muted;
    },

    isMuted: function () {
      return this.muted;
    },

    updateUI: function () {
      const buttons = document.querySelectorAll('.sound-toggle-btn');
      buttons.forEach(btn => {
        btn.innerHTML = this.muted ? '🔇 Âm thanh: Tắt' : '🔊 Âm thanh: Bật';
        btn.setAttribute('aria-pressed', (!this.muted).toString());
      });
    },

    /* Âm thanh click nhẹ khi gõ phím / bấm nút */
    playClick: function () {
      if (this.muted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    },

    /* Âm pop vui vẻ khi tick checklist */
    playPop: function () {
      if (this.muted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.11);
    },

    /* Âm thanh chuông chúc mừng nhẹ (khi trả lời đúng quiz / hoàn thành) */
    playSuccess: function () {
      if (this.muted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.07);

        gain.gain.setValueAtTime(0.1, ctx.currentTime + index * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.07 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + index * 0.07);
        osc.stop(ctx.currentTime + index * 0.07 + 0.26);
      });
    },

    /* Âm nhắc nhở / thử lại */
    playWarning: function () {
      if (this.muted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(260, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.17);
    }
  };

  window.SoundManager = SoundManager;
})();
