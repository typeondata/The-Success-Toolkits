const express = require('express');
const pool = require('../config/database');
const router = express.Router();

// Demo mode login - any email/password works
router.post('/login', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // In demo mode, any password is accepted
    // Just create or fetch the user
    const userEmail = email.toLowerCase().trim();
    const userName = name || email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    // Check if user exists
    const userResult = await pool.query(
      'SELECT id, email, name FROM users WHERE email = $1',
      [userEmail]
    );

    let userId;
    if (userResult.rows.length > 0) {
      // User exists, return their data
      userId = userResult.rows[0].id;
    } else {
      // Create new user
      const newUserResult = await pool.query(
        'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING id, email, name',
        [userEmail, userName]
      );
      userId = newUserResult.rows[0].id;
    }

    // Initialize user_xp record if it doesn't exist
    await pool.query(
      'INSERT INTO user_xp (user_id, total_xp) VALUES ($1, 0) ON CONFLICT (user_id) DO NOTHING',
      [userId]
    );

    res.json({
      userId,
      email: userEmail,
      name: userName,
      message: 'Demo login successful'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
});

module.exports = router;
