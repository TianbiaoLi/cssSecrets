<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      css选择器中,如果一个元素跟了<strong>两个伪类</strong>,则选中<strong>同时满足</strong>这两个伪类的元素<br />
      因此css第一行含义为:即是第一个,也是倒数第四个。<br />
      <strong>一个正好有四个列表项的列表中的第一个</strong>满足要求<br />
    </template>
    <div class="bg">
      <div id="main">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
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
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
</div>`;
    const cssDetail = `li:first-child:nth-last-child(4),
li:first-child:nth-last-child(4) ~ li {
  color: red;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  ul{
    display: flex;
    list-style-type: none;
  }
  li:first-child:nth-last-child(4),
  li:first-child:nth-last-child(4) ~ li {
    color: red;
  }
}
</style>