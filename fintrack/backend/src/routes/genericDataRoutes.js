const express = require("express");
const { getGenericData } = require("../controllers/genericDataController");
const { saveData } = require("../controllers/genericSaveController");
const { getListData } = require("../controllers/listDataController");

const genericDataRoutes = express.Router();
genericDataRoutes.route("/get").post(getGenericData);
genericDataRoutes.route("/save").post(saveData);
genericDataRoutes.route("/lstdata").post(getListData);

module.exports = genericDataRoutes;
