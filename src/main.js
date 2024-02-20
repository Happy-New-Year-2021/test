import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import router from "./router";
import {createPinia} from 'pinia'
import VueTheMask from 'vue-the-mask'

import "primevue/resources/themes/aura-light-green/theme.css";

const pinia = createPinia()

createApp(App)
  .use(PrimeVue)
  .use(router)
  .use(pinia)
  .use(VueTheMask)
  .component("Button", Button)
  .component("InputText", InputText)
  .component("FloatLabel", FloatLabel)
  .mount("#app");
