const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
const port = 3000 || process.env.PORT;

app.listen(port, () => console.log("Port: ", port));

mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => console.log("Connect to mongodb"))
  .catch((err) => console.log(err));

app.use(express.json());

