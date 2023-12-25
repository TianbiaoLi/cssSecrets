<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      rotate(1turn)代表旋转一圈360°<br />
      两层元素嵌套,内层图片反向旋转<br />
      内层元素动画继承父元素,并使用<strong>animation-direction:reverse</strong>实现反向<br />
      <hr/>
      若要仅使用单元素实现,可以利用:<strong>每个transform-origin都可以被两个translate模拟出来</strong>原理<br />
    </template>
    <div class="bg">
      <div id="main">
        <div class="avatar">
          <img src="@/assets/image/bg.png" alt="avatar" />
        </div>
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
  <div class="avatar">
    <img src="@/assets/image/bg.png" alt="avatar" />
  </div>
</div>`;
    const cssDetail = `#main {
  width: 8rem;
  height: 8rem;
  border: 1px solid;
  border-radius: 50%;
  background-color: rgb(235, 150, 31);
  display: flex;
  justify-content: center;
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
.avatar {
  animation: spin 3s infinite linear;
  transform-origin: 50% 4rem; // 4rem = 路径半径
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    animation: inherit;
    animation-direction: reverse;
  }
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
.bg {
  width: 18.75rem;
}
#main {
  width: 8rem;
  height: 8rem;
  border: 1px solid;
  border-radius: 50%;
  background-color: rgb(235, 150, 31);
  display: flex;
  justify-content: center;
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
.avatar {
  animation: spin 3s infinite linear;
  transform-origin: 50% 4rem; // 4rem = 路径半径
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    animation: inherit;
    animation-direction: reverse;
  }
}
</style>