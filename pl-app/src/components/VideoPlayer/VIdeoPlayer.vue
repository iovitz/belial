<script setup lang="ts">
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import type Player from 'video.js/dist/types/player'

const props = defineProps<{
  url: string
  type: string
}>()

let _player: Player
const videoContainer = ref<HTMLDivElement | null>(null)

// when url or type changes, reload the video
watch(() => [props.url, props.type], () => {
  _player?.src({
    src: props.url,
    type: props.type,
  })
})

onMounted(() => {
  // 挂载播放器
  if (videoContainer.value) {
    _player = videojs(videoContainer.value, {
      autoplay: true, // 自动播放
      controls: true, // 显示控件
      responsive: true, // 自适应
      fluid: true, // 流式布局
      sources: [{
        src: props.url, // 视频文件的 URL
        type: props.type,
      }],
    })
  }
})

onUnmounted(() => {
  // 销毁播放器
  _player?.dispose()
})
</script>

<template>
  <video ref="videoContainer" class="video-js">
    Your browser does not support the video tag.
  </video>
</template>

<style lang="scss" scoped>

</style>
