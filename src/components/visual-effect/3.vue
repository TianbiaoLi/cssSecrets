<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>两个单侧投影叠加</template>
    <div class="bg">
      <div id="main"></div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail" v-html="htmlDetail"></pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ cssDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = '<div id="main"></div>';
    const cssDetail = `box-shadow: 5px 0 5px -5px,-5px 0 5px -5px;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
$shadowW: 0.3125rem;
#main {
  background: orange;
  box-shadow: $shadowW 0 $shadowW (-$shadowW),
    (-$shadowW) 0 $shadowW (-$shadowW);
}
</style>