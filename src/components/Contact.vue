<script setup lang="ts">
const contactInfo = {
  email: 'gazmendhalili2016@gmail.com',
  phone: '+383 45 681 376',
};
</script>

<template>
  <div class="contact-container rounded-lg py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Get In Touch 📧</h2>

    <div class="text-center mt-8 md:mt-12">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="font-medium font-xl">{{ contactInfo.email }}</span>
        </div>
        <div class="hidden sm:block text-base-300">•</div>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="font-medium font-xl">{{ contactInfo.phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

