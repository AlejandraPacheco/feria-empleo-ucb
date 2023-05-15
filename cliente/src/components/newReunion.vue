<template>
    <div>
     <div>
      <h1>Nueva Reunion</h1>
     </div> 
      <b-container fluid>
        <b-row>
          <b-col cols="12" sm="6">
            <b-form-group label="Titulo:">
              <b-form-input v-model="titulo" required></b-form-input>
            </b-form-group>
            <b-form-group label="Descripción:">
              <b-form-textarea v-model="descripcion" rows="3" required></b-form-textarea>
            </b-form-group>
            <b-form-group label="Institucion que organiza:">
              <b-form-select v-model="institucion" :options="instituciones"></b-form-select>
            </b-form-group>
            <b-form-group label="Plataforma:">
              <b-form-select v-model="plataforma" :options="plataformas"></b-form-select>
            </b-form-group>
            <b-form-group label="Link de la reunion:">
              <b-form-input v-model="link" required></b-form-input>
            </b-form-group>
            <div>
                <label for="example-datepicker">Escoge una fecha:</label>
                <b-form-datepicker id="example-datepicker" v-model="fecha" class="mb-2"></b-form-datepicker>
                <p>Fecha: '{{ fecha }}'</p>
            </div>
            <div>
                <b-form-timepicker v-model="hora" locale="en"></b-form-timepicker>
                <div class="mt-2">Hora: '{{ hora }}'</div>
            </div>
            <b-form-group label="Cupos disponibles:">
              <b-form-input v-model="cant_personas" required></b-form-input>
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
        titulo: '',
        descripcion: '',
        link: '',
        fecha: '',
        hora: '',
        cant_personas: '',
        institucion: '',
        instituciones: [],
        plataforma: '',
        plataformas: [
          { text: 'Zoom'},
          { text: 'Google Meet'},
          { text: 'Microsoft Teams'},
          { text: 'Cisco Webex'},
          { text: 'Jitsi Meet'},
          { text: 'Skype'},
          { text: 'Otra'},],
        };
    },
    created() {
      fetch('http://localhost:3001/api/instituciones')
        .then(response => response.json())
        .then(data => {
          this.instituciones = data.map(institucion => ({
            value: institucion.id,
            text: institucion.nombre,
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
  