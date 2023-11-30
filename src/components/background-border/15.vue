<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      通过多个贴片叠加,每一次最小公倍数的距离重复一次<br />
      <strong>"蝉原则":通过质数增加随机真实性</strong><br />
      hsl(色相，饱和度%，亮度%);
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
    const cssDetail = `background: hsl(20, 40%, 90%);
background-image: linear-gradient(90deg, #fb3 11px, transparent 0),
                  linear-gradient(90deg, #ab4 23px, transparent 0),
                  linear-gradient(90deg, #655 41px, transparent 0);
background-size: 41px 100%, 61px 100%, 83px 100%;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";

#main {
  width: 12.5rem;
  background: hsl(20, 40%, 90%);
  background-image: linear-gradient(90deg, #fb3 .6875rem, transparent 0),
    linear-gradient(90deg, #ab4 1.4375rem, transparent 0),
    linear-gradient(90deg, #655 2.5625rem, transparent 0);
  background-size: 2.5625rem 100%, 3.8125rem 100%, 5.1875rem 100%;
}
</style>