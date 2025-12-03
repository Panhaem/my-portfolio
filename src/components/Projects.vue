<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-12 text-center dark:text-white">Projects</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <!-- CARD -->
        <div
          class="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl 
                 hover:-translate-y-2 transition transform cursor-pointer"
        >
          <img
            src="https://picsum.photos/600/400"
            class="rounded-md mb-4 w-full h-40 object-cover"
          />
          <h3 class="text-xl font-semibold dark:text-white">TUNSAI Water System</h3>
          <p class="text-gray-600 dark:text-gray-300 mt-3">
            Laravel-based modules for products, staff, payroll, and reporting.
          </p>
        </div>

        <!-- CARD -->
        <div
          class="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl 
                 hover:-translate-y-2 transition transform cursor-pointer"
        >
          <img
            src="https://picsum.photos/600/401"
            class="rounded-md mb-4 w-full h-40 object-cover"
          />
          <h3 class="text-xl font-semibold dark:text-white">Camfood System</h3>
          <p class="text-gray-600 dark:text-gray-300 mt-3">
            Expense reports, product import/export, and improved workflow.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
