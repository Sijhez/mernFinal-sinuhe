const mongoose = require("mongoose")

const perfilUserSchema = mongoose.Schema({
    nombre: String,
    foto: String,
	nickName: String,
	edad: Number,
    descripcion: String,
    socialMedia1: String,
    socialMedia2: String,
    email:String,
	socialMedia3: String,
    idUsuario:String
},
{
    timestamps:true
})

const PerfilUser = mongoose.model("PerfilUser", perfilUserSchema)

module.exports = PerfilUser

