<template>
  <Container :title="title">
    <ArticleList :articles="pages" />
  </Container>
</template>

<script>
import Container from "../components/Container.vue";
import ArticleList from "../components/ArticleList";

export default {
  name: "App",
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  components: {
    Container,
    ArticleList,
  },
  data: function () {
    return {
      title: "All posts",
    };
  }
};
</script>

