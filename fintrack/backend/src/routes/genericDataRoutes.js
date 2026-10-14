const express = require("express");
const { getGenericData } = require("../controllers/genericDataController");
const { saveData } = require("../controllers/genericSaveController");
const { deleteData } = require("../controllers/genericDeleteController");
const { getListData } = require("../controllers/listDataController");
const { authenticate } = require("../middleware/authMiddleware");

const genericDataRoutes = express.Router();
genericDataRoutes.route("/get").post(authenticate, getGenericData);
genericDataRoutes.route("/save").post(authenticate, saveData);
genericDataRoutes.route("/delete").post(authenticate, deleteData);
genericDataRoutes.route("/lstdata").post(authenticate, getListData);

module.exports = genericDataRoutes;
