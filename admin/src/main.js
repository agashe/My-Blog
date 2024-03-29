/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import RouterPrefetch from "vue-router-prefetch";
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import CKEditor from "@ckeditor/ckeditor5-vue2";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import store from "./store/index";
import axios from "axios";
import "./registerServiceWorker";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "http://localhost:3000/api/v1/";

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(CKEditor);
Vue.use(Vuex);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
