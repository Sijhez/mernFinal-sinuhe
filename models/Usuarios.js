//imports mongoose
const mongoose = require("mongoose")

//schema
const usuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true, "Tu email es requerido"],
        match: [/^\S+@\S+\.\S+$/, "Por favor, ingresa un email válido."]

    },
    password:{
        type:String,
        required:true
    }
})

//model
const Usuario = mongoose.model("Usuario", usuarioSchema)

//exports
module.exports = Usuario 


/*
const userSchema = mongoose.Schema ({
    email: {
        type: String,
        required: [true, "Tu email es requerido"],
        match: [/^\S+@\S+\.\S+$/, "Por favor, ingresa un email válido."],
        unique: true, 
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: [true, "Tu usuario es requerido"]
    },
    passwordEncriptado: {
        type: String,
        required: [true, "Tu contraseña es requerida"]
    },
    imageUrl: {
        type: String
    } 
})

*/