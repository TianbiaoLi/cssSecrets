<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      阴影叠加实现效果
    </template>
    <div class="bg">
      <div id="main">CSS3d</div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail" v-text="htmlDetail"></pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ cssDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = `<div id="main">CSS3d</div>`;
    const cssDetail = `background: #58a;
color: white;
text-shadow: 0 1px hsl(0, 0%, 85%),
             0 2px hsl(0, 0%, 80%),
             0 3px hsl(0, 0%, 75%),
             0 4px hsl(0, 0%, 70%),
             0 5px hsl(0, 0%, 65%),
             0 5px 10px black;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
$bg: #58a;
$tl: 15px;$tr: $tl;$bl: $tl;$br: $tl;
#main {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #58a;
  color: white;
  text-shadow: 0 1px hsl(0, 0%, 85%),
  0 2px hsl(0, 0%, 80%),
  0 3px hsl(0, 0%, 75%),
  0 4px hsl(0, 0%, 70%),
  0 5px hsl(0, 0%, 65%),
  0 5px 10px black;
}
</style>