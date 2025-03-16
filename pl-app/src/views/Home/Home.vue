<script setup lang="ts">
import { NavBar, PullRefresh, Search, showToast } from 'vant'
import { ref } from 'vue'
import HomeBanner from './HomeBanner.vue'
import VideoCardFlow from '@/components/VideoCardFlow/VideoCardFlow.vue'

const searchValue = ref('')

function onSearch() {
  // alert('search')
}

const loading = ref(false)
function onRefresh() {
  setTimeout(() => {
    showToast('刷新成功，精彩内容已就绪')
    loading.value = false
  }, 1000)
}
</script>

<template>
  <NavBar
    title="首页"
    safe-area-inset-top
  />
  <div class="flex-1 min-h-0 overflow-y-scroll">
    <PullRefresh v-model="loading" :head-height="80" @refresh="onRefresh">
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling>
        往下拽一拽呀，更多精彩新旅程！
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        好嘞，松开手指，马上开始新内容探秘之旅！
      </template>

      <!-- 加载提示 -->
      <template #loading>
        咻咻咻，新内容正在火速赶来！
      </template>
      <Search
        v-model="searchValue"
        shape="round" placeholder="请输入搜索关键词"
        @search="onSearch"
      />
      <HomeBanner />
      <h1 class="text-lg mt-4 font-bold ml-2">
        视频推荐
      </h1>
      <VideoCardFlow />
    </PullRefresh>
  </div>
</template>
