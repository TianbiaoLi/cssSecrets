<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return {};
  },
  methods: {
    backCover() {
      console.log(this.$parent);
      this.$parent.showCover = true
      console.log("back");
      // this.$router.push("/");
    },
  },
};
</script>
<template>
  <div>按照目录划分</div>
  <nav>
    <RouterLink to="/directory/background-border">背景与边框</RouterLink>
    <RouterLink to="/directory/shape">形状</RouterLink>
    <RouterLink to="/directory/visual-effect">视觉效果</RouterLink>
    <RouterLink to="/directory/font-typography">字体排印</RouterLink>
    <RouterLink to="/directory/user-experience">用户体验</RouterLink>
    <RouterLink to="/directory/structure-layout">结构与布局</RouterLink>
    <RouterLink to="/directory/transitions-animations">过渡与动画</RouterLink>
  </nav>
  <RouterView />
  <button @click="backCover">返回</button>
</template>



<style>
</style>