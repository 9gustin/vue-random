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
};
</script>

<style scoped>
  #app {
    display: flex;
    height: 100%;
    padding: 0;
  }
</style>
