const { Producto,Categoria, Usuario } = require('../models');

const validaId = async (id)=>{
    let idexist = await Categoria.findById(id);
    if (!idexist) idexist = await Producto.findById(id);
    if (!idexist) idexist = await Usuario.findById(id);
    if(!idexist){
        throw new Error('El id no existe en el sistema');
    }
    return true;
}

module.exports={
    validaId
}