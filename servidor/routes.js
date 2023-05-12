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

  // Ruta para procesar la solicitud POST
    router.post('/guardar-datos', (req, res) => {
      console.log("Estamos en guardar datos");
      res.header('Access-Control-Allow-Origin', '*');
        // Obtener los datos del cuerpo de la solicitud
        
        const { nombre, ubicacion, descripcion, foto, categoria } = req.body;
        console.log(req.body);
        // Insertar los datos en la tabla correspondiente en la base de datos
        const sql = `INSERT INTO empresa (id, nombre, ubicacion, descripcion, logo, Sector_id) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(sql, [null, nombre, ubicacion, descripcion, foto, categoria], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar los datos en la base de datos');
        } else {
            res.status(200).send('Datos guardados correctamente');
        }
        });
    });
  

module.exports = router;