import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/Todos.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/Mine.vue'),
    },
  ],
})

export default router
