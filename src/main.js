// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from "axios"
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

import "./common/stylus/index.styl";

Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

//路由配置

const router = new VueRouter({
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller},
    //{path:'*',redirect:'/goods'}  //将默认路由设置为/goods
  ],
  linkActiveClass: 'tab-active'
});

router.push({path: '/goods'}); //或者直接设置为/goods

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router: router
});
