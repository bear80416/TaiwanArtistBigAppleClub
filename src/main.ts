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
const events = () => import('../src/components/EventsView.vue')
const whoStartedThis = () => import('../src/components/WhoStartedThisView.vue')
const whatWeDid = () => import('../src/components/WhatWeDidView.vue')
const whereToConnect = () => import('../src/components/WhereToConnectView.vue')

const routes = [
    { path: '/', components: { default: home, layout: index } },
    { path: '/whatWeDo', components: { default: whatWeDo, layout: main } },
    { path: '/whoAreWe', components: { default: whoAreWe, layout: main } },
    { path: '/events', components: { default: events, layout: main } },
    { path: '/whoStartedThis', components: { default: whoStartedThis, layout: main } },
    { path: '/whatWeDid', components: { default: whatWeDid, layout: main } },
    { path: '/whereToConnect', components: { default: whereToConnect, layout: main } },
]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')
