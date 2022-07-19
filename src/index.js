require("dotenv").config(); // las variables del .env se agreagan a process.env
const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routers/dev.router");
const cors = require("cors");
//*Inicializamos constantes con la configuracion
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
const app = express();
//midleware
app.use(express.json());
app.use(cors());
// usamos el router
app.use("/posts", postsRouter);
// inicamos el server
mongoose
  .connect(URL)
  .then(() => {
    console.log("Se conectó exitosamente a la base de datos.");
    app.listen(PORT, () => {
      console.log("Server ejecutandose en el puerto:", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
