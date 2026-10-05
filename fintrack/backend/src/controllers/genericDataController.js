const genericDataService = require("../services/genericDataService");

const getGenericData = async (req, res) => {
  try {
    const { objName, filterCondition, sortOrder, recordCount } = req.body;

    if (!objName) {
      return res.status(400).json({
        success: false,
        message: "objName is required",
      });
    }

    const data = await genericDataService.getData({
      objName,
      filterCondition,
      sortOrder,
      recordCount,
    });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("GET GENERIC DATA ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch data",
    });
  }
};

module.exports = {
  getGenericData,
};
