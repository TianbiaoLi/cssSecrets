<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      box-shadow无法对伪元素、半透明类的部分添加阴影<br />
      滤镜效果规范为当前元素整体添加某种效果<br />
      drop-shadow与box-shadow类似,但没有收缩半径
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
    const cssDetail = `filter: drop-shadow(2px 2px 5px);`;
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
  filter: drop-shadow(2px 2px 5px);
}
</style>