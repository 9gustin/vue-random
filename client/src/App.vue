<template>
  <div id="app">
    <img :alt="alt" :src="logo" class="vue-logo" />
    <h1>vue-notion-render</h1>
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
