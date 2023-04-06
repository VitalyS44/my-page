import './styles/index.scss';
import * as Vue from 'vue';
import App from './components/App.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

Vue.createApp(App).use(pinia).mount('#root');
