<script setup lang="ts">

</script>

<template>
    <div class="marquee-container">
        <div class="marquee-content">
            <span>NEW EVENT 2025</span> /
            <span><router-link class="text-decoration-none text-dark" to="/whoAreWe">WHO ARE WE</router-link></span> /
            <span><router-link class="text-decoration-none text-dark" to="/whoAreWe">WHAT WE DO</router-link></span> /
            <span>WHO STARTED THIS</span> /
            <span>WHAT WE DID</span>
        </div>
    </div>
</template>

<style scoped>
    /* --- 2. ¼é¬y¶]°¨¿O (Marquee) --- */
    .marquee-container {
        background: var(--text-color);
        color: var(--bg-color);
        padding: 15px 0;
        overflow: hidden;
        white-space: nowrap;
        border-bottom: 1px solid #333;
    }

    .marquee-content {
        display: inline-block;
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        font-style: italic;
        font-weight: 700;
        animation: scrollText 20s linear infinite;
    }

        .marquee-content span {
            margin: 0 40px;
        }
</style>