<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      transform: translate(-50%,-50%)调回居中位置<br />
    </template>
    <div class="bg">
      <div id="main">
        <div class="content"></div>
      </div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail" v-text="htmlDetail"></pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ cssDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = `<div id="main">
  <div class="content"></div>
</div>`;
    const cssDetail = `#main {
  width: 100%;
  border: 1px solid;
  position: relative;
  .content{
    width: 100px;
    height: 50px;
    background-color: #333;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
.bg{
  width: 18.75rem;
}
#main {
  width: 100%;
  border: 1px solid;
  position: relative;
  .content{
    width: 100px;
    height: 50px;
    background-color: #333;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>