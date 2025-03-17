<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import VideoCardRow from '@/components/VideoCardFlow/VideoCardRow.vue'
import { sleep } from '@/utils/sleep'
import { Button, Cell, List, SwipeCell } from 'vant'
import { onMounted, ref } from 'vue'

interface LikeVideo {
  id: string
  cover: string
  title: string
  time: string
  playCount: number
}

const page = ref(0)
const loading = ref(false)
const finished = ref(false)

const likeVideos = ref<LikeVideo[]>([])

function handleLoad() {
  for (let i = 0; i < 10; i++) {
    likeVideos.value.push({
      id: `${page.value * 10 + i + 1}`,
      cover: 'https://fakeimg.pl/1920x1080/2775b6/',
      title: `翻山渡河钻雨林，这趟拍摄南美毒枭遭老罪了翻山渡河钻雨林，这趟拍摄南美毒枭遭老罪了${i}`,
      time: '2021-09-01',
      playCount: 100,
    })
  }
}

onMounted(async () => {
  loading.value = true
  await sleep(1000)
  handleLoad()
  loading.value = true
})
</script>

<template>
  <PageContainer title="我的收藏">
    <List v-model:loading2="loading" :finished="finished" :offset="100" @load="handleLoad">
      <SwipeCell v-for="item in likeVideos" :key="item.id" class="bg-white">
        <Cell>
          <template #title>
            <VideoCardRow :id="item.id" :title="item.title" :cover="item.cover" :play-count="item.playCount" :time="item.time" />
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
