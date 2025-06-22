import { createRouter, createWebHistory } from 'vue-router'

// Importação das views (telas)
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Pomodoro from '../views/Pomodoro.vue'

// Definição das rotas
const routes = [
  {
    path: '/',
    redirect: '/login' // Redireciona para tela de login ao acessar "/"
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/pomodoro',
    name: 'Pomodoro',
    component: Pomodoro
  }
]

// Criação e exportação do router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
