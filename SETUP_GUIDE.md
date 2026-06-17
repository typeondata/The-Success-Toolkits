# Database Integration Setup Guide

This guide will help you set up the PostgreSQL database and Node.js/Express backend for The Success Toolkits.

## Prerequisites

- Node.js (v14+) and npm installed
- PostgreSQL (v12+) installed locally OR access to a managed PostgreSQL service

## Step 1: Database Setup

### Option A: Local PostgreSQL

```bash
# Create a new database
createdb success_toolkits

# Run the migrations to create tables
cd server
npm install
npm run migrate
```

### Option B: Managed PostgreSQL (Railway, AWS RDS, Heroku, etc.)

1. Create a PostgreSQL database through your provider
2. Copy the connection string (DATABASE_URL)
3. Run migrations:
   ```bash
   npm install
   npm run migrate
   ```

## Step 2: Environment Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp server/.env.example server/.env
   ```

2. Edit `server/.env` with your database details:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/success_toolkits
   JWT_SECRET=your-secret-key (can be any random string)
   NODE_ENV=development
   PORT=3000
   CORS_ORIGIN=http://localhost:3000
   ```

## Step 3: Install Backend Dependencies

```bash
cd server
npm install
```

## Step 4: Start the Server

```bash
# For development (with auto-reload)
npm run dev

# For production
npm start
```

The server should be running at `http://localhost:3000`

## Step 5: Test the Backend

### Check Server Health
```bash
curl http://localhost:3000/api/health
```

### Test Registration
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'
```

### Test Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

You should receive a JWT token. Save this for testing other endpoints.

### Test Progress Endpoints
```bash
curl -X GET http://localhost:3000/api/user/progress \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Step 6: Using the Frontend

Open your browser and go to `http://localhost:3000`

The app now uses the API instead of localStorage:
- Sign up/Login with real credentials
- Your progress is saved to the database
- Reload the page - your progress persists!
- Create community posts (they're now real and persist)

## Troubleshooting

### "Cannot connect to PostgreSQL"
- Verify PostgreSQL is running: `sudo service postgresql status` (Linux) or use Activity Monitor (macOS)
- Check DATABASE_URL in .env is correct
- Verify database exists: `psql -l`

### "JWT_SECRET is not defined"
- Make sure you have `.env` file in the `server` directory
- Restart the server after changing .env

### "Database migration failed"
- Make sure you can connect to PostgreSQL: `psql -U postgres`
- Check for permission errors in the migration SQL

### Frontend still uses localStorage
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that API calls are being made (look in browser DevTools Network tab)

## Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| DATABASE_URL | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| JWT_SECRET | Secret key for JWT tokens | Any random string |
| NODE_ENV | Environment | `development` or `production` |
| PORT | Server port | `3000` |
| CORS_ORIGIN | Frontend origin for CORS | `http://localhost:3000` |

## Deployment Notes

For production deployment:

1. Use a managed PostgreSQL service (AWS RDS, Heroku, etc.)
2. Set strong JWT_SECRET
3. Set NODE_ENV=production
4. Update CORS_ORIGIN to your domain
5. Use environment variables for sensitive data (never commit .env)

## API Documentation

See the plan file for complete API endpoint documentation.

Key endpoints:
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `GET /api/user/progress` - Get progress
- `POST /api/user/progress/lesson-complete` - Mark lesson done
- `PUT /api/user/notes/:lessonId` - Save notes
- `GET /api/community/posts` - Get community posts
- `POST /api/community/posts` - Create community post

All user endpoints (except auth) require the JWT token in the Authorization header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```
