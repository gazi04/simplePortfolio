<script setup lang="ts">
import TechStack from './TechStack.vue'
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        class="max-w-sm rounded-lg shadow-2xl"
      />
      <div class="pr-6">
        <h1 class="text-7xl font-bold tracking-tight">Junior Laravel Developer 👋</h1>
        <p class="py-6 text-gray-500 tracking-wide">
          Gazmend Halili here, a Laravel developer based in Gjilan, Kosovo. 📍
          <br>
          I specialize in crafting robust web solutions.
        </p>
        <TechStack />
      </div>
    </div>
  </div>
</template>
