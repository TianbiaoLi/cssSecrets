<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      <strong>animation-direction</strong>设置了动画反转<br />
      reverse:反转每一个循环周期<br />
      alternate:反转偶数周期<br />
      alternate-reverse:反转奇数周期<br />
      反转后,<strong>动画次数要翻倍</strong>,因为之前的两个动画现在合并为一个
    </template>
    <div class="bg">
      <div id="main">
        <span>文字文字文字</span>
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
  <span>文字文字文字</span>
</div>`;
    const cssDetail = `#main {
  span{
    animation: .5s blink-smooth infinite alternate;
  }
}
@keyframes blink-smooth {
  to {color: transparent;}
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  span{
    animation: .5s blink-smooth infinite alternate;
  }
}
@keyframes blink-smooth {
  to {color: transparent;}
}
</style>