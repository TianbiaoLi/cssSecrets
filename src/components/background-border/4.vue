<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>默认情况下，背景会延伸到边框所在区域下层</template>
    <div class="bg">
      <div id="main">背景定位</div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail">{{ htmlDetail }}</pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ cssDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = 
`<div id="main"></div>`;
    const cssDetail = 
`background: yellowgreen;
box-shadow: 0 0 0 10px #655,
            0 0 0 15px deeppink,
            0 2px 5px 15px rgba($color: 0, 0, 0, $alpha: 0.6);`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import  "@/assets/css/card";

#main {
  width: 12.5rem;
  background: url("@/assets/image/bg-small.png") no-repeat bottom right #58a;
  background-position: right 20px bottom 10px;
}

</style>