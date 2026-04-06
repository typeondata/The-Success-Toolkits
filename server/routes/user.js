const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const result = await db.query('SELECT id, email, name, created_at FROM users WHERE id = $1', [req.userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Failed to get profile' });
  }
});

// Get user progress (all completed lessons and XP)
router.get('/progress', authMiddleware, async (req, res) => {
  try {
    const completedLessons = await db.query(
      'SELECT lesson_id FROM user_progress WHERE user_id = $1',
      [req.userId]
    );

    const passedQuizzes = await db.query(
      'SELECT quiz_id FROM user_quizzes WHERE user_id = $1',
      [req.userId]
    );

    const xpResult = await db.query(
      'SELECT total_xp FROM user_xp WHERE user_id = $1',
      [req.userId]
    );

    const completed = completedLessons.rows.map(row => row.lesson_id);
    const quizzes = passedQuizzes.rows.map(row => row.quiz_id);
    const xp = xpResult.rows[0]?.total_xp || 0;

    res.json({
      completed,
      quizzesPassed: quizzes,
      xp,
    });
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ error: 'Failed to get progress' });
  }
});

// Mark lesson as complete
router.post('/progress/lesson-complete', authMiddleware, async (req, res) => {
  try {
    const { lessonId, xpEarned } = req.body;

    if (!lessonId || xpEarned === undefined) {
      return res.status(400).json({ error: 'lessonId and xpEarned are required' });
    }

    // Check if already completed
    const existing = await db.query(
      'SELECT id FROM user_progress WHERE user_id = $1 AND lesson_id = $2',
      [req.userId, lessonId]
    );

    if (existing.rows.length === 0) {
      await db.query(
        'INSERT INTO user_progress (user_id, lesson_id) VALUES ($1, $2)',
        [req.userId, lessonId]
      );

      // Add XP
      await db.query(
        'UPDATE user_xp SET total_xp = total_xp + $1, updated_at = CURRENT_TIMESTAMP WHERE user_id = $2',
        [xpEarned, req.userId]
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Mark lesson complete error:', error);
    res.status(500).json({ error: 'Failed to mark lesson as complete' });
  }
});

// Record quiz passed
router.post('/progress/quiz-passed', authMiddleware, async (req, res) => {
  try {
    const { quizId, xpEarned } = req.body;

    if (!quizId || xpEarned === undefined) {
      return res.status(400).json({ error: 'quizId and xpEarned are required' });
    }

    // Check if already passed
    const existing = await db.query(
      'SELECT id FROM user_quizzes WHERE user_id = $1 AND quiz_id = $2',
      [req.userId, quizId]
    );

    if (existing.rows.length === 0) {
      await db.query(
        'INSERT INTO user_quizzes (user_id, quiz_id) VALUES ($1, $2)',
        [req.userId, quizId]
      );

      // Add XP
      await db.query(
        'UPDATE user_xp SET total_xp = total_xp + $1, updated_at = CURRENT_TIMESTAMP WHERE user_id = $2',
        [xpEarned, req.userId]
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Record quiz passed error:', error);
    res.status(500).json({ error: 'Failed to record quiz pass' });
  }
});

// Get note for lesson
router.get('/notes/:lessonId', authMiddleware, async (req, res) => {
  try {
    const result = await db.query(
      'SELECT content FROM user_notes WHERE user_id = $1 AND lesson_id = $2',
      [req.userId, req.params.lessonId]
    );

    const content = result.rows[0]?.content || '';
    res.json({ content });
  } catch (error) {
    console.error('Get notes error:', error);
    res.status(500).json({ error: 'Failed to get notes' });
  }
});

// Save/update note for lesson
router.put('/notes/:lessonId', authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;

    if (content === undefined) {
      return res.status(400).json({ error: 'content is required' });
    }

    await db.query(
      `INSERT INTO user_notes (user_id, lesson_id, content, updated_at)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, lesson_id)
       DO UPDATE SET content = $3, updated_at = CURRENT_TIMESTAMP`,
      [req.userId, req.params.lessonId, content]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Save notes error:', error);
    res.status(500).json({ error: 'Failed to save notes' });
  }
});

// Get exercise data
router.get('/exercises/:exerciseKey', authMiddleware, async (req, res) => {
  try {
    const result = await db.query(
      'SELECT answer_data FROM user_exercises WHERE user_id = $1 AND exercise_key = $2',
      [req.userId, req.params.exerciseKey]
    );

    const answerData = result.rows[0]?.answer_data || {};
    res.json(answerData);
  } catch (error) {
    console.error('Get exercise error:', error);
    res.status(500).json({ error: 'Failed to get exercise data' });
  }
});

// Save exercise answers
router.put('/exercises/:exerciseKey', authMiddleware, async (req, res) => {
  try {
    const answerData = req.body;

    await db.query(
      `INSERT INTO user_exercises (user_id, exercise_key, answer_data, updated_at)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, exercise_key)
       DO UPDATE SET answer_data = $3, updated_at = CURRENT_TIMESTAMP`,
      [req.userId, req.params.exerciseKey, JSON.stringify(answerData)]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Save exercise error:', error);
    res.status(500).json({ error: 'Failed to save exercise' });
  }
});

module.exports = router;
