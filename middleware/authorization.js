//desencriptamos el jwt generado por el usuario
const jwt = require("jsonwebtoken")

const decrypt = async(req, res, next)=>{
    const token = req.header("x-auth-token")

    //si no hay token
    if(!token){
        return res.status(401).json({
            msg:"No hay token, permiso no válido"
        })
     }

    try {
        const openToken = await jwt.verify(token, process.env.SECRET)
        req.user = openToken.user
        console.log("open Token:",openToken)
        next()
    } catch (error) {
        console.log(error)
        res.json({
            msg:"Hubo un error con el token",
            data:error
        })
    }
   

}
module.exports = decrypt