<template>
  <div>
    <p>Select Tip %</p>
    <li v-for="number in tipsPorcentages" :key="number">
      <PorcentageButton @clicked="recibeValue" :value="number" />
    </li>
    <InputComponent @changed="recibeValue" :placeHolder="'Custom'" />
  </div>
</template>
<script>
import PorcentageButton from "./PorcentageButton.vue";
import InputComponent from "./InputComponent.vue";
import { setPorcentageToPay } from "../Store/Store";

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
  methods: {
    recibeValue(value) {
      setPorcentageToPay(value);
    },
  },
};
</script>
<style></style>
