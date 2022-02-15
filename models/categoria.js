const {Schema, model} = require('mongoose');

const categoriaSchema = Schema({
    nombre:{type:String,required:[true,'El nombre es requerido'],unique: true},
    descripcion:{type:String, required:[true,'La descripción es necesaria']},
    estado:{type:Boolean, default: true}
})

categoriaSchema.methods.toJSON = function(){
    const { __v, _id, ...categoria } = this.toObject();
    categoria.uid=_id;    
    return categoria;
}


module.exports = model('Categoria',categoriaSchema)