import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/home.vue";
import Error from "./views/error.vue";
import Search from "./views/search.vue";
import Product from "./views/product.vue";
import Favorites from "./views/favorites.vue";
import Checkout from "./views/checkout.vue";
import OrderConfirmation from "./views/orderConfirmation.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search/:category/:searchquery?",
    name: "Search",
    component: Search,
  },
  {
    path: "/products/:productID",
    name: "Product",
    component: Product,
  },
  {
    path: "/favorites/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/checkout/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/orderConfirmation",
    name: "OrderConfirmation",
    component: OrderConfirmation,
  },
  { path: "/:catchAll(.*)", name: "Error", component: Error },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to the top of the page when navigating to a new route
    return { top: 0 };
  },
});

export default router;
