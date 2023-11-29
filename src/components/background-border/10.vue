<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      repeating-linear-gradient优点:<br />
      (1)自动重复渐变<br />
      (2)重复色块的长度直接在渐变轴度量<br />
      <strong>(3)随意设置角度值</strong>
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
    const cssDetail = `background: repeating-linear-gradient(60deg, #fb3,#fb3 15px,#58a 0,#58a 30px)`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";

#main {
  width: 12.5rem;
  background: repeating-linear-gradient(60deg, #fb3,#fb3 .9375rem,#58a 0,#58a 1.875rem)
}
</style>