require("dotenv").config(); // las variables del .env se agreagan a process.env

const express = require("express");
const mongoose = require("mongoose");

//*Inicializamos constantes con la configuracion

// const PORT = process.env.PORT;

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;

// const DB_NAME = process.env.DB_HOST;
const URL =  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

//Schema define las reglas del modelo
const postSchema = new mongoose.Schema({
    avatar: String,
    banner: String,
    dia: Number,
    mes: Number,
    año: Number,
    title: String,
    tags: String
})

//modelo creado
const Post = mongoose.model('Posts', postSchema)
//modelo instanciado

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


        //Leer posts de base de datos
         const posts = await Post.find({})
         console.log(posts)



        app.listen(PORT, () => {
            console.log("Server ejecutandose en el puerto:", PORT);
          });
    })
    .catch((error) =>{
        console.log(error);
    })



