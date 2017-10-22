<template>
    <div class="products_container row">
        <product v-for="(product, i) in products" :key="i"
            :product="product"
        ></product>
        <product-details></product-details>
    </div>
</template>

<script>
    import Product from '_components/Product.vue'
    import ProductDetails from '_components/ProductDetails.vue'
    import ProductsService from '_services/products.js'

    export default {
        name: 'HomePage',

        components: {
            Product,
            ProductDetails
        },

        data () {
            return {
                products: []
            }
        },

        mounted () {
            return ProductsService.getProducts().then(products => {
                this.products = products.data.products
            })
        }
    }
</script>

<style lang="scss" scoped>
    .products_container {
        padding-bottom: 55px;
    }
</style>
