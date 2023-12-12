<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      为伪元素设置以左侧中间为锚点的旋转动画<br />
      <strong>animation-delay为负值</strong
      >时,不会延时,而是将从正值对应的动画处立即开始<br />
      <strong>animation-play-state</strong>设置动画暂停,定格在第一帧
    </template>
    <div class="bg">
      <div id="main">20%</div>
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
    const cssDetail = `@keyframes spin {
  to {
    transform: rotate(0.5turn);
  }
}
@keyframes bg {
  50% {
    background: #655;
  }
}
#main {
  position: relative;
  line-height: 7.5rem;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, #655 0);
  color: transparent;
  text-align: center;
  animation-delay: -2s;
}
#main::before {
  content: "";
  position: absolute;
  top: 0; left: 50%;
  width: 50%; height: 100%;
  background-color: inherit;
  border-radius: 0 100% 100% 0/50%;
  transform-origin: left;
  animation: spin 5s linear infinite,bg 10s step-end infinite;
  animation-play-state: paused;
  animation-delay: inherit;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
@keyframes spin {
  to {
    transform: rotate(0.5turn);
  }
}
@keyframes bg {
  50% {
    background: #655;
  }
}
#main {
  position: relative;
  line-height: 7.5rem;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, #655 0);
  color: transparent;
  text-align: center;
}
#main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  background-color: inherit;
  border-radius: 0 100% 100% 0/50%;
  transform-origin: left;
  animation: spin 5s linear infinite, bg 10s step-end infinite;
  // animation-play-state: paused;
  animation-delay: -2s;
}
</style>