<template>
  <div>
    <p v-if="loading">Loading...</p>
    <h1 v-else-if="page">
      {{ page.title }}
    </h1>
    <article v-if="page">
      <render :blocks="page.blocks"/>
    </article>

    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
import Render from '../components/Render.vue';
import { getPage, getBlocks } from '../services/notion';

export default {
  props: ["id"],
  components: {
    Render
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
