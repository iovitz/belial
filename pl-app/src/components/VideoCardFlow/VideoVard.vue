<script setup lang="ts">
import { Image, TextEllipsis } from 'vant'

const props = defineProps({
  id: String,
  cover: String,
  title: String,
  author: String,
  time: String,
})
</script>

<template>
  <div class="video-card">
    <Image
      :src="props.cover"
    />
    <TextEllipsis class="text-xs " rows="2" font="12" :content="props.title" />
    <p class="text-xs mt-1">
      <span class="text-gray-700">{{ props.author }}</span> <span class="text-gray-400">{{ props.time }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.video-card {
  border-radius: 5px;
  overflow: hidden;
}
</style>
