<template>
    <div class="vue-tempalte">
        <!-- Navigation -->
        <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
            <div class="container">
                <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/10/Feria-de-empleo-final.jpg" width="140px">
                <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                    <router-link class="nav-link pr-3" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="btn btn-outline-primary" to="/logincontacto">Contactos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link pr-3" to="/login">Log In</router-link>
                </li>
                </ul>
            </div>
        </nav>
        <form @submit.prevent="login">
            <h3>Sign In</h3>
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control form-control-lg" v-model="username" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="password" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password?</router-link>
            </p>
            <div class="social-icons">
                <ul>
                <li><a href="#"><i class="fa fa-google"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>
<script>
  import axios from 'axios';

    export default {
    data() {
        return {
        username: '',
        password: ''
        };
    },
    methods: {
        login() {
        const loginData = {
            username: this.username,
            password: this.password
        };

        axios.post('http://localhost:3001/login', loginData)
            .then(response => {
            const user = response.data;
            console.log(user.role);
            if (user.role === 'admin') {
                this.$router.push('/adminhome');
            } else if (user.role === 'user') {
                this.$router.push('/userhome');
            } else {
                // Redirigir a una página de error o mostrar un mensaje de error en el formulario
                console.error('Rol de usuario inválido');
            }
            })
            .catch(error => {
                console.error(error);
                alert('Credenciales inválidas');
                //Setear los campos del formulario a vacío
                this.username = '';
                this.password = '';
            // Manejar el error de la llamada a la API, mostrar un mensaje de error en el formulario, etc.
            });
        }
    }
    };
</script>