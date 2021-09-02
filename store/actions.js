export default {
    async nuxtServerInit ({ dispatch }, { req }) {
        await dispatch("getCharacters")
    },
    async getCharacters({ commit }) {
        const data = await this.$axios.$get(`/character`)
        commit("setValue", {property: "content", value: data})
    },
    async saveNewCharacter({commit, state, dispatch}, data){
        await dispatch("getCharacters")
        const copyContent = Object.assign({}, state.content)
        const calculateId = copyContent.results.length
        data.id = calculateId
        const dataContent = [...copyContent.results]
        dataContent.unshift(data)
        copyContent.results = dataContent
        commit("setValue", {property: "content", value: copyContent})
    },
    changeOrderItems({commit, state}, order){
        const copyContent = Object.assign({}, state.content)
        const newOrder = [...copyContent.results].sort(order)
        copyContent.results = newOrder
        commit("setValue", {property: "content", value: copyContent})
    },
    changeValue({commit}, value) {
        commit("setValue", {property: "sidebarOpen", value})
    }
}