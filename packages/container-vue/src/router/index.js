import { createWebHistory, createRouter } from "vue-router";
import ProductList from "../components/ProductList/ProductList.vue";
import ProductDetail from "../components/ProductDetail/ProductDetail.vue";
import Cart from "../components/Cart/Cart.vue";

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/productdetail",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;