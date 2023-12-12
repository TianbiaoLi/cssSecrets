<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      通过设置渐变背景,实现斑马条纹<br />
      调整background-origin,保证背景与内容在同一区域范围<br />
    </template>
    <div class="bg">
      <div id="main">
<pre>
while (true) {
  let d = new Date();
    if (d.getTime() == 1) {
      alert("First")
  }
}
</pre>
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
  <pre>
    while (true) {
      let d = new Date();
        if (d.getTime() == 1) {
          alert("First")
      }
    }
  </pre>
</div>`;
    const cssDetail = `padding: 0.5rem;
line-height: 1.5;
background: #f39c12;
background-size: auto 3rem;
background-origin: content-box;
background-image: linear-gradient(rgba(255,255,255, 0.3) 50%, transparent 0);`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  width: 15rem;
  height: 10rem;
  border: .0625rem solid;
  padding: 0.5rem;
  line-height: 1.5;
  background: #f39c12;
  background-size: auto 3rem;
  background-origin: content-box;
  background-image: linear-gradient(rgba(255,255,255, 0.3) 50%, transparent 0);
}
</style>