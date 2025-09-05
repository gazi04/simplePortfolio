<script setup lang="ts">
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://img.daisyui.com/images/stock/photo-1572569511254-d8f925fe2cbb.webp",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with location detection, 5-day forecast, and interactive maps.",
    image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization, reporting, and insights.",
    image: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-first fitness application with workout planning, progress tracking, and social features.",
    image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 6,
    title: "Blog CMS",
    description: "Content management system for bloggers with rich text editing, SEO tools, and analytics.",
    image: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    technologies: ["PHP", "MySQL", "Bootstrap", "CKEditor"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];
</script>

<template>
  <div class="projects-container bg-base-200 py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Some Projects I
    Worked On 🌟</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-center">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card-wrapper h-full"
      >
        <div class="card bg-base-100 w-full h-full shadow-xl hover:shadow-2xl transition-all duration-300">
          <figure class="h-40 sm:h-44 md:h-48 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </figure>

          <div class="card-body flex flex-col p-4 sm:p-5 md:p-6">
            <div class="flex-grow">
              <h2 class="card-title text-lg sm:text-xl mb-2">{{ project.title }}</h2>
              <p class="text-base-content/80 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">{{ project.description }}</p>

              <!-- Technologies Badges -->
              <div class="flex flex-wrap gap-1 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="badge badge-outline badge-xs sm:badge-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="card-actions justify-end mt-auto">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-sm md:btn-md"
                title="GitHub Repository"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card-wrapper {
  transition: transform 0.3s ease;
}

.project-card-wrapper:hover {
  transform: translateY(-4px);
}

/* Custom responsive adjustments */
@media (max-width: 640px) {
  .projects-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 1536px) {
  .projects-container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
