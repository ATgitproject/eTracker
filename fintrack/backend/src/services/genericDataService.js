const objectRegistry = require("../config/objectRegistry");
const { buildQuery } = require("../utils/queryBuilder");
const genericDataRepository = require("../repository/genericDataRepository");

const getData = async ({
  objName,
  filterCondition,
  sortOrder,
  recordCount,
}) => {
  const objectConfig = objectRegistry[objName];

  if (!objectConfig) {
    throw new Error(`Invalid objName: ${objName}`);
  }

  const { table, allowedFields } = objectConfig;

  const { query, values } = buildQuery({
    table,
    allowedFields,
    filterCondition,
    sortOrder,
    recordCount,
  });

  console.log("GET QUERY:", query);
  console.log("GET VALUES:", values);

  return genericDataRepository.getData({
    query,
    values,
  });
};

module.exports = {
  getData,
};
