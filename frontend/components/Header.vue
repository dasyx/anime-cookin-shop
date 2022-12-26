<template>
  <header class="flex items-center p-4 gradient-header">
    <div class="w-1/3 text-white font-bold text-left">
      <p class="text-white font-bold mt-4">Accueil</p>
      <button @click="redirectToHome()">
        <Icon class="mr-6 mt-10" name="ant-design:home-outlined" size="48" />
      </button>
    </div>
    <div class="w-1/3 text-center">
      <img src="../src/img/logo/anime-logo.png" alt="logo anime-cookin-shop" />
    </div>
    <div class="relative w-1/3 text-right">
      <p class="text-white font-bold">Infos</p>
      <button @click="toggleMenu" class="text-white font-bold">
        <Icon class="mt-10" name="cil:restaurant" size="48" />
      </button>
      <div
        v-if="menuVisible"
        class="dropdown absolute right-0 mt-2 py-2 rounded-md shadow-md"
      >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-secondary" @click="navigateToMenu()" 
          >Le menu</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-secondary"
          >La carte</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-secondary"
          >Commander</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-white font-bold hover:bg-secondary"
          >Contact</a
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
    navigateToMenu() {
      this.$router.push({ path: "/menu" });
    },
  },
};
</script>
