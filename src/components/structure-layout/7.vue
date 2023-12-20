<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      <strong>flex-flow</strong>是 flex-direction 和 flex-wrap 的简写<br />
      设置flex属性后,footer高度自适应且固定位于页脚
    </template>
    <div class="bg">
      <div id="main">
        <div class="mainBody">body</div>
        <footer></footer>
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
  <div class="mainBody">body</div>
  <footer></footer>
</div>`;
    const cssDetail = `#main {
  width: 100%;
  border: 1px solid;
  display: flex;
  flex-flow: column;
  .mainBody{
    height: 80px;
  }
  footer{
    width: 100px;
    height: 50px;
    background-color: #333;
    flex: 1;
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
  display: flex;
  flex-flow: column;
  .mainBody{
    height: 80px;
  }
  footer{
    width: 100px;
    height: 50px;
    background-color: #333;
    flex: 1;
  }
}
</style>