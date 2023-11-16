import './assets/styles/tailwind.css'
import { MotionPlugin } from '@vueuse/motion'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(MotionPlugin)

app.use(router).mount('#app')
