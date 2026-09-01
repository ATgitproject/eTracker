/**
 * server.js
 * ------------------------------------------------------------------
 * Application entry point. Wires up Express, global middleware, the
 * /api router, and the error handler, then starts listening.
 * See ARCHITECTURE.md at the project root for the full request flow.
 * ------------------------------------------------------------------
 */
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./src/routes");
const { errorHandler } = require("./src/middlewares/errorHandler");

const app = express();
console.log("DB_PASSWORD loaded as:", process.env.DB_PASSWORD);
app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/api", routes);

// 404 handler for unmatched routes
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// Centralised error handler - must be last
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`FinTrack API listening on port ${PORT}`));

module.exports = app;
