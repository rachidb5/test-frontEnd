import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Toast from "vue-toastification";
import "@mdi/font/css/materialdesignicons.css";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false
Vue.use(Toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
