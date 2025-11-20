<script setup lang="ts">
    import { ref } from 'vue'

    const titles = ref([
       'NEW EVENT 2025' ,
       'DANCE' ,
       'MUSICAL' ,
       'HENRY WU' ,
       'DESIGN' ,
       'TAIWANESE FOOD' ,
       'JOIN US IF YOU\'RE A TAIWANESE!!!',
    ])
</script>

<template>
    <div class="marquee-container">
        <div class="marquee-content">
            <span v-for="(title, index) in titles"><span class="ms-4 me-4">{{title}}</span> /</span>
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
</style>