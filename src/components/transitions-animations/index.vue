<template>
  <div class="container">
    <card title="缓动效果"><one /></card>
    <card title="弹性过渡"><two /></card>
    <card title="闪烁效果"><three /></card>
    <card title="打字动画"><four /></card>
    <card title="状态平滑的动画"><five /></card>
    <card title="环形路径平移"><six /></card>
  </div>
</template>
<script>
import card from "@/components/card-font.vue";
import one from "./1.vue";
import two from "./2.vue";
import three from "./3.vue";
import four from "./4.vue";
import five from "./5.vue";
import six from "./6.vue";

export default {
  components: {
    card,
    one,
    two,
    three,
    four,
    five,
    six
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