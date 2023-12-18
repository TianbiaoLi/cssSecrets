<template>
  <el-tooltip class="box-item" effect="light" placement="top">
    <template #content>
      两层元素叠加,上层元素用div嵌套,调整div宽度<br />
      伪元素设置手柄样式<br />
      还可以通过JS添加控件,用键盘控制或点击图片位置设置对比线
    </template>
    <div class="bg">
      <div id="main">
        <div class="image-slider">
          <div>
            <img src="@/assets/image/maple-bg.png" alt="Before" />
          </div>
          <img src="@/assets/image/maple.png" alt="After" />
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
  <div class="image-slider">
    <div>
      <img src="@/assets/image/maple-bg.png" alt="Before" />
    </div>
    <img src="@/assets/image/maple.png" alt="After" />
  </div>
</div>`;
    const cssDetail = `#main {
  img {
    height: 100%;
  }
  border: 1px solid;
  .image-slider {
    position: relative;
    display: inline-block;
  }
  .image-slider > div {
    position: absolute;
    top: 0; bottom: 0; left: 0;
    width: 50%;
    max-width: 100%;
    overflow: hidden;
    resize: horizontal;
  }
  .image-slider > div::before{
    content: "";
    position: absolute;
    bottom: 0; right: 0;
    width: 12px; height: 12px;
    background: linear-gradient(-45deg,white 50%,transparent 0);
    background-clip: content-box;
    cursor: ew-resize;
  }
  .image-slider > img {
    width: 100%;
    display: block;
    user-select: none;
  }
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  img {
    height: 100%;
  }
  border: 1px solid;
  .image-slider {
    position: relative;
    display: inline-block;
  }
  .image-slider > div {
    position: absolute;
    top: 0; bottom: 0; left: 0;
    width: 50%;
    max-width: 100%;
    overflow: hidden;
    resize: horizontal;
  }
  .image-slider > div::before{
    content: "";
    position: absolute;
    bottom: 0; right: 0;
    width: .75rem; height: .75rem;
    background: linear-gradient(-45deg,white 50%,transparent 0);
    background-clip: content-box;
    cursor: ew-resize;
  }
  .image-slider > img {
    width: 100%;
    display: block;
    user-select: none;
  }
}
</style>