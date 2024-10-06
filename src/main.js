import { createApp } from 'vue'
import './assets/styles/main.sass';
import App from './App.vue'

import router from './router'
import ElementPlus from'element-plus'
import 'element-plus/dist/index.css';
import store from './store/index.js';


const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');