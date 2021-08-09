<template lang="pug">
  <!-- h1.text-sm {{list}} -->
  Home(:data="content")
</template>

<script>
import { mapState } from "vuex"
import Home from "~/components/home"

export default {
  components: {
    Home
  },
  computed: {
    ...mapState([
      "content"
    ])
  },
  async asyncData ({ store }) {
    await store.dispatch("getCharacters")
  }
}
</script>
