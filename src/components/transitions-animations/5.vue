<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      <strong>animation-s=play-state</strong>设置了动画暂停<br />
      默认情况下暂停,聚焦时恢复动画
    </template>
    <div class="bg">
      <div id="main">
        <div>鼠标放置启动动画</div>
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
    const cssDetail = `@keyframes panoramic {
  to {
    background-position: 100% 0;
  }
}
.content {
  width: 6.25rem;
  height: 3.125rem;
  background: url("@/assets/image/bg-l.png");
  background-size: auto 100%;
  animation: panoramic 5s linear infinite alternate;
  animation-play-state: paused;
}
.content:hover {
  animation-play-state: running;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
.bg {
  width: 18.75rem;
}
@keyframes panoramic {
  to {
    background-position: 100% 0;
  }
}
#main {
  width: 100%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    width: 6.25rem;
    height: 3.125rem;
    background: url("@/assets/image/bg-l.png");
    background-size: auto 100%;
    animation: panoramic 5s linear infinite alternate;
    animation-play-state: paused;
  }
  .content:hover {
    animation-play-state: running;
  }
}
</style>