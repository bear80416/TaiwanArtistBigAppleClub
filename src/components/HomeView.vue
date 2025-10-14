<template>
    <section class="container">
        <h1>ALBERT HSUEH</h1>
        <p class="text1">薛 定 洲</p>
        <p class="text2">台灣藝術家在紐約的遊樂場 — 一個彼此連結交流、放鬆玩樂、激盪創作的俱樂部。從這裡出發，我們一起讓世界看見台灣。</p>
        <p class="text3">A playground for Taiwanese artists — where we connect, play and create in New York City.From here, we make the world see Taiwan.</p>
    </section>
    <section class="container">
        <div class="row justify-content-center g-3">
            <div class="col-3">
                <img src="/src/assets/background.png" class="w-100" alt="Albert Hsueh 1">
            </div>
            <div class="col-3">
                <img src="/src/assets/background.png" class="w-100" alt="Albert Hsueh 2">
            </div>
            <div class="col-3">
                <img src="/src/assets/background.png" class="w-100" alt="Albert Hsueh 3">
            </div>
            <div class="col-3">
                <img src="/src/assets/background.png" class="w-100" alt="Albert Hsueh 4">
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">

</script>

<style scoped>
h1{
    font-weight: bold;
    font-size: 5rem;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
}
.text1{
    text-align: center;
    margin-bottom: 120px;
}
.text2{
    text-align: center;
    margin-bottom: 120px;
    font-size: smaller;
    padding-right: 30%;
    padding-left: 30%;
}
.text3{
    text-align: center;
    margin-bottom: 120px;
    font-size: smaller;
    padding-right: 30%;
    padding-left: 30%;
}


  @media (max-width: 768px) {
    h1{
        font-size: 3.4rem;
    }
    .text1{
       font-size: smaller;
    }
    .text2{
        padding-right: 10%;
        padding-left: 10%;
    }
    .text3{
        padding-right: 10%;
        padding-left: 10%;
    }

  }
</style>