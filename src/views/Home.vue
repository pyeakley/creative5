<template>
  <div>
    <FirstPage v-if="user" />
    <Login v-else />
  </div>
</template>

<script>
import FirstPage from "@/components/FirstPage.vue";
import Login from "@/components/Login.vue";

export default {
  name: 'Home',
  components: {
    FirstPage,
    Login,
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>
