import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupAssets() // 设置静态样式

  setupScrollbarStyle() // 设置滚动条样式

  setupStore(app)

  setupI18n(app) // 设置语言选择

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
