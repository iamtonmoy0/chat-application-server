const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");

// initialize app
const app = express();

app.use(express.json()); // parse incoming requests as json
app.use(cors());
app.use(morgan("dev"));

// auth router
app.use("/api/v1", require("../routes/user.routes"));
// welcome route
app.get("/", (req, res) => {
  res.send("Server is running");
});
// invalid route
app.all("*", (req, res) => {
  res.send("Invalid route");
});
module.exports = app;
