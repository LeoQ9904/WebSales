const { response, request } = require('express');
const Categoria = require('../models/categoria');

const validarId =  (coleccion='')=>{
    return async (req=request,res=response,next)=>{
        let {id} = req.params;
        switch (coleccion) {
            case 'Categoria':
                const categoria = await Categoria.findById(id);                 
                return (!categoria) ? res.status(400).json({info:'La categoria no existe'}) : categoria                        
                default:                    
                    return res.status(400).json({info:'Colección no existe'})                
                }
        next();        
    }
}

module.exports={
    validarId
}