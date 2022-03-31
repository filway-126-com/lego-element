import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import CardDetail from '../views/CardDetail.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    requiredLogin?: boolean
    redirectAlreadyLogin?: boolean
    disableLoading?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
          meta: { title: 'Welcome to Vite + Vue3 + TS' },
        },
        {
          path: '',
          name: 'carddetail',
          component: CardDetail,
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from) => {
  const { title } = to.meta
  if (title) {
    document.title = title
  }
})

export default router
