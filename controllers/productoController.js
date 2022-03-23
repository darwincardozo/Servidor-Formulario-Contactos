const Producto = require("../models/Producto");

// === async porq se hace una peticion a la base de datos ===//
exports.crearProducto = async (req, res) => {
  try {
    let producto;
    producto = new Producto(req.body);
    await producto.save();
    res.send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un Error");
  }
};
