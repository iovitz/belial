<script setup lang="ts">
import { Grid, GridItem, Image } from 'vant'
import VideoVard from './VideoVard.vue'

const videoList = [
  {
    id: '1',
    cover: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
    author: '老弟',
    time: '10-4',
  },
  {
    id: '2',
    cover: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
    author: '老弟',
    time: '10-4',
  },
  {
    id: '3',
    cover: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
    author: '老弟',
    time: '10-4',
  },
  {
    id: '4',
    cover: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
    author: '老弟',
    time: '10-4',
  },
]
</script>

<template>
  <Grid
    :border="false" :column-num="2"
  >
    <GridItem v-for="(item) in videoList" :key="item.id">
      <VideoVard :id="item.id" :title="item.title" :cover="item.cover" :time="item.time" :author="item.author" />
    </GridItem>
  </Grid>
</template>

<style lang="scss" scoped>

</style>
