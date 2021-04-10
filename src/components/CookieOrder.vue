<template>
  <div class="wrapper">
    <div class="cookies">
      <div class="cookie" v-for="cookie in cookies" :key="cookie.id">
        <div class="info">
          <h1>{{ cookie.name }}</h1>
        </div>
        <div class="image">
          <img :src="'/images/'+cookie.image">
        </div>
        <div class="price">
          <h2>{{ cookie.price }}</h2>
          <button class="auto"  type="button" @click="addToOrder(cookie)">Add to Order</button>
          <button class="auto" type="button" @click="removeCart(cookie)">Remove from Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieOrder',
  props: {
    cookies: Array
  },
  methods: {
    addToOrder(cookie){
      this.$root.$data.orderItems.push(cookie)
    },
    removeCart(cookie){
      let index = this.$root.$data.orderItems.indexOf(cookie)
      console.log(index)
      if(index >= 0){
        this.$root.$data.orderItems.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cookies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.cookie {
  margin: 50px 10px 10px;
  width: 200px;
}

.cookie img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.cookie .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #2c3e50;
  color: #000;
  height: 50px;
}

.info h1 {
  color: white;
  margin-top: 40px;
  font-size: 16px;
}

.info h2 {
  margin-top: 15px;
  font-size: 14px;
}

.info p {
  margin-top: 15px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  color: black;
  border: #2c3e50;
  border-radius: 15px;
}

.auto {
  margin-left: auto;
}
</style>