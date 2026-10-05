const express = require("express");
const helmet = require("helmet");

const genericDataRoutes = require("./genericDataRoutes");
const authRoutes = require("./authRoutes");

const apiRoutes = express();

apiRoutes.use(helmet());

apiRoutes.use("/api", genericDataRoutes);
apiRoutes.use("/auth", authRoutes);

module.exports = apiRoutes;
