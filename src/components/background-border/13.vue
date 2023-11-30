<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      使用css改动贴片尺寸需要修改四处代码,建议使用预处理器
    </template>
    <div class="bg">
      <div id="main"></div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail" v-html="htmlDetail"></pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ sassDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = `<div id="main"></div>`;
    const cssDetail = `background: #58a;
background-image: radial-gradient(tan 30%, transparent 0),
                  radial-gradient(tan 30%, transparent 0);
background-size: 30px 30px;
background-position: 0 0, 15px 15px;`;
    const sassDetail = `$base: #58a;
$size: 30px;
background: $base;
background-image: radial-gradient(tan 30%, transparent 0),
                  radial-gradient(tan 30%, transparent 0);
background-size: $size $size;
background-position: 0 0, calc($size / 2) calc($size / 2);`;
    return { htmlDetail, cssDetail,sassDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";

#main {
  width: 12.5rem;
  $base: #58a;
  $size: 1.875rem;
  background: $base;
  background-image: radial-gradient(tan 30%, transparent 0),
    radial-gradient(tan 30%, transparent 0);
  background-size: $size $size;
  background-position: 0 0, calc($size / 2) calc($size / 2);
}
</style>