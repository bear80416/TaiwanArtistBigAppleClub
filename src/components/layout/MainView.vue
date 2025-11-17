<script setup lang="ts">
     import MenuView from '../layout/MenuView.vue'
</script>

<template>
	<header>
      <div class="container-fluid">
        <div class="row justify-content-around align-items-center py-3">
          <RouterLink class="col text-center" to="/"><img src="../../assets/logo.png" width="250" alt="Taiwna Artist Big Apple Club | 搞藝術的台灣浪子大蘋果俱樂部"></RouterLink>

        </div>
      </div>
    </header>
    <MenuView></MenuView>
</template>

<style scoped> 
    /* --- 2. 潮流跑馬燈 (Marquee) --- */
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
    @media (max-width: 768px) {
        header img {
            width: 150px;
        }
    }
</style>