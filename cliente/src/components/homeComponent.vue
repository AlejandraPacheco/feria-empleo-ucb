<template>
  
    <div>
      <center>
      <div class="contenedor-pasteles">
        <h1 class="titulo-productos">ALGUNOS DE NUESTROS PRODUCTOS</h1>

        <!-- <div>
          <b-card
            title="Card Title"
            img-src="https://i.ibb.co/RBPs0wv/channels4-profile.jpg"
            img-alt="bisa"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div> -->

        <div class="row d-flex flex-wrap justify-content-between mx-5">
          <b-card v-for="(institucion, index) in institucion" :key="index" no-body class="col-sm-6 mb-3 mx-5 overflow-hidden" style="max-width: 540px;">
            <b-card-title>{{ institucion.nombre }}</b-card-title>
            <b-card-sub-title class="mb-2">{{ institucion.ubicacion }}</b-card-sub-title>
            <b-row no-gutters>
              <b-col>
                <b-card-img :src="institucion.logo" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col>
                <b-card-body>
                  <b-card-text>
                    {{ institucion.descripcion }}
                  </b-card-text>
                  <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>

        <div class="fixed-bottom d-flex justify-content-end mr-3 mb-3">
          <b-button pill variant="info" class="ml-auto" to="/institucion" @click="navigateTo">Button</b-button>
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

  <script>
  import axios from 'axios';

  import { BCard, BCardText, BButton } from 'bootstrap-vue'
  
  export default {

    data() {
      return {
        institucion: []
      }
    },

    name: 'homeComponent',
    components: {
      'b-card': BCard,
      'b-card-text': BCardText,
      'b-button': BButton,
    },

    methods: {
      navigateTo() {
        this.$router.push('/institucion');
      }
    },

    mounted() {
      axios.get('http://localhost:3001/api/institucion')
      .then(response => {
        this.institucion = response.data
        console.log(this.institucion)
      })
      .catch(error => {
        console.log(error)
      })

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

      const link3 = document.createElement('link');
      link3.rel = 'stylesheet';
      link3.href = 'styles.css';
      document.head.appendChild(link3);

    }
  }
</script>