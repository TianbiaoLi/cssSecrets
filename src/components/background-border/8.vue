<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      渐变属性中,如果某色标的位置比整个列表中在它之前的色标位置都小,<br />
      则该色标的位置被设为它前面所有色标位置<strong>最小值</strong>
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
    const htmlDetail = `<div id="main"></div>`;
    const cssDetail = `background: linear-gradient(to right, #fb3 50%, #58a 0);
background-size: 30px 100%;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";

#main {
  width: 12.5rem;
  background: linear-gradient(to right, #fb3 50%, #58a 0);
  background-size: 1.875rem 100%;
}
</style>