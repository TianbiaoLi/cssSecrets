<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      多层渐变叠加<br />
      设置背景大小<br />
      取消背景重复
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
    const cssDetail = `background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
            linear-gradient(-135deg, transparent 15px, #58a 0) top right,
            linear-gradient(45deg, transparent 15px, #58a 0) bottom left,
            linear-gradient(-45deg, transparent 15px, #58a 0) bottom right;
background-size: 50% 50%;
background-repeat: no-repeat;`;
    const sassDetail = `$bg: #58a;
$tl: 15px;$tr: $tl;$bl: $tl;$br: $tl;
#main {
  background: linear-gradient(135deg, transparent $tl, #58a 0) top left,
              linear-gradient(-135deg, transparent $tr, #58a 0) top right,
              linear-gradient(45deg, transparent $bl, #58a 0) bottom left,
              linear-gradient(-45deg, transparent $br, #58a 0) bottom right;
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
  background: linear-gradient(135deg, transparent $tl, #58a 0) top left,
    linear-gradient(-135deg, transparent $tr, #58a 0) top right,
    linear-gradient(45deg, transparent $bl, #58a 0) bottom left,
    linear-gradient(-45deg, transparent $br, #58a 0) bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
</style>