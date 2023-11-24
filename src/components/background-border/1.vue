<template>
<div>半透明边框</div>
  <div id="main"></div>
  <pre>
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: white;
  background-clip: padding-box;
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
#main {
  height: 100px;
  width: 100px;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  // background: white;
  background: url("@/assets/image/maple.png");
  background-clip: padding-box;
}
</style>