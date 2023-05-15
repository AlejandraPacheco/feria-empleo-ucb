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
              <b-form-select v-model="plataforma" :options="plataformas" value-field="value" text-field="text"></b-form-select>
            </b-form-group>
            <b-form-group label="Link de la reunion:">
              <b-form-input v-model="link_reunion" required></b-form-input>
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
        link_reunion: '',
        fecha: '',
        hora: '',
        cant_personas: '',
        institucion: '',
        instituciones: [],
        plataforma: '',
        plataformas: [
            { value: 'Zoom', text: 'Zoom' },
            { value: 'Google Meet', text: 'Google Meet' },
            { value: 'Microsoft Teams', text: 'Microsoft Teams' },
            { value: 'Cisco Webex', text: 'Cisco Webex' },
            { value: 'Jitsi Meet', text: 'Jitsi Meet' },
            { value: 'Skype', text: 'Skype' },
            { value: 'Otra', text: 'Otra' },
        ],
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
            titulo: this.titulo,
            descripcion: this.descripcion,
            link_reunion: this.link_reunion,
            fecha: this.fecha,
            hora: this.hora,
            cant_personas: this.cant_personas,
            empresa_id: this.institucion,
            plataforma: this.plataforma,
            };

            // Enviar los datos al servidor usando Axios
            axios.post('http://localhost:3001/guardar-reunion', data)
            .then(response => {
                console.log(response.data);
                // Realizar alguna acción después de guardar los datos
                alert("Reunion registrada correctamente");
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
  