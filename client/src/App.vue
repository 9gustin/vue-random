<template>
  <div id="app">
    <img :alt="alt" :src="logo" />
    <HelloWorld :msg="message" />
    <button type="button" v-on:click="getNotionData">Get notion data</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import logo from "./assets/logo.png";
import notion from "./services/notion.js";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: function () {
    return {
      logo,
      alt: "Vue logo",
      message: "Hello, World!",
    };
  },
  methods: {
    getNotionData() {
      notion.databases
        .query({
          database_id: process.env.VUE_APP_NOTION_DATABASE,
        })
        .then(console.log);
    },
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
