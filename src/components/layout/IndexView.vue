<script setup lang="ts">
    import MarqueeView from '../layout/MarqueeView.vue'
</script>

<template>
    <header class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <h1 class="brand-name"><img src="../../assets/logo.png" /></h1>
            <RouterLink to="whoAreWe" class="btn-fashion">Explore us</RouterLink>

        </div>
        <div class="hero-bottom">
            <p class="brand-slogan">台灣藝術家在紐約的遊樂場—一個彼此連結交流、放鬆玩樂、激盪創作的俱樂部。從這裡出發，我們憶起讓世界看見台灣。</p>
            <p class="brand-slogan">A playground for Taiwanese artists - where we connect, play and create in New York City.From here, we make the world see Taiwan.</p>
        </div>
    </header>
    <MarqueeView></MarqueeView>
</template>

<style scoped>
    /* --- 1. 首屏 Hero Section --- */
    .hero {
        height: 100vh;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    /* 背景圖片處理 */
    .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('../../assets/background.png') no-repeat center center/cover;
        filter: brightness(0.6) contrast(1.1); /* 降低亮度讓文字突出 */
        z-index: 1;
        transition: transform 10s ease; /* 緩慢縮放效果 */
    }

    .hero:hover .hero-bg {
        transform: scale(1.05); /* 滑鼠懸停時背景緩慢放大 */
    }

    /* 品牌大標題 */
    .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
        mix-blend-mode: difference; /* 混合模式，讓文字在複雜背景上展現時尚感 */
    }
    .hero-bottom{
        position: absolute;
        bottom: 0;
        z-index: 2;
    }
    .brand-name {
        /*font-family: 'Playfair Display', serif;*/ /* 時尚襯線體 */
        /*font-size: clamp(3rem, 10vw, 8rem);*/ /* 響應式巨型字體 */
        /*font-weight: 700;*/
        letter-spacing: -2px;
        line-height: 1;
        text-transform: uppercase;
        color: white;
        margin-bottom: 20px;
        opacity: 0;
        animation: fadeUp 1s ease forwards 0.5s;
    }

    .brand-name img {
        width: 50%;
    }

    .brand-slogan {
        padding: 0px 40px 0px 40px;
        font-size: 0.7rem;
        letter-spacing: 5px; /* 寬字距增加高級感 */
        text-transform: uppercase;
        font-weight: 300;
        opacity: 0;
        animation: fadeUp 1s ease forwards 0.8s;
    }

    @media (max-width: 768px) {
        .brand-name img {
            width: 75%;
        }
        .brand-slogan {
            font-size: 0.5rem;
        }
    }
</style>