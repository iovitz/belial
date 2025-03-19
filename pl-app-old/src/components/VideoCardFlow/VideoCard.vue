<script setup lang="ts">
import { Image, TextEllipsis } from 'vant'
import CoverImage from '../CoverImage/CoverImage.vue'

const props = defineProps<{
  id: string
  cover: string
  title: string
  author: string
  time?: string
}>()
</script>

<template>
  <div class="video-card">
    <CoverImage
      :src="props.cover"
      width="100%"
    />
    <TextEllipsis class="text-xs " rows="2" font="12" :content="props.title" />
    <p class="text-xs mt-1">
      <span class="text-gray-700">{{ props.author }}</span> <span v-if="props.time" class="text-gray-400">{{ props.time }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.video-card {
  border-radius: 5px;
  overflow: hidden;
}
</style>
