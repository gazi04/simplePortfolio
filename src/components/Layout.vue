<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './Navbar.vue'
import Home from '../views/Home.vue'
</script>

<template>
 <Navbar />

  <div class="font-arimo">
    <Home />
  </div>

  <!-- add footer later on -->
</template>
