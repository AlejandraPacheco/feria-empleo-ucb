import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
  const routes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/loginComponent.vue')
    },
    {
      path: '/',
      name: 'homeoff',
      component: () => import('../components/HomeOff.vue')
    },
    {
      path: '/logincontacto',
      name: 'logincontacto',
      component: () => import('../logininformacionComponent.vue')
    },

    //admin
    {
      path: '/adminhome',
      name: 'adminhome',
      component: () => import('../components/admin/homeComponent.vue')
    },
    {
      path: '/admininstitucion',
      name: 'admininstitucion',
      component: () => import('../components/admin/newInstitucion.vue')
    },
    {
      path: '/reuniones/:id',
      name: 'reuniones',
      component: () => import('../components/admin/reunionInstitucion.vue')
    },
    {
      path: '/reunionusuario/:id',
      name: 'reunionusuario',
      component: () => import('../components/admin/registroUsuario.vue')
    },
    {
      path: '/adminreunion',
      name: 'adminreunion',
      component: () => import('../components/admin/newReunion.vue')
    },
    {
      path: '/admincronograma',
      name: 'admincronograma',
      component: () => import('../components/admin/cronograma2Component.vue')
    },
    {
      path: '/admincontacto',
      name: 'admincontacto',
      component: () => import('../components/admin/informacionComponent.vue')
    },

    //user
    {
      path: '/userhome',
      name: 'userhome',
      component: () => import('../components/user/homeComponent.vue')
    },
    {
      path: '/userinstitucion',
      name: 'userinstitucion',
      component: () => import('../components/user/newInstitucion.vue')
    },
    {
      path: '/reunionesuser/:id',
      name: 'reunionesuser',
      component: () => import('../components/user/reunionInstitucion.vue')
    },
    {
      path: '/reunionuser/:id',
      name: 'reunionuser',
      component: () => import('../components/user/registroUsuario.vue')
    },
    {
      path: '/reunion',
      name: 'reunion',
      component: () => import('../components/user/newReunion.vue')
    },
    {
      path: '/usercronograma',
      name: 'usercronograma',
      component: () => import('../components/user/cronograma2Component.vue')
    },
    {
      path: '/usercontacto',
      name: 'usercontacto',
      component: () => import('../components/user/informacionComponent.vue')
    },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
