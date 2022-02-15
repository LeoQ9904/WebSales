const { request, response } = require("express");
const { Canasta } = require("../models");

const postCanasta = async (req=request,res=response)=>{
    const usuario = req.usuario._id;
    const {producto,cantidad} = req.body;

    const data= {
        usuario,
        producto,
        cantidad
    }

    const canasta = new Canasta(data);
    await canasta.save();

    res.json({
        info:'Creada correctamente',
        canasta
     })   
}

module.exports = {
    postCanasta
}