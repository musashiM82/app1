import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from "vue"
import store from '../store';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:param?',
        name: 'Home',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "Home" */ "../layout/pages/Home.vue"))
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {

    if (to.name == "Home" && !(store as any).state.home) {
        import(/* webpackChunkName: "Home" */ "../store/homeStore").then((homeStore) => {
            (store as any).registerModule("home", homeStore.default);
            next();
        })
    } else {
        next()
    }
})

export default router;