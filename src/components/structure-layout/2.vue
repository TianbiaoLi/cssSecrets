<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      伪元素实现复选框效果<br />
      <strong>text-indent</strong
      >属性能定义一个块元素首行文本内容之前的缩进量<br />
      <strong>clip:</strong
      >裁切区域内的可见,区域外的不可见,废弃中,用clip-path代替<br />
      属性只适用于<strong>position:absolute</strong>的元素
    </template>
    <div class="bg">
      <div id="main">
        <input type="checkbox" id="awesome" />
        <label for="awesome">Awesome!</label>
        <br />
        <input type="checkbox" id="awesome1" />
        <label for="awesome1">Awesome!</label>
        <br />
        <input type="checkbox" id="awesome2" disabled/>
        <label for="awesome2">Awesome!</label>
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
  <input type="checkbox" id="awesome" />
  <label for="awesome">Awesome!</label>
  <br />
  <input type="checkbox" id="awesome1" />
  <label for="awesome1">Awesome!</label>
  <br />
  <input type="checkbox" id="awesome2" disabled/>
  <label for="awesome2">Awesome!</label>
</div>`;
    const cssDetail = `input[type="checkbox"] + label::before {
  content: "\\a0";
  display: inline-block;
  vertical-align: 0.1rem;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 0.2rem;
  border-radius: 0.2rem;
  background: silver;
  text-indent: 0.15rem;
  line-height: 0.65;
}
input[type="checkbox"]:checked + label::before {
  content: "\\2713";
  background: yellowgreen;
}
input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: rect(0, 0, 0, 0);
  z-index: -1;
}
input[type="checkbox"]:focus + label::before {
  box-shadow: 0 0 0.1rem 0.1rem #58a;
}
input[type="checkbox"]:disabled + label::before {
  background: gray;
  box-shadow: none;
  color: #555;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  width: 15rem;
  height: 10rem;
  border: 0.0625rem solid;
  input[type="checkbox"] + label::before {
    content: "\a0";
    display: inline-block;
    vertical-align: 0.1rem;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 0.2rem;
    border-radius: 0.2rem;
    background: silver;
    text-indent: 0.15rem;
    line-height: 0.65;
  }
  input[type="checkbox"]:checked + label::before {
    content: "\2713";
    background: yellowgreen;
  }
  input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: rect(0, 0, 0, 0);
    z-index: -1;
  }
  input[type="checkbox"]:focus + label::before {
    box-shadow: 0 0 0.1rem 0.1rem #58a;
  }
  input[type="checkbox"]:disabled + label::before {
    background: gray;
    box-shadow: none;
    color: #555;
  }
}
</style>