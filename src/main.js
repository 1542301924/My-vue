import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由配置
import '@fortawesome/fontawesome-free/css/all.min.css'; // 引入fontawesome字体库

createApp(App)
  .use(router) // 使用路由
  .mount('#app');
