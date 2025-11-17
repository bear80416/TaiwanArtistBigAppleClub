<template>
        <section class="editorial-section">
            <div class="editorial-img-wrapper">
                <img src="../assets/section01.png" alt="Fashion Model" class="editorial-img">
            </div>
            <div class="editorial-text">
                <h2>WHAT WE <br>DO</h2>
                <p>在這裡，我們講中文、聽中文歌、品嘗台灣的味道，讓每個人都能在最自在的氛圍裡認識、交流與分享...</p>
                <RouterLink to="/whatWeDo" class="btn-fashion" style="margin-top: 0;">Read The Story</RouterLink>
            </div>
        </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

    /* --- 3. 雜誌風內容區 (Editorial Section) --- */
    .editorial-section {
        padding: 100px 5%;
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr; /* 兩欄佈局 */
        gap: 60px;
        align-items: center;
    }

    .editorial-img-wrapper {
        position: relative;
    }

    .editorial-img {
        width: 100%;
        height: auto;
        display: block;
        filter: grayscale(100%); /* 黑白風格 */
        transition: filter 0.5s ease;
    }

    .editorial-img-wrapper:hover .editorial-img {
        filter: grayscale(0%); /* 懸停時變彩色 */
    }

    /* 裝飾性方框 */
    .editorial-img-wrapper::after {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        width: 100%;
        height: 100%;
        border: 1px solid var(--text-color);
        z-index: -1;
    }

    .editorial-text h2 {
        font-family: 'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif;
        font-size: 3.5rem;
        line-height: 1.1;
        margin-bottom: 30px;
    }

    .editorial-text p {
        font-size: 1rem;
        line-height: 1.8;
        color: #ccc;
        margin-bottom: 30px;
    }

   

    /* --- 響應式調整 --- */
    @media (max-width: 768px) {
        .editorial-section {
            grid-template-columns: 1fr; /* 手機變單欄 */
            padding: 60px 20px;
        }
    }
</style>