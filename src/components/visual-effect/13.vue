<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      为避免文字被遮挡,设置伪元素z-index=-1<br />
      为了在背景上显出毛玻璃效果,设置bg的z-index小于伪元素(如-2)<br />
      background-attachment:fix属性通常用于整个页面的背景,页面大小固定且图片固定不动
    </template>
    <div class="bg">
      <div id="main"><div>Hello,World!</div></div>
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
    const cssDetail = `.bg,#main::before {
  background: url("@/assets/image/maple-bg.png") 0 / cover fixed;
}
#main {
  position: relative;
  background: hsla(0, 0%, 100%, 0.3);
  overflow: hidden;
}
#main::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(10px);
  margin: -20px;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
.bg {
  background: url("@/assets/image/maple-bg.png") 0 / cover fixed;
  z-index: -2;
}
#main {
  position: relative;
  overflow: hidden;
}
#main::before {
  background: url("@/assets/image/maple-bg.png") 0 / cover fixed;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(10px);
  margin: -20px;
  z-index: -1;
}
</style>