<template>
  <Container :title="title" :loading="loading">
    <ArticleList :articles="pages" />
  </Container>
</template>

<script>
import { getDatabase } from "../services/notion";
import Container from "../components/Container.vue";
import ArticleList from "../components/ArticleList";

export default {
  name: "App",
  components: {
    Container,
    ArticleList,
  },
  data: function () {
    return {
      title: "All posts",
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
};
</script>

