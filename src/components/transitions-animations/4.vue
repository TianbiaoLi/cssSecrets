<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      把容器宽度成为动画主体,步进方式扩张<br />
      css单位<strong>ch表示0字形的宽度</strong><br />
      可以通过js控制动画实现字数适配
    </template>
    <div class="bg">
      <div id="main">
        <div class="content">CSS is awesome!</div>
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
    const htmlDetail = `<div class="content">CSS is awesome!</div>`;
    const cssDetail = `@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}
.content {
  width: 15ch;
  white-space: nowrap;
  overflow: hidden;
  font-family: "consolas";
  border-right: 0.0625rem solid;
  animation: typing 6s steps(15), caret 1s steps(1) infinite;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}
#main {
  width: 100%;
  .content {
    width: 15ch;
    white-space: nowrap;
    overflow: hidden;
    font-family: "consolas";
    border-right: 0.0625rem solid;
    animation: typing 6s steps(15), caret 1s steps(1) infinite;
  }
}
</style>