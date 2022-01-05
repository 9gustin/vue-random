<template>
  <nav class="nav">
    <router-link to="/" class="brand">vnr</router-link>
    <ThemeChange />
  </nav>
</template>

<script>
import ThemeChange from './components/ThemeChange.vue'

export default {
  name: "Nav",
  components: {
    ThemeChange,
  },
};
</script>

<style scoped>
  .nav {
    --width: 100px;

    background-color: var(--bg-color);
    border-radius: 0 25px 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;
    padding-bottom: 15px;
    width: var(--width);
  }
  .nav > .brand {
    align-items: center;
    background-color: var(--theme-color);
    border-radius: 0 20px 20px 0;
    color: #fff;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: var(--width);
    padding: 10px 0;
    text-decoration: none;
  }
</style>
