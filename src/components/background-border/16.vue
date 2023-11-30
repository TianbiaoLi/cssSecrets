<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      背景图上叠加色块,<br />
      设置色块延伸范围到padding,背景图延伸范围到border,<br />
      实现图片边框
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
    const cssDetail = `border: 16px solid transparent;
background: linear-gradient(white, white), url("@/assets/image/bg.png");
background-size: cover;
background-clip: padding-box,border-box;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";

#main {
  width: 12.5rem;
  border: 1rem solid transparent;
  background: linear-gradient(white, white), url("@/assets/image/bg.png");
  background-size: cover;
  background-clip: padding-box, border-box;
}
</style>