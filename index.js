require("dotenv").config(); // las variables del .env se agreagan a process.env

const express = require("express");
const mongoose = require("mongoose");

const Post = require('./models/post.model')

//*Inicializamos constantes con la configuracion
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const PORT = process.env.PORT;

const URL =  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();


app.get("/posts", async (req,res)=>{
    //Leer posts de base de datos
    const posts = await Post.find({})
    // console.log(posts)
    res.json(posts)
})


mongoose
    .connect(URL)
    .then(async ()=>{
        console.log("Se conectó exitosamente a la base de datos.");

        //  const newPost = new Post({
        //      avatar:"Donkey kong",
        //      banner: "img.jpg",
        //      dia: 22,
        //      mes: 1,
        //      año: 2022,
        //      title: "Node is awsome !",
        //      tags: "js node express mongoose mongodb"
        //  })

        //  await Post.create(newPost)
        //  console.log("koder created")
        app.listen(PORT, () => {
            console.log("Server ejecutandose en el puerto:", PORT);
          });
    })
    .catch((error) =>{
        console.log(error);
    })



