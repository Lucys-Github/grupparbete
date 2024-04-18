<script setup>
import { useCartStore, useProductsStore } from "./store";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
const store = useProductsStore();

const cartStore = useCartStore();

const fetchCart = () => {
  cartStore.getCart();
};


const fetchProducts = async () => {
  try {
    await fetch("../products.json")
      .then((response) => response.json())
      .then((result) => {
        store.getProducts(result);
        const products = ref(store.productsCatalogue);
        Object.keys(products.value).forEach(async (productId) => {
      const product = products.value[productId];
      const path = require(`../${product.imgSrc}`);
      product.img = path.default;
    })
      }
  } catch (error) {
    console.log(error);
  }
};


fetchCart();

fetchProducts();
</script>

<template>
  <Navbar />
  <div
    class="flex flex-col min-h-screen overflow-x-hidden bg-[#141414] text-white"
  >
    <div class="mb-auto">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
