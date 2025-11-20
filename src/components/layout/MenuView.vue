<script setup lang="ts">
    function toggleMenu() {
        document.body.classList.toggle('menu-open');
    }

    // 圖片切換邏輯
    function changeImage(imgId:string) {
        // 1. 移除所有圖片的 active class
        const images = document.querySelectorAll('.preview-img');
        images.forEach(img => {
            img.classList.remove('active');
        });

        // 2. 將目標圖片加上 active class
        const targetImg = document.getElementById(imgId);
        if(targetImg) {
            targetImg.classList.add('active');
        }
    }
</script>

<template>
    <nav class="navbar">
        <div class="logo"><RouterLink class="col text-center" to="/"><img src="../../assets/logo.png" width="250" alt="Taiwna Artist Big Apple Club | 搞藝術的台灣浪子大蘋果俱樂部"></RouterLink></div>
        <div class="menu-trigger" v-on:click="toggleMenu()">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </nav>

    <div class="menu-overlay">
        <div class="menu-grid">
            
            <div class="menu-links">
                <RouterLink to="whoAreWe" class="menu-item" v-on:mouseenter="changeImage('img1')" v-on:click="toggleMenu()">
                    <span>01</span>Who Are We
                </RouterLink>
                <RouterLink to="whatWeDo" class="menu-item" v-on:mouseenter="changeImage('img2')" v-on:click="toggleMenu()">
                    <span>02</span>WHAT WE DO
                </RouterLink>
                <RouterLink to="whoStartedThis" class="menu-item" v-on:mouseenter="changeImage('img3')" v-on:click="toggleMenu()">
                    <span>03</span>WHO STARTED THIS
                </RouterLink>
                <RouterLink to="whatWeDid" class="menu-item" v-on:mouseenter="changeImage('img4')" v-on:click="toggleMenu()">
                    <span>04</span>WHAT WE DID
                </RouterLink>
                <RouterLink to="whereToConnect" class="menu-item" v-on:mouseenter="changeImage('img5')" v-on:click="toggleMenu()">
                    <span>05</span>WHERE TO CONNECT
                </RouterLink>
            </div>

            <div class="menu-preview">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" class="preview-img active" id="img1">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" class="preview-img" id="img2">
                <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" class="preview-img" id="img3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" class="preview-img" id="img4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" class="preview-img" id="img5">
            </div>

        </div>
    </div>
    <div style="padding: 60px 50px;">
    </div>
</template>

<style scoped>
    /* --- 導覽列 (Navbar) --- */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 30px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
            mix-blend-mode: difference; /* 讓文字在任何背景上都可見 */
        }

        .logo {
            font-family: var(--accent-font);
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* 漢堡選單按鈕 (Hamburger) */
        .menu-trigger {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            gap: 6px;
            width: 40px;
            transition: transform 0.3s ease;
        }

        .line {
            width: 100%;
            height: 1px;
            background-color: white;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        /* 按鈕懸停效果：線條錯位 */
        .menu-trigger:hover .line:nth-child(1) { transform: translateX(-5px); }
        .menu-trigger:hover .line:nth-child(3) { transform: translateX(5px); }

        /* 關閉狀態的按鈕樣式 */
        body.menu-open .line:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        body.menu-open .line:nth-child(2) { opacity: 0; width: 0; }
        body.menu-open .line:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

        /* --- 全屏選單 (Overlay Menu) --- */
        .menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: var(--menu-bg);
            backdrop-filter: blur(15px); /* 毛玻璃效果 */
            -webkit-backdrop-filter: blur(15px); /* Safari 支援 */
            z-index: 90;
            
            /* 初始狀態：隱藏 */
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease, visibility 0.5s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        body.menu-open .menu-overlay {
            opacity: 1;
            visibility: visible;
        }

        /* 選單佈局網格 */
        .menu-grid {
            width: 80%;
            height: 70%;
            display: grid;
            grid-template-columns: 1.2fr 1fr; /* 左邊連結，右邊圖片 */
            gap: 50px;
            align-items: center;
        }

        /* --- 左側連結區 --- */
        .menu-links {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .menu-item {
            position: relative;
            font-family: var(--accent-font);
            font-size: 4rem; /* 超大字體 */
            color: rgba(255, 255, 255, 0.4); /* 預設變暗 */
            text-decoration: none;
            cursor: pointer;
            transition: color 0.3s ease, transform 0.3s ease;
            line-height: 1.1;
            
            /* 進場動畫初始狀態 */
            opacity: 0; 
            transform: translateY(30px);
        }

        /* 連結懸停效果 */
        .menu-item:hover {
            color: #fff;
            transform: translateX(20px); /* 向右滑動 */
        }
        
        /* 連結旁的小編號 */
        .menu-item span {
            font-size: 1rem;
            font-family: var(--body-font);
            position: absolute;
            top: 10px;
            left: -30px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .menu-item:hover span {
            opacity: 1;
        }

        /* 打開選單時的交錯動畫 (Staggered Animation) */
        body.menu-open .menu-item {
            animation: slideUpFade 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
        
        /* 設定延遲，讓文字依序出現 */
        body.menu-open .menu-item:nth-child(1) { animation-delay: 0.1s; }
        body.menu-open .menu-item:nth-child(2) { animation-delay: 0.2s; }
        body.menu-open .menu-item:nth-child(3) { animation-delay: 0.3s; }
        body.menu-open .menu-item:nth-child(4) { animation-delay: 0.4s; }

        /* --- 右側圖片區 --- */
        .menu-preview {
            width: 100%;
            height: 500px;
            position: relative;
            overflow: hidden;
            border-radius: 4px; /* 輕微圓角 */
            /* 初始隱藏，等連結 hover 才顯示 */
            opacity: 0;
            transform: scale(0.95);
            transition: opacity 0.5s ease, transform 0.5s ease;
            pointer-events: none; /* 讓滑鼠穿透 */
        }

        body.menu-open .menu-preview {
            opacity: 1;
            transform: scale(1);
            transition-delay: 0.3s; /* 等文字出來後再顯示圖片框 */
        }

        .preview-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0; /* 圖片預設隱藏 */
            transition: opacity 0.6s ease, transform 1.2s ease;
            transform: scale(1.1); /* 預設放大一點點 */
        }

        .preview-img.active {
            opacity: 1;
            transform: scale(1);
            z-index: 2;
        }

        /* 預設顯示第一張圖 */
        .preview-img.default {
            opacity: 1;
            z-index: 1;
        }

        @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* RWD 手機版調整 */
        @media (max-width: 768px) {
            .menu-grid {
                grid-template-columns: 1fr; /* 單欄 */
                width: 90%;
                padding-left: 25px;
            }
            .menu-preview {
                display: none; /* 手機版隱藏圖片，保持介面簡潔 */
            }
            .menu-item {
                font-size: 3rem;
            }
            .logo img {
                width: 200px;
            }
        }
</style>