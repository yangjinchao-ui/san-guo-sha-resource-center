import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Record from '../views/Record.vue'
import Info from '../views/Info.vue'
import Guide from '../views/Guide.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/record', component: Record },
    { path: '/info', component: Info },
    { path: '/guide', component: Guide }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router