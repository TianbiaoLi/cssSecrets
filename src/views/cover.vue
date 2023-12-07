<template>
  <div class="cover">
    <h1 class="tagline">
      <span class="accent">《CSS揭秘》</span>
      <br />
      解答网页设计经典难题
    </h1>
    <div class="description">7大主题，47个CSS技巧</div>
    <div>
      <div class="btn" @click="showGallery">
        <span class="btnText">预览及快速复制</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    /**
     * @description 路由跳转到画册页
     */
    const showGallery = () => {
      router.push("gallery");
    };
    return {
      showGallery,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.cover {
  height: 100%;
  background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
// 标题
.tagline {
  text-align: center;
  font-size: 4.75rem;
  color: #213547;
}
// 彩色书名
.accent {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
// 描述
.description {
  font-size: 1.375rem;
  color: rgba(60, 60, 60, 0.7);
  margin: 1.5rem auto 2.5rem;
  text-align: center;
}
// 设置文字无法选择，避免鼠标变形
.tagline,
.accent,
.description {
  user-select: none;
}

// 跳转按钮
.btn {
  position: relative;
  padding: 1em 2em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  color: white;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    z-index: -10; // 解决背景遮盖文字
    border-radius: 0.5rem;
    transition: box-shadow 0.5s ease, transform 0.2s ease;
    will-change: transform;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
      rotateY(var(--ry, 0)) translateZ(var(--tz, -0.75rem));
  }
  &:hover::before {
    box-shadow: 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.3);
  }
  &::after {
    position: relative;
    display: inline-block;
    content: attr(data-title);
    transition: transform 0.2s ease;
    font-weight: bold;
    letter-spacing: 0.01em;
    will-change: transform;
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
      rotateY(var(--ry, 0));
  }
  .btnText {
    z-index: 10; // 解决背景遮盖文字
  }
}
</style>