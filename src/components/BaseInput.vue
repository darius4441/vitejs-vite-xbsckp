<script setup lang="ts">
import { useAttrs, defineEmits, toRef, computed } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
});

const emits = defineEmits(['update:modelValue']);
const attr = useAttrs();

// use `toRef` to create reactive references
const name = toRef(props, 'name');

const { value, errorMessage } = useField<number>(name, undefined, {
  initialValue: 0,
});

const attrs = computed(() => ({
  ...attr,
  id: name.value,
  name: name.value,
  type: 'number',
}));
</script>

<template>
  <div>
    <label :for="name">
      {{ label }}
    </label>

    <input v-bind="attrs" v-model.number="value" />
  </div>
</template>
