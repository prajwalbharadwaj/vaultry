import Aura from "@primeuix/themes/aura";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";

import { createApp } from "vue";
import PrimeComponent from "~/common/lib/primevue.js";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      // prefix: 'p',
      darkModeSelector: ".dark",
      cssLayer: false
    }
  }
});
app.component("PButton", PrimeComponent.Button);

app.mount("#app");
