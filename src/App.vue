<template>
  <router-view v-slot="{ Component }">
    <transition name="cover" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>
<style>
/* 页面切换动画 */
.cover-enter-active,
.cover-leave-active {
  transition: all 0.5s linear;
}
.cover-enter-from,
.cover-leave-to {
  opacity: 0;
}

</style>