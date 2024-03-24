<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import './button.css';
import { computed, defineProps, withDefaults, toRefs, defineEmits } from 'vue';
const props = withDefaults(
  defineProps<{
    label: string;
    primary: boolean;
    size: 'small' | 'medium' | 'large';
    backgroundColor: string;
  }>(),
  {
    label: '',
    primary: false,
    size: 'large',
  }
);

const { label, primary, size, backgroundColor } = toRefs(props);

const emit = defineEmits(['click']);

const classes = computed(() => ({
  button: true,
  'storybook-button--primary': primary.value,
  'storybook-button--secondary': !primary.value,
  [`storybook-button--${size.value || 'medium'}`]: true,
  'body-2-r': true,
}));

const style = computed(() => ({
  backgroundColor: backgroundColor.value,
}));

const onClick = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
.button {
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  width: 160px;
  height: 48px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
.storybook-button--primary {
  color: white;
  background-color: #2d2d2d;
}
.storybook-button--secondary {
  color: #2d2d2d;
  background-color: transparent;
  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset; */
  box-shadow: 0 0 0 1px #2d2d2d inset;
}
.storybook-button--small {
  /* font-size: 12px; */
  /* padding: 10px 16px; */
}
.storybook-button--medium {
  /* font-size: 14px; */
  /* padding: 11px 20px; */
}
.storybook-button--large {
  /* font-size: 16px; */
  /* padding: 12px 24px; */
}
</style>
