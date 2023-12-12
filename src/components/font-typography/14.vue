<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      伪元素实现与切角相同的三角形<br />
      对调伪元素宽高、调整位置及旋转角度,使斜边重合<br />
      增加圆角、阴影等修饰<br />
      使用sass预处理器,增加灵活度
    </template>
    <div class="bg">
      <div id="main"></div>
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
  position: relative;
  background: #58a;
  background: linear-gradient(-150deg, transparent 1.5rem, #58a 0);
  border-radius: 0.5rem;
}
#main::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(
      to left bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.2) 0,
      rgba(0, 0, 0, 0.4)
    )
    100% 0 no-repeat;
  width: 1.73rem;
  height: 3rem;
  transform: translateY(-1.3rem) rotate(-30deg);
  transform-origin: bottom right;
  border-bottom-left-radius: inherit;
  box-shadow: -0.2rem 0.2rem 0.3rem -0.1rem rgba(0, 0, 0, 0.15);
}`;
    const sassDetail = `@mixin folded-corner($background, $size, $angle: 30deg) {
  position: relative;
  background: $background;
  background: linear-gradient(
    $angle - 180deg,
    transparent $size,
    $background 0
  );
  border-radius: 0.5rem;
  $x: calc($size / sin($angle));
  $y: calc($size / cos($angle));
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
        to left bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.2) 0,
        rgba(0, 0, 0, 0.4)
      )
      100% 0 no-repeat;
    width: $y;
    height: $x;
    transform-origin: bottom right;
    transform: translateY($y - $x) rotate(2 * $angle - 90deg);
    border-bottom-left-radius: inherit;
    box-shadow: -0.2rem 0.2rem 0.3rem -0.1rem rgba(0, 0, 0, 0.2);
  }
}
#main {
  @include folded-corner(#58a, 32px, 40deg);
}`;
    return { htmlDetail, cssDetail, sassDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
@mixin folded-corner($background, $size, $angle: 30deg) {
  position: relative;
  background: $background;
  background: linear-gradient(
    $angle - 180deg,
    transparent $size,
    $background 0
  );
  border-radius: 0.5rem;
  $x: calc($size / sin($angle));
  $y: calc($size / cos($angle));
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
        to left bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.2) 0,
        rgba(0, 0, 0, 0.4)
      )
      100% 0 no-repeat;
    width: $y;
    height: $x;
    transform-origin: bottom right;
    transform: translateY($y - $x) rotate(2 * $angle - 90deg);
    border-bottom-left-radius: inherit;
    box-shadow: -0.2rem 0.2rem 0.3rem -0.1rem rgba(0, 0, 0, 0.2);
  }
}
#main {
  @include folded-corner(#58a, 32px, 40deg);
}
</style>