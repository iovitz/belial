import TabbarPages from '@/views/TabbarPages.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/tabbar',
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: TabbarPages,
      redirect: '/tabbar/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home/Home.vue'),
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: () => import('@/views/Recommend/Recommend.vue'),
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('@/views/Mine/Mine.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue'),
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('@/views/Play/Play.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search/Search.vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound/NotFound.vue') },
  ],
})

export default router
