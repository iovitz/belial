<script setup lang="ts">
import { Search } from 'vant'
import { ref } from 'vue'

const searchValue = ref('')

function onSearch() {
  // alert('search')
}
</script>

<template>
  <Search
    v-model="searchValue"
    shape="round" placeholder="请输入搜索关键词"
    @search="onSearch"
  />
</template>
