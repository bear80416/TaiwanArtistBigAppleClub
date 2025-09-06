import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import HomeView from './components/HomeView.vue'
// Import our custom CSS
import './assets/scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

const routes = [
   { path: '/', component: HomeView },
//  { path: '/about', component: AboutView },
]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')
