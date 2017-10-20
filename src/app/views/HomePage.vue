<template>
    <div>
        <p>NETSHOES</p>
    </div>
</template>

<script>
    import Products from '_services/products.js'

    export default {
        name: 'HomePage',

        data () {
            return {
                products: []
            }
        },

        mounted () {
            return Products.getProducts().then(prod => {
                console.log(prod)
            })
        }
    }
</script>

<style lang="scss" scoped></style>
