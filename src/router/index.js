import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdvantagesView from '../views/AdvantagesView.vue';
import RatesView from '../views/RatesView.vue';
import PromotionsView from '../views/PromotionsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/advantages',
            name: 'advantages',
            component: AdvantagesView,
        },
        {
            path: '/rates',
            name: 'rates',
            component: RatesView,
        },
        {
            path: '/promotions',
            name: 'promotions',
            component: PromotionsView,
        },
    ],
});

export default router;
