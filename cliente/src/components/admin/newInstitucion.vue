<template>
    <div>
              <!-- Navigation -->
              <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <div class="container">
            <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/10/Feria-de-empleo-final.jpg" width="140px">
            <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
                <router-link class="nav-link pr-3" to="/adminhome">Instituciones</router-link>
            </li>
            <li class="nav-item">
                <router-link class="btn btn-outline-primary" to="/admincronograma">Cronograma</router-link>
            </li>
            <li class="nav-item">
                <router-link class="btn btn-outline-primary" to="/admincontacto">Contactos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link pr-3" to="/login">Log In</router-link>
            </li>
            </ul>
        </div>
        </nav>
     <div>
      <h1 class="fw-bolder display-4 text-center text-primary">Registrar Institución</h1>
     </div> 
     <div class="container" style="background-color: rgb(224, 240, 241); color: black;">
        <b-container fluid>
          <b-row>
            <b-col cols="12" sm="6">
              <b-form-group label="Nombre" style="color: rgb(13, 13, 13); font-size: 16px; " class="label-styling fw-bold">
                <b-form-input v-model="nombre" required></b-form-input>
              </b-form-group>
              <b-form-group label="Descripción" style="color: rgb(13, 13, 13); font-size: 16px; " class="label-styling fw-bold">
                <b-form-textarea v-model="descripcion" rows="3" required></b-form-textarea>
              </b-form-group>
              <b-form-group label="Ubicacion" style="color: rgb(13, 13, 13); font-size: 16px; " class="label-styling fw-bold">
                <b-form-input v-model="ubicacion" required></b-form-input>
              </b-form-group>
              <b-form-group label="Foto" style="color: rgb(13, 13, 13); font-size: 16px; " class="label-styling fw-bold">
                <b-form-input v-model="foto" required></b-form-input>
              </b-form-group>
              <b-form-group label="Categoría" style="color: rgb(13, 13, 13); font-size: 16px; " class="label-styling fw-bold">
                <b-form-select v-model="categoria" :options="categorias"></b-form-select>
              </b-form-group>
              <b-button variant="primary" @click="submitForm">Enviar</b-button>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        nombre: '',
        descripcion: '',
        ubicacion: '',
        foto: '',
        categoria: '',
        categorias: [],
      };
    },
    created() {
      fetch('http://localhost:3001/api/categorias')
        .then(response => response.json())
        .then(data => {
          this.categorias = data.map(categoria => ({
            value: categoria.id,
            text: categoria.nombre,
          }));
        })
        .catch(error => console.error(error));
    },
    methods: {
        submitForm() {
            // Crear un objeto con los datos del formulario
            const data = {
            nombre: this.nombre,
            descripcion: this.descripcion,
            ubicacion: this.ubicacion,
            foto: this.foto,
            categoria: this.categoria,
            };

            // Enviar los datos al servidor usando Axios
            axios.post('http://localhost:3001/guardar-datos', data)
            .then(response => {
                console.log(response.data);
                alert("Institucion registrada correctamente");
                // Realizar alguna acción después de guardar los datos
                this.$set(this, 'nombre', '');
                this.$set(this, 'descripcion', '');
                this.$set(this, 'ubicacion', '');
                this.$set(this, 'foto', '');
                this.$set(this, 'categoria', null); 
            })
            .catch(error => {
                console.error(error);
                console.log(data);
                // Realizar alguna acción si ocurre un error al guardar los datos
            });
        }
    }
  };
  </script>
  