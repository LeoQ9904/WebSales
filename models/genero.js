const {Schema,model} = require('mongoose');

const generoSchema = Schema({
    nombre:{
        type: String,
        require: [true,'nombre requerido']
    },
    img:{
        type: String,
        require: [true,'La imagen es necesaria ya que nos mostra el logo en el front-end']
    },
    descripcion:{
        type: String
    },
    status:{
        type: Boolean,
        default: true
    }
});

generoSchema.methods.toJSON = function(){
    const {__v,_id, ...genero } = this.toObject();
    genero.uid = _id;
    return genero;
}

module.exports = model('Genero',generoSchema);