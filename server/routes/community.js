const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all community posts
router.get('/posts', async (req, res) => {
  try {
    const result = await db.query(
      `SELECT cp.id, cp.content, cp.likes, cp.created_at, u.name, u.id as user_id
       FROM community_posts cp
       JOIN users u ON cp.user_id = u.id
       ORDER BY cp.created_at DESC`
    );

    const posts = await Promise.all(
      result.rows.map(async (post) => {
        // Check if current user liked this post (if authenticated)
        let userLiked = false;
        if (req.headers.authorization) {
          try {
            const token = req.headers.authorization.split(' ')[1];
            const jwt = require('jsonwebtoken');
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const likeResult = await db.query(
              'SELECT id FROM community_likes WHERE user_id = $1 AND post_id = $2',
              [decoded.userId, post.id]
            );
            userLiked = likeResult.rows.length > 0;
          } catch (e) {
            // Token invalid or expired, userLiked stays false
          }
        }

        return {
          id: post.id,
          content: post.content,
          likes: post.likes,
          created_at: post.created_at,
          userName: post.name,
          userId: post.user_id,
          userLiked,
        };
      })
    );

    res.json(posts);
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ error: 'Failed to get posts' });
  }
});

// Create a new post
router.post('/posts', authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || content.trim().length === 0) {
      return res.status(400).json({ error: 'Post content is required' });
    }

    const result = await db.query(
      `INSERT INTO community_posts (user_id, content)
       VALUES ($1, $2)
       RETURNING id, content, likes, created_at`,
      [req.userId, content]
    );

    const post = result.rows[0];
    const userResult = await db.query('SELECT name FROM users WHERE id = $1', [req.userId]);

    res.status(201).json({
      id: post.id,
      content: post.content,
      likes: post.likes,
      created_at: post.created_at,
      userName: userResult.rows[0].name,
      userId: req.userId,
      userLiked: false,
    });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Like a post
router.post('/posts/:postId/like', authMiddleware, async (req, res) => {
  try {
    const postId = req.params.postId;

    // Check if already liked
    const existing = await db.query(
      'SELECT id FROM community_likes WHERE user_id = $1 AND post_id = $2',
      [req.userId, postId]
    );

    if (existing.rows.length === 0) {
      await db.query(
        'INSERT INTO community_likes (user_id, post_id) VALUES ($1, $2)',
        [req.userId, postId]
      );

      // Increment likes count
      await db.query(
        'UPDATE community_posts SET likes = likes + 1 WHERE id = $1',
        [postId]
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Like post error:', error);
    res.status(500).json({ error: 'Failed to like post' });
  }
});

// Unlike a post
router.delete('/posts/:postId/like', authMiddleware, async (req, res) => {
  try {
    const postId = req.params.postId;

    const result = await db.query(
      'DELETE FROM community_likes WHERE user_id = $1 AND post_id = $2',
      [req.userId, postId]
    );

    if (result.rowCount > 0) {
      // Decrement likes count
      await db.query(
        'UPDATE community_posts SET likes = GREATEST(likes - 1, 0) WHERE id = $1',
        [postId]
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Unlike post error:', error);
    res.status(500).json({ error: 'Failed to unlike post' });
  }
});

module.exports = router;
