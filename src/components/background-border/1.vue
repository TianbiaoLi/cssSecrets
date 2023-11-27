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
`border: 10px solid hsla(0, 0%, 100%, 0.5);
background: white;
background-clip: padding-box;`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
#main {
  height: 120px;
  width: 120px;
  border: 0.625rem solid rgba(255, 255, 255, 0.3);
  background: no-repeat center / cover url("@/assets/image/bg.png");
  background-clip: padding-box;
}
#htmlDetail,
#cssDetail,
#sassDetail {
  display: none;
}
</style>