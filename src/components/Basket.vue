<script setup lang="ts">
import type { FieldEntry } from 'vee-validate';
import { BasketItemType } from '../utils/schema.ts';
import BaseInput from './BaseInput.vue';

const props = defineProps<{
  items: FieldEntry<BasketItemType>[];
}>();

const removeItem = inject('removeItemRef') as (index: number) => void;
</script>

<template>
  <div>
    <form novalidate>
      <div v-for="(item, idx) in props.items" :key="item.key" class="flexible">
        <BaseInput :name="`basketItems[${idx}].quantity`" label="Quantity" />
        <BaseInput :name="`basketItems[${idx}].price`" label="Price" />
        <span class="" @click="removeItem(idx)">X</span>
      </div>
    </form>
  </div>
</template>

<style scopped>
.flexible {
  display: flex;
  flex-direction: row;
}
</style>
