import { mount } from 'productdetail/ProductDetail';
export default {
  name: "ProductDetail",
  mounted() {
    const el = document.querySelector('#product-detail');
    mount(el);
  },

};
