<script setup lang="ts">
import Basket from './components/Basket.vue';
import ItemCard from './components/ItemCard.vue';
</script>

<template>
  <div class="grid">
    <div class="grid1">
      <Basket />
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
