<!-- MEANT TO BE INSTANCIATED INSIDE A GRID, example below


  <div class="grid grid-cols-5 gap-4 p-4">
    <Card
      class="col-span-1"
      v-for="product in products"
      :key="product.id"
      :product="product"
      :cardImgSrc="product.imgSrc"
    />
  </div> -->

<template>
  <div
    id="card-background"
    class="flex flex-col rounded shadow overflow-hidden bg-[#1c1c1c]"
    v-if="show">
  <div>
    <RouterLink :to="`/products/${product.id}`">
      <!-- The card links to the product page, that in turn pass these props to the productInfo component on call -->
      <img :src="cardImgSrc" class="w-full h-32 sm:h-48 lg:h-56 object-cover" />
   </RouterLink>
<!--    text-[#FF007A] hover:fill-[#FF007A]
 -->   <div @click="toggleFavorite(product)"><svg class="h-8 w-8 text-[#FF007A]" :class="{'fill-[#FF007A]': isFavorite}" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
  </div>

    <div
      id="product-info"
      class="flex flex-row self-stretch items-center px-2 py-3 md:py-6 space-x-2 justify-around h-full"
    >
      <div id="title-brand" class="flex flex-col stretch flex-wrap space-y-1">
        <h3 class="text-sm font-medium">{{ product.title }}</h3>
        <h4 class="text-xs font-light">
          {{ product.brand }}
        </h4>
      </div>
      <!-- end title-brand -->
      <h2 class="flex-none text-md">{{ product.price }}kr</h2>
    </div>
    <!-- product-info -->
  </div>
  <!-- card-background -->
</template>
<script>
import { ref, onMounted} from "vue";
export default {
  computed: {
    show() {
      if (this.categorySearch === true) {
        if (this.searchCategory !== "all") {
          if (this.product.category === this.searchCategory) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
  },
  setup() {
    const isFavorite = ref();

    const checkFavorite = (product) => {
      let favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"))||[];
      if (favoritesArray.includes(product.title)){
        return isFavorite.value = true
      }
      else{
        return isFavorite.value = false
      }
    }

    onMounted(() => {
      checkFavorite();
    });

    const toggleFavorite = (product) => {
      let favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"))||[];
      if (favoritesArray.includes(product.title)){
        favoritesArray = favoritesArray.filter((item) => item !== product.title);
        isFavorite.value = false
      }
      else{
        favoritesArray.push(product.title)
        isFavorite.value = true
      }

      localStorage.setItem("favoritesArray", JSON.stringify(favoritesArray));

      console.log(favoritesArray)
      console.log(isFavorite)
    }

    return {toggleFavorite,
    isFavorite, checkFavorite  }
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    cardImgSrc: {
      type: String,
    },
    searchCategory: {
      type: String,
    },
    categorySearch: {
      type: Boolean,
    },
  },
};
</script>
