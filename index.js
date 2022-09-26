const express = require("express");
const mongoose = require("mongoose");
const app = express();
const newApi = require("./src/routes");

require("dotenv").config();
const port = 3000 || process.env.PORT;

app.listen(port, () => console.log("Port: ", port));

mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => console.log("Connect to mongodb"))
  .catch((err) => console.log(err));

/* Primero accede al index.js de la carpeta routes y luego a las rutas de cada modelo */
app.use(express.json());
newApi(app);
