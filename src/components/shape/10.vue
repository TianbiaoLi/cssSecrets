<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      svg中<strong>viewBox</strong>值组成画幅的两个端点<br />
      <strong>cx/cy</strong>为图形中心的x、y坐标<br />
      <strong>stroke-dasharray</strong>设置了重复的宽度及间隔<br />
      <strong>stroke-width</strong>以circle边缘向内外延伸
    </template>
    <div class="bg">
      <svg viewBox="0 0 32 32">
        <circle r="16" cx="16" cy="16" />
      </svg>
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
    const cssDetail = `@keyframes fillup {
  to {
    stroke-dasharray: 100 100;
  }
}
svg {
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
  background: yellowgreen;
  border-radius: 50%;
}
circle {
  fill: yellowgreen;
  stroke: #655;
  stroke-width: 32;
  stroke-dasharray: 30 100;
  animation: fillup 5s linear infinite;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
@keyframes fillup {
  to {
    stroke-dasharray: 100 100;
  }
}
svg {
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
  background: yellowgreen;
  border-radius: 50%;
}
circle {
  fill: yellowgreen;
  stroke: #655;
  stroke-width: 32;
  stroke-dasharray: 30 100;
  animation: fillup 5s linear infinite;
}
</style>