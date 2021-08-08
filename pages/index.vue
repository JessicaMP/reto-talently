<template lang="pug">
  h1.text-sm {{list}}
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState([
      "list"
    ])
  },
  async asyncData ({ store }) {
    await store.dispatch("getCharacters")
  }
}
</script>
