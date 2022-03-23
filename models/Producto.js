const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({
  nombreCompleto: String,
  nombreEmpresa: String,
  email: String,
  telefono: String,
  categoria: String,
  mensaje: String,
  fechaCreacion: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Producto", ProductoSchema);
