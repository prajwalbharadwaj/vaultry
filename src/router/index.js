import { createRouter, createWebHistory } from 'vue-router';
import AuthRoute from '~/views/auth/router/auth.routes.js';

const routes = [
  ...AuthRoute,
  {
    path: '/',
    name: 'dashboard',
    component: () => import('~/views/dashboard/Dashboard.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if (
    //   to?.name?.includes('dashboard')
    //   && from?.name?.includes('dashboard')
    //   && (
    //     Object.keys(from?.query || {}).length
    //     || Object.keys(to?.query || {}).length
    //   )
    // ) {
    //   return savedPosition;
    // }

    // always scroll to top
    return { top: 0 };
  },
});

export default router;
