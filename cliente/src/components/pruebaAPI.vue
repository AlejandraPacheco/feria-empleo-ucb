<template>
    <div>
      <button @click="obtenerMensaje">Obtener mensaje del servidor</button>
      <p>{{ mensaje }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mensaje: ''
      };
    },
    methods: {
      obtenerMensaje() {
        // Hacer la solicitud GET al servidor
        axios.get('http://localhost:3001/api/mensaje')
          .then(response => {
            this.mensaje = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  