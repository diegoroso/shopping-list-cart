export default {
    state: {
        products: []
    },
    mutations: {
        setCart (state, data) {
            const cart = state.products
            cart.push(data)
            state.products = cart
        }
    },
    actions: {
        setProductCart ({ commit }, data) {
            commit('setCart', data)
        }
    }
}
