const genericDeleteService = require("../services/genericDeleteService");

const deleteData = async (req, res) => {
  try {
    const { objName, id } = req.body;

    if (!objName) {
      return res.status(400).json({
        success: false,
        message: "objName is required",
      });
    }

    if (id === undefined || id === null || id === "") {
      return res.status(400).json({
        success: false,
        message: "id is required",
      });
    }

    const data = await genericDeleteService.deleteData({
      objName,
      id,
    });

    return res.status(200).json({
      success: true,
      message: "Record deleted successfully",
      data,
    });
  } catch (error) {
    console.error("DELETE DATA ERROR:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to delete data",
    });
  }
};

module.exports = {
  deleteData,
};
