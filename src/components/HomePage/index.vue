<template>
  <button :onclick="() => toaster('hi' + renderCounter++)">increase</button>
</template>

<script setup lang="ts">
import { toaster } from "../../utils/toaster";
import { computed } from "@vue/reactivity";
import { ref } from "vue";

let renderCounter = ref(0);

const computedValue = computed(() => {
  return renderCounter.value;
});

const increase = () => {
  console.log(renderCounter.value);

  renderCounter.value++;
};
</script>
