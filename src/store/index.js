import Vue from 'vue'
import Vuex from 'vuex'

const files = require.context('./modules', true, /\.js$/)
const modules = {}

files.keys().forEach(key => {
    const name = key.split('/')
        .pop()
        .replace('.js', '')

    modules[name] = files(key).default
})

Vue.use(Vuex)

const store = new Vuex.Store({
    modules
})

export default store