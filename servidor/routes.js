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

    router.post('/guardar-reunion', (req, res) => {
      console.log("Estamos en guardar reunion");
      res.header('Access-Control-Allow-Origin', '*');
        // Obtener los datos del cuerpo de la solicitud
        //const { id, titulo, descripcion, fecha, hora, cant_personas, empresa_id } = req.body;
        const { titulo, descripcion, plataforma, fecha, hora, link_reunion, cant_personas, empresa_id} = req.body;
        console.log(req.body);
        // Insertar los datos en la tabla correspondiente en la base de datos
        const sql = `INSERT INTO reunion (id, titulo, descripcion, plataforma, fecha, hora, link_reunion, cant_personas, empresa_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(sql, [null, titulo, descripcion, plataforma, fecha, hora, link_reunion, cant_personas, empresa_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar los datos en la base de datos');
        } else {
            res.status(200).send('Datos guardados correctamente');
        }
        });
    });

    router.post('/guardar-usuario', (req, res) => {
      console.log("Estamos en guardar usuario");
      res.header('Access-Control-Allow-Origin', '*');
        // Obtener los datos del cuerpo de la solicitud
        const {nombre, ci, carrera, celular, email} = req.body;
        console.log(req.body);
        // Insertar los datos en la tabla correspondiente en la base de datos
        const sql = `INSERT INTO usuario (id, nombre, ci, carrera, celular, email) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(sql, [null, nombre,ci, carrera, celular, email], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar los datos en la base de datos');
        } else {
            res.status(200).send('Datos guardados correctamente');
        }
        });
    });

    router.post('/guardar-reunionusuario', (req, res) => {
      console.log("Estamos en guardar reunion_usuario");
      res.header('Access-Control-Allow-Origin', '*');
        // Obtener los datos del cuerpo de la solicitud
        const {reunion_id, usuario_id} = req.body;
        console.log(req.body);
        // Insertar los datos en la tabla correspondiente en la base de datos
        const sql = `INSERT INTO reunion_usuario (id, reunion_id, usuario_id) VALUES (?, ?, ?)`;
        db.query(sql, [null, reunion_id, usuario_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar los datos en la base de datos');
        } else {
            res.status(200).send('Datos guardados correctamente');
        }
        });
    });

    router.get('/api/reunion/:id', (req, res) => {
      const id = req.params.id;
      db.query('SELECT r.id, r.titulo, r.descripcion, r.fecha, r.hora, r.cant_personas, e.nombre as nombre_institucion FROM reunion r INNER JOIN empresa e ON r.empresa_id = e.id AND empresa_id = ?', [id], (error, results, fields) => {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.send(results);
      });
    });

    // Ruta para procesar la solicitud PUT para actualizar la caantidad de personas en una reunion
    router.put('/api/reunion/:id', (req, res) => {
      res.header('Access-Control-Allow-Origin', '*');
      console.log("Estamos en actualizar cantidad de personas");
      const id = req.params.id;
      const { cant_personas } = req.body;
      console.log(req.body);
      const sql = `UPDATE reunion SET cant_personas = ? WHERE id = ?`;
      db.query(sql, [cant_personas, id], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error al actualizar la cantidad de personas');
        } else {
          res.status(200).send('Cantidad de personas actualizada correctamente');
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

    router.get('/api/usuario', (req, res) => {
      db.query('SELECT id, nombre FROM usuario', (error, results, fields) => {
        if (error) {
          console.log(error)
          return res.status(500).send(error)
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.send(results)
      })
    })

    router.post('/login', (req, res) => {
      const { username, password } = req.body;
      const query = `SELECT id, username, role FROM user WHERE username = ? AND password = ?`;
      const values = [username, password];
      db.query(query, values, (error, results, fields) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ error: 'Error en el servidor' });
        }
        if (results.length > 0) {
          const user = results[0];
          res.status(200).json({ email: user.username, role: user.role });
        } else {
          res.status(401).json({ error: 'Credenciales inválidas' });
        }
      });
    });

module.exports = router;