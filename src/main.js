import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock.js";

let data = {
  cookies: mock,
  currentID: 1,
  orderItems: [],
  orders: [],
  finalItems: [],
  getOrders() {
    return this.orders;
  },
  getOrderItems(){
    return this.orderItems;
  },
  getFinalItems(){
    return this.finalItems;
  },
  addOrder(name, number, email, additional, bag) {
    this.orders.push({
      id: this.currentID,
      name: name,
      number: number,
      email: email,
      additional: additional,
      bag: bag,
    });

    this.currentID += 1;
   // console.log(goods);
    console.log(email);
    console.log(this.orders);
  }
}

Vue.config.productionTip = false;

new Vue({
  router,
  data: data,
  render: (h) => h(App),
}).$mount("#app");
