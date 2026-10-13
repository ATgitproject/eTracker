const authService = require("../services/authService");

const signup = async (req, res) => {
  try {
    const result = await authService.signup(req.body);

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      data: result,
    });
  } catch (error) {
    return res
      .status(error.message === "Email already registered" ? 409 : 400)
      .json({
        success: false,
        message: error.message,
      });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const result = await authService.login({
      req,
      email,
      password,
    });

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(401).json({
      success: false,
      message: error.message || "Login failed",
    });
  }
};

const logout = async (req, res) => {
  try {
    const userId = req.user?.id || req.body?.userId;

    await authService.logout(userId);
    res.clearCookie("session", {
      path: "/",
    });
    res.clearCookie("authToken", {
      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("LOGOUT ERROR:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Logout failed",
    });
  }
};

module.exports = {
  signup,
  login,
  logout,
};
