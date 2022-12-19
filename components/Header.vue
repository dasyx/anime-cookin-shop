<template>
  <header class="bg-gray-200 py-4 flex justify-between items-center">
    <div class="text-xl font-bold">
      <nuxt-link to="/">Page d'accueil</nuxt-link>
    </div>
    <div>
      <img src="logo.png" alt="Logo du site" />
    </div>
    <div>
      <button @click="toggleMenu" class="focus:outline-none">
        <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
      <ul v-if="isMenuOpen" class="absolute z-50 mt-2 bg-white rounded-lg shadow-xl divide-y divide-gray-200"
        style="right: 0; min-width: 200px">
        <li class="py-2 px-4 hover:bg-gray-100 focus:bg-gray-100">
          <nuxt-link to="/about">À propos</nuxt-link>
        </li>
        <li class="py-2 px-4 hover:bg-gray-100 focus:bg-gray-100">
          <nuxt-link to="/products">Produits</nuxt-link>
        </li>
        <li class="py-2 px-4 hover:bg-gray-100 focus:bg-gray-100">
          <nuxt-link to="/services">Services</nuxt-link>
        </li>
        <li class="py-2 px-4 hover:bg-gray-100 focus:bg-gray-100">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>
