<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import VideoCardRow from '@/components/VideoCardFlow/VideoCardRow.vue'
import { Col, Row } from 'vant'
import { ref } from 'vue'

const myVideo = ref([
  {
    id: '1',
    cover: 'https://img.yzcdn.cn/vant/cat.jpeg',
    title: '标题1',
    time: '2021-09-01',
    playCount: 100,
  },
  {
    id: '2',
    cover: 'https://img.yzcdn.cn/vant/cat.jpeg',
    title: '标题1',
    time: '2021-09-01',
    playCount: 100,
  },
  {
    id: '3',
    cover: 'https://img.yzcdn.cn/vant/cat.jpeg',
    title: '标题1',
    time: '2021-09-01',
    playCount: 100,
  },
  {
    id: '4',
    cover: 'https://img.yzcdn.cn/vant/cat.jpeg',
    title: '标题1',
    time: '2021-09-01',
    playCount: 100,
  },
])
</script>

<template>
  <PageContainer title="我的视频">
    <div v-for="item in myVideo" :key="item.id" style="background: #fff;">
      <VideoCardRow :id="item.id" :title="item.title" :cover="item.cover" :play-count="item.playCount" :time="item.time" />
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
    </div>
  </PageContainer>
</template>

<style lang="scss" scoped>

</style>
