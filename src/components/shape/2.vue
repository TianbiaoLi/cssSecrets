<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      将伪元素的所有偏移量设置为0,水平垂直方向可以被拉伸至宿主元素的尺寸<br />
      伪元素的变形效果不影响元素内容<br />
      为伪元素设置背景后,会覆盖内容,通过设置z-index解决
    </template>
    <div class="bg">
      <div id="main">文字</div>
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
    const cssDetail = `position: relative;
text-align: center;
&::before {
  content: "";
  position: absolute;
  top: 0;right: 0;bottom: 0;left: 0;
  z-index: -1;
  background: #58a;
  transform: skew(-45deg);`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  position: relative;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #58a;
    transform: skew(-45deg);
  }
}
</style>