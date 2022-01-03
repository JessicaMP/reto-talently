<template lang="pug">
div
  p(v-if="loading") Cargando...
  Home(v-else :data="content")
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
      "content",
      "loading"
    ])
  },
  // async asyncData ({ store }) {
  //   await store.dispatch("getCharacters")
  // }
}
</script>
