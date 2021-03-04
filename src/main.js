/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2021-02-23 11:57:12
 * @LastAuthor: lizlong
 * @lastTime: 2021-03-04 14:25:29
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/plugins/element/element.js"; // 引入饿了么UI
import "@/plugins/datav/datav.js"; // 引入datav
import Contextmenu from "vue-contextmenujs"

Vue.use(Contextmenu);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
