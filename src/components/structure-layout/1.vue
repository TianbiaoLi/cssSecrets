<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      div默认宽度100%<br />
      css新规范中,width、height的新关键字:<strong>min-content</strong><br />
      规定元素宽度由<strong>内部最大的不可断行元素的宽度</strong>决定<br />
    </template>
    <div class="bg">
      <div>Content Text;Content Text;Content Text;</div>
      <div id="main">
        <img src="@/assets/image/maple.png" alt="After" />
        <div>Content Text;Content Text;</div>
      </div>
      <div>Content Text;Content Text;Content Text;</div>
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
    const htmlDetail = `<div>Content Text;Content Text;Content Text;</div>
<div id="main">
  <img src="@/assets/image/maple.png" alt="After" />
  <div>Content Text;Content Text;</div>
</div>
<div>Content Text;Content Text;Content Text;</div>`;
    const cssDetail = `#main {
  border: 1px solid;
  width: min-content;
  img {
    width: 6rem;
  }
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
.bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#main {
  border: 0.0625rem solid;
  width: min-content;
  img {
    width: 6rem;
  }
}
</style>