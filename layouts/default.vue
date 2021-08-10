<template lang="pug">
.grid(class="sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12")
    .min-h-screen.shadow(class="sm:col-span-1 md:col-span-1 lg:col-span-1 hidden md:block lg:block")
        NavigationBar
    div(class="sm:col-span-1 md:col-span-11 lg:col-span-11")
        Header
        Nuxt
</template>
<script>
import Header from "~/components/header"
import NavigationBar from "~/components/navigationBar"

export default {
    components: {
        Header,
        NavigationBar
    }
}
</script>