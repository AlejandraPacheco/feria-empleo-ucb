<template>
          <!-- Navigation -->
          <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <div class="container">
            <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/10/Feria-de-empleo-final.jpg" width="140px">
            <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
                <router-link class="nav-link pr-3" to="/home">Instituciones</router-link>
            </li>
            <li class="nav-item">
                <router-link class="btn btn-outline-primary" to="/cronograma">Cronograma</router-link>
            </li>
            <li class="nav-item">
                <router-link class="btn btn-outline-primary" to="/contacto">Contactos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link pr-3" to="/login">Log In</router-link>
            </li>
            </ul>
        </div>
        </nav>
    <center>
        <h2>Registrar nueva institución</h2>
    <form>
      <label for="nombre">Nombre de la empresa</label>
      <input type="text" id="nombre" v-model="nombre">
  
      <label for="ubicacion">Ubicación</label>
      <input type="text" id="ubicacion" v-model="ubicacion">
  
      <label for="descripcion">Descripción</label>
      <textarea id="descripcion" v-model="descripcion"></textarea>
  
      <label for="logo">Logo</label>
      <input type="file" id="logo" @change="onFileSelected">
  
      <button type="submit" @click.prevent="submitForm">Guardar</button>
    </form>
</center>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        ubicacion: '',
        descripcion: '',
        logo: null
      }
    },
  
    methods: {
      onFileSelected(event) {
        this.logo = event.target.files[0]
      },
  
      submitForm() {
        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
      }
    }
  }
  </script>