<template>
  <div>
    Detail page: {{id}}
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>