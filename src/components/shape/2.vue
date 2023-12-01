<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      box-shadow是层层叠加的,此时需要计算扩展半径<br />
      属性值依次为:x偏;y偏;模糊半径;扩张半径;颜色
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
    const cssDetail = `background: yellowgreen;
box-shadow: 0 0 0 10px #655,
            0 0 0 15px deeppink,
            0 2px 5px 15px rgba($color: 0, 0, 0, $alpha: 0.6);`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  background: yellowgreen;
  box-shadow: 0 0 0 10px #655, 
              0 0 0 15px deeppink,
              0 2px 5px 15px rgba(0, 0, 0, 0.6);
}
</style>