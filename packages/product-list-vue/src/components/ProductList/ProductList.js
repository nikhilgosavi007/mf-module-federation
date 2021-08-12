import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import faker from "faker";
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  name: "ProductList",
  components: {
    Card,
    Button
  },
  methods: {
    getRandomProduct() {
      return faker.commerce.product();
    },
    getRandomProductName() {
      return faker.commerce.productName();
    },
    getRandomProductDescription() {
      const description = faker.commerce.productDescription();
      return description.toString().substring(0, Math.min(description.length, 50));
    },
    getRandomImage() {
        return faker.image.cats();
    },
  },
};
