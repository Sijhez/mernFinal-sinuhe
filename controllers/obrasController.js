//import model
const ObrasArt = require("./../models/ObrasArt")

//creacion de articulo de arte (CREATE)
exports.createArt = async(req, res) =>{
    const {
        titulo,
        descripcion,
        imagen1,
        imagen2,
        imagen3,
        precio
    } = req.body

    //crear articulo en base de datos
    try {
        const newArt = await ObrasArt.create({
            titulo, descripcion, imagen1, imagen2, imagen3, precio
        })
        res.json({
            msg:"Articulo creado exitósamente",
            data:newArt
        })
        //console.log(newArt)
    } catch (error) {
        res.status(500).json({
            msg:"Hubo un error generando el articulo",
            error:error
        })
    }

}

//visualizar TODOS los articulos (READ)

exports.readAllArt = async(req, res) => {
    
    try {
        const articles = await ObrasArt.find({})
        res.json({
            msg:"Articulos conseguidos con éxito",
            data:articles
        })
    } catch (error) {
        res.status(500).json({
            msg:"Hubo un error consiguiendo los datos",
            error:error
        })
    }
}

//visualizar UN ARTICULO(READ ONE)
 exports.readOneArt = async(req, res)=>{
    //conseguimos id del producto 
    const {id}=req.params

    try {
        const oneArticle = await ObrasArt.findById(id)
        res.json({
            msg:"Artículo encontrado",
            data: oneArticle
        })
        console.log(oneArticle)
    } catch (error) {
        res.status(500).json({
            msg:"El articulo no se encontró",
            error:error
        })
    }


 }


//Usuario quiere editar un artículo (EDIT-UPDATE)

exports.editArticle = async (req, res)=>{
   const {id}=req.params
   const{
    titulo,
    descripcion,
    imagen1,
    imagen2,
    imagen3,
    precio
   } = req.body
   
   try {
       const updatedArticle = await ObrasArt.findByIdAndUpdate(
           id,{
               titulo,descripcion,imagen1,imagen2,imagen3,precio
           },{new:true})
           res.json({
               msg:"El articulo ha sido actualizado",
               data:updatedArticle
           })

   } catch (error) {
       res.status(500).json({
           msg:"Hubo un error actualizando el articulo",
           error:error
       })
   }
    
}

//Usuario quiere eliminar un articulo que ya subió (DELETE)

exports.deleteArticle = async(req, res) =>{
    //conseguir id del articulo a borrar
    const {id}=req.params
    //realizar try-catch con el findByIdAndRemove
    try {
       const deletedArticle = await ObrasArt.findByIdAndRemove({_id: id})
       res.json({
           msg:"Articulo eliminado exitosamente",
           data:deletedArticle
       })

    } catch (error) {
        //lanzar el error si no se pudo eliminar
        res.status(500).json({
            msg:"El artículo no pudo ser elimnado",
            error:error
        })
        
    }
}


