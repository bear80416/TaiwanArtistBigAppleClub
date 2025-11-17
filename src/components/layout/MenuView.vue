<script setup lang="ts">

</script>

<template>
    <div class="marquee-container">
        <div class="marquee-content">
            <span><RouterLink class="text-decoration-none text-dark" to="/events">NEW EVENT 2025</RouterLink></span> /
            <span><RouterLink class="text-decoration-none text-dark" to="/whoAreWe">WHO ARE WE</RouterLink></span> /
            <span><RouterLink class="text-decoration-none text-dark" to="/whatWeDo">WHAT WE DO</RouterLink></span> /
            <span><RouterLink class="text-decoration-none text-dark" to="/whoStartedThis">WHO STARTED THIS</RouterLink></span> /
            <span><RouterLink class="text-decoration-none text-dark" to="/whatWeDid">WHAT WE DID</RouterLink></span> /
            <span><RouterLink class="text-decoration-none text-dark" to="/whereToConnect">WHERE TO CONNECT</RouterLink></span>
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
        font-family: 'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif;
        font-size: 2rem;
        font-style: italic;
        font-weight: 700;
        animation: scrollText 20s linear infinite;
    }

        .marquee-content span {
            margin: 0 40px;
        }
</style>