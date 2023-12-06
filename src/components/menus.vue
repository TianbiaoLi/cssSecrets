<template>
  <div class="header">
    <!-- 左侧返回按钮 -->
    <div class="bookIcon">
      <a href="javascript:;" title="返回" style="text-decoration: none">
        <i class="iconfont icon-book" @click="backToCover"></i>
      </a>
    </div>
    <!-- 中间菜单 -->
    <div class="menu" id="menu">
      <div class="activeMenu">背景与边框</div>
      <div>形状</div>
      <div>视觉效果</div>
      <div>字体排印</div>
      <div>用户体验</div>
      <div>结构与布局</div>
      <div>过渡与动画</div>
    </div>
    <!-- 右侧返回按钮 -->
    <div class="backIcon">
      <a href="javascript:;" title="返回" style="text-decoration: none">
        <i class="iconfont icon-fanhui" @click="backToCover"></i>
      </a>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { store } from "../store/store";

export default {
  mounted() {
    this.changeActiveMenu();
  },
  setup() {
    const router = useRouter();

    /**
     * @description 路由跳转到首页
     */
    const backToCover = () => {
      // gallery回到第一栏
      store.chooseComName(0);
      // 回到首页
      router.push("/");
    };

    /**
     * @description 设置菜单点击后样式
     */
    const changeActiveMenu = () => {
      let menus = document.getElementById("menu").childNodes;
      // 为元素添加索引，用于路由跳转地址获取
      for (let index = 0; index < menus.length; index++) {
        menus[index].index = index;
      }
      // 事件委托
      document.getElementById("menu").addEventListener("click", function (e) {
        menus.forEach((menu) => {
          menu.classList.remove("activeMenu");
        });
        // 添加选中样式
        e.target.classList.add("activeMenu");
        // 设置当前展示类别
        store.chooseComName(e.target.index);
      });
    };
    return {
      backToCover,
      changeActiveMenu,
    };
  },
};
</script>
<style lang="scss">
$headerHeight: 2.8125rem;
// 导航栏
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
// 导航栏两侧图标
.header {
  .bookIcon,
  .backIcon {
    width: 5%;
    height: $headerHeight;
    line-height: $headerHeight;
    user-select: none;
    cursor: pointer;
  }
  .bookIcon {
    text-align: right;
  }
  .backIcon {
    text-align: left;
  }
  .icon-book,
  .icon-fanhui {
    font-size: 1.5rem;
    &:hover {
      font-size: 1.625rem;
      font-weight: bold;
      transition: all 0.3s;
    }
  }
  .icon-book,
  .icon-fanhui {
    color: #c2e59c;
  }
}
// 导航栏中间文字
.header {
  .menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.125rem;
    div {
      flex: 1;
      height: $headerHeight;
      line-height: $headerHeight;
      text-align: center;
      user-select: none;
      cursor: pointer;
      &:hover {
        background-image: radial-gradient(#49a9f8 20%, transparent 60%);
      }
    }
  }
}
// 选中样式
.activeMenu {
  background-image: radial-gradient(#49a9f8 20%, transparent 60%);
}
</style>