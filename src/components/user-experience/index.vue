<template>
  <div class="container">
    <card title="扩大可点击区域"><one /></card>
    <card title="自定义复选框"><two /></card>
    <card title="滚动提示"><three /></card>
    <card title="交互式图片对比"><four /></card>
  </div>
</template>
<script>
import card from "@/components/card-font.vue";
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