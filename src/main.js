import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import UUID from 'vue-uuid';
import router from './router'
Vue.use(UUID);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
