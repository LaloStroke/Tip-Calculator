<template>
  <div>
    <InputComponent :label="'Bill'" :placeHolder="'0'" />
    <SelectTipList />
    <InputComponent :label="'Number of People'" :placeHolder="'0'" />
  </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";
import SelectTipList from "./SelectTipList.vue";

export default {
  name: "Layout",
  components: {
    InputComponent,
    SelectTipList,
  },
};
</script>
<style></style>
