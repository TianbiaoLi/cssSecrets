<template>
  <div class="container">
    <card title="半椭圆"><one /></card>
    <card title="平行四边形"><two /></card>
    <card title="菱形 基于变形"><three /></card>
    <card title="菱形 基于裁切路径"><four /></card>
    <card title="切角效果"><five /></card>
    <card title="切角效果 弧形"><six /></card>
    <card title="切角效果 裁切路径"><seven /></card>
    <card title="梯形效果"><eight /></card>
  </div>
</template>
<script>
import card from "@/components/card.vue";
import one from "./1.vue";
import two from "./2.vue";
import three from "./3.vue";
import four from "./4.vue";
import five from "./5.vue";
import six from "./6.vue";
import seven from "./7.vue";
import eight from "./8.vue";

export default {
  components: {
    card,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight
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