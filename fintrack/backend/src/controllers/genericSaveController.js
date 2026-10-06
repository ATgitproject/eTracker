const genericSaveService = require("../services/genericSaveService");

const saveData = async (req, res) => {
  try {
    const { objName, fields, id } = req.body;

    if (!objName) {
      return res.status(400).json({
        success: false,
        message: "objName is required",
      });
    }

    if (!fields) {
      return res.status(400).json({
        success: false,
        message: "fields is required",
      });
    }

    const data = await genericSaveService.saveData({
      req,
      objName,
      fields,
      id,
    });

    return res.status(id ? 200 : 201).json({
      success: true,
      message: id
        ? "Record updated successfully"
        : "Record created successfully",
      data,
    });
  } catch (error) {
    console.error("SAVE DATA ERROR:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to save data",
    });
  }
};

module.exports = {
  saveData,
};
