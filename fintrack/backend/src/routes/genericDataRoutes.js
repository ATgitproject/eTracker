const express = require("express");

const { getGenericData } = require("../controllers/genericDataController");

const { saveData } = require("../controllers/genericSaveController");

const genericDataRoutes = express.Router();

genericDataRoutes.route("/get").post(getGenericData);

genericDataRoutes.route("/save").post(saveData);

module.exports = genericDataRoutes;
