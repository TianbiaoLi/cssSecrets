<template>
  <div class="container">
    <card title="自适应内部元素"><one /></card>
    <card title="根据兄弟元素数量设置样式"><two /></card>
    <card title="根据兄弟元素数量范围匹配元素"><three /></card>
    <card title="满幅背景 定宽内容"><four /></card>
    <card title="垂直居中 绝对定位"><five /></card>
    <card title="垂直居中 Flexbox"><six /></card>
    <card title="紧贴底部的页脚"><seven /></card>
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
import seven from "./7.vue";

export default {
  components: {
    card,
    one,
    two,
    three,
    four,
    five,
    six,
    seven
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