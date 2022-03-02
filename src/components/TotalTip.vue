<template>
  <div>
    <div>
      <div>
        <p>Tip Amount</p>
        <small>/ person</small>
      </div>
      <p>$ {{ tip }}</p>
    </div>
    <div>
      <div>
        <p>Total</p>
        <small>/ person</small>
      </div>
      <p>${{ total }}</p>
    </div>
    <PorcentageButton :value="'Reset'" />
  </div>
</template>
<script>
import PorcentageButton from "./PorcentageButton.vue";
import globalState from "../Store/Store";

export default {
  name: "TotalTip",
  components: { PorcentageButton },
  // data() {
  //   return {
  //     tip: globalState.tipAmount,
  //     total: globalState.totalAmount,
  //   };
  // },
  computed: {
    tip() {
      return globalState.tipAmount;
    },
    total() {
      return globalState.totalAmount;
    },
  },
};
</script>
<style></style>
