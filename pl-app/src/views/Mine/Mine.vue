<script setup lang="ts">
import { Cell, CellGroup, Icon, Image, NavBar, TextEllipsis } from 'vant'
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
          <Image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" round height="80" width="80" />
          <div class="flex-1 ml-3 flex flex-col justify-center">
            <h3 class="font-bold text-lg">
              飞翔的小鸟
            </h3>
            <TextEllipsis class="text-sm" content="这个人很懒这个人很懒这个人很懒这个人很这个人很懒这个人很懒这个人很懒这个人很这个人很懒这个人很懒这个人很懒这个人很" />
          </div>
        </div>
      </template>
    </Cell>
    <Cell is-link>
      <template #title>
        <Icon name="tv-o" class="font-bold" />
        我的作品
      </template>
    </Cell>
    <Cell is-link>
      <template #title>
        <Icon name="star-o" class="font-bold" />
        收藏
      </template>
    </Cell>
    <Cell is-link>
      <template #title>
        <Icon name="like-o" class="font-bold" />
        关注
      </template>
    </Cell>
    <Cell is-link>
      <template #title>
        <Icon name="clock-o" class="font-bold" />
        历史记录
      </template>
    </Cell>
  </CellGroup>
</template>
