<template>
  <div class="container">
    <card title="半透明边框"><first /></card>
    <card title="多重边框"><second /></card>
    <card title="背景定位"><third /></card>
    <card title="半透明边框"><first /></card>
    <card title="多重边框"><second /></card>
    <card title="背景定位"><third /></card>
    <card title="半透明边框"><first /></card>
    <card title="多重边框"><second /></card>
    <card title="背景定位"><third /></card>
  </div>
</template>
<script>
import card from "@/components/card.vue";
import first from "./1.vue";
import second from "./2.vue";
import third from "./3.vue";

export default {
  components: {
    card,
    first,
    second,
    third,
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