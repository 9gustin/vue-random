<template>
  <div>
    <button type="button" v-on:click="getNotionData" v-if="!loading">
      {{ pages ? "Reload" : "Load my notion pages" }}
    </button>

    <p v-if="loading">Loading data...</p>
    <ul v-else-if="pages" class="pages">
      <li v-for="page in pages" :key="page.id">
        {{ page.properties.Name.title[0].plain_text }}
        <router-link :to="{name: 'detail', params: {id: page.id}}">Detail</router-link>
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

<style scoped>
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
