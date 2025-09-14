import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Start from './components/Start.vue';
import PersonSearch from './components/PersonSearch.vue';
import PersonManager from './components/PersonManager.vue';
import { useAuthStore } from './global/pinia/store';

const routes: RouteRecordRaw[] = [
    { path: '/start', name: 'start', component: Start },
    { path: '', redirect: { name: 'start' } },
    { path: "/person-manager", name: "Personenen Liste", component: PersonManager,  meta: { requiresAuth: true } },
    { path: "/person-search", name: "Personen Suche", component: PersonSearch,  meta: { requiresAuth: true } },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, left: 0, top: 70 };
        } else if (savedPosition) {
            return savedPosition;
        } else if (to.name !== from.name) {
            return { left: 0, top: 0 };
        }
        return {};
    },
});




router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.username) {
    next({ name: "start" });
  } else {
    next();
  }
});

export default router;