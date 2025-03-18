<script setup lang="ts">
import { Icon, TextEllipsis } from 'vant'

const props = defineProps<{
  title: string
  time: number
  watch: number
  comment: number
}>()
</script>

<template>
  <div class="text-base">
    <TextEllipsis class="mx-2" :content="props.title" rows="2" expand-text="展开" collapse-text="收起" />
    <div class="mx-2 mt-2 text-gray-500 text-sm flex justify-between">
      <div>
        <Icon name="clock-o" /> {{ props.time }}
      </div>
      <div>
        <Icon size="16" name="eye-o" class="mr-1 " /> {{ props.watch }}
        <Icon name="chat-o" class="ml-2" /> {{ props.comment }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
