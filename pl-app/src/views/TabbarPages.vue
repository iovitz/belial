<script setup lang="ts">
import { Icon, Tabbar, TabbarItem } from 'vant'
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Recommend from '@/views/Recommend/Recommend.vue'
import Mine from '@/views/Mine/Mine.vue'

const tabbarValue = ref('home')
</script>

<template>
  <div class="app-container">
    <div class="flex-1 overflow-y-scroll flex flex-col">
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </RouterView>
    </div>

    <Tabbar v-model="tabbarValue" safe-area-inset-bottom route :fixed="false">
      <TabbarItem replace to="/tabbar/home" name="home">
        <template #icon>
          <Icon name="wap-home-o" />
        </template>
        Dashboard
      </TabbarItem>
      <TabbarItem replace to="/tabbar/recommend" name="recommend">
        <template #icon>
          <Icon name="apps-o" />
        </template>
        Todos
      </TabbarItem>
      <TabbarItem replace to="/tabbar/mine" name="mine">
        <template #icon>
          <Icon name="contact-o" />
        </template>
        Mine
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<style  lang="scss" scoped>
.app-container,
.router-view {
  height: 100vh;
  width: 100vw;
}
.app-container {
  position: relative;
  display: flex;
  flex-direction: column;
}
.router-view {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
