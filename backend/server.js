const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progress');
const notesRoutes = require('./routes/notes');
const exercisesRoutes = require('./routes/exercises');
const communityRoutes = require('./routes/community');

const app = express();
const PORT = process.env.API_PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5500',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', progressRoutes);
app.use('/api/v1/users', notesRoutes);
app.use('/api/v1/users', exercisesRoutes);
app.use('/api/v1/community', communityRoutes);

// Health check endpoint
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'API is running', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ API server running on http://localhost:${PORT}`);
  console.log(`✓ Frontend URL: ${process.env.FRONTEND_URL}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV}`);
});

module.exports = app;
