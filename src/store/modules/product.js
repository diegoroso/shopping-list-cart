export default {
    state: {
        details: {}
    },
    mutations: {
        setDetails (state, data) {
            state.details = data
        }
    },
    actions: {
        setProductDetails ({ commit }, data) {
            commit('setDetails', data)
        }
    }
}
