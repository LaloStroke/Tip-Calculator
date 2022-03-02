<template>
  <div>
    <InputComponent @changed="reciveBill" :label="'Bill'" :placeHolder="'0'" />
    <SelectTipList />
    <InputComponent
      @changed="reciveNumberOfPeople"
      :label="'Number of People'"
      :placeHolder="'0'"
    />
    <TotalTip />
  </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";
import SelectTipList from "./SelectTipList.vue";
import TotalTip from "./TotalTip.vue";
import globalState, { setBill, setNumberOfPeople } from "../Store/Store";

export default {
  name: "Layout",
  components: {
    InputComponent,
    SelectTipList,
    TotalTip,
  },
  data() {
    return {
      bill: globalState.bill,
      numberOfPeople: globalState.numberOfPeople,
    };
  },
  methods: {
    reciveBill(value) {
      setBill(value);
    },
    reciveNumberOfPeople(value) {
      setNumberOfPeople(value);
    },
  },
};
</script>
<style></style>
