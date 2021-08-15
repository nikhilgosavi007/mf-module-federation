import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import axios from 'axios';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  name: "ProductList",
  components: {
    Card,
    Button
  },
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    const response = await await axios.get('http://localhost:3001/products', {}).catch((error)=> {
      console.log('error:', error)
    })
    if(response && response.data){
      this.products = response.data;
    }
  },
  methods: {
    navigateToProductDetail(id) {
      window.location.href = `http://localhost:8080/productdetail?id=${id}`;
    },
    async addToCart(id){
      const response = await axios.post(`http://localhost:3001/cart/${id}`, {}).catch((error)=> {
        console.log('error:', error)
      })
      console.log('response', response);
      if(response && response.status === 200){
        window.location.href =  `http://localhost:8080/cart`;
      }
    }
  },
};
