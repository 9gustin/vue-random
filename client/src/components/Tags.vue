<template>
  <ul class="tags">
    <li v-for="tag in tags" :key="tag">#{{tag}}</li>
  </ul>
</template>
<script>
export default {
  name: "Tags",
  props: {
    tags: Array
  },
};
</script>
<style scoped>
.tags {
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
}
.tags > li {
  background-color: var(--bg-dark-color);
  border-radius: 5px;
  color: var(--theme-color);
  padding: 5px 10px;
  
}
</style>