<template>
  <div class="container">
    <h1 class="title">All posts <BaseIcon name="loader" v-if="loading" /></h1>
    <ul v-if="pages" class="pages">
      <li v-for="page in pages" :key="page.id">
        {{ page.properties.Name.title[0].plain_text }}
        <router-link :to="{ name: 'detail', params: { id: page.id } }"
          >Detail</router-link
        >
      </li>
    </ul>
    <div v-else-if="!loading">No data :(</div>
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
      loading: true,
    };
  },
  created() {
    getDatabase().then((data) => {
      this.pages = data;
      this.loading = false;
    });
  },
  methods: {
    viewDetail(pageId) {
      console.log("view detail", pageId);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto 0;
  width: -webkit-fill-available;
}

.container > .title {
  display: flex;
  font-size: 2rem;
  gap: 10px;
}

.pages {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  padding: 15px 0;
}
.pages > li {
  align-items: center;
  background-color: var(--bg-color);
  border-radius: 10px;
  display: flex;
  gap: 20px;
  min-height: 70px;
  justify-content: center;
  padding: 20px;
  transition: all .3s;
  overflow: hidden;
}

.pages > li:hover {
  border: 1px solid var(--theme-color);
  cursor: pointer;
  transform: scale(1.05);
}
.pages > li:hover::before{
  background-color: var(--theme-color);
  content: '';
  width: 20px;
  height: 100%;
      position: absolute;
    left: 0;
}
</style>
