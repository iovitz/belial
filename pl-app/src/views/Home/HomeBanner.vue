<script setup lang="ts">
import { Button, Swipe, SwipeItem } from 'vant'
import { ref } from 'vue'

const swiperItem = ref([{
  id: '1',
  cover: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
}, {
  id: '2',
  cover: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
}, {
  id: '3',
  cover: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
}])
</script>

<template>
  <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <SwipeItem v-for="item in swiperItem" :key="item.id">
      <img :src="item.cover">
    </SwipeItem>
  </Swipe>
</template>

<style scoped>

</style>
