<template>
  <div>
    <h1>Current Orders</h1>
    <div v-for="order in orders" v-bind:key="order.id">
      <hr>
      <div class="order">
        <div class="orderInfo">
          <p><b>Name: </b>{{order.name}}</p>
          <p><b>Phone number: </b>{{order.number}}</p>
          <p><b>Email: </b>{{order.email}}</p>
          <p><b>Additional details/requests:</b>{{order.additional}}</p>
          <p><b>Item(s) Included:</b></p>
          <div v-for="item in order.bag" v-bind:key="item.id">
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <h2 class = "title">Contact Us</h2>
      <p>You can get ahold of us at help.bullseyebakery@gmail.com</p>
      <p class = "line2">Repository: https://github.com/pyeakley/creative3</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {}
  },
  computed: {
    orders() {
      return this.$root.$data.getOrders();
    },
    orderItems(){
      return this.$root.$data.getOrderItems();
    }
  }
};
</script>

<style>
.contact {
  border-top: 1px solid #fd4345;
  padding: 50px;
}
</style>
