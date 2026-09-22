/**
 * CHECKLIST MANAGER — Bright & Friendly Modern Edu
 * Quản lý danh sách nhiệm vụ tích điểm, lưu tiến trình và cập nhật thanh Progress Bar
 */

(function () {
  'use strict';

  const ChecklistManager = {
    lessonId: 'default',
    totalItems: 0,
    checkedItems: 0,

    init: function (lessonId = 'default') {
      this.lessonId = lessonId;
      const items = document.querySelectorAll('.checklist-item');
      this.totalItems = items.length;

      // Đọc trạng thái đã lưu
      let savedState = {};
      if (window.StorageManager) {
        const lessonState = window.StorageManager.getLessonState(this.lessonId);
        savedState = lessonState.checklist || {};
      }

      items.forEach((item, index) => {
        const itemId = item.dataset.id || `item_${index}`;
        item.dataset.id = itemId;

        // Phục hồi trạng thái checked từ storage
        if (savedState[itemId]) {
          item.classList.add('is-checked');
        }

        // Đăng ký sự kiện click
        item.addEventListener('click', () => {
          this.toggleItem(item, itemId);
        });
      });

      this.updateProgress();
    },

    toggleItem: function (itemElement, itemId) {
      const isNowChecked = !itemElement.classList.contains('is-checked');
      const lessonState = window.StorageManager ? window.StorageManager.getLessonState(this.lessonId) : {};
      const awardedChecklist = lessonState.awardedChecklist || {};

      if (isNowChecked) {
        itemElement.classList.add('is-checked');
        if (window.SoundManager) window.SoundManager.playPop();

        // Thưởng XP khi hoàn thành nhiệm vụ (chỉ trao thưởng 1 lần duy nhất)
        if (!awardedChecklist[itemId]) {
          const xpAmount = parseInt(itemElement.dataset.xp || '5', 10);
          document.dispatchEvent(new CustomEvent('lesson:xp', {
            detail: { amount: xpAmount, reason: 'checklist' }
          }));
          awardedChecklist[itemId] = true;
        }
      } else {
        itemElement.classList.remove('is-checked');
        if (window.SoundManager) window.SoundManager.playClick();
      }

      // Lưu vào Storage
      if (window.StorageManager) {
        const checklist = lessonState.checklist || {};
        checklist[itemId] = isNowChecked;
        window.StorageManager.saveLessonState(this.lessonId, { checklist, awardedChecklist });
      }

      this.updateProgress();
    },

    updateProgress: function () {
      const items = document.querySelectorAll('.checklist-item');
      this.totalItems = items.length;
      this.checkedItems = document.querySelectorAll('.checklist-item.is-checked').length;

      const percentage = this.totalItems > 0 ? Math.round((this.checkedItems / this.totalItems) * 100) : 0;

      // Cập nhật các thanh progress bar trên trang
      const progressFills = document.querySelectorAll('.progress-fill');
      progressFills.forEach(bar => {
        bar.style.width = `${percentage}%`;
        if (percentage === 100) {
          bar.classList.add('progress-fill--success');
        } else {
          bar.classList.remove('progress-fill--success');
        }
      });

      // Cập nhật text hiển thị
      const progressTexts = document.querySelectorAll('.progress-text');
      progressTexts.forEach(txt => {
        txt.textContent = `${this.checkedItems}/${this.totalItems} (${percentage}%)`;
      });

      // Phát sự kiện cập nhật tiến trình
      document.dispatchEvent(new CustomEvent('lesson:checklist-update', {
        detail: {
          checked: this.checkedItems,
          total: this.totalItems,
          percentage: percentage
        }
      }));
    }
  };

  window.ChecklistManager = ChecklistManager;
})();
