<template>
  <div class="card">
    <div class="title">标题</div>
    <slot></slot>
    <footer>
      <div class="btn" @click="clickCopy">Copy</div>
    </footer>
    <!-- 解决外边距合并 -->
    <div style="height: 1px"></div>
  </div>
</template>
<script>
import { ElMessage } from "element-plus";
export default {
  setup() {
    const clickCopy = () => {
      const text = document.getElementById("cssDetail").innerHTML;
      if (text !== "") {
        navigator.clipboard.writeText(text);
        ElMessage({
          message: "Coped",
          type: "success",
          duration: 1000,
          center: true,
        });
      }
    };
    return { clickCopy };
  },
};
</script>
<style lang="scss" scoped>
@import url("@/assets/css/card.scss");
</style>