<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      目前css支持角向渐变,该效果css简化为<br />
      background: repeating-conic-gradient(#bbb 0, #bbb 25%, #eee 0, #eee 50%);<br />
      background-size: 30px 30px;
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
    const htmlDetail = `<div id="main"></div>`;
    const cssDetail = `background: #eee;
background-image: linear-gradient( 45deg, #bbb 25%, transparent 0, transparent 75%, #bbb 0),
                  linear-gradient( 45deg, #bbb 25%, transparent 0, transparent 75%, #bbb 0);
background-size: 30px 30px;
background-position: 0 0, 15px 15px;`;
    const sassDetail = `$base: #eee;
$accent: #bbb;
$size: 30px;
background: $base;
background-image: linear-gradient( 45deg, $accent 25%, transparent 0, transparent 75%, $accent 0),
                  linear-gradient( 45deg, $accent 25%, transparent 0, transparent 75%, $accent 0);
background-size: $size $size;
background-position: 0 0, calc($size / 2) calc($size / 2);`;
    return { htmlDetail, cssDetail, sassDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";

#main {
  width: 12.5rem;
  $base: #eee;
  $accent: #bbb;
  $size: 1.875rem;
  background: $base;
  background-image: linear-gradient(
      45deg,
      $accent 25%,
      transparent 0,
      transparent 75%,
      $accent 0
    ),
    linear-gradient(
      45deg,
      $accent 25%,
      transparent 0,
      transparent 75%,
      $accent 0
    );
  background-size: $size $size;
  background-position: 0 0, calc($size / 2) calc($size / 2);
}
</style>