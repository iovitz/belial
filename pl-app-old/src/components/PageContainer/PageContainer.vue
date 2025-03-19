<script setup lang="ts">
import { NavBar } from 'vant'
import { useRouter } from 'vue-router'

const props = defineProps<{
  title: string
  leftArrow?: boolean
  scrollerId?: string
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
    <div :id="props.scrollerId" class="flex-1 overflow-y-scroll min-w-0">
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
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
}
</style>
