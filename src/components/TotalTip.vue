<template>
  <div>
    <div>
      <div>
        <p>Tip Amount</p>
        <small>/ person</small>
      </div>
      <p>$4.27</p>
    </div>
    <div>
      <div>
        <p>Total</p>
        <small>/ person</small>
      </div>
      <p>$32.79</p>
    </div>
    <PorcentageButton :value="'Reset'" />
  </div>
</template>
<script>
import PorcentageButton from "./PorcentageButton.vue";

export default {
  name: "TotalTip",
  components: { PorcentageButton },
};
</script>
<style></style>
