import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import BlogPage from "@/views/BlogPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/blog',
        component: BlogPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;