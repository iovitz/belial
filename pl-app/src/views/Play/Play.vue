<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import VIdeoPlayer from '@/components/VideoPlayer/VIdeoPlayer.vue'
import { Button, Field, Icon, Image, Tab, Tabs, TextEllipsis } from 'vant'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const text = ref('')
const route = useRoute()
const videoId = ref('')
const videoNotExists = ref(false)
const videoTitle = ref('')
const videoUrl = ref('https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4')

const active = ref(0)
function handleSwitchVideo(url: string) {
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
  <PageContainer title="播放">
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
        <div class="mx-2 py-2 flex items-center">
          <Image src="https://fakeimg.pl/100x100/2775b6/" round height="40" width="40" />
          <div class="mx-2 flex-1 min-w-0">
            <h4>title</h4>
            <p class="text-xs text-ellipsis-1">
              发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发
            </p>
          </div>
          <Button type="primary" size="small">
            关注
          </Button>
        </div>
        <div class="text-sm">
          <TextEllipsis class="mx-2" content="发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发我额发我额发哇额发发我额发我额额发发我额发我额发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发我额发我额发哇额发发我额发我额额发发我额发我额" rows="2" expand-text="展开" collapse-text="收起" />
          <div class="mx-2 mt-2 text-gray-500 text-sm flex justify-between">
            <div>
              <Icon name="clock-o" /> 2012-12-12 10:39:13
            </div>
            <div>
              <Icon size="16" name="eye-o" class="mr-1 " /> 23123
              <Icon name="chat-o" class="ml-2" /> 300
            </div>
          </div>
        </div>
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
