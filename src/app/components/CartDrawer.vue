<template>
    <div class="cart-drawer">
        <div class="cart-drawer__action" @click="toggleCart()">
            <img v-if="cartOpened === false" :src="`${require('_img/bag.png')}`">
            <img v-else class="cart-drawer__action__close" :src="`${require('_img/close-white.png')}`">
        </div>
        <div :class="[{ 'opened' : cartOpened }, 'cart-drawer__content']" ref="cart">
            <p style="color: #fff;">CART</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CartDrawer',

        data () {
            return {
                cartOpened: false
            }
        },

        computed: {
            widthCart () {
                return this.$refs.cart.width
            }
        },

        methods: {
            toggleCart () {
                this.cartOpened = !this.cartOpened
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/includes/vars';

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
            right: -500px;
            width: 500px;
            height: #{calc(100vh - 60px)};
            position: absolute;
            max-width: 100%;
            text-align: center;
            transition: right .4s;
            border-top: 1px solid #fff;
            background-color: $primary-color;

            &.opened {
                right: 0;
                transition: right .4s;
            }
        }
    }
</style>
