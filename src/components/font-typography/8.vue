<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      旋转过后,需要通过Y轴上的变形补足高度上的缩水<br />
    </template>
    <div class="bg">
      <div id="main">Trapezoid</div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail" v-html="htmlDetail"></pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ sassDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = '<div id="main"></div>';
    const cssDetail = `#main {
  line-height: 7.5rem;
  position: relative;
  padding: 0.5rem 1rem 0.35rem;
  color: white;
}
#main::before {
  content: "";
  position: absolute;
  top: 0;right: 0;bottom: 0;left: 0;
  z-index: -1;
  background: #58a;
  transform: perspective(0.6rem) rotateX(4deg) scaleY(1.3);
  transform-origin: bottom;
}`;
    const sassDetail = `position: relative;
padding: .5rem 1rem .35rem;
color: white;
&::before{
  content: "";
  position: absolute;
  top: 0;right: 0;bottom: 0;left: 0;
  z-index: -1;
  background: #58a;
  transform: perspective(.6rem) rotateX(4deg) scaleY(1.3);
  transform-origin: bottom;
}`;
    return { htmlDetail, cssDetail, sassDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
	line-height: 7.5rem;
  position: relative;
  padding: .5rem 1rem .35rem;
  color: white;
  &::before{
    content: "";
    position: absolute;
    top: 0;right: 0;bottom: 0;left: 0;
    z-index: -1;
    background: #58a;
    transform: perspective(.6rem) rotateX(4deg) scaleY(1.3);
    transform-origin: bottom;
  }
}
</style>