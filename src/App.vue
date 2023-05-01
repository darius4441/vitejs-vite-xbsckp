<script setup lang="ts">
import { provide } from 'vue';
import { useFieldArray, useForm } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import Basket from './components/Basket.vue';
import ItemCard from './components/ItemCard.vue';
import { BasketType, basketSchema, BasketItemType } from './utils/schema.ts';

const { handleSubmit, values } = useForm<BasketType>({
  validationSchema: toFormValidator(basketSchema),
});

const { fields, push, remove } = useFieldArray<BasketItemType>('basketItems');

// provide
provide('addItemRef', push);
provide('removeRef', remove);
</script>

<template>
  <div class="grid">
    <div class="grid1">
      <Basket :items="fields" />
    </div>
    <div class="grid2">
      <ItemCard />
    </div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid1 {
  grid-column: span 1 / span 1;
}

.grid2 {
  grid-column: span 2 / span 2;
}
</style>
