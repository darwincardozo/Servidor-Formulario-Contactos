const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

// ruta api/productos
router.post("/", productoController.crearProducto);

module.exports = router;
