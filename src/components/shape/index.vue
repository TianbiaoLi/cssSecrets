<template>
  <div class="container">
    <card title="半椭圆"><one /></card>
    <card title="多重边框 box-shadow"><two /></card>
    <card title="多重边框 outline"><three /></card>
  </div>
</template>
<script>
import card from "@/components/card.vue";
import one from "./1.vue";
import two from "./2.vue";
import three from "./3.vue";

export default {
  components: {
    card,
    one,
    two,
    three
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>