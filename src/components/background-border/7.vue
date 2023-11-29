<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      依赖outline不跟随圆角的特性<br />
      目前该特性已被修复，outline跟随圆角变化
    </template>
    <div class="bg">
      <div id="main">hello word</div>
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
`background: tan;
padding: 16px;
border-radius: 12px;
box-shadow: 0 0 0 10px #655;
outline: 10px solid #655;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";

#main {
  width: 12.5rem;
  background: tan;
  padding: 1rem;
  border-radius: .75rem;
  box-shadow: 0 0 0 .625rem #655;
  outline: .625rem solid #655;
}
</style>