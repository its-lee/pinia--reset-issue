import { defineStore, acceptHMRUpdate } from "pinia";

export const useCounter = defineStore("counter", {
  state: () => ({ n: 0 }),
  actions: {
    nonDollarAction() {
      this.n--;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta));
}
