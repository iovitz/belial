<script setup lang="ts">
import { NavBar } from 'vant'
import { useRouter } from 'vue-router'

const props = defineProps<{
  title: string
  leftArrow?: boolean
  safeAreaInsetTop?: boolean
}>()

const router = useRouter()
function onClickLeft() {
  router.back()
}
</script>

<template>
  <div
    class="page-container"
  >
    <NavBar
      :title="props.title"
      left-arrow
      safe-area-inset-top
      @click-left="onClickLeft"
    />
    <div class="page-inner">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: #f9f9f9;
}
</style>
