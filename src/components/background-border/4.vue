<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      background-position允许执行距离任意角的偏移量<br />
      默认以padding-box为准
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
background-position: right 20px bottom 10px;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";

#main {
  width: 12.5rem;
  background: url("@/assets/image/bg-small.png") no-repeat bottom right rgb(117, 186, 231);
  background-position: right 1.25rem bottom .625rem;
}
</style>