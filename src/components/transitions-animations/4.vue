<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      大区块main占据整个宽度<br />
      区块内的内容content宽度固定<br />
      通过<strong>calc()函数</strong>,使得main内部留给内容的宽度与实际内容宽度相等
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
  width: 300px;
  border: 1px solid;
  padding: 1rem;
  padding: 1rem calc(50% - 60px);
  .content{
    width: 120px;
    height: 100%;
    background-color: #333;
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
  padding: 1rem;
  padding: 1rem calc(50% - 60px);
  .content{
    width: 120px;
    height: 100%;
    background-color: #333;
  }
}
</style>