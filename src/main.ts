import App from './App.vue'
import router from './router'

import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  app.use(router)
  app.use(storer)

  return { app }
}
