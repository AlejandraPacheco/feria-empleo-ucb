<template>
  <div>
    <center>
    <h1>Contacto</h1>
    <p>Para contactarnos, por favor utilice la siguiente información:</p>
    <div>
      <h2>{{ empresa.nombre }}</h2>
      <p>Dirección: {{ empresa.direccion }}</p>
      <p>Teléfono: {{ empresa.telefono }}</p>
      <p>Correo electrónico: {{ empresa.email }}</p>
    </div>
    <p>O complete el siguiente formulario:</p>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" v-model="mensaje" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empresa: {
        nombre: 'Unidad de Servicios Estudiantiles Integrale<s',
        direccion: 'Universidad catolica Boliviana Bloque D, Piso 5, Aula D29.',
        telefono: '+54 11 1234-56782782222 Interno 2723 o al directo 2692723',
        celular: '76521445'
      },
      nombre: '',
      email: '',
      mensaje: ''
    }
  },
  methods: {
    submitForm() {
      // Aquí se podría enviar el formulario a través de una petición HTTP, por ejemplo
      console.log(`Nombre: ${this.nombre}, Email: ${this.email}, Mensaje: ${this.mensaje}`);
    }
  }
}
</script>