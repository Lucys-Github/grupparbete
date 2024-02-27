<script setup>
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import { useProductsStore } from "../store";

const store = useProductsStore();
const products = ref([]);

const filterForBestSellers = (productsCatalogue) => {
  if (store.productsCatalogue) {
    const productsArray = Object.values(productsCatalogue);
    const filteredProducts = productsArray.filter(
      (product) => product.bestSeller == true
    );
    products.value = filteredProducts;
  }
};

watch(
  () => store.productsCatalogue,
  (newProductsCatalogue) => {
    filterForBestSellers(newProductsCatalogue);
  }
);

filterForBestSellers(store.productsCatalogue);
</script>

<template>
  <div
    class="hero bg-cover bg-center text-white flex flex-col justify-center items-center bg-hero h-[56vh]"
  >
    <div>
      <h1 class="text-4xl mb-2">Big Dummy Text</h1>
      <p class="text-lg">Dummy Text</p>
    </div>
  </div>
  <div class="mt-[40px]">
    <h2 class="md:px-24 ml-4 text-4xl mb-2">Best sellers</h2>
  </div>
  <div class="xl:px-24 my-2 lg:my-4 overflow-x-hidden">
    <div
      class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 p-4"
    >
      <Card
        class="col-span-1"
        v-for="product in products"
        :key="product.id"
        :product="product"
        :cardImgSrc="product.imgSrc"
      />
    </div>
  </div>
</template>

<style scoped>
.bg-hero {
  background-image: url("../src/assets/hero.png");

  background-repeat: no-repeat;
}
</style>
