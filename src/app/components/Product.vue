<template>
    <div class="product col-sm-6 col-md-4 col-lg-3">
        <div
            class="product__image"
            :style="`background-image: url('${require('_img/product.jpg')}')`"
        ></div>
        <p class="product__title" v-text="product.title"></p>
        <p class="product__price">
            {{ product.currencyFormat }} <span>{{ price_coin }}</span>,{{ price_cents }}
        </p>
        <p class="product__installments" v-if="product.installments !== 0" v-text="`ou ${product.installments} x ${product.currencyFormat} ${price_installments}`"></p>
        <div v-else style="height:19px;"></div>
        <button type="button" @click="setProduct(product)" class="btn product__btn" data-toggle="modal" data-target=".bd-example-modal-lg">Comprar</button>
    </div>
</template>

<script>
    import products from '_mixins/products.js'

    export default {
        name: 'Product',

        mixins: [products],

        props: {
            product: {
                type: Object,
                required: true
            }
        },

        methods: {
            setProduct (product) {
                this.$store.dispatch('setProductDetails', product)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .product {
        margin-top: 55px;
        text-align: center;

        p {
            box-sizing: content-box;
        }

        &__image {
            width: 180px;
            height: 230px;
            margin: auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        &__title {
            height: 32px;
            margin: 15px 0;
            display: flex;
            position: relative;
            font-size: 14px;
            line-height: 16px;
            align-items: flex-start;
            justify-content: center;

            &:after {
                right: 50%;
                width: 16px;
                bottom: -15px;
                content: '';
                position: absolute;
                margin-right: -8px;
                border-bottom: 2px solid #dfbd00;
            }
        }

        &__price {
            margin: 0;
            height: 24px;
            font-size: 12px;
            padding-top: 5px;
            line-height: 24px;

            span {
                font-size: 24px;
            }
        }

        &__installments {
            margin-top: 5px;
            color: #999;
            height: 14px;
            font-size: 14px;
            line-height: 14px;
            margin-bottom: 0;
        }

        &__btn {
            color: #FFF;
            cursor: pointer;
            margin-top: 10px;
            background-color: $secondary-color;
        }
    }
</style>
