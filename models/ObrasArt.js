//imports mongoose
const mongoose = require("mongoose")


//schema
const obraArtSchema = mongoose.Schema({
    titulo:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagen1:{
        type:String
    },
    imagen2:{
        type:String
    },
    imagen3:{
        type:String
    },
    precio:{
        type:Number,
        required:true  
    },
    autor:{type:mongoose.Schema.Types.ObjectId, ref:'Usuario'}
})

//modelo
const ObraArt = mongoose.model("ObraArt", obraArtSchema)

//exports
module.exports = ObraArt