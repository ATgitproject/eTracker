const { Pool, types } = require("pg");

types.setTypeParser(16, (value) => value === "t"); // BOOLEAN
types.setTypeParser(20, (value) => value); // BIGINT: keep string for precision
types.setTypeParser(21, Number); // SMALLINT
types.setTypeParser(23, Number); // INTEGER
types.setTypeParser(700, Number); // REAL
types.setTypeParser(701, Number); // DOUBLE PRECISION
types.setTypeParser(1700, Number); // NUMERIC / DECIMAL

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on("connect", () => {
  console.log("PostgreSQL client connected");
});

pool.on("error", (error) => {
  console.error("PostgreSQL pool error:", error);
});

module.exports = pool;
