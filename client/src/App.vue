<template>
  <div id="app">
    <img :alt="alt" :src="logo" class="vue-logo" />
    <h1>vue-notion-render</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/detail">Detail</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import logo from "./assets/logo.png";

export default {
  name: "App",
  data: function () {
    return {
      logo,
      alt: "Vue logo"
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
