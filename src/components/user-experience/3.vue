<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      两层渐变背景<br />
      background-attachment设置图像位置,第一层固定到顶部,第二层随区块滚动<br />
      初始第一层覆盖度二层,第二层随滚动会逐步显现出来
    </template>
    <div class="bg">
      <div id="main">
        <ul>
          <li>QSC</li>
          <li>ETRJN</li>
          <li>EKTYKJ</li>
          <li>NIOHWOER</li>
          <li>QWRQW</li>
          <li>HBWEG</li>
          <li>GHWERGH</li>
          <li>SVWFR</li>
          <li>QSC</li>
          <li>ETRJN</li>
          <li>EKTYKJ</li>
        </ul>
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
  <ul>
    <li>QSC</li>
    <li>ETRJN</li>
    <li>EKTYKJ</li>
    <li>NIOHWOER</li>
    <li>QWRQW</li>
    <li>HBWEG</li>
    <li>GHWERGH</li>
    <li>SVWFR</li>
    <li>QSC</li>
    <li>ETRJN</li>
    <li>EKTYKJ</li>
  </ul>
</div>`;
    const cssDetail = `ul {
  overflow: auto;
  width: 10rem;
  height: 8rem;
  padding: 0.3rem 0.5rem;
  border: 0.0625rem solid silver;
  background: linear-gradient(#37bbb4 30%, transparent),
    radial-gradient(at 50% 0, rgba(0, 0, 0, 0.2), transparent 70%),
    linear-gradient(transparent 10%, #37bbb4),
    radial-gradient(at 50% 100%, rgba(0, 0, 0, 0.2) 30%, transparent 70%);
  background-repeat: no-repeat;
  background-size: 100% 50px, 100% 15px, 100% 50px, 100% 15px;
  background-position: top, top, bottom, bottom;
  background-attachment: local, scroll, local, scroll;
}
// 去除滚动条
ul::-webkit-scrollbar{
  width: 0;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  ul {
    overflow: auto;
    width: 10rem;
    height: 8rem;
    padding: 0.3rem 0.5rem;
    border: 0.0625rem solid silver;
    background: linear-gradient(#37bbb4 30%, transparent),
      radial-gradient(at 50% 0, rgba(0, 0, 0, 0.2), transparent 70%),
      linear-gradient(transparent 10%, #37bbb4),
      radial-gradient(at 50% 100%, rgba(0, 0, 0, 0.2) 30%, transparent 70%);
    background-repeat: no-repeat;
    background-size: 100% 50px, 100% 15px, 100% 50px, 100% 15px;
    background-position: top, top, bottom, bottom;
    background-attachment: local, scroll, local, scroll;
  }
  // 去除滚动条
  ul::-webkit-scrollbar {
    width: 0;
  }
}
</style>