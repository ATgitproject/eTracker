require("dotenv").config();

const express = require("express");
const cors = require("cors");

const apiRoutes = require("./src/routes/apiRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.use(apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
