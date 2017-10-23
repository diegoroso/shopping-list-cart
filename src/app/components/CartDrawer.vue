<template>
    <div class="cart-drawer">
        <div class="cart-drawer__action" @click="toggleCart()">
            <img v-if="open === false" :src="`${require('_img/bag.png')}`">
            <img v-else class="cart-drawer__action__close" :src="`${require('_img/close-white.png')}`">
        </div>
        <div ref="cartDrawer" :class="[{ 'open' : open }, 'cart-drawer__content']">
            <div class="cart-drawer__content__header">
                <div class="cart-drawer__content__header__badge">
                    <img :src="`${require('_img/bag.png')}`">
                    <span v-text="products.length"></span>
                </div>
                <span v-if="products.length > 0">Sacola</span>
                <span v-else>Sacola Vazia</span>
            </div>
            <div :class="`prod-${product.id}-${product.size} cart-drawer__content__product`" v-for="(product, i) in products" :key="i">
                <div class="cart-drawer__content__product__content product-content">
                    <div class="product-content__image" :style="`background-image: url(${product.image})`"></div>
                    <div class="product-content__description">
                        <p class="product-content__description__title" v-text="product.title"></p>
                        <p class="product-content__description__info" v-text="`${product.size} | ${product.style}`"></p>
                        <p class="product-content__description__quantity" v-text="`Quantidade: ${product.quantity}`"></p>
                        <p class="product-content__description__price">{{ product.currencyFormat }} <span>{{ priceCoin(product.price) }}</span>,{{ priceCents(product.price) }}</p>
                    </div>
                </div>
                <div class="cart-drawer__content__product__close" @click="removeProduct(product)" @mouseover="closeEnable(product)" @mouseout="closeDisable(product)"></div>
                <div class="product-overlay"></div>
            </div>
            <div v-if="products.length > 0" class="cart-drawer__content__total">
                <p class="cart-drawer__content__total__subtotal">Subtotal</p>
                <div>
                    <p class="cart-drawer__content__total__price">R$ <span>{{ totalCoin }}</span>,{{ totalCents }}</p>
                    <p class="cart-drawer__content__total__installments">Ou em até 10 x R$ {{ totalInstallments }}</p>
                </div>
            </div>
            <button v-if="products.length > 0" class="btn cart-drawer__content__btn">Comprar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CartDrawer',

        data () {
            return {
                open: false
            }
        },

        computed: {
            products () {
                return this.$store.state.cart.products
            },

            quantityCart () {
                this.products.forEach(product => {

                })
            },

            totalCartPrice () {
                let sum = 0
                this.products.forEach(product => {
                    sum += product.price
                })
                return sum.toFixed(2)
            },

            totalInstallments () {
                const number = this.totalCartPrice / 10
                return number.toFixed(2)
            },

            totalCoin () {
                let cartPrice = this.totalCartPrice.toString()
                cartPrice = cartPrice.split('.')
                return cartPrice[0]
            },

            totalCents () {
                let cartPrice = this.totalCartPrice.toString()
                cartPrice = cartPrice.split('.')
                return `${cartPrice[1]}`
            }
        },

        watch: {
            open () {
                if (this.open) {
                    document.body.classList.add('overflow-hidden')
                } else {
                    document.body.classList.remove('overflow-hidden')
                }
            },
            products () {
                if (!document.querySelector('.cart-drawer__content.open')) {
                    this.open = true
                    document.querySelector('.cart-drawer__content').classList.add('open')
                }
            }
        },

        methods: {
            toggleCart () {
                this.open = !this.open
            },
            removeProduct (product) {
                this.$store.dispatch('removeProductCart', product)
            },
            closeEnable (product) {
                document.querySelector(`.prod-${product.id}-${product.size}`).classList.add('remove')
            },
            closeDisable (product) {
                document.querySelector(`.prod-${product.id}-${product.size}`).classList.remove('remove')
            },
            priceCoin (price) {
                let temp = price.toString()
                temp = temp.split('.')
                return temp[0]
            },
            priceCents (price) {
                let temp = price.toString()
                temp = temp.split('.')
                return `${temp[1]}0`
            }
        },

        mounted () {
            document.querySelector('.main-body').onclick = () => {
                if (document.querySelector('.cart-drawer__content.open')) {
                    this.open = false
                    document.querySelector('.cart-drawer__content.open').classList.remove('open')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .cart-drawer {
        &__action {
            width: 33px;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            &__close {
                width: 18px;
                height: 18px;
            }
        }

        &__content {
            top: 60px;
            width: 500px;
            right: -500px;
            color: #FFF;
            height: #{calc(100vh - 60px)};
            overflow: auto;
            position: fixed;
            max-width: 100%;
            transition: right .4s;
            border-top: 1px solid #fff;
            background-color: $primary-color;

            &.open {
                right: 0;
                transition: right .4s;
            }

            &__header {
                height: 138px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    max-height: 40px;
                }

                span {
                    font-size: 24px;
                    font-weight: 900;
                    margin-left: 20px;
                    text-transform: uppercase;
                }

                &__badge {
                    position: relative;

                    span {
                        top: 26px;
                        color: $primary-color;
                        width: 20px;
                        height: 20px;
                        display: flex;
                        position: absolute;
                        font-size: 14px;
                        align-items: center;
                        border-radius: 100%;
                        justify-content: center;
                        background-color: $price-color;
                    }
                }
            }

            &__product {
                height: 100px;
                position: relative;

                &.remove {
                    p {
                        text-decoration: line-through;
                    }

                    .product-overlay {
                        top: 0;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        background: rgba(0, 0, 0, 0.6);
                    }
                }

                &__content {
                    height: 100%;
                    margin: 0 4%;
                    display: flex;
                    padding: 15px 0;
                    border-top: 2px solid #131316;
                    align-items: center;
                }

                &__close {
                    top: 15px;
                    right: 4%;
                    width: 14px;
                    height: 14px;
                    cursor: pointer;
                    z-index: 1;
                    position: absolute;
                    background-repeat: no-repeat;
                    background-image: url('~_img/close-black.png');

                    &:hover {
                        background-image: url('~_img/close-white.png');
                    }
                }

                .product-content {
                    &__image {
                        width: 50px;
                        height: 50px;
                        margin-right: 18px;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: top center;
                    }

                    &__description {
                        width: 100%;
                        position: relative;
                        padding-right: 15px;

                        &__title {
                            margin: 0;
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 18px;
                        }

                        &__info, &__quantity {
                            color: #999;
                            font-size: 12px;
                            margin-top: 2px;
                            font-weight: 100;
                            line-height: 12px;
                            margin-bottom: 0;
                        }

                        &__price {
                            right: 0;
                            color: $price-color;
                            bottom: -10px;
                            margin: 0;
                            position: absolute;
                            font-size: 14px;

                            span {
                                font-weight: 900;
                            }
                        }
                    }
                }
            }

            &__total {
                color: rgba(255, 255, 255, 0.4);
                margin: 0 4%;
                height: 100px;
                display: flex;
                text-align: right;
                border-top: 2px solid #131316;
                align-items: center;
                justify-content: space-between;

                p {
                    margin: 0;
                    text-transform: uppercase;
                }

                &__subtotal {
                    font-size: 14px;
                }

                &__price {
                    color: $price-color;
                    font-size: 24px;

                    span {
                        font-weight: 900;
                    }
                }

                &__installments {
                    font-size: 12px;
                }
            }

            &__btn {
                color: #fff;
                width: 94%;
                margin: 0 4%;
                cursor: pointer;
                height: 50px;
                font-size: 14px;
                border-color: #000;
                margin-bottom: 20px;
                text-transform: uppercase;
                background-color: #000;
            }
        }
    }
</style>
