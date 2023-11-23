<template>
  <div class="gallery">
    <MenusVue />
    <div class="main">
      <transition mode="out-in">
        <component :is="comName"></component>
      </transition>
    </div>
  </div>
</template>
<script>
import MenusVue from "../components/menus.vue";
import backgroundBorderVue from "../components/background-border.vue";
import shapeVue from "../components/shape.vue";
import visualEffectVue from "../components/visual-effect.vue";
import fontTypographyVue from "../components/font-typography.vue";
import userExperienceVue from "../components/user-experience.vue";
import structureLayoutVue from "../components/structure-layout.vue";
import transitionsAnimationsVue from "../components/transitions-animations.vue";
import { store } from "../store/store.js";
import { computed } from "vue";
export default {
  components: {
    MenusVue,
    backgroundBorderVue,
    shapeVue,
    fontTypographyVue,
    visualEffectVue,
    userExperienceVue,
    structureLayoutVue,
    transitionsAnimationsVue,
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

<style>
.gallery {
  height: 100%;
  background-image: linear-gradient(80deg, #64b3f4 0%, #c2e59c 100%);
}
</style>