const express = require('express');
const pool = require('../config/database');
const router = express.Router();

// Get all community posts
router.get('/posts', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT cp.id, cp.user_id, u.name, cp.content, cp.likes, cp.created_at
       FROM community_posts cp
       JOIN users u ON cp.user_id = u.id
       ORDER BY cp.created_at DESC
       LIMIT 50`
    );

    res.json({
      posts: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
  }
});

// Create a new community post
router.post('/posts', async (req, res) => {
  try {
    const { userId, content } = req.body;

    if (!userId || !content) {
      return res.status(400).json({ error: 'userId and content are required' });
    }

    // Get user info
    const userResult = await pool.query(
      'SELECT id, name FROM users WHERE id = $1',
      [userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const result = await pool.query(
      `INSERT INTO community_posts (user_id, content, created_at, updated_at)
       VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING id, user_id, content, likes, created_at`,
      [userId, content]
    );

    res.status(201).json({
      success: true,
      post: {
        ...result.rows[0],
        name: userResult.rows[0].name
      }
    });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ error: 'Failed to create post', details: error.message });
  }
});

// Like/unlike a post
router.put('/posts/:postId/like', async (req, res) => {
  try {
    const { postId } = req.params;
    const { liked } = req.body;

    // Get current likes
    const result = await pool.query(
      'SELECT likes FROM community_posts WHERE id = $1',
      [postId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const currentLikes = result.rows[0].likes || 0;
    const newLikes = liked ? currentLikes + 1 : Math.max(0, currentLikes - 1);

    const updateResult = await pool.query(
      'UPDATE community_posts SET likes = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING id, likes',
      [newLikes, postId]
    );

    res.json({
      success: true,
      post: updateResult.rows[0]
    });
  } catch (error) {
    console.error('Like post error:', error);
    res.status(500).json({ error: 'Failed to update post', details: error.message });
  }
});

module.exports = router;
