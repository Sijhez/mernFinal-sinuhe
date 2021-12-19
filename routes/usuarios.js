//imports express, router, controller, auth
const express = require("express")
const router = express.Router()
const usuarioController = require('./../controllers/usuarioController')
//autorizacion 
const authorization = require("./../middleware/authorization")

router.post("/registro", usuarioController.createUser)

router.post("/inicioSesion", usuarioController.loginUser)

router.get("/verificaToken", authorization,  usuarioController.verifyToken)
module.exports = router