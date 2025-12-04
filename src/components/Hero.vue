<template>
  <div
    class="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10
           bg-gray-100 dark:bg-gray-900 text-center md:text-left px-6 pt-28"
    data-aos="fade-up"
  >
    <!-- Profile Image -->
    <img
      src="@/assets/profile.png"
      alt="Panha Photo"
      class="w-60 h-60 object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-700"
    />

    <!-- Text Section -->
    <div>
      <h1 class="text-5xl font-bold mb-4 dark:text-white">Panha Em</h1>
      <h2 class="text-2xl text-gray-600 dark:text-gray-300 mb-6">Web Developer</h2>
      <p class="max-w-xl text-gray-500 dark:text-gray-400 mb-6">
        I create modern, scalable, and secure web applications using Vue.js, React,
        Laravel, and modern technologies. Passionate about building real-world
        solutions and improving system performance.
      </p>

      <!-- Buttons Row -->
      <div class="flex flex-wrap gap-4 justify-center md:justify-start">

        <!-- Download CV Button -->
        <a
          href="/empanha.pdf"
          download
          class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transition"
        >
          Download CV
        </a>

        <!-- View Projects Button -->
        <a
          href="#projects"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:scale-105 transition dark:bg-gray-700"
        >
          View Projects
        </a>

        <!-- Social Icons -->
        <a
          href="https://github.com"
          target="_blank"
          class="text-gray-700 dark:text-gray-300 hover:text-blue-600 flex items-center"
        >
          <i class="fa-brands fa-github text-3xl"></i>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          class="text-gray-700 dark:text-gray-300 hover:text-blue-700 flex items-center"
        >
          <i class="fa-brands fa-linkedin text-3xl"></i>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          class="text-gray-700 dark:text-gray-300 hover:text-blue-500 flex items-center"
        >
          <i class="fa-brands fa-facebook text-3xl"></i>
        </a>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>
