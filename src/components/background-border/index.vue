<template>
  <div class="container">
    <card><first /></card>
    <card><second /></card>
    <card><third /></card>
    <card><first /></card>
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
import third from "./3.vue";

export default {
  components: {
    card,
    first,
    second,
    third,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss">
</style>