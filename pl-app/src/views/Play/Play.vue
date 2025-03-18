<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import VIdeoPlayer from '@/components/VideoPlayer/VIdeoPlayer.vue'
import { Button, Field, Icon, Image, Tab, Tabs, TextEllipsis } from 'vant'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import VideoInfo from './VideoInfo.vue'
import UserInfo from '@/components/UserInfo/UserInfo.vue'
import VideoList from '@/components/VideoList/VideoList.vue'

const text = ref('')
const route = useRoute()
const videoId = ref('')
const videoNotExists = ref(false)
const videoTitle = ref('')
const videoUrl = ref('https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4')

const active = ref(0)
function _handleSwitchVideo(url: string) {
  videoUrl.value = url
}

onMounted(() => {
  const routeVideoId = route.params.id
  if (!routeVideoId) {
    videoNotExists.value = true
    videoTitle.value = '视频不存在'
    return
  }

  videoId.value = String(routeVideoId)
  // 拉取视频信息
})
</script>

<template>
  <PageContainer title="播放" scroller-id="play-page">
    <VIdeoPlayer :url="videoUrl" type="video/mp4" />
    <Field
      v-model="text"
      center
      clearable
      placeholder="发个弹幕^_^"
    >
      <template #button>
        <Button size="small" type="primary">
          ^_^
        </Button>
      </template>
    </Field>

    <Tabs v-model:active="active">
      <Tab title="简介">
        <div class="p-2">
          <UserInfo avatar="https://fakeimg.pl/100x100/2775b6/" description="发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发" />
        </div>
        <VideoInfo title="搞什么飞机!!!" :watch="3000" :time="Date.now()" :comment="30" />
        <VideoList scroller-id="play-page" />
      </Tab>
      <Tab title="评论(200)">
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
        <p>评论</p>
      </Tab>
    </Tabs>
  </PageContainer>
</template>

<style lang="scss" scoped>

</style>
