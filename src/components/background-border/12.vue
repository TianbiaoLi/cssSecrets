<template>
  <el-tooltip class="box-item" effect="light" placement="top-start" disabled>
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
    const cssDetail = `background: #58a;
background-image: linear-gradient(white 2px, transparent 0),
linear-gradient(90deg, white 2px, transparent 0),
linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 0),
linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 0);
background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";

#main {
  width: 12.5rem;
  background: #58a;
  background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 0),
    linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 0);
  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
}
</style>