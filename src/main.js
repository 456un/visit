
import { createApp } from 'vue'
import { createHead } from "@vueuse/head";
import App from './App.vue'
import './assets/styles/global.scss';
import router from './route/route.js';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);

app.mount('#app');
