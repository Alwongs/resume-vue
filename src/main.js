import { createApp } from 'vue';
import App from './App.vue';
import myFunctions from './functions';
import router from './router';



createApp(App).use(router).use(myFunctions).mount('#app')
