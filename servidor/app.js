const express = require('express');
const app = express();
const cors = require('cors'); // Importar el middleware de CORS
const db = require('./bdd');

// Configurar Express para recibir solicitudes POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar Express para permitir solicitudes CORS desde el origen http://localhost:3000
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const router = require('./routes');

// Utilizar el enrutador para manejar todas las solicitudes
app.use(router);

// Permitir todas las solicitudes desde cualquier origen
app.use(cors());

// Inicio del servidor
app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});
