
<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <!-- <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/10/Feria-de-empleo-final.jpg" width="140px">
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Instituciones</router-link>
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
    </nav> -->
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>