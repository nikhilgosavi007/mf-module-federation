import faker from "faker";

export default {
  name: "ProductList",
  methods: {
    getRandomProduct() {
      return faker.commerce.product();
    },
    getRandomProductName() {
      return faker.commerce.productName();
    },
    getRandomProductDescription() {
      return faker.commerce.productDescription();
    },
    getRandomImage() {
        return faker.image.cats();
    },
  },
};
