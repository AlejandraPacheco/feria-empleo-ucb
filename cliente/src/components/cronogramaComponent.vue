<template>
    <div>
      <h2>Reuniones Pasadas</h2>
      <div v-for="(reunion, index) in reunionesPasadas" :key="index" class="tarjeta naranja">
        <div class="titulo">{{ reunion.nombre }}</div>
        <div class="cuerpo">
          <p>{{ reunion.cantidad_personas }} personas</p>
          <p>{{ reunion.descripcion }}</p>
          <p>{{ formatDate(reunion.fecha) }}</p>
        </div>
        <div class="pie">
          <a :href="reunion.link">{{ reunion.fecha < hoy ? 'Ver Repetición' : 'Ir a la Reunión' }}</a>
        </div>
      </div>
      
      <h2>Reuniones Nuevas</h2>
      <div v-for="(reunion, index) in reunionesNuevas" :key="index" class="tarjeta verde">
        <div class="titulo">{{ reunion.nombre }}</div>
        <div class="cuerpo">
          <p>{{ reunion.cantidad_personas }} personas</p>
          <p>{{ reunion.descripcion }}</p>
          <p>{{ formatDate(reunion.fecha) }}</p>
        </div>
        <div class="pie">
          <a :href="reunion.link">Ir a la Reunión</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reuniones: [
          {
            nombre: 'Reunión de equipo',
            cantidad_personas: 10,
            descripcion: 'Reunión semanal para revisar el avance de materias.',
            link: 'https://meet.google.com/xyz-abc',
            fecha: new Date(2023, 4, 3, 9, 30, 0) // fecha de la reunión (año, mes, día, hora, minutos, segundos)
          },
          {
            nombre: 'Reunión con estudiantes',
            cantidad_personas: 5,
            descripcion: 'Presentación del nuevo grupo a la carrera.',
            link: 'https://meet.google.com/123-def',
            fecha: new Date(2023, 4, 5, 14, 0, 0) // fecha de la reunión (año, mes, día, hora, minutos, segundos)
          },
          {
            nombre: 'Presentacion de Proyeco',
            cantidad_personas: 5,
            descripcion: 'Presentación de Tecnologias Web.',
            link: 'https://us05web.zoom.us/j/84638000819?pwd=eWhWK1M5Qm9aUUFIUTB3eGNPY0Jhdz09',
            fecha: new Date(2023, 5, 11, 14, 0, 0) // fecha de la reunión (año, mes, día, hora, minutos, segundos)
          },
          // más reuniones
        ]
      }
    },
    computed: {
      hoy() {
        return new Date() // fecha actual
      },
      reunionesPasadas() {
        return this.reuniones.filter(reunion => reunion.fecha < this.hoy)
      },
      reunionesNuevas() {
        return this.reuniones.filter(reunion => reunion.fecha >= this.hoy)
      }
    },
    methods: {
      formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = ('0' + (d.getMonth() + 1)).slice(-2);
        const day = ('0' + d.getDate()).slice(-2);
        return `${day}/${month}/${year}`;
      }
    },
  }
  </script>
  
  <style scoped>
  .tarjeta {
    width: 80%;
    border: 1px solid lightgray;
    box-shadow: 2px 2px 8px 4px #d3d3d3d1;
    border-radius: 15px;
    font-family: sans-serif;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
  .naranja {
    background-color: #FFA07A;
  }
  
  .verde {
    background-color: #90EE90;
  }
  .titulo {
    font-size: 24px;
    padding: 10px 10px 0 10px;
  }
  .cuerpo {
    padding: 10px;
  }
  .pie {
    background: #6699ff;
    border-radius: 0 0 15px 15px;
    padding: 10px;
    text-align: center;
  }
  .pie a {
    text-decoration: none;
    color: white;
  }
  .pie a:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: '';
  }
  </style>