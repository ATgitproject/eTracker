const ListDataRepository = require("../repository/listDataRepository");

const getListData = async ({ req, listname }) => {
  if (!listname) {
    throw new Error("listname is required");
  }

  return ListDataRepository.getListData({
    listname,
  });
};

module.exports = {
  getListData,
};
