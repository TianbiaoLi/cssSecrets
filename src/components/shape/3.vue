<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      缺点在于需要两层标签<br />
      且只适合正方形<br />
      另外图片放大变形
    </template>
    <div class="bg">
      <div id="main"><img src="@/assets/image/maple-bg.png"></div>
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
  transform: rotate(45deg);
  overflow: hidden;
  border: 1px dotted;
  img{
    max-width: 100%;
    transform: rotate(-45deg) scale(1.42);
  }
}
</style>