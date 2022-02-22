<template>
  <div>
    <label v-if="label" :for="label">{{ label }}</label>
    <input :name="label" :placeholder="placeHolder" type="number" />
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
};
</script>

<style></style>
