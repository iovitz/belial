<script setup lang="ts">
import { Button, Image } from 'vant'

const props = defineProps<{
  avatar: string
  description: string
}>()
</script>

<template>
  <div class="flex items-center">
    <Image :src="props.avatar" round height="40" width="40" />
    <div class="mx-2 flex-1 min-w-0">
      <h4>title</h4>
      <p class="text-xs text-ellipsis-1">
        {{ props.description }}
      </p>
    </div>
    <Button type="primary" size="small">
      关注
    </Button>
  </div>
</template>

<style lang="scss" scoped>

</style>
