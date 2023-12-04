<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>border-radius: x方向圆角/y方向圆角</template>
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
    const cssDetail = `border-radius: 100% 0 0 100% / 50%;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";
#main {
  width: 7.5rem;
  height: 7.5rem;
  background-color: #e69a53;
  border-radius: 100% 0 0 100% / 50%;
}
</style>