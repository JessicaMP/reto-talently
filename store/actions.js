export default {
    async getCharacters({ commit }) {
        const data = await this.$axios.$get(`https://rickandmortyapi.com/api/character`)
        commit("setValue", {property: "content", value: data})
    }
}