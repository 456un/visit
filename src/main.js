
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.scss';
import router from './route/route.js';

const app = createApp(App);
app.use(router);
app.mount('#app');
