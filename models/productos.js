const { Schema, model } = require("mongoose");

const productoSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es necesario"],
  },
  descripcion: {
    type: String,
    required: [true, "La descripción es necesaria"],
  },
  precio: {
    type: Number,
    default: 0,
  },
  descuento: {
    type: Number,
    default: 0,
  },
  talla: {
    type: Array,
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: "Categoria",
    require: true,
  },
  img: { type: Array },
  estado: { type: Boolean, default: true },
  genero: { type: Schema.Types.ObjectId, ref: "Genero", require: true },
  tipo: { type: Schema.Types.ObjectId, ref: "Categoria" },
  color: { type: Array },
});

productoSchema.methods.toJSON = function () {
  const { __v, _id, ...producto } = this.toObject();
  producto.uid = _id;
  return producto;
};

module.exports = model("Producto", productoSchema);
