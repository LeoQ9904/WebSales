const {Schema, model} = require('mongoose');

const canastaSchema = Schema({
    usuario:{
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        default: '61ffe9d18bb58e0286079926'
    },
    producto:{
        type: Schema.Types.ObjectId,
        ref:'Producto',
        require: true
    },
    tallaCnt:{
        type:Array,
        default: {
            nombre:"NAN",
            cnt:1
        }
    },
    estado:{
        type: Boolean,
        default: true
    }
})

module.exports = model('Canasta', canastaSchema);