<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import { NavBar } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
function onClickLeft() {
  router.back()
}
</script>

<template>
  <PageContainer>
    <NavBar
      title="Login"
      left-arrow
      safe-area-inset-top
      @click-left="onClickLeft"
    />
  </PageContainer>
</template>

<style lang="scss" scoped>

</style>
