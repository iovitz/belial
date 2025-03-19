<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import VideoListItem from '@/components/VideoList/VideoListItem.vue'
import type { VideoInfo } from '@/stores/video/types'
import { sleep } from '@/utils/sleep'
import { Button, Cell, List, SwipeCell } from 'vant'
import { onMounted, ref } from 'vue'

const page = ref(0)
const loading = ref(false)
const finished = ref(false)

const videoList = ref<VideoInfo[]>([])

async function handleLoad() {
  loading.value = true
  await sleep(1000)
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
  // handleLoad()
})
</script>

<template>
  <PageContainer title="我的收藏">
    <List v-model:loading="loading" :finished="finished" :offset="100" @load="handleLoad">
      <SwipeCell v-for="video in videoList" :key="video.id" class="bg-white">
        <Cell>
          <template #title>
            <VideoListItem :id="video.id" :title="video.title" :cover="video.cover" :play-count="video.playCount" :time="video.time" />
          </template>
        </Cell>
        <template #right>
          <Button square type="danger" class="!h-full w-24" text="取消收藏" />
        </template>
      </SwipeCell>
    </List>
  </PageContainer>
</template>

<style lang="scss" scoped>

</style>
