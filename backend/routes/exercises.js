const express = require('express');
const pool = require('../config/database');
const router = express.Router();

// Get exercise response
router.get('/:userId/exercises/:exerciseKey', async (req, res) => {
  try {
    const { userId, exerciseKey } = req.params;

    const result = await pool.query(
      'SELECT response, updated_at FROM exercise_responses WHERE user_id = $1 AND exercise_key = $2',
      [userId, exerciseKey]
    );

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.json({ response: '' });
    }
  } catch (error) {
    console.error('Get exercise error:', error);
    res.status(500).json({ error: 'Failed to fetch exercise', details: error.message });
  }
});

// Save exercise response
router.put('/:userId/exercises/:exerciseKey', async (req, res) => {
  try {
    const { userId, exerciseKey } = req.params;
    const { response } = req.body;

    const result = await pool.query(
      `INSERT INTO exercise_responses (user_id, exercise_key, response, updated_at)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, exercise_key) DO UPDATE SET
         response = $3,
         updated_at = CURRENT_TIMESTAMP
       RETURNING exercise_key, response, updated_at`,
      [userId, exerciseKey, response || '']
    );

    res.json({
      success: true,
      exercise: result.rows[0]
    });
  } catch (error) {
    console.error('Save exercise error:', error);
    res.status(500).json({ error: 'Failed to save exercise', details: error.message });
  }
});

// Get all exercises for a user
router.get('/:userId/exercises', async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await pool.query(
      'SELECT exercise_key, response, updated_at FROM exercise_responses WHERE user_id = $1 ORDER BY updated_at DESC',
      [userId]
    );

    res.json({
      exercises: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Get all exercises error:', error);
    res.status(500).json({ error: 'Failed to fetch exercises', details: error.message });
  }
});

module.exports = router;
