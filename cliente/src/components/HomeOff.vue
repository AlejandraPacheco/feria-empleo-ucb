<template>
  <div>
      <!-- Navigation -->
      <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <div class="container">
            <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/10/Feria-de-empleo-final.jpg" width="140px">
            <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
                <router-link class="nav-link pr-3" to="/">Home</router-link>
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
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="item active">
          <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/10/logo-principal.png" width="2040px">
        </div>
        <div class="item">
          <img src="https://www.facebook.com/photo/?fbid=187693344142694&set=a.101343236111039&__cft__[0]=AZXKEGj4laeAg60tpHaU4a8fctKad6BpuilRpsptDfxV1bfFJyGSPCZt_fVMnkkplrvUB-jyRim4tyOnRC4x_-3kbp6LrYcXwecwbq5SMOlzaRiP7K8OPXT6lCDFNyVv7RiR0eeqpgbqBSDhWCr7XGXHz6KrlWOCxSkB7xlx9nBl8RGtrjyKXZ6A3k9UbU7FjcA&__tn__=EH-R" width="2040px">
        </div>
        <div class="item">
          <img src="https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/347822729_219654850824424_7415040116766170535_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=DyGnouD6-vgAX_FL47Z&_nc_ht=scontent.flpb2-2.fna&oh=00_AfBOUXwEseA_eHzGbLPO-bogQTNEVt15wLYgELV5kUX5fg&oe=647073EA" width="2000px">
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="contenedor">
      <div class="contenedor-nosotros">
        <p>SOBRE NOSOTROS</p>
        <div class="contenedor-nosotros-tarjetas">
          <div class="tarjeta">
            <img src="https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/314086168_111444941767535_3161762285713571093_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=SqyZVJlPgaEAX9d776f&_nc_ht=scontent.flpb2-2.fna&oh=00_AfBWbY1qEhmROTk-uYODkENn0C39hOggXenVUF0jyltRCA&oe=646F3DD0">
            <p>La feria del empleo</p>
            <p>Las ferias de empleo le brindan oportunidades de reunirse con representantes de muchos empleadores. El propósito de participar en una feria de empleo no es pedir trabajo, sino establecer relaciones que podrían llevarle a conseguir un empleo. La Feria del Empleo U.C.B. se realizó por primera vez el año 2019, con la participación de 24 instituciones a nivel nacional</p>
          </div>
          <div class="tarjeta">
            <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2022/08/web-Conferencia-Empleabilidad.jpg">
            <p>Talleres de Empleabilidad</p>
            <p>Los talleres de empleabilidad buscan mejorar las competencias que tienen los estudiantes para la inserción y desarrollo en un puesto de trabajo en el mercado laboral.</p>
          </div>
        </div>
      </div>
      <div class="contenedor-info">
        <p class="info-titulo">NUESTROS INICIOS</p>
        <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/10/logo-principal.png">
        <p class="info-texto">La Feria del Empleo U.C.B. se realizó por primera vez el año 2019, con la participación de 24 instituciones a nivel nacional y alrededor de 100 estudiantes de la U.C.B. Por la pandemia mundial, la segunda versión se realizó de manera virtual, en la misma participaron 8 empresas, más de 500 estudiantes y alrededor de 100 graduados. El 2021, la Feria convocó a las 22 instituciones más representativas de diferentes sectores y a 4 instituciones que apoyan a emprendedores.</p>
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
          <h2>Bloque N departamento de educación. Av 14 de Septiembre, calle 2, Obrajes, La Paz, Bolivia</h2>
        </div>
        <div class="columna">
          <h3>Nuestras redes</h3>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-whatsapp"></a>
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

body{
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
}

.barra-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: #048ABF;
}

.barra-navV{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: #08914a;
}

.barra-nav-pestanas{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    width: 600px;
    margin-right: 50px;
}

.barra-nav-pestanas li{
    color: #ffffff;
    list-style: none;
}

.barra-nav-pestanas li a{
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    padding: 20px;
}

.barra-nav img{
    margin-left: 50px;
}

.hero{
    object-fit: cover;
}

.contenedor{
    margin-left: 80px;
    margin-right: 80px;
}

.contenedor-nosotros{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    background-color: #ffffff;
    padding-bottom: 40px;
}

.contenedor-nosotros p{
    font-size: 70px;
    margin-top: 30px;
}

.contenedor-nosotros-tarjetas{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
}

.tarjeta{
    display: flex;
    flex-direction: column;
    width: 450px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px #cecece solid;
    border-radius: 5%;
}

.tarjeta img{
    object-fit: cover;
    width: 350px;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 5%;
}

.tarjeta p{
    font-size: 20px;
}

.contenedor-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
}

.info-titulo{
    margin-top: 30px;
    font-size: 70px;
    margin-bottom: 40px;
}

.info-texto{
    font-size: 20px;
    width: 60%;
    margin-top: 40px;
    padding-bottom: 50px;
}

.footer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.footer-columnas{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #048ABF;
    color: #ffffff;
}

.columna h3{
    font-size: 20px;
    font-style: italic;
}

.columna h2{
    font-size: 25px;
}

.contenedor-mueble{
    margin-left: 80px;
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
}

.fila{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.fila img{
    object-fit: cover;
    width: 450px;
    height: 450px;
}

.titulo-productos{
    font-size: 50px;
    margin-bottom: 50px;
}

.contacto-form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 550px;
    background-color: #ffffff;
    padding-left: 390px;
    padding-right: 80px;
    padding-top: 80px;
    padding-bottom: 80px;
    border-radius: 70px;
    width: 60%;
}

.contacto-form input{
    width:40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contacto-form label{
    width:40%;
    display: flex;
    align-items: center;
}

.contacto-boton{
    margin-top: 10px;
    border-radius: 5px;
    background-color: #048ABF;
    color: #ffffff;
}

.contacto-comentario{
    height: 100px;
}

.contenedor-mapa{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.contenedor-mapa h1{
    font-size: 80px;
    color: #0e1429;
}

iframe{
    margin-top: 40px;
    margin-bottom: 60px;
}

.fa {
    padding: 10px;
    font-size: 30px;
    width: 50px;
    text-align: center;
    text-decoration: none;
  }
  
  .fa:hover {
    opacity: 0.7;
  }
  
  .fa-facebook {
    background: #3B5998;
    color: white;
  }
  
  .fa-instagram {
    background: #eb6213;
    color: white;
  }

  .fa-whatsapp{
      background: #14ee00;
      color: #ffffff;
  }

.contenedor-logueo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.row{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.col{
    margin-bottom: 20px;
}

.footer-columnasV{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #05812a;
    color: #ffffff;
}

.barra-navR{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: #d00b0b;
}
.footer-columnasR{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #880505;
    color: #ffffff;
}
.barra-navM{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: #8518c9;
}
.footer-columnasM{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #450284;
    color: #ffffff;
}
.barra-navA{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: #fff700;
}
.footer-columnasA{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #b4b104;
    color: #ffffff;
}
</style>