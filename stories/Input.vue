<template>
  <input v-model="text" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const text = ref('');

watch(text, () => {
  console.log(text.value);
});
</script>
