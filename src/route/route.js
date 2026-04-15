import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import BlogMenuPage from "@/views/BlogMenuPage.vue";
import ServicePage from "@/views/ServicePage.vue";
import DonatePage from "@/views/DonatePage.vue";
import BlogPostPage from "@/views/BlogPostPage.vue";
import PartnerPage from "@/views/PartnerPage.vue";
import Bitrix24ModulesPage from "@/views/Bitrix24ModulesPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/partner',
        component: PartnerPage,
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
        path: '/bitrix24-module',
        component: Bitrix24ModulesPage,
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
