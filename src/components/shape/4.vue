<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      clip-path直接指定裁切点<br />
      能够适应非正方形图片<br />
      <strong>且可以参与动画</strong><br />
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
    const cssDetail = `transform: rotate(45deg);
overflow: hidden;
border: 1px dotted;
img{
  max-width: 100%;
  transform: rotate(-45deg) scale(1.42);
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  border: 1px dotted;
  img {
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: 1s clip-path;
    &:hover {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}
</style>