const { buildQuery } = require("../utils/queryBuilder");
const genericDataRepository = require("../repository/genericDataRepository");

const getData = async ({
  req,
  objName,
  filterCondition,
  sortOrder,
  recordCount,
}) => {
  const { query, values } = buildQuery({
    table: objName,
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
