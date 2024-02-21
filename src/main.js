
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from './router.js'
import filterFilter from './components/filter.vue';


const pinia = createPinia();
const app = createApp(App);

app.component('filterFilter', filterFilter);
app.use(router);
app.use(pinia);
app.mount("#app");
