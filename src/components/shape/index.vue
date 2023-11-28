<template>
  <div class="container">
    形状
    <card title="半透明边框"></card>
  </div>
</template>
<script>
import card from "@/components/card.vue";

export default {
  components: {
    card,

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