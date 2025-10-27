import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';

import { createApp } from 'vue';
import PrimeComponent from '~/common/lib/primevue.js';
import App from './App.vue';
import router from './router';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      // prefix: 'p',
      darkModeSelector: '.dark',
      cssLayer: false,
    },
  },
});
app.component('PButton', PrimeComponent.Button);
app.component('PInputOtp', PrimeComponent.InputOtp);
app.component('PInputText', PrimeComponent.InputText);
app.component('PPassword', PrimeComponent.Password);
app.component('PBreadcrumb', PrimeComponent.Breadcrumb);
app.component('PChart', PrimeComponent.Chart);
app.component('PMeterGroup', PrimeComponent.MeterGroup);
app.component('PColumn', PrimeComponent.Column);
app.component('PDataTable', PrimeComponent.DataTable);

app.directive('tooltip', PrimeComponent.Tooltip);

app.mount('#app');
