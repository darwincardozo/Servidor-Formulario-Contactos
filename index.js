const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

// creando el servidor
const app = express();
app.listen(4000, () => {
  console.log("El servidor esta corrriendo prefectamente");
});

// configurando Midleware
app.use(express.json()); // Para que puedan enviar Json a la aplicacion

// Conectar Base de Datos
conectarDB();
app.use(cors());

// cuando ingresa a la siguiente ruta
app.use("/api/productos", require("./routes/producto"));
