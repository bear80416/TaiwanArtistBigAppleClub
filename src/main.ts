import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
// Import our custom CSS
import './assets/scss/styles.scss'

const home = () => import('../src/components/HomeView.vue')
const index = () => import('../src/components/layout/IndexView.vue')
const main = () => import('../src/components/layout/MainView.vue')
const whatWeDo = () => import('../src/components/WhatWeDoView.vue')
const whoAreWe = () => import('../src/components/WhoAreWeView.vue')

const routes = [
    { path: '/', components: { default: home, layout: index } },
    { path: '/whatWeDo', components: { default: whatWeDo, layout: main } },
    { path: '/whoAreWe', components: { default: whoAreWe, layout: main } }
]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')
