<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      使用径向渐变替代线性渐变
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
    const htmlDetail = '<div id="main"></div>';
    const cssDetail = `radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
            radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
            radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left,
            radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right;
background-size: 50% 50%;
background-repeat: no-repeat;`;
    const sassDetail = `$bg: #58a;
$tl: 15px;$tr: $tl;$bl: $tl;$br: $tl;
#main {
  background: radial-gradient(circle at top left, transparent $tl, #58a 0) top left,
              radial-gradient(circle at top right, transparent $tr, #58a 0) top right,
              radial-gradient(circle at bottom left, transparent $bl, #58a 0) bottom left,
              radial-gradient(circle at bottom right, transparent $br, #58a 0) bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}`;
    return { htmlDetail, cssDetail, sassDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
$bg: #58a;
$tl: 15px;$tr: $tl;$bl: $tl;$br: $tl;
#main {
  background: radial-gradient(circle at top left, transparent $tl, #58a 0) top left,
    radial-gradient(circle at top right, transparent $tr, #58a 0) top right,
    radial-gradient(circle at bottom left, transparent $bl, #58a 0) bottom left,
    radial-gradient(circle at bottom right, transparent $br, #58a 0) bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
</style>