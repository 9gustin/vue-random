<template>
  <div class="icon-wrapper" v-html="iconSVG"></div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#41b883'
    },
  },
  computed: {
    iconSVG() {
      return feather.icons[this.name].toSvg({
        color: this.color,
        width: this.size,
        height: this.size,
      });
    },
  },
};
</script>