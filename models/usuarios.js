const {Schema,model} = require('mongoose');

const usuarioSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique: true
    },
    telefono:{
        type:Number
    },
    direccion:{
        type:String
    },
    contraseña:{
        type:String,
        required:[true,'La contraseña es obligatoria']
    },
    img:{
        type:Array
    },
    rol:{
        type:String,       
        default:'USER_ROL'
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    },
    facebook:{
        type: Boolean,
        default: false
    }    
})
usuarioSchema.methods.toJSON =function(){
    const {__v, contraseña, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}
module.exports = model('Usuario', usuarioSchema);