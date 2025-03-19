import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 2. 引入组件样式
import 'vant/lib/index.css'
import './styles/utils.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
