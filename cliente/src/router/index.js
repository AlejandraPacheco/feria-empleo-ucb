import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
  const routes = [
        // {
        //   path: '/',
        //   name: 'pruebaBackend',
        //   component: () => import('../components/pruebaAPI.vue')
        // },
    {
      path: '/',
      name: 'home',
      component: () => import('../components/homeComponent.vue')
    },
    {
      path: '/institucion',
      name: 'institucion',
      component: () => import('../components/newInstitucion.vue')
    },
    {
      path: '/reuniones/:id',
      name: 'reuniones',
      component: () => import('../components/reunionInstitucion.vue')
    },
    {
      path: '/reunionusuario/:id',
      name: 'reunionusuario',
      component: () => import('../components/registroUsuario.vue')
    },
    {
      path: '/reunion',
      name: 'reunion',
      component: () => import('../components/newReunion.vue')
    },
    {
      path: '/cronograma',
      name: 'cronograma',
      component: () => import('../components/cronograma2Component.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../informacionComponent.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/loginComponent.vue')
    },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
