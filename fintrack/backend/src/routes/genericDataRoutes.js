const express = require("express");
const { getGenericData } = require("../controllers/genericDataController");
const { saveData } = require("../controllers/genericSaveController");
const { deleteData } = require("../controllers/genericDeleteController");
const { getListData } = require("../controllers/listDataController");
const { authenticate } = require("../middleware/authMiddleware");

const genericDataRoutes = express.Router();
genericDataRoutes.route("/get").post(authenticate, getGenericData);
genericDataRoutes.route("/save").post(saveData);
genericDataRoutes.route("/delete").post(deleteData);
genericDataRoutes.route("/lstdata").post(getListData);

module.exports = genericDataRoutes;
