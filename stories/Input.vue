<template>
  <input class="input" type="text" v-model="text" />
</template>

<script setup lang="ts">
const text = defineModel('text');
</script>

<style scoped lang="scss">
.input {
  all: unset;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 8px 12px;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px #6b7280 inset;
  &:hover {
    box-shadow: 0 0 0 2px #6b7280 inset;
  }
  &:focus {
    box-shadow: 0 0 0 2px #111827 inset;
  }
}
</style>
