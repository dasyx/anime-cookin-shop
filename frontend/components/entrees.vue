<template>
  <div class="entrees container mx-auto p-4">
    <h2 class="text-xl font-bold mb-8">Entrées</h2>
    <!-- Entrée 1 -->
    <div
      class="md:flex md:flex-row md:justify-between flex-col items-start mb-6"
    >
      <div class="text-lg font-bold">
       {{ article.name}}
      </div>
      <div class="text-white md:w-1/3 md:ml-10">
       {{ article.description}}
      </div>
      <div class="text-white font-bold">10€</div>
    </div>

    <!-- Entrée 2 -->
    <div
      class="md:flex md:flex-row md:justify-between flex-col items-start mb-6"
    >
      <div class="text-lg font-bold">Feuilles de vigne farcies</div>
      <div class="text-white md:w-1/3 md:mr-4">
        Feuilles de vigne farcies de riz, de viande hachée et d'épices
      </div>
      <div class="text-white font-bold">12€</div>
    </div>

    <!-- Entrée 3 -->
    <div class="md:flex md:flex-row md:justify-between flex-col items-start">
      <div class="text-lg font-bold">Nouilles sautées aux légumes</div>
      <div class="text-white md:w-1/3 md:mr-16">
        Nouilles sautées aux légumes
      </div>
      <div class="text-white font-bold">10€</div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const article = await fetch('http://localhost:4000/api/articles/63aa2e0e8c6b4dbd6938bfae').then(res => res.json());
    return { article };
  },
};
</script>
