<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      box-shadow产生的阴影与原始元素的<strong>交集部分会被切除</strong><br />
      模糊半径指从阴影边缘向内外各延伸指定距离的过渡区域,<br />
      因此<strong>阴影宽高会比实际多2倍过渡半径</strong>
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
    const cssDetail = `box-shadow: 0 5px 4px -4px rgba(0, 0, 0, .5);`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";
#main {
  background: orange;
  box-shadow: 0 .3125rem .25rem -0.25rem rgba(0, 0, 0, .5);
}
</style>