<template>
  <div class="container">
    <card/>
    <!-- <div class="card">
      <first />
    </div>
    <div class="card">
      <second />
    </div>
    <div class="card">
      <three />
    </div>
    <div class="card"></div>
    <div class="card"></div> -->
  </div>
</template>
<script>
import card from "@/components/card.vue"
import first from "./1.vue";
import second from "./2.vue";
import three from "./3.vue";

export default {
  components: {
    card,
    first,
    second,
    three,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss">
</style>