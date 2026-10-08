const pool = require("../config/db");

const getListData = async ({ listname }) => {
  const listMasterQuery = `
    SELECT *
    FROM list_master
    WHERE name = $1
  `;

  const listResult = await pool.query(listMasterQuery, [listname]);

  if (listResult.rows.length === 0) {
    throw new Error("List not found");
  }

  const list = listResult.rows[0];

  if (list.type === "dynamic") {
    if (!list.entityname) {
      throw new Error("Dynamic list entityname is not configured");
    }

    const entityQuery = `
      SELECT *
      FROM ${list.entityname}
    `;

    const entityResult = await pool.query(entityQuery);

    return {
      list,
      fields: entityResult.rows,
    };
  }

  const listFieldMapQuery = `
    SELECT
      id,
      field_id,
      value,
      is_hidden,
      sort_order,
      list_id
    FROM list_field_map
    WHERE list_id = $1
    ORDER BY sort_order ASC
  `;

  const fieldMapResult = await pool.query(listFieldMapQuery, [list.id]);

  return {
    list,
    fields: fieldMapResult.rows,
  };
};
module.exports = {
  getListData,
};
