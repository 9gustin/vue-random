<template>
  <p>
    {{this.children}}
  </p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: ["children"]
}
</script>
