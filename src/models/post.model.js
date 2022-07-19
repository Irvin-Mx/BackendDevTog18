const mongoose = require("mongoose");

//Schema define las reglas del modelo
const postSchema = new mongoose.Schema({
  avatar: String,
  banner: String,
  dia: Number,
  mes: String,
  coments: String,
  año: Number,
  title: String,
  tags: String,
});

//modelo creado
const Post = mongoose.model("posts", postSchema); //modelo instanciado

//Exportamos el modelo de koder unicamente, ya que el schema solo lo requerimos aqui
module.exports = Post;
