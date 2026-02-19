import { createRouter, createWebHistory } from 'vue-router';
import AuthRoute from '~/views/auth/router/auth.routes.js';

const routes = [
  ...AuthRoute,
  {
    path: '/',
    name: 'dashboard',
    component: () => import('~/views/dashboard/Dashboard.vue'),
    meta: {
      noAuthRequires: true,
      title: 'Dashboard',
    },
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import('~/views/transactions/Transactions.vue'),
    meta: {
      noAuthRequires: true,
      title: 'Transactions',
    },
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('~/views/settings/Settings.vue'),
    meta: {
      noAuthRequires: true,
      title: 'Settings',
    },
    children: [
      {
        path: '',
        redirect: { name: 'settings-preferences' },
      },
      {
        path: 'preferences',
        name: 'settings-preferences',
        component: () => import('~/views/settings/Preferences.vue'),
        meta: { title: 'Preferences' },
      },
      {
        path: 'account',
        name: 'settings-account',
        component: () => import('~/views/settings/SettingsAccount.vue'),
        meta: { title: 'Account' },
      },
      {
        path: 'security',
        name: 'settings-security',
        component: () => import('~/views/settings/SettingsSecurity.vue'),
        meta: { title: 'Security' },
      },
      {
        path: 'privacy',
        name: 'settings-privacy',
        component: () => import('~/views/settings/SettingsPrivacy.vue'),
        meta: { title: 'Privacy' },
      },
      {
        path: 'integrations',
        name: 'settings-integrations',
        component: () => import('~/views/settings/SettingsIntegrations.vue'),
        meta: { title: 'Integrations' },
      },
    ],
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
