/**
 * STORAGE MANAGER — Bright & Friendly Modern Edu
 * Quản lý lưu trữ tiến trình học tập qua localStorage an toàn
 */

(function () {
  'use strict';

  const StorageManager = {
    prefix: 'course_l7_',

    isAvailable: function () {
      try {
        const testKey = '__test_storage__';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        return true;
      } catch (e) {
        console.warn('localStorage không khả dụng, sử dụng bộ nhớ tạm.', e);
        return false;
      }
    },

    get: function (key, defaultValue = null) {
      if (!this.isAvailable()) return defaultValue;
      try {
        const item = window.localStorage.getItem(this.prefix + key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (e) {
        console.error(`Lỗi đọc key ${key}:`, e);
        return defaultValue;
      }
    },

    set: function (key, value) {
      if (!this.isAvailable()) return false;
      try {
        window.localStorage.setItem(this.prefix + key, JSON.stringify(value));
        return true;
      } catch (e) {
        console.error(`Lỗi lưu key ${key}:`, e);
        return false;
      }
    },

    remove: function (key) {
      if (!this.isAvailable()) return;
      try {
        window.localStorage.removeItem(this.prefix + key);
      } catch (e) {
        console.error(`Lỗi xóa key ${key}:`, e);
      }
    },

    /* Quản lý state riêng cho từng bài học theo chuẩn gd1-w01-l01 */
    getLessonState: function (lessonId) {
      const defaultState = {
        xp: 0,
        checklist: {},
        quiz: {},
        boss: {},
        completed: false
      };

      if (!this.isAvailable()) return defaultState;

      // Ưu tiên đọc trực tiếp từ key lessonId (vd: 'gd1-w01-l01')
      try {
        const directItem = window.localStorage.getItem(lessonId);
        if (directItem) {
          return { ...defaultState, ...JSON.parse(directItem) };
        }
      } catch (e) {
        console.warn(`Lỗi đọc direct localStorage key ${lessonId}:`, e);
      }

      return this.get(`lesson_${lessonId}`, defaultState);
    },

    saveLessonState: function (lessonId, partialState) {
      const currentState = this.getLessonState(lessonId);
      const newState = { ...currentState, ...partialState };

      if (this.isAvailable()) {
        try {
          window.localStorage.setItem(lessonId, JSON.stringify(newState));
        } catch (e) {
          console.warn(`Lỗi lưu direct localStorage key ${lessonId}:`, e);
        }
      }

      this.set(`lesson_${lessonId}`, newState);
      return newState;
    },

    clearLessonState: function (lessonId) {
      if (this.isAvailable()) {
        try {
          window.localStorage.removeItem(lessonId);
        } catch (e) {}
      }
      this.remove(`lesson_${lessonId}`);
    }
  };

  window.StorageManager = StorageManager;
})();
