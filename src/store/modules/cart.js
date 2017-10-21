export default {
    state: {
        products: []
    },
    mutations: {
        setCart (state, data) {
            state.products = data
        }
    },
    actions: {
        setProductsCart ({ commit }, data) {
            commit('setCart', data)
        }
    }
}
