<template>
    <div class="products_container row">
        <product v-for="(product, i) in products" :key="i"
            :product="product"
        ></product>
    </div>
</template>

<script>
    import Product from '_components/Product.vue'
    import ProductsService from '_services/products.js'

    export default {
        name: 'HomePage',

        components: {
            Product
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
        margin-bottom: 55px;
    }
</style>
