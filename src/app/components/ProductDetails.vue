<template>
    <div class="product_details">
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4" style="height:50px; background-color:red;"></div>
                            <div class="col-sm-8" style="height:50px; background-color:blue;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductDetails',

        computed: {
            product () {
                return this.$store.state.product.details
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product_details {
        .modal-content{
            padding: 2%;
        }
    }
</style>
