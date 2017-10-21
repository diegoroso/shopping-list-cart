<template>
    <div>
        <nav class="navbar fixed-top">
            <img :src="`${require('_img/logo.png')}`" alt="Netshoes">
            <cart-drawer></cart-drawer>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import CartDrawer from '_components/CartDrawer.vue'

    export default {
        name: 'App',

        components: {
            CartDrawer
        }
    }
</script>

<style lang="scss">
    @import '~_sass/includes/vars';

    .navbar {
        height: 60px;
        position: relative;
        background-color: $primary-color;

        img {
            height: 100%;
        }
    }
</style>
