import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'
import http from "./http";
import axios from "axios";
import dayjs from "dayjs";
import lodash from "lodash";
<<<<<<< HEAD
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
=======
>>>>>>> origin/master

Vue.prototype.$dayjs=dayjs;
Vue.prototype.$lodash=lodash;
Vue.prototype.$axios = http;
<<<<<<< HEAD

=======
>>>>>>> origin/master
Vue.config.productionTip = false;
Vue.use(ElementUI)
axios.defaults.timeout = 30000; // 设置超时时间
// 过滤请求结果 只返回结果的data
axios.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error);
    }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
