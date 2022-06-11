require("dotenv").config(); // las variables del .env se agreagan a process.env

const express = require("express");
const mongoose = require("mongoose");

const postsRouter = require('./routers/dev.router')

//*Inicializamos constantes con la configuracion
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;
const URL =  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
const app = express();
//midleware
app.use(express.json());
// usamos el router
app.use("/posts", postsRouter)


 
//  //*Gets post by id
//  app.get("/posts/:id", async (req,res)=>{
//      
      
//     console.log(typeof(parametros))
     
//      const post = await Post.findOne({_id:{$eq: parametros}})
//      res.json(post)
//   })

// //  //*Creates new post
//  app.post("/posts", async (req,res)=>{
//      //console.log("body:", req.body);
//      // Guardamos el post en una constante
//      const post = req.body;
 
//      console.log(post)
 
//      await Post.create(post)
//      console.log("post created")
 
 
//      // Enviamos respuesta
//      res.status(201); // Estado de creado
//      res.json(post)
//  })



mongoose
    .connect(URL)
    .then(()=>{
        console.log("Se conectó exitosamente a la base de datos.");

        app.listen(PORT, () => {
            console.log("Server ejecutandose en el puerto:", PORT);
          });
    })
    .catch((error) =>{
        console.log(error);
    })



