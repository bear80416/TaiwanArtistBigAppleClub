import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
// Import our custom CSS
import './assets/scss/styles.scss'

const basePath = '/TaiwanArtistBigAppleClub/';
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
    { path: '/', name:'', components: { default: home, layout: index } },
    { path: '/whatWeDo', name: 'whatWeDo', components: { default: whatWeDo, layout: main } },
    { path: '/whoAreWe', name: 'whoAreWe', components: { default: whoAreWe, layout: main } },
    { path: '/events', name: 'events', components: { default: events, layout: main } },
    { path: '/whoStartedThis', name: 'whoStartedThis', components: { default: whoStartedThis, layout: main } },
    { path: '/whatWeDid', name: 'whatWeDid', components: { default: whatWeDid, layout: main } },
    { path: '/whereToConnect', name: 'whereToConnect', components: { default: whereToConnect, layout: main } },
]
  
const router = createRouter({
    history: createWebHistory(basePath),
    routes
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')
