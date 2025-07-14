const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre_producto: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    default: '',
  },
  categoria: {
    type: String,
    required: true,
  },
  vendedor: {
    type: String,
    required: true,
  },
  fecha_de_ingreso: {
    type: Date,
    default: Date.now,
  },
  sucursal: {
    type: String,
    required: true,
  },
  precio_unitario: {
    type: Number,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;