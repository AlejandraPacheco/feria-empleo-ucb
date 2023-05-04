import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
  const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/homeComponent.vue')
    },
  {
    path: '/cronograma',
    name: 'cronograma',
    component: () => import('../components/cronogramaComponent.vue')
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
