export default {
    state: {
        products: []
    },
    mutations: {
        setCart (state, data) {
            const cart = state.products
            let newProduct = {}
            let exist = false

            cart.forEach((product, i) => {
                if (data.id === product.id && data.size === product.size) {
                    product.quantity += Number(data.quantity)
                    product.price += data.price * data.quantity
                    newProduct = product
                    cart.splice(i, 1)
                    exist = true
                }
            })

            if (!exist) {
                cart.push(data)
            } else {
                cart.push(newProduct)
            }

            state.products = cart
        },
        removeProduct (state, data) {
            const cart = state.products
            cart.forEach((product, i) => {
                if (data.id === product.id && data.size === product.size) {
                    cart.splice(i, 1)
                }
            })
        }
    },
    actions: {
        setProductCart ({ commit }, data) {
            commit('setCart', data)
        },
        removeProductCart ({ commit }, data) {
            commit('removeProduct', data)
        }
    }
}
