<template>
  <div class="text-translate-left-right" v-bind:class="{ 'scrolled': scrolled }">
    <p
      class="p-box text-center font-semibold text-4xl tracking-tight sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      Notre restaurant, créé il y a cinq ans, a su se démarquer grâce à son
      concept novateur qui s'adresse aux passionnés de culture geek, d'animes,
      de jeux vidéo et de séries. Nous avons mis en place une cuisine créative
      qui s'adresse à tous les sens de nos clients et leur offre une expérience
      culinaire inoubliable.
    </p>
  </div>
  <div
    class="relative overflow-hidden text-translate-right-left"
    v-bind:class="{ 'scrolled': scrolled }"
  >
    <p
      class="p-box text-center font-semibold text-4xl tracking-tight sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      Notre équipe de chefs talentueux a su créer des plats originaux et
      surprenants, qui combinent des saveurs uniques et des textures
      inattendues. Nous mettons un point d'honneur à utiliser des ingrédients de
      qualité et à préparer chaque plat avec soin et précision.
    </p>
  </div>
  <div
    class="relative overflow-hidden text-translate-left-right"
    v-bind:class="{ 'scrolled': scrolled }"
  >
    <p
      class="p-box text-center font-semibold text-4xl tracking-tight sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      Nous sommes convaincus que la nourriture est un moyen de voyager et de
      découvrir de nouvelles cultures. C'est pourquoi nous avons créé un menu
      diversifié qui s'inspire de différentes cuisines du monde. Nous espérons
      que nos clients auront l'occasion de découvrir de nouvelles saveurs et de
      s'évader grâce à notre cuisine.
    </p>
  </div>
  <div
    class="relative overflow-hidden text-translate-right-left"
    v-bind:class="{ 'scrolled': scrolled }"
  >
    <p
      class="p-box text-center font-semibold text-4xl tracking-tight sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      Nous espérons que vous aurez l'occasion de venir déguster nos plats et de
      vivre une expérience culinaire inoubliable dans notre restaurant. Nous
      serons ravis de vous accueillir et de partager notre passion pour la
      nourriture avec vous."
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    },
  },
};
</script>
