const listDataService = require("../services/listDataService");

const getListData = async (req, res) => {
  try {
    const { listname } = req.body;

    if (!listname) {
      return res.status(400).json({
        success: false,
        message: "listname is required",
      });
    }

    const data = await listDataService.getListData({
      req,
      listname,
    });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("GET LIST DATA ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch list data",
    });
  }
};

module.exports = {
  getListData,
};
