<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const pageActive = ref(true)

onUnmounted(() => {
  pageActive.value = false
})
</script>

<template>
  <div
    class="page-container" :class="{
      'page-active': pageActive,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
}

@keyframes PageFadeIn {
  from {
    left: 100px; /* 初始位置 */
    opacity: 0;
  }
  to {
    left: 0px; /* 结束位置 */
    opacity: 1;
  }
}
</style>
