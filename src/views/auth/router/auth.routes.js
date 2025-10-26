const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('~/views/auth/pages/Login.vue'),
    meta: {
      noAuthRequires: true,
      layout: 'auth',
      title: 'Login',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('~/views/auth/pages/Register.vue'),
    meta: {
      noAuthRequires: true,
      layout: 'auth',
      title: 'Register',
    },
  },
  {
    path: '/verification',
    name: 'verification',
    component: () => import('~/views/auth/pages/TwoStepVerification.vue'),
    meta: {
      noAuthRequires: true,
      layout: 'auth',
      title: 'Verification',
    },
  },
];

export default routes;
