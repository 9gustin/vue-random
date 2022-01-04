<template>
  <div>
    Detail page: {{id}}
    <p v-if="page">hasPage</p>
    <p v-else>Loading</p>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
import { getPage, getBlocks } from '../services/notion';
export default {
  props: ["id"],
  data() {
    return {
      page: null
    };
  },
  async created() {
    this.page = await getPage(this.id);
    this.page.blocks = await getBlocks(this.id);
  }
}
</script>
