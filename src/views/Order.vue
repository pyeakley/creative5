<template>
  <div>
    <h1>Create an Order Request</h1>
    <form v-if="creating" @submit.prevent="addOrder">
      <input v-model="name" placeholder="Name">
      <p></p>
      <input v-model="number" placeholder="Phone number">
      <p></p>
      <input v-model="email" placeholder="Email">
      <p></p>
      <CookieOrder :cookies="cookies"/>
      <p></p>
      <textarea v-model="additional" placeholder="Please add any additional information"/>
      <br />
      <p>Your order has {{ numberItems }} item(s) in it</p>

      <button type="submit">Submit</button>
    </form>
    <div v-else>
      <p>Thank you for your order, we will contact you once we are able to process it.</p>
      <p><a @click="toggleForm" href="#">Order again</a></p>
    </div>
  </div>
</template>

<script>
import CookieOrder from "../components/CookieOrder.vue"
export default {
  name: "Order",
  components: {
    CookieOrder
  },
  data() {
    return {
      creating: true,
      name: '',
      number: '',
      email: '',
      additional: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addOrder() {
      this.$root.$data.addOrder(this.name, this.number, this.email, this.additional, this.$root.$data.orderItems);
      this.name = "";
      this.number = "";
      this.email = "";
      this.additional = "";
      this.creating = false;
      this.$root.$data.orderItems = [];
    },
  },
  computed: {
    cookies() {
      return this.$root.$data.cookies;
    },
    numberItems() {
      return this.$root.$data.orderItems.length;
    }
  },
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 300px;
}

textarea {
  margin-top: 50px;
  font-size: 1.2em;
  width: 100%;
  max-width: 400px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>