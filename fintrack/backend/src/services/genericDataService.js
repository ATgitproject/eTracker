const { buildQuery } = require("../utils/queryBuilder");
const genericDataRepository = require("../repository/genericDataRepository");

const getData = async ({
  req,
  objName,
  filterCondition,
  sortOrder,
  recordCount,
}) => {
  const userId = req.user?.userId;

  if (!userId) {
    throw new Error("Unauthorized: authenticated user ID is missing");
  }

  const { query, values } = buildQuery({
    table: objName,
    filterCondition,
    sortOrder,
    recordCount,
    userId,
  });

  return genericDataRepository.getData({ query, values });
};

module.exports = { getData };
