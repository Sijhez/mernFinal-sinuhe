const express = require("express")
const router = express.Router()
const usuarioController = require('./../controllers/usuarioController')
const authorization = require("./../middleware/authorization")

//crear perfil
router.post("/crearPerfil", usuarioController.createProfile)
//conseguir todos los perfiles
router.get("/verPerfiles", usuarioController.getAllProfiles)
//ver un perfil
router.get("/:id", usuarioController.getOneProfile)
//editar un perfil
router.put("/editarPerfil/:id", usuarioController.editMyProfile)
//AUN NO SE SI SE DEBAN BORRAR LOS PERFILES
router.delete("/eliminarPerfil/:id", usuarioController.deleteProfile)



module.exports = router