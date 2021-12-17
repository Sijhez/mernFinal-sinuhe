const mongoose = require("mongoose") //conexion a base de datos con mongoose

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI),{
            useNewUrlParser:true,
           useUnifiedTopology:true
        }
        console.log(`Base de datos conectada:${process.env.MONGODB_URI.title}`)
    } catch (error) {
        console.log(error)
       process.exit(1)
    }
}

module.exports = connectDB