<script setup lang="ts">
import { Icon, TextEllipsis } from 'vant'
import CoverImage from '../CoverImage/CoverImage.vue'

const props = defineProps<{
  id: string
  cover: string
  title: string
  time: string
  playCount: number
}>()
</script>

<template>
  <div class="flex" style="line-height: 1;">
    <CoverImage :src="props.cover" width="150px" />
    <div class="flex min-w-0 ml-2  flex-col justify-between w-full">
      <TextEllipsis class="w-full text-sm !leading-4" rows="2" :content="props.title" />

      <div>
        <p class="text-xs text-gray-400">
          <span class="text-gray-400">{{ props.time }}</span>
        </p>

        <p class="text-xs mt-1 flex items-center justify-between text-gray-400 leading-4">
          <Icon size="16" name="eye-o" class="mr-1 " />
          <span class="mr-auto">{{ props.playCount }}</span>
          <!-- <Icon size="12" name="ellipsis" class="mr-1" /> -->
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
