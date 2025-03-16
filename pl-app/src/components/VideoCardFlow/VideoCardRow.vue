<script setup lang="ts">
import { Icon, TextEllipsis } from 'vant'

const props = defineProps<{
  id: string
  cover: string
  title: string
  time: string
  playCount: number
}>()
</script>

<template>
  <div class="flex">
    <img :src="props.cover" class="cover-img ml-2">
    <div class="flex min-w-0 ml-2  flex-col justify-between w-full mr-2">
      <TextEllipsis class="w-full text-sm !leading-4" rows="2" :content="props.title" />

      <div>
        <p class="text-xs text-gray-400">
          <span class="text-gray-400">{{ props.time }}</span>
        </p>

        <p class="text-xs mt-1 flex items-center justify-between text-gray-400">
          <span><Icon size="12" name="eye-o" class="mr-1" />{{ props.playCount }}</span>
          <!-- <Icon size="12" name="ellipsis" class="mr-1" /> -->
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover-img {
  width: 150px;
  aspect-ratio: 16 / 9;
}
</style>
