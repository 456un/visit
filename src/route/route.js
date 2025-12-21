import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import BlogMenuPage from "@/views/BlogMenuPage.vue";
import ServicePage from "@/views/ServicePage.vue";
import DonatePage from "@/views/DonatePage.vue";
import BlogPostPage from "@/views/BlogPostPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/blog',
        component: BlogMenuPage,
    },
    {
        path: '/blog/:slug',
        name: 'blog.post',
        component: BlogPostPage,
        props: true,
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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
});

export default router;
