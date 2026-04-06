const express = require('express');
const pool = require('../config/database');
const router = express.Router();

// Get user's progress
router.get('/:userId/progress', async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await pool.query(
      'SELECT lesson_id, completed, quiz_passed, xp_earned, completed_at FROM progress WHERE user_id = $1 ORDER BY updated_at DESC',
      [userId]
    );

    // Get total XP
    const xpResult = await pool.query(
      'SELECT total_xp FROM user_xp WHERE user_id = $1',
      [userId]
    );

    const totalXp = xpResult.rows[0]?.total_xp || 0;

    res.json({
      progress: result.rows,
      totalXp,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ error: 'Failed to fetch progress', details: error.message });
  }
});

// Update progress for a specific lesson
router.put('/:userId/progress/:lessonId', async (req, res) => {
  try {
    const { userId, lessonId } = req.params;
    const { completed, quiz_passed, xp_earned } = req.body;

    // Get current progress to calculate XP difference
    const currentResult = await pool.query(
      'SELECT xp_earned, completed FROM progress WHERE user_id = $1 AND lesson_id = $2',
      [userId, lessonId]
    );

    const currentXp = currentResult.rows[0]?.xp_earned || 0;
    const wasCompleted = currentResult.rows[0]?.completed || false;
    const newXp = xp_earned || 0;

    // Only add new XP if lesson wasn't completed before and is now being marked complete
    const xpDifference = (completed && !wasCompleted) ? newXp : 0;

    // Upsert progress record
    const result = await pool.query(
      `INSERT INTO progress (user_id, lesson_id, completed, quiz_passed, xp_earned, completed_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, lesson_id) DO UPDATE SET
         completed = $3,
         quiz_passed = $4,
         xp_earned = $5,
         completed_at = CASE WHEN $3 = true THEN CURRENT_TIMESTAMP ELSE completed_at END,
         updated_at = CURRENT_TIMESTAMP
       RETURNING lesson_id, completed, quiz_passed, xp_earned, completed_at`,
      [userId, lessonId, completed, quiz_passed, newXp]
    );

    // Update user's total XP
    if (xpDifference > 0) {
      await pool.query(
        'UPDATE user_xp SET total_xp = total_xp + $1, updated_at = CURRENT_TIMESTAMP WHERE user_id = $2',
        [xpDifference, userId]
      );
    }

    res.json({
      success: true,
      progress: result.rows[0],
      xpAdded: xpDifference
    });
  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({ error: 'Failed to update progress', details: error.message });
  }
});

// Bulk save/update progress
router.post('/:userId/progress', async (req, res) => {
  try {
    const { userId } = req.params;
    const { progressItems } = req.body;

    if (!Array.isArray(progressItems)) {
      return res.status(400).json({ error: 'progressItems must be an array' });
    }

    const results = [];

    for (const item of progressItems) {
      const { lesson_id, completed, quiz_passed, xp_earned } = item;

      const result = await pool.query(
        `INSERT INTO progress (user_id, lesson_id, completed, quiz_passed, xp_earned, completed_at)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (user_id, lesson_id) DO UPDATE SET
           completed = $3,
           quiz_passed = $4,
           xp_earned = $5,
           updated_at = CURRENT_TIMESTAMP
         RETURNING lesson_id, completed, quiz_passed, xp_earned`,
        [userId, lesson_id, completed, quiz_passed, xp_earned || 0, completed ? new Date() : null]
      );

      results.push(result.rows[0]);
    }

    res.json({
      success: true,
      itemsProcessed: results.length,
      progress: results
    });
  } catch (error) {
    console.error('Bulk progress update error:', error);
    res.status(500).json({ error: 'Failed to update progress', details: error.message });
  }
});

module.exports = router;
