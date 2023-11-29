<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <!-- 样式效果展示 -->
    <div class="show" ref="showDom">
      <slot />
    </div>
    <!-- 复制按钮 -->
    <footer name="footer">
      <!-- <div class="btn" @click="copyClick">复制HTML</div> -->
      <div class="btn" @click="copyClick">复制CSS</div>
      <div style="color:#34495e">|</div>
      <div class="btn" @click="copyClick">复制sass</div>
    </footer>
    <!-- 解决外边距合并 -->
    <div style="height: 1px"></div>
  </div>
</template>
<script>
import { ElMessage } from "element-plus";
import { ref } from "vue";
export default {
  props: ["title"],
  setup() {
    const htmlDetail = `
<div id="main"></div>
    `;
    const cssDetail = `
border: 10px solid hsla(0, 0%, 100%, 0.5);
background: white;
background-clip: padding-box;
    `;
    const showDom = ref(null);
    const copyClick = (e) => {
      let text = "";
      switch (e.target.innerHTML) {
        case "复制HTML":
          text = showDom.value.querySelector("#htmlDetail").innerHTML;
          console.log(text);
          break;
        case "复制CSS":
          text = showDom.value.querySelector("#cssDetail").innerHTML;
          console.log(text);
          break;
        case "复制sass":
          text = showDom.value.querySelector("#sassDetail").innerHTML;
          console.log(text);
          break;
        default:
          break;
      }
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
    return { htmlDetail, cssDetail, copyClick, showDom };
  },
};
</script>
<style lang="scss" scoped>
$cardGap: 1.25rem; // 卡片间距
$cardWidth: calc(100% / 3 - $cardGap); //卡片宽度
// 卡片整体样式
.card {
  min-height: 3.125rem;
  width: $cardWidth;
  margin: 0 $cardGap $cardGap 0;
  border-radius: 0.9375rem;
  backdrop-filter: blur(0.3125rem);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
// 标题
.title {
  font-weight: bold;
  user-select: none;
  padding: 0.5rem 0;
  text-align: center;
  border-bottom: 0.1875rem dashed #2c3e50;
}
// 主体
.show {
  margin: 1.25rem 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
// 底部按钮
$btnH: 1.875rem;
footer {
  display: flex;
  justify-content: space-between;
  .btn {
    width: 40%;
    height: $btnH;
    line-height: $btnH - 0.3125rem;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 0.625rem;
    background: transparent;
    border-bottom: 3px solid;
    border-image: linear-gradient(90deg, transparent 0%, #64b3f4 100%) 2 2 2 2;
    cursor: pointer;
    user-select: none;
    &:hover {
      border-image: linear-gradient(-90deg, transparent 0%, #c2e59c 100%) 2 2 2
        2;
      transition: all 0.5s;
    }
  }
}
// 页面宽度自适应
@media screen and (min-width: 600px) and (max-width: 900px) {
  .card {
    width: calc(100% / 2 - $cardGap);
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
@media screen and (max-width: 600px) {
  .card {
    width: calc(100% - $cardGap);
    margin-right: 0;
  }
}
</style>