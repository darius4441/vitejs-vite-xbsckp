<script setup lang="ts">
import { ref, inject } from 'vue';
import { ProductType } from '../utils/schema.ts';

const productList = ref<ProductType>([
  { id: 1, name: 'Product 1', price: 1500, semiWholesalePrice: 1000 },
  { id: 2, name: 'Product 2', price: 750, semiWholesalePrice: 500 },
  { id: 3, name: 'Product 3', price: 1200, semiWholesalePrice: 1000 },
]);

const addItem = inject('addItemRef') as (item: BasketItemType) => void;

function handleAddItem(product: ProductType) {
  let i: BasketItemType = {
    product: product.id,
    productName: product.name,
    quantity: 1,
    price: product.price,
    semiWholesalePrice: product.semiWholesalePrice,
    total: product.price,
  };

  i.total = i.quantity * i.price;

  addItem(i);
}
</script>

<template>
  <div>
    <ul>
      <li
        v-for="product in productList"
        :key="product.name"
        class="card"
        @dblclick="handleAddItem(product)"
      >
        {{ product.name }} --- <span>${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<style scopped>
.card {
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  user-select: none;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card:hover::before {
  opacity: 1;
}
</style>
