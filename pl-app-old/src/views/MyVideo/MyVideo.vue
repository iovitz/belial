<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import VideoListItem from '@/components/VideoList/VideoListItem.vue'
import { sleep } from '@/utils/sleep'
import { Button, Cell, Col, List, Row, SwipeCell } from 'vant'
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

const myVideo = ref<LikeVideo[]>([])

async function handleLoad() {
  loading.value = true
  await sleep(1000)
  loading.value = true
  for (let i = 0; i < 10; i++) {
    myVideo.value.push({
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
  handleLoad()
})
</script>

<template>
  <PageContainer title="我的视频">
    <List v-model:loading="loading" :finished="finished" :offset="100" @load="handleLoad">
      <Cell v-for="item in myVideo" :key="item.id">
        <template #title>
          <VideoListItem :id="item.id" :title="item.title" :cover="item.cover" :play-count="item.playCount" :time="item.time" />
          <Row class="text-center text-sm mb-2">
            <Col span="8" class=" my-2">
              修改
            </Col>
            <Col span="8" class=" my-2">
              視頻
            </Col>
            <Col span="8" class=" my-2">
              刪除
            </Col>
          </Row>
        </template>
      </Cell>
    </List>
  </PageContainer>
</template>

<style lang="scss" scoped>

</style>
