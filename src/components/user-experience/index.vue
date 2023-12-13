<template>
  <div class="container">
    <card title="扩大可点击区域"><one /></card>
    <card title="自定义复选框"><two /></card>
    <card title="通过模糊弱化背景"><three /></card>
    <card title="自定义下划线"><four /></card>
    <card title="文字凸起效果"><five /></card>
    <card title="环形文字"><six /></card>
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