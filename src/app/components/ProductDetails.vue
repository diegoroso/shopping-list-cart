<template>
    <div class="product_details">
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content product_details__content">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-sm-4 product_details__content__image"
                                :style="`background-image: url('${require('_img/product.jpg')}')`"
                            ></div>
                            <div class="col-sm-8">
                                <div class="col-xs-12 product_details__content__p">
                                    <p class="product_details__content__p__title" v-text="product.title"></p>
                                </div>
                                <div class="col-xs-12 product_details__content__p">
                                    <p class="product_details__content__p__sku" v-text="`SKU: ${product.sku}`"></p>
                                </div>
                                <div class="col-xs-12 product_details__content__p">
                                    <p class="product_details__content__p__style" v-text="product.style"></p>
                                </div>
                                <div class="col-xs-12 product_details__content__part">
                                    <p>Quantidade: </p>
                                    <input type="number" class="product_details__content__input" min="0" v-model="quantity" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></input>
                                </div>
                                <div class="col-xs-12 product_details__content__size">
                                    <div class="btn-group">
                                        <button
                                            v-for="(size, i) in product.availableSizes"
                                            :key="i"
                                            @click="changeSize(size)"
                                            :class="[{ 'active' : sizeSelected === size }, 'btn btn-sm']"
                                            type="button"
                                            v-text="size"
                                        ></button>
                                    </div>
                                </div>
                                <button @click="addCart(product)" class="btn product_details__content__btn" data-dismiss="modal">Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import products from '_mixins/products.js'

    export default {
        name: 'ProductDetails',

        mixins: [products],

        data () {
            return {
                quantity: 1,
                sizeSelected: ''
            }
        },

        computed: {
            product () {
                return this.$store.state.product.details
            }
        },

        watch: {
            product () {
                this.quantity = 1
                this.sizeSelected = this.product.availableSizes[0]
            }
        },

        methods: {
            changeSize (size) {
                this.sizeSelected = size
            },
            addCart (product) {
                const data = {
                    id: product.id,
                    sku: product.sku,
                    size: this.sizeSelected,
                    title: product.title,
                    style: product.style,
                    price: product.price,
                    image: require('_img/product.jpg'),
                    quantity: this.quantity,
                    description: product.description,
                    currencyFormat: product.currencyFormat
                }
                this.$store.dispatch('setProductCart', data)
                this.quantity = 1
                this.sizeSelected = this.product.availableSizes[0]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .product_details {
        &__content {
            padding: 2%;

            &__image {
                width: 100%;
                margin: auto;
                height: 230px;
                max-width: 180px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }

            &__p {
                width: 100%;

                p {
                    width: 100%;
                    margin: 0;
                }
            }

            &__part {
                display: flex;
                align-items: center;
                margin: 15px 0;

                p {
                    margin: 0;
                }

                input {
                    width: 40px;
                    outline: none;
                    margin-left: 10px;
                }
            }

            &__size {
                margin: 15px 0;

                .btn {
                    color: #fff;
                    cursor: pointer;
                    border-color: $secondary-color;
                    background-color: $secondary-color;

                    &.active {
                        box-shadow: 0 0 0 0.2rem rgba(88, 46, 130, 0.6);
                    }
                }
            }

            &__btn {
                color: #fff;
                cursor: pointer;
                border-color: $secondary-color;
                background-color: $secondary-color;

                &:active {
                    border-color: $secondary-color;
                    background-color: $secondary-color;
                    box-shadow: 0 0 0 0.2rem rgba(88, 46, 130, 0.6);
                }
            }
        }
    }
</style>
