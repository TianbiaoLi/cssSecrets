<template>
  <div class="container">
    <card title="单侧投影"><one /></card>
    <card title="临边投影"><two /></card>
    <card title="双侧投影"><three /></card>
    <card title="不规则投影"><four /></card>
    <card title="切角效果"><five /></card>
    <card title="切角效果 弧形"><six /></card>
    <card title="切角效果 裁切路径"><seven /></card>
    <card title="梯形效果"><eight /></card>
    <card title="饼图 动画方案"><nine /></card>
    <card title="饼图 SVG方案"><ten /></card>
    <card title="染色效果 滤镜"><eleven /></card>
    <card title="染色效果 混合"><twelve /></card>
    <card title="毛玻璃"><thirteen /></card>
    <card title="折角效果"><fourteen /></card>
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
import nine from "./9.vue";
import ten from "./10.vue";
import eleven from "./11.vue";
import twelve from "./12.vue";
import thirteen from "./13.vue";
import fourteen from "./14.vue";

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
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen
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