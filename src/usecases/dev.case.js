const Post = require("../models/post.model")
// Funcion asincrona de Metodo GET
async function getDev(){
    const devPosts = await Post.find({})
         return devPosts
};
// Funcion asincrona de Metodo Get Pot ID
async function getIdDev(id){
    const filter = {
     _id: id,
};
    const getIdParams = await Post.findOne(filter);
    return getIdParams;
};
// Funcion asyncrona de Metodo Posts
async function postsDev(posts){
    const newPosts = new Post(posts)
    await Post.create(newPosts);
    return  newPosts;
}


module.exports = {
    getDev,
    getIdDev,
    postsDev,
}