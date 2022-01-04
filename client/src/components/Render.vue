<template>
  <div>
    <item v-for="block in blocks" :key="block.id" :block="block"/>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'Render',
  props: ["blocks"],
  components: {
    Item
  },

}
</script>
