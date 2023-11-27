<template>
  <div id="main"></div>
  <pre id="htmlDetail">{{ htmlDetail }}</pre>
  <pre id="cssDetail">{{ cssDetail }}</pre>
  <pre id="sassDetail">{{ cssDetail }}</pre>
</template>
<script>
export default {
  setup() {
    const htmlDetail = 
`<div id="main"></div>`;
    const cssDetail = 
`background: yellowgreen;
box-shadow: 0 0 0 10px #655,
            0 0 0 15px deeppink,
            0 2px 5px 15px rgba($color: 0, 0, 0, $alpha: 0.6);`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
#main {
  height: 120px;
  width: 120px;
  background: url("@/assets/image/bg.png") no-repeat bottom right #58a;
  background-position: right 20px bottom 10px;
}
#htmlDetail,
#cssDetail,
#sassDetail {
  display: none;
}
</style>