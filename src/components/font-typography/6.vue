<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>SVG原生支持以任意路径排队的文字</template>
    <div class="bg">
      <div id="main">
        <svg viewBox="0 0 100 100">
          <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
          <text>
            <textPath xlink:href="#circle">
              circular reasoning works because
            </textPath>
          </text>
        </svg>
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
  <svg viewBox="0 0 100 100">
    <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
    <text>
      <textPath xlink:href="#circle">
        circular reasoning works because
      </textPath>
    </text>
  </svg>
</div>`;
    const cssDetail = `#main {
  width: 8rem;
  height: 8rem;
  svg{
    display: block;
    overflow: visible;
  }
  path {
    fill: none;
  }
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  width: 8rem;
  height: 8rem;
  svg {
    display: block;
    overflow: visible;
  }
  path {
    fill: none;
  }
}
</style>