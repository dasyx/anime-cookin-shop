<template>
  <div>
    <Header />
    <Histoire />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Histoire from './components/Histoire.vue';
import Footer from './components/Footer.vue';
import Scroll from '@/utils/main.js';

export default {
  components: {
    Header,
    Histoire,
    Footer,
  },
  mixins: [Scroll],
}
</script>