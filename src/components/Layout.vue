<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './Navbar.vue'
</script>

<template>
 <Navbar />

  <div class="font-arimo">
    <RouterView />
  </div>

  <!-- add footer later on -->
</template>
