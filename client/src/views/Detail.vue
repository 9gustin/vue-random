<template>
  <Container :title="page.title" :loading="loading">
    <article v-if="page">
      <Render :blocks="page.blocks"/>
    </article>

    <router-link to="/">Go back</router-link>
  </Container>
</template>

<script>
import Render from '../components/Render.vue';
import Container from "../components/Container.vue";
import { getPage, getBlocks } from '../services/notion';

export default {
  props: ["id"],
  components: {
    Render,
    Container
  },
  data() {
    return {
      page: null,
      loading: true
    };
  },
  async created() {
    this.page = await getPage(this.id);
    this.page.title = this.page.properties.Name.title[0].plain_text;
    this.page.blocks = await getBlocks(this.id);

    this.loading = false;
  }
}
</script>
