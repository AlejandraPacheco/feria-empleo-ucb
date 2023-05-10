const express = require('express');
const app = express();
const cors = require('cors'); // Importar el middleware de CORS
const db = require('./bdd');

const router = require('./routes');

// Utilizar el enrutador para manejar todas las solicitudes
app.use(router);

// Permitir todas las solicitudes desde cualquier origen
app.use(cors());

// Inicio del servidor
app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});
