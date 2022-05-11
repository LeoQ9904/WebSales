const { request, response } = require("express");
const { Canasta } = require("../models");

const postCanasta = async (req=request,res=response)=>{    
    const {producto,tallaCnt} = req.body;
    const idUsuario = req.usuario;
    const data= { 
        usuario:idUsuario,       
        producto,
        tallaCnt
    }

    const canasta = new Canasta(data);
    await canasta.save();

    res.json({
        info:'Creada correctamente',
        canasta
     })   
}

// Sin validacion de usuario
// const getCanasta = async (req, res)=>{    
//     const listCanasta = await Canasta.find().populate('producto',['nombre','descripcion','precio','descuento','img']);
//     res.json({
//         info:'Listado de Canasta',
//         listCanasta
//     })
// }

// Con validacion de usuario
const getCanasta = async (req, res)=>{
    console.log(req.usuario._id);
    const listCanasta = await Canasta.find().where('usuario').equals(req.usuario._id).populate('producto',['nombre','descripcion','precio','descuento','img']);
    res.json({
        info:'Listado de Canasta',
        listCanasta
    })
}

const deleteCanasta = async(req,res)=>{    
    let {id} = req.params;
    const p = await Canasta.findByIdAndDelete(id);
    res.json(
        {
            info:'Producto eliminado correctamente',
            p
        }
    );
}
module.exports = {
    postCanasta,
    getCanasta,
    deleteCanasta
}