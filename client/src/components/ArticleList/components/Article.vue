<template>
  <li class="article">
    <router-link
      :to="{ name: 'detail', params: { id: article.id } }"
      class="link"
    >
      {{ article.properties.Name.title[0].plain_text }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: Object,
  },
};
</script>

<style scoped>
.article > .link {
  align-items: center;
  background-color: var(--bg-color);
  border-radius: 10px;
  color: var(--text-color);
  display: flex;
  gap: 20px;
  height: 100%;
  justify-content: center;
  min-height: 70px;
  overflow: hidden;
  padding: 20px;
  text-decoration: none;
  transition: all 0.3s;
  width: 100%;
}

.article > .link:hover {
  border: 1px solid var(--theme-color);
  cursor: pointer;
  transform: scale(1.05);
}
.article > .link:hover::before {
  background-color: var(--theme-color);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 20px;
}
</style>