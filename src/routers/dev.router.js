// importamos lo requerido
const express = require("express");
const devCase = require("../usecases/dev.case");
// iniciamos el router
const router = express.Router();

router.get("/", async (req, res) => {
const devPost = await devCase.getDev({});
res.json(devPost);
});
router.get("/:id", async (req, res) => {
const parametros = req.params.id;
const getId = await devCase.getIdDev(parametros);
res.json(getId)
})
router.post("/", async( req, res) => {
const postsCreado = await devCase.postsDev(req.body);
res.statusCode = 201
res.json(postsCreado)
})
module.exports = router;