<template>
    <div class="product col-sm-6 col-md-4 col-lg-3">
        <div
            class="product__image"
            :style="`background-image: url('https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg')`"
        ></div>
        <p class="product__title" v-text="product.title"></p>
        <p class="product__price">
            {{ product.currencyFormat }} <span>{{ price_coin }}</span>,{{ price_cents }}
        </p>
        <p class="product__installments" v-text="`ou ${product.installments} x ${product.currencyFormat} ${price_installments}`"></p>
        <button type="button" @click="setProduct(product)" class="btn product__btn" data-toggle="modal" data-target=".bd-example-modal-lg">Comprar</button>
    </div>
</template>

<script>
    export default {
        name: 'Product',

        props: {
            product: {
                type: Object,
                required: true
            }
        },

        computed: {
            price_coin () {
                let price = this.product.price.toString()
                price = price.split('.')
                return price[0]
            },
            price_cents () {
                let price = this.product.price.toString()
                price = price.split('.')
                return price[1]
            },
            price_installments () {
                const number = this.product.price / this.product.installments
                return number.toFixed(2)
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
    .product {
        margin-top: 55px;
        text-align: center;

        &__image {
            width: 180px;
            height: 230px;
            margin: auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        &__title {
            height: 42px;
            margin: 15px 0;
            display: flex;
            font-size: 14px;
            align-items: center;
            justify-content: center;
        }

        &__btn {
            color: #FFF;
            cursor: pointer;
            background-color: #592d82;
        }
    }
</style>
