<template>
  <paragraph v-if="block.type === 'paragraph'" :children="children" />
</template>

<script>
import Paragraph from "./Paragraph.vue";

export default {
  name: "Item",
  props: ["block"],
  components: {
    Paragraph,
  },
  computed: {
    children() {
      const plainText = this.block[this.block.type].text?.map(
        ({plain_text}) => plain_text
      ).join("");
      return plainText;
    },
  },
};
</script>