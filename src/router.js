import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import ContactPage from './views/ContactPage.vue';

// 定义路由
const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage }
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
