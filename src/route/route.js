import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import BlogPage from "@/views/BlogPage.vue";
import ServicePage from "@/views/ServicePage.vue";
import DonatePage from "@/views/DonatePage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/blog',
        component: BlogPage,
    },
    {
        path: '/service',
        component: ServicePage,
    },
    {
        path: '/donate',
        component: DonatePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
