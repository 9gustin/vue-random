<template>
  <li class="article">
    <router-link
      :to="{ name: 'detail', params: { id: article.id } }"
      class="link"
    >
      <div class="title">
        {{ pageData.title }}
        <span>{{pageData.parsedDate}}</span>
      </div>
      <Tags :tags="pageData.tags" />
    </router-link>
  </li>
</template>

<script>
import Tags from "../../Tags.vue";
import { getPageFields } from "../../../utils/getPageFields.js";

export default {
  name: "Article",
  props: {
    article: Object,
  },
  components: {
    Tags,
  },
  computed: {
    pageData() {
      return getPageFields(this.article);
    },
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
  justify-content: space-between;
  height: 100%;
  min-height: 70px;
  overflow: hidden;
  padding: 0 50px;
  text-decoration: none;
  transition: all 0.5s;
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
.article > .link > .title {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
}

.article > .link > .title > span {
  color: var(--light-text-color);
  font-size: 1rem;
}
</style>