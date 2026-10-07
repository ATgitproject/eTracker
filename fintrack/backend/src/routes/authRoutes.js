const express = require("express");

const { signup, login, logout } = require("../controllers/authController");

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

module.exports = authRoutes;
