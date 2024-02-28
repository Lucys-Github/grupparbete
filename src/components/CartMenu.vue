<script setup>
import { ref, watch } from "vue";
import { useCartStore } from "../store";

const emit = defineEmits(["handle-cart-menu-activation"]);
const props = defineProps({
  cartMenuActive: { required: true, type: Boolean },
});

const store = useCartStore();
const cart = ref([]);

if (store.cart !== null) {
  cart.value = store.cart;
  console.log(cart.value);
}

watch(
  () => store.cart,
  (newCart) => {
    cart.value = newCart;
    console.log(cart.value);
  }
);
</script>

<template>
  <div
    id="cart-menu-container"
    :class="
      'fixed flex h-full w-full z-50 transition-all duration-300' +
      (cartMenuActive ? 'translate-x-0' : ' translate-x-full')
    "
  >
    <div
      id="overlay"
      class="flex-1 bg-[rgba(0,0,0,.3)] text-[#f5f5f5]"
      @click="emit('handle-cart-menu-activation')"
    ></div>
    <div id="cart-menu" class="h-full w-[70%] max-w-[400px] bg-[#1c1c1c]">
      <div
        id="top"
        class="relative h-16 flex justify-start items-center border-b border-black"
      >
        <img
          src="/src/assets/icons/close-icon.svg"
          alt="X icon"
          class="fixed pl-2 h-14 py-2 cursor-pointer"
          @click="emit('handle-cart-menu-activation')"
        />
        <div class="flex-1 flex justify-center">
          <h1 class="text-2xl font-medium">Cart</h1>
        </div>
      </div>
      <div id="bottom" class="flex flex-col h-full">
        <div class="flex-1 bg-[#1c1c1c] overflow-auto">
          <div id="cartProducts" v-if="cart" v-for="product in cart">
            <div class="p-2">
              <div class="flex">
                <img
                  :src="product.imgSrc"
                  :alt="product.alt"
                  class="max-w-28"
                />
                <div class="flex flex-col flex-1 pl-5">
                  <h2 class="font-semibold leading-1">
                    {{ product.title }}
                  </h2>
                  <h3 class="text-xs font-thin pt-1">{{ product.brand }}</h3>
                  <h3 class="text-sm font-light pt-2">
                    {{ product.category }}
                  </h3>
                </div>
                <div class="flex flex-col justify-between mx-3">
                  <h2>{{ product.price }}:-</h2>
                  <img
                    src="/src/assets/icons/trash-icon.svg"
                    alt="trashcan icon"
                    class="h-7"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-else>Cart is empty</div>
        </div>
        <div class="h-72 bg-[#0c0c0c] flex flex-col px-4">
          <div class="flex justify-between mt-6">
            <h3>Delivery Cost</h3>
            <h3>0:-</h3>
          </div>
          <div class="flex justify-between mt-8">
            <h3>Total Cost:</h3>
            <h3>299:-</h3>
          </div>
          <button class="p-5 bg-[#1c1c1c] rounded-lg hover:opacity-75 mt-8">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
