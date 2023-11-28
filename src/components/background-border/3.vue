<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      outline可以省去计算扩展半径<br />
      通过outline-offset控制与边缘的距离<br />
      不一定贴合border-radius属性的圆角
    </template>
    <div class="bg">
      <div id="main">多重边框<br />outline方案</div>
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
    const cssDetail = `background: black;
outline: 2px dashed white;
outline-offset: -15px;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  width: 12.5rem;
  background: black;
  outline: .125rem dashed white;
  outline-offset: -0.9375rem;
}
</style>