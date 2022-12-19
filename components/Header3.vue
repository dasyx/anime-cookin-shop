<template>
  <header class="flex items-center bg-green-500 p-4">
    <div class="w-1/3 text-white font-bold">Accueil</div>
    <div class="w-1/3 text-center">
      <img src="../src/img/anime-logo.png" alt="logo anime-cookin-shop">
    </div>
    <div class="relative w-1/3 text-right">
      <p class="text-white font-bold mt-4">Nos produits</p>
      <button @click="toggleMenu" class="text-white font-bold">
        <Icon class="mr-6 mt-10" name="material-symbols:soup-kitchen-outline-rounded" size="48" />
      </button>
      <div
        v-if="menuVisible"
        class="absolute right-0 mt-2 py-2 bg-green-800 rounded-md shadow-md"
      >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-green-700"
          >Item 1</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-green-700"
          >Item 2</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-green-700"
          >Item 3</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-green-700"
          >Item 4</a
        >
      </div>
    </div>
  </header>
</template>

<script>

export default {
  
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style>
.bg-green-800 {
  background-color: #a9c73a;
}

.hover\:bg-green-700:hover {
  background-color: #a9c73a;
}
</style>
