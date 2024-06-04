import {createMemoryHistory, createRouter} from "vue-router";
import catalog from '../components/Catalog.vue';
import profile from '@/components/UserProfile.vue'

const routes = [
    { path: '/'},
    { path: '/catalog', component: catalog },
    { path: '/profile', component: profile }
]


const router = new createRouter({
    history: createMemoryHistory(),
    routes: routes
})

export default router