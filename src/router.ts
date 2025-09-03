import { createRouter, createWebHistory } from 'vue-router'

import Layout from './components/Layout.vue'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
    ],
  },
  // {
  //   path: '/login',
  //   name: 'LogIn',
  //   component: Login,
  //   meta: { requiresAuth: false },
  // },
  // {
  //   path: '/signup',
  //   name: 'SignUp',
  //   component: Signup,
  //   meta: { requiresAuth: false },
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: NotFound,
  //   meta: { requiresAuth: false },
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
