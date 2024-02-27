<script>
import {useProductsStore} from "../store"
import Card from "../components/Card.vue"
import { ref, watch, computed} from "vue";
import {useRoute} from "vue-router"

export default {
  components: {
    Card,
  },
  setup() {
    const store = useProductsStore();
    const route = useRoute();
    const category = ref(route.params.category);
    const searchQuery = ref(route.params.searchquery.toLowerCase());
    const products = ref(store.productsCatalogue);

    /* JSON products stored in an array instead of an object */
    const productsArray = ref([]);

    const filteredArray = computed(() =>
      productsArray.value.filter(matchesSearchQuery)
    );

    /* checks if products in productsArray have at least one value that includes the searchquery*/
    function matchesSearchQuery(product) {
        return Object.values(product).some((value) =>
        typeof value === "string" && value.toLowerCase().includes(searchQuery.value)
      );
    }

    watch(
        () => store.productsCatalogue,
        (newProductsCatalogue) => {
            products.value = newProductsCatalogue;
            /* Converts JSON products object to an array */
            productsArray.value = Object.values(products.value);
        }, { immediate: true },{deep: false});

    watch(() => route.params.category, (newCategory) => {
      category.value = newCategory;
    },{ immediate: true }, {deep: false});

    watch(() => route.params.searchquery, (newSearchQuery) => {
      searchQuery.value = newSearchQuery;
      console.log(searchQuery.value)
    },{ immediate: true }, {deep: false});

    return {
                products: store.productsCatalogue,
                filteredArray,
                category
            }

}}

</script>

<template>
 <div class="grid grid-cols-5 gap-4 p-4">
    <Card
    v-for="product in filteredArray"
      class="col-span-1"
      :key="product.id"
      :product="product"
      :cardImgSrc="product.imgSrc"
      :searchCategory="category"
      :categorySearch="true"
    />
  </div>

</template>
