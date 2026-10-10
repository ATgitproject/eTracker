const objectRegistry = require("../config/objectRegistry");
const genericSaveRepository = require("../repository/genericSaveRepository");

const saveData = async ({ req, objName, id, fields }) => {
  if (!fields || typeof fields !== "object") {
    throw new Error("fields is required");
  }
  const fieldNames = Object.keys(fields);

  if (fieldNames.length === 0) {
    throw new Error("At least one field is required");
  }

  // UPDATE
  if (id) {
    return genericSaveRepository.update({
      req,
      objName,
      fields,
      id,
    });
  }

  // INSERT
  return genericSaveRepository.insert({
    req,
    objName,
    fields,
  });
};

module.exports = {
  saveData,
};
