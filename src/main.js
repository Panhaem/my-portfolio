import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// AOS.init()
app.mount('#app')
AOS.init({
  duration: 900,
  offset: 80,
  easing: "ease-in-out",
  once: false,
})
