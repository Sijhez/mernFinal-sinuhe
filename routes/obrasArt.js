//imports router, controller, express
const express = require("express")
const router = express.Router()
const obrasController = require("./../controllers/obrasController")

//rutas

router.post("/crearArticulo", obrasController.createArt)
//ver todos los artículos
router.get("/verArticulos", obrasController.readAllArt)
//ver un articulo
router.get("/verArticulos/:id", obrasController.readOneArt)
//usuario quiere editar un articulo
router.put("/editarArticulo/:id", obrasController.editArticle)
//eliminar articulo
router.delete("/borrarArticulo/:id", obrasController.deleteArticle)
//exports
module.exports = router