<template>
  <Container :title="page ? page.data.title : ''" :img="page.data.img" :loading="loading">
    <div slot="header" class="header-description">
      {{page.data.parsedDate}}
      <Tags :tags="page.data.tags"/>
    </div>
    <template>
      <article v-if="page">
        <Render :blocks="page.blocks"/>
      </article>

      <router-link to="/">Go back</router-link>
    </template>
  </Container>
</template>

<script>
import Render from '../components/Render.vue';
import Container from "../components/Container.vue";
import Tags from "../components/Tags.vue";
import { getPage, getBlocks } from '../services/notion';
import { getPageFields } from '../utils/getPageFields';

export default {
  props: ["id"],
  components: {
    Render,
    Container,
    Tags
  },
  data() {
    return {
      page: null,
      loading: true
    };
  },
  async created() {
    const pageData = await getPage(this.id);
    pageData.data = getPageFields(pageData);

    this.page = pageData;
    this.page.blocks = await getBlocks(this.id);

    this.loading = false;
  }
}
</script>

<style scoped>
.header-description {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>