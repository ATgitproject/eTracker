const pool = require("../config/db");

const getData = async ({ query, values }) => {
  const result = await pool.query(query, values);

  return result.rows;
};

module.exports = {
  getData,
};
