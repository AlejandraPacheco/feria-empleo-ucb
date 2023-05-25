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
      <center>
      <div class="contenedor-pasteles">
        <h1 class="titulo-productos">INSTITUCIONES</h1>

        <div class="row">
          <div class="col-md-6" v-for="(institucion, index) in institucion" :key="index">
            <b-card>
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
                    <b-button @click="verReuniones(institucion.id)" variant="primary">Ver reuniones</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>

        <div class="fixed-bottom d-flex justify-content-end mr-3 mb-3">
          <b-button pill variant="info" class="ml-auto" to="/admininstitucion" @click="navigateTo">Crear Nuevo</b-button>
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
  </style>

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
        this.$router.push('/admininstitucion');
      },
      verReuniones(id) {
        this.$router.push({ name: 'reuniones', params: { id: id } });
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

    }
  }
</script>