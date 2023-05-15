<template>
    <div>
     <div>
      <h1>Registrar Institución</h1>
     </div> 
      <b-container fluid>
        <b-row>
          <b-col cols="12" sm="6">
            <b-form-group label="Nombre">
              <b-form-input v-model="nombre" required></b-form-input>
            </b-form-group>
            <b-form-group label="Descripción">
              <b-form-textarea v-model="descripcion" rows="3" required></b-form-textarea>
            </b-form-group>
            <b-form-group label="Ubicacion">
              <b-form-input v-model="ubicacion" required></b-form-input>
            </b-form-group>
            <b-form-group label="foto">
              <b-form-input v-model="foto" required></b-form-input>
            </b-form-group>
            <b-form-group label="Categoría">
              <b-form-select v-model="categoria" :options="categorias"></b-form-select>
            </b-form-group>
            <b-button variant="primary" @click="submitForm">Enviar</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>
  
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
                // Realizar alguna acción después de guardar los datos
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
  