<template>
    <div>
     <div>
      <h1>Registro de usuario</h1>
     </div> 
      <b-container fluid>
        <b-row>
          <b-col cols="12" sm="6">
            <b-form-group label="Nombre Completo:">
              <b-form-input v-model="nombre" required></b-form-input>
            </b-form-group>
            <b-form-group label="Carnet de Identidad:">
              <b-form-input v-model="ci" required></b-form-input>
            </b-form-group>
            <b-form-group label="Carrera:">
              <b-form-input v-model="carrera" required></b-form-input>
            </b-form-group>
            <b-form-group label="Celular:">
              <b-form-input v-model="celular" required></b-form-input>
            </b-form-group>
            <b-form-group label="Correo electronico:">
              <b-form-input v-model="email" required></b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="submitForm">Confirmar registro</b-button>
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
        ci: '',
        carrera: '',
        celular: '',
        email: '',
        };
    },
    mounted(){
        const id = this.$route.params.id;
        const cant_personas = this.$route.params.cant_personas;
        // Utiliza el ID para cargar las reuniones específicas de la institución
        console.log('Este es el id de la reunion: '+id+' y la cantidad de personas: '+cant_personas);
    },
    methods: {
        submitForm() {
            // Crear un objeto con los datos del formulario
            const data = {
            nombre: this.nombre,
            ci: this.ci,
            carrera: this.carrera,
            celular: this.celular,
            email: this.email,
            };

            // Enviar los datos al servidor usando Axios
            // Primero, guardas el registro de usuario
            axios.post('http://localhost:3001/guardar-usuario', data)
                .then(response => {
                    // console.log(response.data_usuario);
                    // const userId = response.data_usuario.id; // Obtienes el ID generado para el usuario

                    // const id = this.$route.params.id;
                    // // Luego, guardas la relación entre el usuario y la reunión en otra tabla
                    // const data = {
                    //     reunion_id: id,
                    //     usuario_id: userId
                    // };

                    // axios.post('http://localhost:3001/guardar-reunionusuario', data)
                    // .then(response => {
                    //     console.log(response.data);

                    // })
                    // .catch(error => {
                    //     console.error('Error al guardar la relación', error);
                    // });
                    console.log(response.data);
                    // Realizar alguna acción después de guardar los datos
                })
                .catch(error => {
                    console.error(error);
                    console.log(data);
                    // Realizar alguna acción si ocurre un error al guardar los datos
                });

            // vemos los datos guardados
            axios.get('http://localhost:3001/api/usuario') 
                .then(response => {
                    console.log(response.data)
                    const data = response.data;
                    console.log(data[data.length-1].id);
                    const userId = data[data.length-1].id;
                    const id = this.$route.params.id;
                    // Luego, guardas la relación entre el usuario y la reunión en otra tabla
                    const data_usuario = {
                        reunion_id: id,
                        usuario_id: userId
                    };
                    console.log(data_usuario);

                    axios.post('http://localhost:3001/guardar-reunionusuario', data_usuario)
                    .then(response => {
                        console.log(response.data);
                        // Realizar alguna acción después de guardar los datos
                    })
                    .catch(error => {
                        console.error(error);
                        console.log(data_usuario);
                        // Realizar alguna acción si ocurre un error al guardar los datos
                    });
                })
                .catch(error => {
                    console.log(error)
                })

                const id = this.$route.params.id;
                console.log('Este es el id de la reunion antes del put: '+id);
                console.log('');
                // Actualizamos la cantidad de personas en la reunión
                axios.get(`http://localhost:3001/api/reunion/${id}`)
                    .then(response => {
                        console.log('Este es el id de la reunion antes del put: '+id);
                        console.log('Estamos en el PUT');
                        const data = response.data;
                        console.log(data);

                        // Verificar si la propiedad "cant_personas" existe y tiene un valor válido
                        if ('cant_personas' in data && data.cant_personas !== null) {
                        const cant_personas = data.cant_personas;
                        console.log(cant_personas);
                        const data_reunion = {
                            cant_personas: cant_personas - 1
                        };
                        console.log('Restando 1: ' + data_reunion);

                        axios.put(`http://localhost:3001/api/reunion/${id}`, data_reunion)
                            .then(response => {
                            console.log(response.data);
                            // Realizar alguna acción después de guardar los datos
                            })
                            .catch(error => {
                            console.error(error);
                            console.log(data_reunion);
                            // Realizar alguna acción si ocurre un error al guardar los datos
                            });
                        } else {
                        console.log('La propiedad "cant_personas" no existe o tiene un valor nulo');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });



            // // Registramos reunion_id y usuario_id en la tabla reunion_usuario
            // axios.post('http://localhost:3001/guardar-reunionusuario', data_usuario)
            // .then(response => {
            //     console.log(response.data_usuario);
            //     // Realizar alguna acción después de guardar los datos
            // })
            // .catch(error => {
            //     console.error(error);
            //     console.log(data_usuario);
            //     // Realizar alguna acción si ocurre un error al guardar los datos
            // });
        }
    }
  };
  </script>
  