<template>
  <el-tooltip class="box-item" effect="light" placement="top-start">
    <template #content>
      Unicode中有专门代表换行的字符:0X000A,CSS中可以写作"\000A",或简化为"\A"<br />
      设置换行后,通过white-space避免空白符和换行被合并<br />
      为避免dt后跟随多个dd,将换行设置到dt前(除去第一个dt)
    </template>
    <div class="bg">
      <div id="main">
        <dl>
          <dt>Name:</dt>
          <dd>Lea Verou</dd>
          <dt>Email:</dt>
          <dd>Lea@Ver.me</dd>
          <dd>HH@mit.edu</dd>
          <dt>Location:</dt>
          <dd>Earth</dd>
        </dl>
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
    const htmlDetail = `<dl>
  <dt>Name:</dt>
  <dd>Lea Verou</dd>
  <dt>Email:</dt>
  <dd>Lea@Verou.me</dd>
  <dt>Location:</dt>
  <dd>Earth</dd>
</dl>`;
    const cssDetail = `dt,dd {
  display: inline;
}
dd {
  font-weight: bold;
}
dd + dt::before {
  content: "\\A";
  white-space: pre;
}
dd + dd::before{
  content: ",";
  font-weight: normal;
}`;
    return { htmlDetail, cssDetail };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/card";
#main {
  width: 15rem;
  border: 1px solid;
  dt,
  dd {
    display: inline;
  }
  dd {
    font-weight: bold;
  }
  dd + dt::before {
    content: "\A";
    white-space: pre;
  }
  dd + dd::before{
    content: ",";
    font-weight: normal;
  }
}
</style>