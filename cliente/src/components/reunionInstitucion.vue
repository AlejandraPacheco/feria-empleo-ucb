<template>
        <div >
          <center>
            <div class="contenedor-pasteles">
                <h1 class="titulo-productos">Cronograma de Reuniones</h1>

                <div class="container">
                    <div v-for="reunion in reunion" :key="reunion.id">
                        <b-card bg-variant="dark" text-variant="white" :title="'Reunion - ' + reunion.id" style="margin: 0 100px;">
                        <b-card-text class="text-left" style="margin-left: 40px;">
                            Titulo: {{ reunion.titulo }}
                        </b-card-text>
                        <b-card-text class="text-left" style="margin-left: 40px;">
                            Descripcion: {{ reunion.descripcion }}
                        </b-card-text>
                        <b-card-text class="text-left" style="margin-left: 40px;">
                            Organizado por: {{ reunion.nombre_institucion }}
                        </b-card-text>
                        <b-card-text class="text-left" style="margin-left: 40px;">
                            Fecha: {{ reunion.fecha }}
                        </b-card-text>
                        <b-card-text class="text-left" style="margin-left: 40px;">
                            Hora: {{ reunion.hora }}
                        </b-card-text>
                        <b-card-text class="text-left" style="margin-left: 40px;">
                            Cupos Disponibles: {{ reunion.cant_personas }}
                        </b-card-text>
                        <div class="d-flex justify-content-end">
                            <b-button @click="registrarUsuario(reunion.id, reunion.cant_personas)" variant="primary">Registrarse</b-button>
                        </div>
                        </b-card>
                    </div>
                </div>
         </div>
            
            <div class="footer">
                <div class="footer-columnas">
                    <div class="columna">
                        <h3>Contacto</h3>
                        <h2>68975423</h2>
                    </div>
                    <div class="columna">
                        <h3>Dirección</h3>
                        <h2>San Pedro, calle Belzu #4409</h2>
                    </div>
                    <div class="columna">
                        <h3>Nuestras redes</h3>
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-whatsapp"></a>
                        <a href="#" class="fa fa-instagram"></a>
                    </div>
                </div>
            </div>
            </center>
        </div>
    
</template>

  <style>
  .card-custom {
    max-width: 540px;
    margin: 0 10px;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .contenedor-pasteles{
    
    text-align: center;
  }
  
  </style>

  <script>
  import axios from 'axios';

  import { BCard, BCardText, BButton } from 'bootstrap-vue'
  
  export default {

    data() {
      return {
        reunion: []
      }
    },

    name: 'cronograma2Component',
    components: {
      'b-card': BCard,
      'b-card-text': BCardText,
      'b-button': BButton,
    },

    methods: {
        registrarUsuario(id, cant_personas) {
        this.$router.push({ name: 'reunionusuario', params: { id: id, cant_personas: cant_personas } });
      }
    },

    mounted() {
        const id = this.$route.params.id;
        // Utiliza el ID para cargar las reuniones específicas de la institución
        console.log('Este es el id: '+id);

        axios.get(`http://localhost:3001/api/reunion/${id}`)
        .then(response => {
            this.reunion = response.data;
            console.log(this.reunion);
        })
        .catch(error => {
            console.log(error);
        });

      // Agregar los scripts aquí
      const link1 = document.createElement('link');
      link1.rel = 'stylesheet';
      link1.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
      document.head.appendChild(link1);

      const link2 = document.createElement('link');
      link2.rel = 'stylesheet';
      link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
      document.head.appendChild(link2);

      const script1 = document.createElement('script');
      script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
      document.body.appendChild(script2);

    }
  }
</script>