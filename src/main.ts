import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes/index'

const app = createApp(App)
app.use(store).use(router).mount('#app')
