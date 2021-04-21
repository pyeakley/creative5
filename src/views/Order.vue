<template>
  <div>
    <Order v-if="user" />
    <LogPrompt v-else />
  </div>
</template>


<script>

import Order from "@/components/Order.vue";
import LogPrompt from "@/components/LogPrompt.vue";

export default {
  name: 'Home',
  components: {
    LogPrompt,
    Order,
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>
