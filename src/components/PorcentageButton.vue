<template>
  <button>{{ value }}%</button>
</template>
<script>
export default {
  name: "PorcentageButton",
  props: {
    value: {
      type: Number || String,
      required: true,
    },
  },
};
</script>
<style></style>
