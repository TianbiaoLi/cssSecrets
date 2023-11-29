<template>
  <div class="container">
    <card title="半透明边框"><one /></card>
    <card title="多重边框 box-shadow"><two /></card>
    <card title="多重边框 outline"><three /></card>
    <card title="背景定位 bg-position"><four /></card>
    <card title="背景定位 bg-origin"><four /></card>
    <card title="背景定位 calc()"><four /></card>
    <card title="背景定位 calc()"><four /></card>
    <card title="背景定位 calc()"><four /></card>
    <card title="背景定位 calc()"><four /></card>
    <card title="背景定位 calc()"><four /></card>
    <card title="背景定位 calc()"><four /></card>
    <card title="背景定位 calc()"><four /></card>
    <card title="背景定位 calc()"><four /></card>
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
  setup() {
    return {};
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