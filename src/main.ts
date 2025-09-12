import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import piniaPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersistedstate);

app.use(pinia)
app.use(router)
app.mount('#app')
app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});
