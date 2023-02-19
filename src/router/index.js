import { createRouter, createWebHistory } from 'vue-router'

import ProjectList from '../pages/ProjectList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProjectList
  },
  {
    path: '/project/:id',
    name: 'project',
    component: () => import('../pages/ProjectPage.vue')    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
