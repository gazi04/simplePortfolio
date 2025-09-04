<script setup lang="ts">
interface Technology {
  name: string
  logo: string
  url?: string
}

const technologies: Technology[] = [
  {
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  },
  // { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  },
  {
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  },
  // { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  // { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  // { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  // { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  // { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  // { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  // { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  // { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg' },
  // { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  // { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' }
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 mb-8">
    <b class="mr-4">Tech Stack &nbsp|</b>&nbsp &nbsp
    <div v-for="(tech, index) in technologies" :key="tech.name" class="flex items-center">
      <div
        class="flex items-center gap-2 px-2 py-1 rounded group hover:bg-base-200 transition-colors"
      >
        <img :src="tech.logo" :alt="tech.name" class="w-5 h-5 object-contain" />
        <span class="text-sm font-medium">{{ tech.name }}</span>
      </div>

      <span v-if="index < technologies.length - 1" class="text-base-300 mx-1"> </span>
    </div>
  </div>
</template>
