<template>
  <div>
    <div v-for="(reunion, index) in reuniones" :key="index" class="card">
      <div>{{ reunion.nombre }}</div>
      <div>{{ reunion.cantidad_personas }} personas</div>
      <div>{{ reunion.descripcion }}</div>
      <div>Fecha: {{ reunion.fecha }}</div>
      <div><a :href="reunion.link">Ir a la reunión</a></div>
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
          fecha: '13/06/2023',
          link: 'https://meet.google.com/xyz-abc',
        },
        {
          nombre: 'Reunión con estudiantes',
          cantidad_personas: 5,
          descripcion: 'Presentación del nuevo grupo a la carrera.',
          fecha: '23/06/2023',
          link: 'https://meet.google.com/123-def',
        },
        //Estos son ejemplos de las reuniones
      ],
    };
  },
};
</script>

<style scoped>
    .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
    }

    .card h3 {
    font-size: 18px;
    margin: 0;
    }

    .card p {
    margin: 5px 0;
    }
</style>