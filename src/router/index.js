import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/practical/:id',
      name: 'practical',
      component: () => import('../views/PracticalPage.vue'),
      props: true,
    },
    {
      path: '/lectures/:id',
      name: 'lecture',
      component: () => import('../views/LecturesPage.vue'),
      props: true,
    },
    {
      path: '/distance-learning',
      name: 'distance-learning',
      component: () => import('../views/DistanceLearningPage.vue'),
    }
  ]
})

export default router
