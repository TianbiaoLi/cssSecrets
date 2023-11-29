<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      当以左上角为准考虑偏移时，calc()提供了运算方式<br />
      calc()内部的运算符左右要有空白符
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
`background: url("@/assets/image/bg-small.png") no-repeat;
background-position: calc(100% - 20px) calc(100% - 10px)`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";

#main {
  width: 12.5rem;
  padding: .625rem;
  background: url("@/assets/image/bg-small.png") no-repeat #58a;
  background-position: calc(100% - 1.25rem) calc(100% - .625rem);
}
</style>