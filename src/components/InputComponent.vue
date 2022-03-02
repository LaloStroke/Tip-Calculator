<template>
  <div>
    <label v-if="label" :for="label">{{ label }}</label>
    <input @input="handleChange" :placeholder="placeHolder" type="number" />
  </div>
</template>
<script>
export default {
  name: "InputComponent",
  props: {
    placeHolder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("changed", event.target.value);
    },
  },
};
</script>

<style></style>
