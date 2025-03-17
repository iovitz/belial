<script setup lang="ts">
import CoverImage from '@/components/CoverImage/CoverImage.vue'
import { Button, Swipe, SwipeItem } from 'vant'
import { ref } from 'vue'

const swiperItem = ref([{
  id: '1',
  cover: 'https://fakeimg.pl/1920x1080/2775b6/',
}, {
  id: '2',
  cover: 'https://fakeimg.pl/1920x1080/2775b6/',
}, {
  id: '3',
  cover: 'https://fakeimg.pl/1920x1080/2775b6/',
}])
</script>

<template>
  <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <SwipeItem v-for="item in swiperItem" :key="item.id">
      <CoverImage :src="item.cover" width="100%" />
    </SwipeItem>
  </Swipe>
</template>

<style scoped>

</style>
