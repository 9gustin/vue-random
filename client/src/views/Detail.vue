<template>
  <Container :title="page ? page.data.title : ''" :img="page ? page.data.img : ''">
    <div slot="header" class="header-description" v-if="page">
      {{page.data.parsedDate}}
      <Tags :tags="page.data.tags"/>
    </div>
    <template>
      <article v-if="page" class="article">
        <Render :blocks="page.blocks"/>
      </article>

      <router-link to="/" class="go-back"> <BaseIcon name="arrow-left" /> Go back</router-link>
    </template>
  </Container>
</template>

<script>
import Render from '../components/Render.vue';
import Container from "../components/Container.vue";
import Tags from "../components/Tags.vue";

export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  components: {
    Render,
    Container,
    Tags
  }
}
</script>

<style scoped>
.header-description {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.article {
  margin: 20px 0;
}
.go-back {
  display: flex;
  gap: 10px;
  text-decoration: none;
}
</style>