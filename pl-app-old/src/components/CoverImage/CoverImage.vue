<script setup lang="ts">
import { Image, Loading } from 'vant'

const props = defineProps<{
  src: string
  width: number | string
}>()
</script>

<template>
  <div
    class="cover-img" :style="{
      width: props.width,
    }"
  >
    <Image class="h-full w-full" :src="props.src">
      <template #loading>
        <Loading type="spinner" size="20" />
      </template>
    </Image>
  </div>
</template>

<style lang="scss" scoped>
.cover-img {
  aspect-ratio: 16 / 9;
  flex-shrink: 0;
  font-size: 0;
}
</style>
