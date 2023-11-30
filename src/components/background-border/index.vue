<template>
  <div class="container">
    <card title="半透明边框"><one /></card>
    <card title="多重边框 box-shadow"><two /></card>
    <card title="多重边框 outline"><three /></card>
    <card title="背景定位 bg-position"><four /></card>
    <card title="背景定位 bg-origin"><five /></card>
    <card title="背景定位 calc()"><six /></card>
    <card title="边框内圆角 特性已修改"><seven /></card>
    <card title="条纹背景 单向条纹"><eight /></card>
    <card title="条纹背景 斜向条纹"><nine /></card>
    <card title="条纹背景 重复渐变"><ten /></card>
    <card title="条纹背景 同色系条纹"><eleven /></card>
    <card title="复杂背景 网格"><twelve /></card>
    <card title="复杂背景 波点"><thirteen /></card>
    <card title="复杂背景 棋盘"><fourteen /></card>
    <card title="伪随机背景"><fifteen /></card>
    <card title="连续的图像边框"><sixteen /></card>
    <card title="蚂蚁行军效果"><seventeen /></card>
  </div>
</template>
<script>
import card from "@/components/card.vue";
import one from "./1.vue";
import two from "./2.vue";
import three from "./3.vue";
import four from "./4.vue";
import five from "./5.vue";
import six from "./6.vue";
import seven from "./7.vue";
import eight from "./8.vue";
import nine from "./9.vue";
import ten from "./10.vue";
import eleven from "./11.vue";
import twelve from "./12.vue";
import thirteen from "./13.vue";
import fourteen from "./14.vue";
import fifteen from "./15.vue";
import sixteen from "./16.vue";
import seventeen from "./17.vue";

export default {
  components: {
    card,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>