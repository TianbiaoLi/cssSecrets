<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      对于只有明度上有差别的同色系条纹，可以通过纯色背景+白色条纹叠加的方式实现<br />
      目前repeating-linear-gradient支持在同一色标上指定两个位置,当前效果仅需1条css:<br />
      background: repeating-linear-gradient(60deg, #79b 0 15px,#58a 15px 30px)
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
    const cssDetail = `background: #58a;
background-image: repeating-linear-gradient(
  30deg,
  rgba(255, 255, 255, .2),
  rgba(255, 255, 255, .2) 15px,
  transparent 0,
  transparent 30px
);`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";

#main {
  width: 12.5rem;
  background: #58a;
  background-image: repeating-linear-gradient(
    30deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2) 0.9375rem,
    transparent 0,
    transparent 1.875rem
  );
  // background: repeating-linear-gradient(60deg, #79b 0 15px,#58a 15px 30px)
}
</style>