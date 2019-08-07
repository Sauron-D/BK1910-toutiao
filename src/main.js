import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import "./common/components/index.js"
import vueTouch from "vue-touch";
Vue.config.productionTip = false;
Vue.use(vueTouch,{name:'v-touch'});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
