const genericDeleteRepository = require("../repository/genericDeleteRepository");

const deleteData = async ({ objName, id }) => {
  if (!objName) {
    throw new Error("objName is required");
  }

  if (id === undefined || id === null || id === "") {
    throw new Error("id is required");
  }

  return genericDeleteRepository.remove({ objName, id });
};

module.exports = {
  deleteData,
};
