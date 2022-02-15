const {Schema, model} = require('mongoose');

const canastaSchema = Schema({
    usuario:{
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        require: true
    },
    producto:{
        type: Schema.Types.ObjectId,
        ref:'Producto',
        require: true
    },
    cantidad:{
        type:Number,
        default: 1
    },
    estado:{
        type: Boolean,
        default: true
    }
})

module.exports = model('Canasta', canastaSchema);