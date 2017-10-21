import '_sass/main.scss'
import '_npm/bootstrap/js/src/util.js'
import '_npm/bootstrap/js/src/modal.js'

import Vue from 'vue'

import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

import App from './App.vue'

sync(store, router)

new Vue({
    store,
    router,
    ...App
}).$mount('#app')
