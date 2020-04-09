import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import UUID from 'vue-uuid';
import router from './router'
import vuetify from './plugins/vuetify';
Vue.use(UUID);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
