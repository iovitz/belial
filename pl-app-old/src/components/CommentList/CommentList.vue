<script setup lang="ts">
import { Button, Field } from 'vant'
import { ref } from 'vue'

const newCommentContent = ref('')
</script>

<template>
  <Field
    v-model="newCommentContent"
    rows="3"
    type="textarea"
    class="!bg-gray-50"
    placeholder="说点什么吧"
  />
  <Button block type="primary">
    发送
  </Button>
</template>

<style lang="scss" scoped>

</style>
