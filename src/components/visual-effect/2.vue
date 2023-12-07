<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      相邻两侧投影<br />
      设置<strong>收缩半径等于偏移量等于扩张半径的一半</strong>,刚好将阴影藏到主体后面
    </template>
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
    const cssDetail = `box-shadow: 5px 5px 10px -5px;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
$shadowW: 0.3125rem;
#main {
  background: orange;
  box-shadow: $shadowW $shadowW ($shadowW * 2) (-$shadowW);
}
</style>