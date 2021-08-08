export default {
    async getCharacters({ commit }) {
        const {results} = await this.$axios.$get(`https://rickandmortyapi.com/api/character`)
        commit("setValue", {property: "list", value: results})
    }
}