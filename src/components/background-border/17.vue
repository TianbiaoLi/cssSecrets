<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      去除background中:linear-gradient(white, white) padding-box<br />
      查看实现原理:重复线性渐变延伸至border,但色条只显示border上的1px宽/高<br />
      简化写法中: bg-size 只能紧接着 position 出现，以"/"分割，
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
    const cssDetail = `@keyframes ants {
  to{
    background-position: 100%;
  }
}
#main {
  width: 12.5rem;
  padding: 1rem;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 /
      0.6rem 0.6rem;
  animation: ants 12s linear infinite;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
@keyframes ants {
  to{
    background-position: 100%;
  }
}
#main {
  width: 12.5rem;
  padding: 1rem;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 /
      0.6rem 0.6rem;
  animation: ants 12s linear infinite;
}
</style>