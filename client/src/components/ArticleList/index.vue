<template>
  <ul v-if="articles" class="articles">
    <Article v-for="article in articles" :key="article.id" :article="article" />
  </ul>
</template>
<script>
import Article from "./components/Article.vue";

export default {
  name: "ArticleList",
  props: {
    articles: Array,
  },
  components: {
    Article,
  },
};
</script>
<style scoped>
.articles {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  padding: 15px 0;
}
</style>