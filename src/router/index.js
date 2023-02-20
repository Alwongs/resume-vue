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

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0

})

export default router
