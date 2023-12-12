<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      <strong>luminosity</strong
      >混合模式保留上层元素HSL亮度信息,吸取下层色相饱和度信息<br />
      <strong>mix-blend-mode</strong>为整个元素设置混合模式<br />
      <strong>background-blend-mode</strong>为每层背景单独指定混合模式
    </template>
    <div class="bg">
      <div id="main">
      </div>
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
    const cssDetail = `#main{
  background-image: url("@/assets/image/maple-bg.png");
  background-size: cover;
  background-color: hsl(355,100%,50%);
  background-blend-mode: luminosity;
  transition: .5s background-color;
}
#main:hover{
  background-color: transparent;
}`;
    const sassDetail = `#main {
  background-image: url("@/assets/image/maple-bg.png");
  background-size: cover;
  background-color: hsl(355, 100%, 50%);
  background-blend-mode: luminosity;
  transition: 0.5s background-color;
  &:hover {
    background-color: transparent;
  }
}`;
    return { htmlDetail, cssDetail, sassDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  background-image: url("@/assets/image/maple-bg.png");
  background-size: cover;
  background-color: hsl(355, 100%, 50%);
  background-blend-mode: luminosity;
  transition: 0.5s background-color;
  &:hover {
    background-color: transparent;
  }
}
</style>