import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock.js";

let data = {
  user: null,
  cookies: mock,
  currentID: 1,
  orderItems: [],
}

Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
