<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      动画调速函数曲线都是由贝赛尔曲线指定的<br />
      css提供了<strong>cubic-bezier()</strong>函数指定自定义调速函数
    </template>
    <div class="bg">
      <div id="main"></div>
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
    const cssDetail = `@keyframes bounce {
  60%,80%,to {
    transform: translateY(50px);
    animation-timing-function: ease;
  }
  70% { transform: translateY(30px);}
  90% { transform: translateY(20px); }
}
#main {
  animation: bounce 3s cubic-bezier(0.1, 0.25, 1, 0.25) infinite;
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
  width: 10px;
  height: 10px;
  background-color: orange;
  border-radius: 50%;
}
@keyframes bounce {
  60%,80%,to {
    transform: translateY(50px);
    animation-timing-function: ease;
  }
  70% { transform: translateY(30px);}
  90% { transform: translateY(20px); }
}
#main {
  animation: bounce 3s cubic-bezier(0.1, 0.25, 1, 0.25) infinite;
}
</style>