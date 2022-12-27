<template>
  <div>
    <h1>{{ article.name }}</h1>
    <img :src="article.photo" alt="Article photo">
    <p>{{ article.description }}</p>
    <p>{{ article.price }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const article = await fetch('http://localhost:3000/api/articles/663a9d601a19d5c25c475e556').then(res => res.json());
    return { article };
  },
};
</script>
