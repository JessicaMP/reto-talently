export default {
    async nuxtServerInit ({ dispatch }) {
        console.log("nuxtServerInit")
        await dispatch("getCharacters")
    },
    // async nuxtServerInit(vuexContext) {
    //     return await vuexContext.dispatch('getCharacters')
    // },
    async getCharacters({ commit }) {
        console.log("getCharacters")
        const data = await this.$axios.$get(`/character`)
        commit("setValue", {property: "content", value: data})
        if(data) {
            commit("setValue", {property: "loading", value: false})
        }
    },
    async saveNewCharacter({commit, state, dispatch}, data){
        await dispatch("getCharacters")
        const copyContent = Object.assign({}, state.content)
        const calculateId = copyContent.results.length +1
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