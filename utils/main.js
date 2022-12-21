export default {
    mounted() {
      window.addEventListener('scroll', function() {
        const footer = document.querySelector('footer')
        if (window.scrollY > 0) {
          footer.classList.add('scrolled1')
        } else {
          footer.classList.remove('scrolled1')
        }
      })
    }
  }