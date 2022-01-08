import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../Pages/Home.vue'
import Details from '../Pages/Details.vue'

const routes: Array<any> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children:[{
            path: 'details',
            name: 'details',
            component: Details,
        }]
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router