<template>
  <button class="theme-change" type="button" @click="toggleTheme">
    <BaseIcon :name="icon"/>
  </button>
</template>

<script>
import { mapActions} from 'vuex'

export default {
  name: "ThemeChange",
  computed: {
    icon() {
      return this.$store.getters.isDarkTheme ? "moon" : "sun";
    },
  },
  methods: {
    ...mapActions(['toggleTheme']),
  },
};
</script>
<style scoped>
  .theme-change {
    background-color: transparent;
    border: none;
  }
</style>