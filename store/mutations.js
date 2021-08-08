export default {
    setValue(state, payload) {
        const { property, value } = payload
        state[property] = value
    }
}