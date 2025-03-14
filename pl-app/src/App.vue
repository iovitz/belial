<script setup lang="ts">
import { Icon, Tabbar, TabbarItem } from 'vant'
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const active = ref('dashboard')
</script>

<template>
  <RouterView />
  <Tabbar v-model="active" route safe-area-inset-bottom>
    <TabbarItem name="dashboard" replace to="/">
      <template #icon>
        <Icon name="wap-home-o" />
      </template>
      Dashboard
    </TabbarItem>
    <TabbarItem name="todos" replace to="/todos">
      <template #icon>
        <Icon name="apps-o" />
      </template>
      Todos
    </TabbarItem>
    <TabbarItem name="mine" replace to="/mine">
      <template #icon>
        <Icon name="contact-o" />
      </template>
      Mine
    </TabbarItem>
  </Tabbar>
</template>

<style scoped>
</style>
