import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
import SettingPage from "./views/SettingPage.vue";

// 路由
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/setting',
        component: SettingPage
    }
]

// 路由器
const rooter = createRouter({
    routes,
    history: createWebHistory()
})

export default rooter