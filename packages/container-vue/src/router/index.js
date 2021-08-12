import { createWebHistory, createRouter } from "vue-router";
import ProductList from "../components/ProductList/ProductList.vue";
import ProductDetail from "../components/ProductDetail/ProductDetail.vue";

const routes = [
  {
    path: "/productlist",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/productdetail",
    name: "ProductDetail",
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;