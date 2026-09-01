/**
 * db.js
 * ------------------------------------------------------------------
 * Creates and exports a single shared PostgreSQL connection pool
 * (using the `pg` library). Every model imports `query()` from here
 * instead of opening its own connection - this keeps connection
 * handling centralised and lets us log every query in one place
 * during development.
 * ------------------------------------------------------------------
 */
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'fintrack',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
});

pool.on('error', (err) => {
  // Unexpected error on an idle client - log and let the process
  // manager restart the service rather than crash silently.
  console.error('Unexpected PostgreSQL error', err);
});

/**
 * query(text, params)
 * Thin wrapper around pool.query so every call site can be swapped
 * out (e.g. to add query timing/logging) in one place.
 */
const query = (text, params) => pool.query(text, params);

module.exports = { pool, query };
