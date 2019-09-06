// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import qs from 'qs'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import echarts from 'echarts'
import axios from 'axios'
import cookie from '../static/js/cookie'
import '../static/js/index';
import Vuex from 'vuex';
import store from '../store'



axios.defaults.baseURL = "http://192.168.12.43:8001"
Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(axios);
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$cookie = cookie;
Vue.use(Vuex);
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: {
//     App
//   },
//   template: '<App/>'
// })

new Vue({
  router,
  store,
  render: h => h(App)
  }).$mount('#app')