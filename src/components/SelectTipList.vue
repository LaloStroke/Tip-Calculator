<template>
  <div>
    <p>Select Tip %</p>
    <li v-for="number in tipsPorcentages" :key="number">
      <PorcentageButton :value="number" />
    </li>
    <InputComponent :placeHolder="'Custom'" />
  </div>
</template>
<script>
import PorcentageButton from "./PorcentageButton.vue";
import InputComponent from "./InputComponent.vue";

export default {
  name: "SelectTipList",
  components: {
    PorcentageButton,
    InputComponent,
  },
  data() {
    return {
      tipsPorcentages: [5, 10, 15, 25, 50],
    };
  },
};
</script>
<style></style>
