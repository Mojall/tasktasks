import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import MyTasks from '../components/MyTasks.vue';
import OtherTasks from '../components/OtherTasks.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/mytasks',
        name: 'MyTasks',
        component: MyTasks,
    },
    {
        path: '/othertasks',
        name: 'OtherTasks',
        component: OtherTasks,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
