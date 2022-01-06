<template>
  <div class="container">
    <header class="header">
      <div v-if="img" class="img-container">
        <img :src="img" class="img-header"/>
      </div>
      <h1 class="title">{{this.title}} <BaseIcon name="loader" v-if="loading" /></h1>
      <slot name="header" />
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    title: String,
    loading: Boolean,
    img: String
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto 0;
  width: -webkit-fill-available;
}

.container > .header {
  margin-bottom: 20px;
}

.container > .header > .title {
  display: flex;
  font-size: 2rem;
  gap: 10px;
}

.container > .header > .img-container {
  align-items: center;
  border-radius: 50px 50px 0 0;
  display: flex;
  height: 300px;
  margin-bottom: 30px;
  overflow: hidden;
}
.container > .header > .img-container > .img-header {
  width: 100%;
}
</style>
