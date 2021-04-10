<template>
  <div id="app">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.jpg">
      </router-link>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Order">Order</router-link>
    </div>
    <router-view />
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fd4345;
}
#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}
.contact {
  text-align: center;
  padding: 20px;
}

</style>
