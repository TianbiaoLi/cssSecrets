<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>默认情况下，背景会延伸到边框所在区域下层<br/>background-clip限制背景范围</template>
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
    const htmlDetail = '<div id="main"></div>';
    const cssDetail = `#main {
  height: 120px;
  width: 120px;
  border: 10px solid rgba(255, 255, 255, 0.4);
  background: white;
  background-clip: padding-box;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";
.bg {
  background: no-repeat center / cover url("@/assets/image/bg.png");
}
#main {
  border: 0.625rem solid rgba(255, 255, 255, 0.4);
  background: white;
  background-clip: padding-box;
}
</style>