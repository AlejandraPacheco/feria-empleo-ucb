<template>
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