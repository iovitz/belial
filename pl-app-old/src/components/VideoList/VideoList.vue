<script setup lang="ts">
import type { VideoInfo } from '@/stores/video/types'
import { sleep } from '@/utils/sleep'
import { Cell, List } from 'vant'
import { onMounted, ref } from 'vue'
import VideoListItem from './VideoListItem.vue'

const page = ref(0)
const loading = ref(false)
const finished = ref(false)

const videoList = ref<VideoInfo[]>([])

async function handleLoad() {
  loading.value = true
  await sleep(1000)
  console.error('拉取')
  for (let i = 0; i < 10; i++) {
    videoList.value.push({
      id: `${page.value * 10 + i + 1}`,
      cover: 'https://fakeimg.pl/1920x1080/2775b6/',
      title: `翻山渡河钻雨林，这趟拍摄南美毒枭遭老罪了翻山渡河钻雨林，这趟拍摄南美毒枭遭老罪了${i}`,
      time: '2021-09-01',
      playCount: 100,
    })
  }
  loading.value = false
}

onMounted(async () => {
  await handleLoad()
})
</script>

<template>
  <List v-model:loading="loading" :finished="finished" :offset="300" @load="handleLoad">
    <Cell v-for="video in videoList" :key="video.id">
      <template #title>
        <VideoListItem :id="video.id" :title="video.title" :cover="video.cover" :play-count="video.playCount" :time="video.time" />
      </template>
    </Cell>
  </List>
</template>

<style lang="scss" scoped>

</style>
