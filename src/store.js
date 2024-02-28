import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  actions: {
    getProducts(data) {
      this.productsCatalogue = data;
    },
  },
  state: () => ({ productsCatalogue: null }),
});

export const useCartStore = defineStore("cart", {
  actions: {
    getCart() {
      this.cart = localStorage.getItem(JSON.parse("cart"));
    },
    addToCart(product) {
      this.cart = [this.cart, product];
    },
    clearCart() {
      this.cart = [];
    },
  },
  state: () => ({
    cart: [
      {
        id: "8b56742d-9207-438f-a912-7e57259705a7",
        title: "Black Ornate Cloak",
        brand: "COOLERclothes",
        category: "capes",
        price: "500",
        sizes: ["xs", "s", "m", "l", "xl"],
        imgSrc: "src/assets/products/capes/1.jpg",
        alt: "Black Ornate Cloak",
        inStock: true,
        moreImgs: [
          {
            moreImgsSrc: "src/assets/img/originals/",
            moreAlt: "",
          },
          {
            moreImgsSrc: "src/assets/img/originals/",
            moreAlt: "",
          },
          {
            moreImgsSrc: "src/assets/img/originals/",
            moreAlt: "",
          },
          {
            moreImgsSrc: "src/assets/img/originals/",
            moreAlt: "",
          },
        ],
      },
    ],
  }),
});
