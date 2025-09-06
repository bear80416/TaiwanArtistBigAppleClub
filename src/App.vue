<template>
  <div class="m-0 border-0">
    <nav class="navbar navbar-expand-lg bg-black navbar-dark sticky-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/logo.png" width="250" alt="Taiwna Artist Big Apple Club | 搞藝術的台灣浪子大蘋果俱樂部">
        </router-link>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="info">More Info.</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <header class="hero-section text-center">
    <div class="hero-content">
      <h1 class="display-3 fw-bold">你的故事，從這裡開始</h1>
      <!-- <p class="lead my-2">*紐約的台灣藝術家們 限定</p>
      <p class="lead my-4">每個月舉辦聚會，讓我們可以講中文、聽中文歌、認識新的台灣藝術家朋友、一起交流的俱樂部</p> -->
      <a href="#contact" class="btn btn-info btn-lg">立即訂閱消息</a>
    </div>
  </header>

  <main class="app-main bg-black">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <footer class="bg-dark text-white text-center py-4">
    <p class="mb-0">&copy; 2025 Taiwna Artist Big Apple Club | 搞藝術的台灣浪子大蘋果俱樂部. All Rights Reserved.</p>
  </footer>

</template>

<script setup lang="ts">
import { Collapse } from 'bootstrap'
document.querySelectorAll('[data-bs-toggle="collapse"]')
  .forEach(collapse => {
    new Collapse(collapse)
  })

</script>

<style scoped>



.hero-section {
  background: url('./assets/background.png') no-repeat center top;
  background-size: cover;
  color: white;
  padding: 10rem 0;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  /* 半透明遮罩 */
}

.hero-content {
  position: relative;
  z-index: 2;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
