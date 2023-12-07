<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      可以使用任意类型背景<br />
      甚至可以对替换元素(如图片)进行裁切
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
    const cssDetail = `background: #58a;
clip-path: polygon(
  0 $tl, $tl 0,
  calc(100% - $tr) 0, 100% $tr,
  100% calc(100% - $br), calc(100% - $br) 100%,
  $bl 100%, 0 calc(100% - $bl)
);`;
    const sassDetail = `$bg: #58a;
$tl: 20px;$tr: $tl;$bl: $tl;$br: $tl;
#main {
  background: #58a;
  clip-path: polygon(
    0 $tl, $tl 0,
    calc(100% - $tr) 0, 100% $tr,
    100% calc(100% - $br), calc(100% - $br) 100%,
    $bl 100%, 0 calc(100% - $bl)
  );
}`;
    return { htmlDetail, cssDetail, sassDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
$bg: #58a;
$tl: 1.25rem;
$tr: $tl;
$bl: $tl;
$br: $tl;
#main {
  background: #58a;
  clip-path: polygon(
    0 $tl, $tl 0,
    calc(100% - $tr) 0, 100% $tr,
    100% calc(100% - $br), calc(100% - $br) 100%,
    $bl 100%, 0 calc(100% - $bl)
  );
}
</style>