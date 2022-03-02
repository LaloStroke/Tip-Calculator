<template>
  <button @click="handleClick">{{ value }}%</button>
</template>
<script>
export default {
  name: "PorcentageButton",
  props: {
    value: {
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("clicked", this.value);
    },
  },
};
</script>
<style></style>
