<template>
  
  <div>
    <div class="column">
      <h1 class="letra1">¡Contáctanos y caminemos al éxito!</h1>
      <h1>¿Estás listo para brillar <br> y demostrar de lo que estas hecho?</h1>
      <form @submit.prevent="submitForm">
      <div>
        <label for="nombre" class="fw-semibold">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div>
        <label for="email" class="fw-semibold">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="mensaje" class="fw-semibold">Mensaje:</label>
        <textarea id="mensaje" v-model="mensaje" required></textarea>
      </div>
      <button type="submit" class="btn btn-dark">Enviar</button>
    </form>
  </div>
  <div class="column">
    <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/12/Colores-Vertical-3.png" width="700px" height="700px">
   
  </div>
  <div class="clearfix"></div>
    
    
  <footer class="footer">
    <p class="fst-italic">Derechos de autor &copy; 2023 - Feria del Empleo UCB</p>
    <p class="fst-italic">Para contactarnos, por favor utilice la siguiente información:</p>
    <div>
      <h2 class="fw-semibold">{{ empresa.nombre }}</h2>
      <p class="fst-italic">Dirección: {{ empresa.direccion }}</p>
      <p class="fst-italic">Teléfono: {{ empresa.telefono }}</p>
      <p class="fst-italic">Correo electrónico: {{ empresa.email }}</p>
    </div>
  </footer>
  </div>
  
</template>

<style>
   .column {
      float: left;
      width: 50%;
      padding: 10px;
      box-sizing: border-box;
    }
    .footer {
      background-color: #2980B9;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
.letra1{
  font-size: 80px;
}
body {
  font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 0;
  
}

h1 {
  text-align: center;
  color: #333;
}

form {
  margin: 20px auto;
  max-width: 400px;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#contact-list {
  max-width: 600px;
  margin: 20px auto;
}

.contact {
  padding: 10px;
  background: #f4f4f4;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
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