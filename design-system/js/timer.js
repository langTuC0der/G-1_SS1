/**
 * TIMER MANAGER — Bright & Friendly Modern Edu
 * Quản lý đồng hồ đếm ngược cho phần Boss Challenge
 */

(function () {
  'use strict';

  class LessonTimer {
    constructor(containerElement, durationSeconds = 300) {
      this.container = containerElement;
      this.initialDuration = durationSeconds;
      this.remainingSeconds = durationSeconds;
      this.timerId = null;
      this.state = 'idle'; // 'idle', 'running', 'paused', 'finished'

      this.displayEl = this.container.querySelector('.timer-display');
      this.startBtn = this.container.querySelector('[data-timer-action="start"]');
      this.pauseBtn = this.container.querySelector('[data-timer-action="pause"]');
      this.resetBtn = this.container.querySelector('[data-timer-action="reset"]');

      this.initEvents();
      this.updateDisplay();
    }

    initEvents() {
      if (this.startBtn) {
        this.startBtn.addEventListener('click', () => this.start());
      }
      if (this.pauseBtn) {
        this.pauseBtn.addEventListener('click', () => this.pause());
      }
      if (this.resetBtn) {
        this.resetBtn.addEventListener('click', () => this.reset());
      }
    }

    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    updateDisplay() {
      if (!this.displayEl) return;
      this.displayEl.textContent = this.formatTime(this.remainingSeconds);

      // Warning khi thời gian còn dưới 60 giây
      if (this.state === 'running' && this.remainingSeconds <= 60 && this.remainingSeconds > 0) {
        this.displayEl.classList.add('is-warning');
      } else {
        this.displayEl.classList.remove('is-warning');
      }

      // Cập nhật trạng thái các nút
      if (this.startBtn) this.startBtn.disabled = (this.state === 'running');
      if (this.pauseBtn) this.pauseBtn.disabled = (this.state !== 'running');
    }

    start() {
      if (this.state === 'running' || this.remainingSeconds <= 0) return;

      this.state = 'running';
      this.updateDisplay();

      if (window.SoundManager) window.SoundManager.playPop();

      this.timerId = setInterval(() => {
        this.remainingSeconds--;
        this.updateDisplay();

        if (this.remainingSeconds <= 0) {
          this.finish();
        }
      }, 1000);
    }

    pause() {
      if (this.state !== 'running') return;
      clearInterval(this.timerId);
      this.timerId = null;
      this.state = 'paused';
      this.updateDisplay();
    }

    reset() {
      clearInterval(this.timerId);
      this.timerId = null;
      this.remainingSeconds = this.initialDuration;
      this.state = 'idle';
      this.updateDisplay();
      if (window.SoundManager) window.SoundManager.playClick();
    }

    finish() {
      clearInterval(this.timerId);
      this.timerId = null;
      this.state = 'finished';
      this.updateDisplay();

      if (window.SoundManager) {
        window.SoundManager.playSuccess();
      }

      document.dispatchEvent(new CustomEvent('lesson:timer-finish', {
        detail: {
          spentSeconds: this.initialDuration - this.remainingSeconds
        }
      }));
    }
  }

  const TimerManager = {
    instances: [],

    init: function () {
      const timerWidgets = document.querySelectorAll('.timer-widget');
      timerWidgets.forEach(widget => {
        const duration = parseInt(widget.dataset.duration || '300', 10);
        const timer = new LessonTimer(widget, duration);
        this.instances.push(timer);
      });
    }
  };

  window.TimerManager = TimerManager;
  window.LessonTimer = LessonTimer;
})();
