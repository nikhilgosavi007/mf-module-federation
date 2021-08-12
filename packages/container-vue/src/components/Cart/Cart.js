import { mount } from 'cart/Cart';
export default {
  name: "Cart",
  mounted() {
    const el = document.querySelector('#cart');
    mount(el);
  },

};
