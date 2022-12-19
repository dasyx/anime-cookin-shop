<template>
  <header class="flex items-center p-4 gradient-header">
    <div class="w-1/3 text-white font-bold text-left">
      <p class="text-white font-bold mt-4">Accueil</p>
      <button @click.prevent="redirectToHome">
         <Icon
          class="mr-6 mt-10"
          name="ant-design:home-outlined"
          size="48"
        />
      </button>
    </div>
    <div class="w-1/3 text-center">
      <img src="../src/img/logo/anime-logo.png" alt="logo anime-cookin-shop" />
    </div>
    <div class="relative w-1/3 text-right">
      <p class="text-white font-bold mt-4">Nos produits</p>
      <button @click="toggleMenu" class="text-white font-bold">
        <Icon
          class="mr-6 mt-10"
          name="cil:restaurant"
          size="48"
        />
      </button>
      <div
        v-if="menuVisible"
        class="absolute right-0 mt-2 py-2 bg-gradient-to-b from-purple-600 to-blue-600 rounded-md shadow-md"
      >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-gradient-to-b from-purple-600 to-blue-600"
          >Item 1</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-gradient-to-b from-purple-600 to-blue-600"
          >Item 2</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-gradient-to-b from-purple-600 to-blue-600"
          >Item 3</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-gradient-to-b from-purple-600 to-blue-600"
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
    redirectToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
.gradient-header {
  margin-top: 100px;
  background: linear-gradient(180deg, rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5));
}
</style>
