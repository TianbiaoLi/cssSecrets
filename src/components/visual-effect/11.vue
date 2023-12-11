<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      sepia()降饱和度<br />
      saturate()升饱和度<br />
      hue-rotate()每个像素的色相以指定度数进行偏移
    </template>
    <div class="bg">
      <div id="main"><img src="@/assets/image/maple-bg.png" /></div>
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
    const cssDetail = `img {
  width: 100%;
  height: 100%;
  transition: 0.5s filter;
  filter: sepia(1) saturate(4) hue-rotate(295deg);
}
img:hover,
img:focus {
  filter: none;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
img {
  width: 100%;
  height: 100%;
  transition: 0.5s filter;
  filter: sepia(1) saturate(4) hue-rotate(295deg);
}
img:hover,
img:focus {
  filter: none;
}
</style>