<script setup lang="ts">
import { Button, Image, Search, Swipe, SwipeItem } from 'vant'
import { ref } from 'vue'

const searchValue = ref('')

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

function onSearch() {
  // alert('search')
}
</script>

<template>
  <div>
    <Search
      v-model="searchValue"
      shape="round" placeholder="请输入搜索关键词"
      @search="onSearch"
    />
    <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <SwipeItem v-for="item in swiperItem" :key="item.id">
        <img :src="item.cover">
      </SwipeItem>
    </Swipe>
    <RouterLink to="/login">
      <Button>1</Button>
    </RouterLink>
  </div>
</template>
