const express = require('express');
const pool = require('../config/database');
const router = express.Router();

// Get note for a specific lesson
router.get('/:userId/notes/:lessonId', async (req, res) => {
  try {
    const { userId, lessonId } = req.params;

    const result = await pool.query(
      'SELECT id, content, updated_at FROM notes WHERE user_id = $1 AND lesson_id = $2',
      [userId, lessonId]
    );

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.json({ content: '' });
    }
  } catch (error) {
    console.error('Get note error:', error);
    res.status(500).json({ error: 'Failed to fetch note', details: error.message });
  }
});

// Save/update note for a lesson
router.put('/:userId/notes/:lessonId', async (req, res) => {
  try {
    const { userId, lessonId } = req.params;
    const { content } = req.body;

    const result = await pool.query(
      `INSERT INTO notes (user_id, lesson_id, content, updated_at)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, lesson_id) DO UPDATE SET
         content = $3,
         updated_at = CURRENT_TIMESTAMP
       RETURNING id, content, updated_at`,
      [userId, lessonId, content || '']
    );

    res.json({
      success: true,
      note: result.rows[0]
    });
  } catch (error) {
    console.error('Save note error:', error);
    res.status(500).json({ error: 'Failed to save note', details: error.message });
  }
});

// Get all notes for a user
router.get('/:userId/notes', async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await pool.query(
      'SELECT lesson_id, content, updated_at FROM notes WHERE user_id = $1 ORDER BY updated_at DESC',
      [userId]
    );

    res.json({
      notes: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Get all notes error:', error);
    res.status(500).json({ error: 'Failed to fetch notes', details: error.message });
  }
});

module.exports = router;
