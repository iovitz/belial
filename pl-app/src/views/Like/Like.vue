<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import VideoCardRow from '@/components/VideoCardFlow/VideoCardRow.vue'
import { Button, Cell, SwipeCell } from 'vant'
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
  <PageContainer title="我的收藏">
    <SwipeCell v-for="item in myVideo" :key="item.id" class="bg-white">
      <Cell>
        <template #title>
          <VideoCardRow :id="item.id" :title="item.title" :cover="item.cover" :play-count="item.playCount" :time="item.time" />
        </template>
      </Cell>
      <template #right>
        <Button square type="danger" class="!h-full w-24" text="取消收藏" />
      </template>
    </SwipeCell>
  </PageContainer>
</template>

<style lang="scss" scoped>

</style>
