import { createRouter, createWebHistory } from 'vue-router'
import ProjectList from '../pages/ProjectList.vue'
import SkillPage from '../pages/SkillPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: SkillPage
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectList
    },
    {
        path: '/project/:id',
        name: 'project',
        component: () => import('../pages/ProjectPage.vue')    
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/pages/NotFoundPage.vue'),
    },       
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/NotFoundPage.vue'),
    },   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next();
})

export default router
