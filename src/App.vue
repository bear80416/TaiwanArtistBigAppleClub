<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-black sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="./assets/logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/" aria-current="page" data-section="home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="#" data-section="info">More Info.</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header class="hero-section text-center">
    <div class="hero-content">
      <h1 class="display-3 fw-bold">你的故事，從這裡開始</h1>
      <p class="lead my-2">*紐約的台灣藝術家們 限定</p>
      <p class="lead my-4">每個月舉辦聚會，讓我們可以講中文、聽中文歌、認識新的台灣藝術家朋友、一起交流的俱樂部</p>
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

</script>

<style scoped>
body {
  font-family: 'Noto Sans TC', sans-serif;
  background-color: #000000;
}

.hero-section {
  background: url('./assets/background.png') no-repeat;
  background-color: #fd9191;
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
</style>
