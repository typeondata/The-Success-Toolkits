const fs = require('fs');
const path = require('path');
const db = require('../db');

async function runMigrations() {
  try {
    console.log('Running database migrations...');

    const schemaFile = path.join(__dirname, '001_initial_schema.sql');
    const schema = fs.readFileSync(schemaFile, 'utf8');

    // Execute all statements in the schema file
    const statements = schema.split(';').filter(s => s.trim().length > 0);

    for (const statement of statements) {
      console.log(`Executing: ${statement.substring(0, 50)}...`);
      await db.query(statement);
    }

    console.log('✓ Migrations completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Migration failed:', error);
    process.exit(1);
  }
}

runMigrations();
