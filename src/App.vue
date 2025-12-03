<template>
  <div class="scroll-smooth">

    <!-- 🔥 Responsive Navbar -->
    <nav class="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50 px-6 py-3">
      <div class="flex justify-between items-center max-w-6xl mx-auto">

        <!-- Logo -->
        <h1 class="font-bold text-lg dark:text-white">Panha</h1>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex gap-8 font-semibold text-gray-800 dark:text-gray-200">
          <li><a class="hover:text-blue-500" href="#home">Home</a></li>
          <li><a class="hover:text-blue-500" href="#about">About</a></li>
          <li><a class="hover:text-blue-500" href="#experience">Experience</a></li>
          <li><a class="hover:text-blue-500" href="#skills">Skills</a></li>
          <li><a class="hover:text-blue-500" href="#projects">Projects</a></li>
          <li><a class="hover:text-blue-500" href="#contact">Contact</a></li>
        </ul>

        <!-- Dark Mode Toggle (Desktop Only) -->
        <DarkToggle class="hidden md:block" />

        <!-- Hamburger Button (Mobile) -->
        <button @click="menuOpen = !menuOpen"
          class="md:hidden text-3xl dark:text-gray-200">
          ☰
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition name="fade">
        <div
          v-if="menuOpen"
          class="md:hidden bg-white dark:bg-gray-900 mt-4 rounded-lg shadow p-4 space-y-4"
        >
          <a @click="closeMenu" class="block text-gray-700 dark:text-gray-200 font-semibold" href="#home">Home</a>
          <a @click="closeMenu" class="block text-gray-700 dark:text-gray-200 font-semibold" href="#about">About</a>
          <a @click="closeMenu" class="block text-gray-700 dark:text-gray-200 font-semibold" href="#experience">Experience</a>
          <a @click="closeMenu" class="block text-gray-700 dark:text-gray-200 font-semibold" href="#skills">Skills</a>
          <a @click="closeMenu" class="block text-gray-700 dark:text-gray-200 font-semibold" href="#projects">Projects</a>
          <a @click="closeMenu" class="block text-gray-700 dark:text-gray-200 font-semibold" href="#contact">Contact</a>

          <!-- Dark Mode Toggle (Mobile) -->
          <DarkToggle />
        </div>
      </transition>
    </nav>

    <!-- Sections -->
    <section id="home"><Hero /></section>
    <section id="about"><About /></section>
    <section id="experience"><Experience /></section>
    <section id="skills"><Skills /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>

    <Footer />
  </div>
</template>


<script setup>
import { ref } from "vue"
import Hero from "./components/Hero.vue"
import About from "./components/About.vue"
import Experience from "./components/Experience.vue"
import Skills from "./components/Skills.vue"
import Projects from "./components/Projects.vue"
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"
import DarkToggle from "./components/DarkToggle.vue"

const menuOpen = ref(false)
function closeMenu() {
  menuOpen.value = false
}
</script>


<style>
/* Prevent horizontal overflow */
html, body {
  overflow-x: hidden;
  width: 100%;
}

#app {
  overflow-x: hidden;
}

/* Fade animation for mobile menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
