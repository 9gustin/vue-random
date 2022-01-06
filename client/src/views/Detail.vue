<template>
  <Container :title="page ? page.data.title : ''" :loading="loading">
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
import { getPageFields } from '../utils/getPageFields';

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
    const pageData = await getPage(this.id);
    pageData.data = getPageFields(pageData);

    this.page = pageData;
    this.page.blocks = await getBlocks(this.id);

    this.loading = false;
  }
}
</script>
