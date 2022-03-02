import Vue from "vue";

const globalState = Vue.observable({
  bill: 0.0,
  porcentageToPay: 0,
  numberOfPeople: 1,
  tipAmount: 0.0,
  totalAmount: 0.0,
});

const setTotalAmount = () => {
  globalState.totalAmount =
    globalState.bill / globalState.numberOfPeople + globalState.tipAmount;
  globalState.totalAmount = Math.round(globalState.totalAmount * 100) / 100;
};

const setTipAmount = () => {
  globalState.tipAmount =
    (globalState.bill * (globalState.porcentageToPay / 100)) /
    globalState.numberOfPeople;
  globalState.tipAmount = Math.round(globalState.tipAmount * 100) / 100;
  setTotalAmount();
};

const setPorcentageToPay = (porcentageToPay) => {
  globalState.porcentageToPay = porcentageToPay * 1;
  setTipAmount();
};

const setBill = (readBill) => {
  globalState.bill = readBill * 1;
  setTipAmount();
};

const setNumberOfPeople = (readNumberOfPeople) => {
  globalState.numberOfPeople = readNumberOfPeople * 1;
  setTipAmount();
};

export { setPorcentageToPay, setBill, setNumberOfPeople };
export default globalState;
