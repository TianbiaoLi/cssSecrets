<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      background-image能够跟随文本换行<br />
      可以灵活调整下划线样式<br />
    </template>
    <div class="bg">
      <div id="main">
        <a href="javascript:;">
          The only way to get rid of a temptation is to yield to it.
        </a>
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
  <a href="javascript:;">
    The only way to get rid of a temptation is to yield to it.
  </a>
</div>`;
    const cssDetail = `a {
  text-decoration: none;
  color: black;
  cursor: default;
  background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x;
  background-size: 0.5rem 0.125rem;
  background-position: 0 1rem;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  width: 15rem;
  height: 10rem;
  border: 0.0625rem solid;
  a {
    text-decoration: none;
    color: black;
    cursor: default;
    background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x;
    background-size: 0.5rem 0.125rem;
    background-position: 0 1rem;
  }
}
</style>