<template>
  <div class="gallery">
    <!-- 头部菜单 -->
    <Menus />
    <!-- 卡片栏 -->
    <div class="main">
      <transition name="gallery" mode="out-in">
        <component :is="comName" />
      </transition>
    </div>
    <el-backtop :right="50" :bottom="50" :visibility-height="500" />
  </div>
</template>
<script>
import Menus from "../components/menus.vue";
import backgroundBorder from "../components/background-border/index.vue";
import shape from "../components/shape/index.vue";
import visualEffect from "../components/visual-effect/index.vue";
import fontTypography from "../components/font-typography/index.vue";
import userExperience from "../components/user-experience/index.vue";
import structureLayout from "../components/structure-layout/index.vue";
import transitionsAnimations from "../components/transitions-animations/index.vue";
import { store } from "../store/store.js";
import { computed } from "vue";
export default {
  components: {
    Menus,
    backgroundBorder,
    shape,
    fontTypography,
    visualEffect,
    userExperience,
    structureLayout,
    transitionsAnimations,
  },
  setup() {
    const comName = computed(() => {
      return store.comName;
    });
    return {
      comName,
    };
  },
};
</script>

<style lang="scss">
.gallery {
  min-height: 100%;
  background-image: linear-gradient(80deg, #3498db 0%, #1abc9c 100%);
}
.main {
  margin: 1.25rem 2.1875rem 0;
}
/* TAB切换动画 */
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.3s linear;
}
.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
}
</style>