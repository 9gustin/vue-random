<template>
  <div id="app">
    <img :alt="alt" :src="logo" class="vue-logo" />
    <h1>vue-notion-render</h1>
    <button type="button" v-on:click="getNotionData" v-if="!loading">
      {{ pages ? "Reload" : "Load my notion pages" }}
    </button>

    <p v-if="loading">Loading data...</p>
    <ul v-else-if="pages" class="pages">
      <li v-for="page in pages" :key="page.id">
        {{ page.properties.Name.title[0].plain_text }}
        <button type="button" v-on:click="viewDetail(page.id)">
          View detail
        </button>
      </li>
    </ul>
    <div v-else>No data :(</div>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
import { getDatabase } from "../services/notion";

export default {
  name: "App",
  data: function () {
    return {
      logo,
      alt: "Vue logo",
      pages: null,
      loading: false,
    };
  },
  methods: {
    getNotionData() {
      this.loading = true;
      getDatabase().then((data) => {
        this.pages = data;
        this.loading = false;
      });
    },
    viewDetail(pageId) {
      console.log("view detail", pageId);
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
button {
  padding: 10px;
  background-color: #41b883;
  border: none;
}
.vue-logo {
  height: 100px;
}

.pages {
  list-style: none;
  padding: 0;
}
.pages > li {
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
</style>
