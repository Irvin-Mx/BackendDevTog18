const mongoose = require("mongoose")

//Schema define las reglas del modelo
const postSchema = new mongoose.Schema({
    avatar: String,
    banner: String,
    dia: Number,
    mes: Number,
    año: Number,
    title: String,
    tags: String,
})

//modelo creado
const Post = mongoose.model('Posts', postSchema) //modelo instanciado


//Exportamos el modelo de koder unicamente, ya que el schema solo lo requerimos aqui
module.exports = Post;