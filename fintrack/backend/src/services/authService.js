const userRepository = require("../repository/userRepository");

const {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/auth");

const sanitizeUser = (user) => {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    mobileNumber: user.mobile_number,
    isVerified: user.is_verified,
    createdon: user.createdon,
    modiefiedon: user.modiefiedon,
  };
};

const signup = async ({ name, email, mobileNumber, password }) => {
  const existingUser = await userRepository.findByEmail(email);

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const passwordHash = await hashPassword(password);

  const user = await userRepository.createUser({
    name,
    email,
    mobileNumber,
    passwordHash,
  });

  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
    userData: { ...sanitizeUser(user), token: generateAccessToken(user) },
  };
};

const login = async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const validPassword = await verifyPassword(password, user.password);

  if (!validPassword) {
    throw new Error("Invalid email or password");
  }

  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
    user: sanitizeUser(user),
  };
};

const getUserById = async (id) => {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  return sanitizeUser(user);
};

module.exports = {
  signup,
  login,
  getUserById,
};
