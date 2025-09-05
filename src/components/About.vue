<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('about')

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  // { id: 'experience', label: 'Experience' }
]

const skills = [
  { name: 'Laravel', level: 'Advanced' },
  { name: 'Vue.js', level: 'Intermediate' },
  { name: 'PHP', level: 'Advanced' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Intermediate' }
]

const experiences = [
  { period: '2023 - Present', role: 'Junior Laravel Developer', company: 'Tech Company' },
  { period: '2022 - 2023', role: 'Web Developer Intern', company: 'Startup Inc' }
]
</script>

<template>
  <section id="about" class="py-16 bg-base-100">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-extrabold mb-4 text-base-content tracking-tight">Get to know me better</h2>
      </div>

      <div class="tabs justify-center mb-8 font-semibold tracking-wider">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="[
            'tab',
            'text-lg',
            'font-bold',
            'px-6',
            'py-3',
            'border-b-3',
            'transition-colors',
            activeTab === tab.id
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-base-content'
          ]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="bg-base-100 rounded-lg">
        <div v-if="activeTab === 'about'" class="space-y-8">
         <div class="flex flex-col md:flex-row items-start gap-8">
            <img
              src="../../public/workBench.jpg"
              alt="Gazmend Halili"
              class="w-80 h-80 object-cover rounded-lg shadow-md"
            />

            <div class="flex-1">
              <h3 class="text-3xl font-bold text-base-content mb-4 tracking-tight">
                Devoted Junior Laravel Developer based in Gjilan, Kosovo 📍
              </h3>
              <p class="text-gray-500 text-xl leading-relaxed tracking-wide">
                As a committed Junior Laravel Developer  I possess a well-rounded skill set that includes PHP, MySQL, and Laravel for backend development, and Vue.js with Tailwind CSS for the frontend. I am diligent in writing clean, optimized, and maintainable code, and I'm a fast learner when it comes to utilizing new tools and techniques to build scalable and reliable web applications.
              </p>
            </div>
          </div>
        </div>

        <!-- Skills Tab -->
        <div v-if="activeTab === 'skills'" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <div class="flex justify-between items-center">
              <span class="font-bold tracking-wide text-base-content text-lg">{{ skill.name }}</span>
              <span class="font-bold tracking-wide badge badge-primary badge-lg">{{ skill.level }}</span>
            </div>
          </div>
        </div>

        <!-- Experience Tab -->
        <div v-if="activeTab === 'experience'" class="space-y-6">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <div class="text-primary font-medium mb-2">{{ exp.period }}</div>
            <h4 class="text-xl font-semibold text-base-content mb-2">{{ exp.role }}</h4>
            <p class="text-gray-500">{{ exp.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tab {
  margin-bottom: -1px;
}

.tab, div[class*="hover:"] {
  transition: all 0.2s ease-in-out;
}
</style>
