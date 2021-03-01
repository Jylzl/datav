import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/plugins/element/element.js"; // 引入饿了么UI
import "@/plugins/datav/datav.js"; // 引入datav

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
