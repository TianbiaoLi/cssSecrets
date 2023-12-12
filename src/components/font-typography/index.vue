<template>
  <div class="container">
    <card title="连字符断行"><one /></card>
    <card title="插入换行"><two /></card>
    <card title="文本行斑马条纹"><three /></card>
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