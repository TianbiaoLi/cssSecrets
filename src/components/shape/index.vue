<template>
  <div class="container">
    <card title="半椭圆"><one /></card>
    <card title="平行四边形"><two /></card>
    <card title="菱形 基于变形"><three /></card>
    <card title="菱形 基于裁切路径"><four /></card>
  </div>
</template>
<script>
import card from "@/components/card.vue";
import one from "./1.vue";
import two from "./2.vue";
import three from "./3.vue";
import four from "./4.vue";

export default {
  components: {
    card,
    one,
    two,
    three,
    four,
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