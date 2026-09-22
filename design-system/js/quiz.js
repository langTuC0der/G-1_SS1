/**
 * QUIZ MANAGER — Bright & Friendly Modern Edu
 * Quản lý bài tập trắc nghiệm tương tác phản hồi tức thì
 */

(function () {
  'use strict';

  const QuizManager = {
    lessonId: 'default',

    init: function (lessonId = 'default') {
      this.lessonId = lessonId;
      const quizBoxes = document.querySelectorAll('.quiz-box');

      // Đọc trạng thái đã trả lời
      let savedQuiz = {};
      if (window.StorageManager) {
        const lessonState = window.StorageManager.getLessonState(this.lessonId);
        savedQuiz = lessonState.quiz || {};
      }

      quizBoxes.forEach((box, qIndex) => {
        const qId = box.dataset.qid || `q_${qIndex}`;
        box.dataset.qid = qId;

        const options = box.querySelectorAll('.quiz-option');
        const feedback = box.querySelector('.quiz-feedback');
        const correctIndex = parseInt(box.dataset.correct || '0', 10);
        const hintText = box.dataset.hint || 'Hãy suy nghĩ kỹ về thao tác chuẩn xác nhé!';
        const xpAmount = parseInt(box.dataset.xp || '3', 10);
        const correctMsg = box.dataset.correctMsg || '🎉 Chính xác! Bạn làm rất tốt.';

        // Khôi phục trạng thái nếu trước đó đã làm đúng
        if (savedQuiz[qId] && savedQuiz[qId].answered) {
          const prevOption = options[savedQuiz[qId].selected];
          if (prevOption) {
            prevOption.classList.add('is-correct');
            options.forEach(opt => opt.disabled = true);
            if (feedback) {
              feedback.className = 'quiz-feedback quiz-feedback--correct is-visible';
              feedback.innerHTML = correctMsg;
            }
          }
        }

        options.forEach((opt, optIndex) => {
          opt.addEventListener('click', () => {
            if (opt.disabled) return;

            // Xóa trạng thái tạm trước đó
            options.forEach(o => o.classList.remove('is-selected', 'is-incorrect'));

            if (optIndex === correctIndex) {
              // ĐÚNG
              opt.classList.add('is-correct');
              options.forEach(o => opt.disabled = true);

              if (feedback) {
                feedback.className = 'quiz-feedback quiz-feedback--correct is-visible';
                feedback.innerHTML = correctMsg;
              }

              if (window.SoundManager) window.SoundManager.playSuccess();

              // Chỉ cộng XP nếu câu này chưa từng hoàn thành trước đó
              const currentLessonState = window.StorageManager ? window.StorageManager.getLessonState(this.lessonId) : {};
              const currentQuizState = currentLessonState.quiz || {};
              if (!currentQuizState[qId] || !currentQuizState[qId].answered) {
                document.dispatchEvent(new CustomEvent('lesson:xp', {
                  detail: { amount: xpAmount, reason: 'quiz' }
                }));
              }

              // Lưu trạng thái đúng
              if (window.StorageManager) {
                currentQuizState[qId] = { answered: true, selected: optIndex };
                window.StorageManager.saveLessonState(this.lessonId, { quiz: currentQuizState });
              }

              document.dispatchEvent(new CustomEvent('lesson:quiz-complete', {
                detail: { qId, isCorrect: true, xp: xpAmount }
              }));

            } else {
              // CHƯA ĐÚNG -> HINT ĐỂ HỌC SINH THỬ LẠI (KHÔNG TRỪ ĐIỂM)
              opt.classList.add('is-incorrect');

              if (feedback) {
                feedback.className = 'quiz-feedback quiz-feedback--hint is-visible';
                feedback.innerHTML = `💡 ${hintText} <em>(Thử lại nhé!)</em>`;
              }

              if (window.SoundManager) window.SoundManager.playWarning();
            }
          });
        });
      });
    }
  };

  window.QuizManager = QuizManager;
})();
