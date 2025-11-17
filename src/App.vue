<template>
    <router-view  name="layout" />
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

</style>
