<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      <strong>Fitts法则</strong
      >移动到某个目标区域的<strong>最短时间</strong>由目标距离与目标宽度之比构成的对数函数<br />
      将可选区域(热区)向外扩张,能够带来可用性的提升<br />
      通过设置<strong>透明边框</strong>扩大可选范围<br />
      用内嵌投影模拟边框
    </template>
    <div class="bg">
      <div id="main" @click="handleClick"></div>
    </div>
  </el-tooltip>
  <pre id="htmlDetail" v-text="htmlDetail"></pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ cssDetail }}</pre>
</template>
<script>
import { ElMessage } from "element-plus";
export default {
  setup() {
    const htmlDetail = `<div id="main"></div>`;
    const cssDetail = `#main {
  width: 4rem;
  height: 4rem;
  background: rgb(57, 119, 160);
  border-radius: 50%;
  cursor: pointer;
  border: 1rem solid transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.3) inset;
}`;
    const handleClick = () => {
      ElMessage({
        message: "Clicked!",
        type: "success",
      });
    };
    return { htmlDetail, cssDetail, handleClick };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  width: 4rem;
  height: 4rem;
  background: rgb(57, 119, 160);
  border-radius: 50%;
  cursor: pointer;
  border: 1rem solid transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.3) inset;
}
</style>