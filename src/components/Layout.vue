<template>
  <div>
    <InputComponent :label="'Bill'" :placeHolder="'0'" />
    <SelectTipList />
    <InputComponent :label="'Number of People'" :placeHolder="'0'" />
    <TotalTip />
  </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";
import SelectTipList from "./SelectTipList.vue";
import TotalTip from "./TotalTip.vue";

export default {
  name: "Layout",
  components: {
    InputComponent,
    SelectTipList,
    TotalTip,
  },
};
</script>
<style></style>
