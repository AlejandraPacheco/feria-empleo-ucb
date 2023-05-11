const express = require('express');
const router = express.Router();
const db = require('./bdd');

// Definir la ruta /api/mensaje
router.get('/api/mensaje', (req, res) => {
    const mensaje = 'Hola desde el servidor Node.js';  
    res.header('Access-Control-Allow-Origin', '*');
    res.send(mensaje);
  });


  router.get('/api/institucion', (req, res) => {
    db.query('SELECT * FROM empresa', (error, results, fields) => {
      if (error) {
        console.log(error)
        return res.status(500).send(error)
      }
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results)
    })
  })
  

module.exports = router;