const express = require('express');
const router = express.Router();
const db = require('./bdd');

// Definiendo las rutas para procesar las solicitudes GET, POST, PUT y DELETE

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

    router.get('/api/reunion', (req, res) => {
      db.query('SELECT r.id, r.titulo, r.descripcion, r.fecha, r.hora, r.cant_personas, e.nombre as nombre_institucion FROM reunion r INNER JOIN empresa e ON r.empresa_id = e.id;', (error, results, fields) => {
        if (error) {
          console.log(error)
          return res.status(500).send(error)
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.send(results)
      })
    })

    router.get('/api/categorias', (req, res) => {
      db.query('SELECT id, nombre FROM sector', (error, results, fields) => {
        if (error) {
          console.log(error)
          return res.status(500).send(error)
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.send(results)
      })
    })

    router.get('/api/instituciones', (req, res) => {
      db.query('SELECT id, nombre FROM empresa', (error, results, fields) => {
        if (error) {
          console.log(error)
          return res.status(500).send(error)
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.send(results)
      })
    })

/*     router.get('/api/nombreinstitucion', (req, res) => {
      db.query('SELECT a.nombre FROM empresa a, reunion b WHERE a.id=b.empresa_id', (error, results, fields) => {
        if (error) {
          console.log(error)
          return res.status(500).send(error)
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.send(results)
      })
    }) */

module.exports = router;