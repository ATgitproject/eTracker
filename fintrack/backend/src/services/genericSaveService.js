const objectRegistry = require("../config/objectRegistry");
const genericSaveRepository = require("../repository/genericSaveRepository");

const saveData = async ({ objName, id, fields }) => {
  const objectConfig = objectRegistry[objName];

  if (!objectConfig) {
    throw new Error(`Invalid objName: ${objName}`);
  }

  if (!fields || typeof fields !== "object") {
    throw new Error("fields is required");
  }

  const { table, writableFields, createdField, modifiedField } = objectConfig;

  const fieldNames = Object.keys(fields);

  if (fieldNames.length === 0) {
    throw new Error("At least one field is required");
  }

  // Validate fields
  const invalidFields = fieldNames.filter(
    (field) => !writableFields.includes(field),
  );

  if (invalidFields.length > 0) {
    throw new Error(
      `Invalid or non-writable fields: ${invalidFields.join(", ")}`,
    );
  }

  // UPDATE
  if (id) {
    return genericSaveRepository.update({
      table,
      id,
      fields,
      modifiedField,
    });
  }

  // INSERT
  return genericSaveRepository.insert({
    table,
    fields,
    createdField,
    modifiedField,
  });
};

module.exports = {
  saveData,
};
