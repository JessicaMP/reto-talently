export default {
    async nuxtServerInit ({ dispatch }, { req }) {
        await dispatch("getCharacters")
    },
    async getCharacters({ commit }) {
        const data = await this.$axios.$get(`https://rickandmortyapi.com/api/character`)
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
    }
}