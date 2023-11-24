<template>
  <div></div>
  <pre>
  background: yellowgreen;
  box-shadow: 0 0 0 10px #655,
              0 0 0 15px deeppink,
              0 2px 5px 15px rgba($color: 0, 0, 0, $alpha: 0.6);
</pre
  >
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
div {
  height: 100px;
  width: 100px;
  background: url("@/assets/image/maple.png") no-repeat bottom right #58a;
  background-position: right 20px bottom 10px;
}
</style>