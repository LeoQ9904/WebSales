const { response, request } = require("express");
const Categoria = require("../models/categoria");

const postCategoria = async (req=request,res=response)=>{
    let {nombre,descripcion}=req.body;

    nombre = nombre.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()); // guardar con la primera letra en mayuscula

    let categoria = await Categoria.findOne({nombre});

    if (nombre.length > 30 || categoria){
        return res.status(400).json({
            info:'La categoria que esta creando ya existe ó El nombre contiene más de 15 catacteres'
        })
    }

    const data = {
        nombre,
        descripcion
    }

    categoria = new Categoria(data);
    await categoria.save();
    res.json({
        info:'Guardado correctamente',
        categoria
    })
}

const getCategorias = async (req=request, res=response)=>{
    const categorias = await Categoria.find({estado:true});

    (categorias) ? res.status(200).json({info:'Listado de categorias',categorias})
                    : res.status(400).json({info:'No se tiene listado de categorias en la base de datos.'})
}

const putCategoria = async (req=request, res=response)=>{
    let {id} = req.params;
    let {nombre,descripcion}=req.body;
    
    (nombre) ? nombre.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()):nombre // guardar con la primera letra en mayuscula

    let categoria = await Categoria.findById(id);
    
    if(nombre){
        if(nombre.length > 16){
            return res.status(400).json({
                info:'El nombre contiene más de 15 catacteres ó el nombre ya existe'
            }) 
        }
        let nameExiste = await Categoria.findOne({nombre})
        if(nameExiste) id=nameExiste._id
    }

    const data={
        nombre,
        descripcion
    }
    try {        
        categoria = await Categoria.findByIdAndUpdate(id,data);
    } catch (error) {
        res.json({
            info: `Problemas al editar la categoria ${error.codeName}`,            
        })     
    }
    res.json({
        info:'Editado correctamente',
        categoria
    })
}
const deleteCategoria = async (req,res)=>{
    const {id} = req.params;

    const categoria = await Categoria.findByIdAndUpdate(id,{estado:false})

    res.status(200).json({
        info:'Elimnado correctamente',
        categoria
    })


}
module.exports={
    postCategoria,
    getCategorias,
    putCategoria,
    deleteCategoria
}