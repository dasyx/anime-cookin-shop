<template>
  <header class="flex bg-blue-500 p-4">
    <div class="w-1/3 text-white font-bold">Accueil</div>
    <div class="w-1/3 text-center">Logo</div>
    <div class="w-1/3 text-right relative">
      <button @click="toggleMenu" class="text-white font-bold">Menu</button>
      <ul v-if="menuVisible" class="absolute right-0 mt-2 py-2 bg-blue-800 rounded-md shadow-md">
        <li class="px-4 py-2"><a href="#" class="text-white font-bold block hover:bg-blue-700">Item 1</a></li>
        <li class="px-4 py-2"><a href="#" class="text-white font-bold block hover:bg-blue-700">Item 2</a></li>
        <li class="px-4 py-2"><a href="#" class="text-white font-bold block hover:bg-blue-700">Item 3</a></li>
        <li class="px-4 py-2"><a href="#" class="text-white font-bold block hover:bg-blue-700">Item 4</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  cursor: pointer;
}
</style>


