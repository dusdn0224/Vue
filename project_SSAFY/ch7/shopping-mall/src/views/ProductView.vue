<template>
  <div>
    <h1>상품 목록 페이지</h1>
    <div class="products">
      <ProductDetail 
        v-for="product in productstore.productList"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductDetail from '@/components/ProductDetail.vue';
import { useProductStore } from '@/stores/product'

const productstore = useProductStore()

</script>

<style scoped>
</style>

<style>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>