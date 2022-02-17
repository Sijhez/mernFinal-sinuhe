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
    },
    myArticles:[{type:mongoose.Schema.Types.ObjectId,ref:'ObraArt'}]
    },
{
    timestamps:true
})

//model
const Usuario = mongoose.model("Usuario", usuarioSchema)

//exports
module.exports = Usuario 


