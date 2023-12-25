<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      设置贝赛尔曲线大于100%,实现回弹效果<br />
      transform不能用于linline元素上,如span。因此设置为inline-block<br />
      为<strong>避免返回动画大于100%效果</strong>,单独设置返回动画调速函数<br />
      为<strong>调整返回动画时间</strong>,单独设置返回动画时间为进入时间(默认500ms)一半
    </template>
    <div class="bg">
      <div id="main">
        <div>点击输入框聚焦</div>
        <br />
        <input type="text" id="username" />
        <span class="callout">请输入用户名</span>
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
  <input type="text" id="username" />
  <span class="callout">请输入用户名</span>
</div>`;
    const cssDetail = `@keyframes elastic-grow {
  from {
    transform: scale(0);
  }
  70% {
    transform: scale(1.1);
    animation-timing-function: cubic-bezier(0.1, 0.25, 1, 0.25);
  }
}
#main {
  .callout {
    display: inline-block;
    color: rgb(235, 121, 7);
  }
  input:not(:focus) + .callout {
    transform: scale(0);
    // transition-timing-function: ease;
    transition: 0.25s;
  }
  .callout {
    transition: 0.5s cubic-bezier(0.25, 0.1, 0.3, 1.5);
    transform-origin: 1.4rem -0.4rem;
  }
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
@keyframes elastic-grow {
  from {
    transform: scale(0);
  }
  70% {
    transform: scale(1.1);
    animation-timing-function: cubic-bezier(0.1, 0.25, 1, 0.25);
  }
}
#main {
  .callout {
    display: inline-block;
    color: rgb(235, 121, 7);
  }
  input:not(:focus) + .callout {
    transform: scale(0);
    // transition-timing-function: ease;
    transition: 0.25s;
  }
  .callout {
    transition: 0.5s cubic-bezier(0.25, 0.1, 0.3, 1.5);
    transform-origin: 1.4rem -0.4rem;
  }
}
</style>