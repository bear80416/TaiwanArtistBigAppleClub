<template>
    <header>
      <div class="container-fluid">
        <div class="row justify-content-around align-items-center py-3">
          <router-link class="col text-start text-light text-decoration-none" to="">WHAT WE DO</router-link>
          <router-link class="col text-center" to="/"><img src="./assets/logo.png" width="250" alt="Taiwna Artist Big Apple Club | 搞藝術的台灣浪子大蘋果俱樂部"></router-link>
          <router-link class="col text-end text-light text-decoration-none" to="">WHO R WE</router-link>
        </div>
      </div>
    </header>
<main class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">


</script>

<style scoped>
  @media (max-width: 768px) {
    header img {
      width: 150px;
    }
  }
</style>
