<template>
  <div id="app">
    <Nav />
    <slot />
  </div>
</template>

<script>
import Nav from './Nav'

export default {
  name: "Layout",
  components: {
    Nav,
  },
  created() {
    if (this.$store.getters.isLightTheme) {
      document.body.classList.add('light')
    }
  }
};
</script>

<style scoped>
  #app {
    display: flex;
    height: 100%;
    padding: 0;
  }
</style>
