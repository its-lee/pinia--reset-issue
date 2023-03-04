<script setup lang="ts">
import { useCounter } from "./stores/counter";

const counter = useCounter();

counter.$onAction(({ name }) => {
  console.log("Store action invoked: ", name);
});
</script>

<template>
  <p>The counter is at {{ counter.n }}</p>
  <button @click="counter.n++">Increment</button>
  <button @click="counter.n--">Decrement</button>
  <button @click="counter.n = 0">Reset</button>
  <button @click="counter.$reset()">$reset</button>
  <button @click="counter.nonDollarAction()">nonDollarAction</button>
</template>
