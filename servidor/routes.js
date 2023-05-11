const express = require('express');
const router = express.Router();

// Definir la ruta /api/mensaje
router.get('/api/mensaje', (req, res) => {
    const mensaje = 'Hola desde el servidor Node.js';  
    res.header('Access-Control-Allow-Origin', '*');
    res.send(mensaje);
  });

  router.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM empresa';
    db.query(query, (error, results) => {
      if (error) {
        res.status(500).send({ error });
      } else {
        res.send(results);
      }
    });
  });

module.exports = router;