<template lang="pug">
button.button__blue.button--rounded(class='focus:outline-none' type='button' @click="$emit('btnEvent', !sidebarOpen)")
    span.w-6.rounded-sm(class="h-0.5")
    span.w-6.rounded-sm.mt-1(class="h-0.5")
    span.w-4.rounded-sm.mt-1(class="h-0.5")
</template>
<script>
import { mapState } from "vuex"

export default {
    name: "BtnBlue",
    computed: {
        ...mapState(["sidebarOpen"])
    }
}
</script>