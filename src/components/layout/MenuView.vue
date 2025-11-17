<script setup lang="ts">
    import { ref } from 'vue'

    const MenuList = ref([
        { link: '/events', title: 'NEW EVENT 2025' },
        { link: '/whoAreWe', title: 'WHO ARE WE' },
        { link: '/whatWeDo', title: 'WHAT WE DO' },
        { link: '/whoStartedThis', title: 'WHO STARTED THIS' },
        { link: '/whatWeDid', title: 'WHAT WE DID' },
        { link: '/whereToConnect', title: 'WHERE TO CONNECT' },
    ])
    const isOpened = ref(false)
    function togglerMenu() {
        
        isOpened.value = !isOpened.value
    }
</script>

<template>
    <div class="marquee-container">
        <div class="marquee-content" v-if="!isOpened" v-on:click="togglerMenu">
            <span v-for="(menu, index) in MenuList"><span class="ms-4 me-4">{{menu.title}}</span> /</span>
        </div>
    </div>
    <div class="dropdownMenu" v-if="isOpened">

        <button type="button" class="btn-close" aria-label="Close" v-on:click="togglerMenu"></button>
        <div class="menu">
            <RouterLink class="text-decoration-none text-dark d-block" v-for="(menu, index) in MenuList" v-bind:to="menu.link" v-on:click="togglerMenu">{{menu.title}}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    /* --- 2. ¼é¬y¶]°¨¿O (Marquee) --- */
    .marquee-container {
        background: var(--text-color);
        color: var(--bg-color);
        overflow: hidden;
        white-space: nowrap;
        border-bottom: 1px solid #333;
    }

    .marquee-content {
        padding: 10px 0;
        display: inline-block;
        font-family: 'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif;
        font-size: 2rem;
        font-style: italic;
        font-weight: 700;
        animation: scrollText 45s linear infinite;
    }

    .dropdownMenu {
        position:relative;
    }

    .menu {
        position: absolute;
        background: white;
        opacity: 5;
        transition: 2s;
        font-size: 1.4rem;
        font-family: 'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif;
        font-style: italic;
        font-weight: 700;
        padding: 1rem;
    }
</style>