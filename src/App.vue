<template>
    <div>
        <nav class="navbar fixed-top">
            <img :src="`${require('_img/logo.png')}`" alt="Netshoes">
            <cart-drawer></cart-drawer>
        </nav>
        <div class="main-body">
            <div class="container">
                <router-view></router-view>
            </div>
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
    @import '~_sass/config/vars';

    .navbar {
        height: 60px;
        position: fixed;
        background-color: $primary-color;

        img {
            height: 100%;
        }
    }

    .main-body {
        padding-top: 60px;
    }
</style>
