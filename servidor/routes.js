const express = require('express');
const router = express.Router();

// Definir la ruta /api/mensaje
router.get('/api/mensaje', (req, res) => {
    const mensaje = 'Hola desde el servidor Node.js';  
    res.header('Access-Control-Allow-Origin', '*');
    res.send(mensaje);
  });

module.exports = router;