<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      background-origin改变默认对齐位置<br />
      可选:content-box;padding-box;border-box<br />
      可用于简化设置了padding值的css代码
      </template>
    <div class="bg">
      <div id="main"></div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail" v-html="htmlDetail"></pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ cssDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = `<div id="main"></div>`;
    const cssDetail = 
`background: url("@/assets/image/bg-small.png") 
             no-repeat bottom right #58a;
background-origin: content-box;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";

#main {
  width: 12.5rem;
  padding: .625rem;
  background: url("@/assets/image/bg-small.png") no-repeat bottom right #58a;
  background-origin: content-box;
}
</style>