<script setup lang="ts">
import { Button, Cell, CellGroup, Icon, Image, NavBar, SwipeCell, TextEllipsis } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <NavBar
    title="Mine"
    safe-area-inset-top
  />

  <CellGroup>
    <Cell clickable>
      <template #title>
        <div class="flex">
          <Image src="https://fakeimg.pl/100x100/2775b6/" round height="80" width="80" />
          <div class="flex-1 ml-3 flex flex-col justify-center">
            <h3 class="font-bold text-lg">
              飞翔的小鸟
            </h3>
            <TextEllipsis class="text-sm" content="这个人很懒这个人很懒这个人很懒这个人很这个人很懒这个人很懒这个人很懒这个人很这个人很懒这个人很懒这个人很懒这个人很" />
          </div>
        </div>
      </template>
    </Cell>
    <Cell is-link to="/my-video">
      <template #title>
        <div class="flex items-center">
          <Icon size="18" name="tv-o" class="mr-1" />
          我的作品
        </div>
      </template>
    </Cell>
    <Cell is-link to="/like">
      <template #title>
        <div class="flex items-center">
          <Icon size="18" name="star-o" class="mr-1" />
          收藏
        </div>
      </template>
    </Cell>
    <Cell is-link>
      <template #title>
        <div class="flex items-center">
          <Icon size="18" name="like-o" class="mr-1" />
          关注
        </div>
      </template>
    </Cell>
    <Cell is-link>
      <template #title>
        <div class="flex items-center">
          <Icon size="18" name="clock-o" class="mr-1" />
          历史记录
        </div>
      </template>
    </Cell>
    <Cell>
      <template #title>
        <Button type="primary" round block @click="router.push('/publish')">
          立即投稿
        </Button>
      </template>
    </Cell>
  </CellGroup>
</template>
