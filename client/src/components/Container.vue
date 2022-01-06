<template>
  <div class="container">
    <h1 class="title">{{this.title}} <BaseIcon name="loader" v-if="loading" /></h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    title: String,
    loading: Boolean,
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto 0;
  width: -webkit-fill-available;
}

.container > .title {
  display: flex;
  font-size: 2rem;
  gap: 10px;
}
</style>
