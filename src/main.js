import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import flexible from './assets/js/flexible'

import Pagination from "@/components/Pagination";
Vue.component('Pagination', Pagination)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(flexible)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
