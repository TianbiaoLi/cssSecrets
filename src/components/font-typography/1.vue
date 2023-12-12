<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      <strong>text-align: justify</strong>设置的两端对齐效果会造成“单词孤岛”<br />
      <strong>hyphens: auto</strong>将在合适的位置自动添加连字符<br />
      也可以通过设置<strong>软连字符(&amp;shy;)</strong>手动定义连字符出现的位置
    </template>
    <div class="bg">
      <div id="main">The only way to get rid of a tempta&shy;tion is to yield to it.</div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail" v-html="htmlDetail"></pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ cssDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = '<div id="main">The only way to get rid of a tempta&amp;shy;tion is to yield to it.</div>';
    const cssDetail = `hyphens: auto;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";
#main {
  width: 17.5rem;
  height: 10rem;
  border: .0625rem solid;
  hyphens: auto;
}
</style>