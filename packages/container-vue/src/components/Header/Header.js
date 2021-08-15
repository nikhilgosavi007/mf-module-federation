export default {
    name: "Header",  
    methods: {
        navigateToCart() {
            this.$router.push({ path: 'cart' })
        }
    },
};