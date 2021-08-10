<template lang="pug">
.grid(class="sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12")
    div.shadow(class="sm:col-span-1 md:col-span-1 lg:col-span-1 hidden md:block lg:block")
        NavigationBar
    div(class="sm:col-span-1 md:col-span-11 lg:col-span-11")
        HeaderBasic
        Nuxt
</template>
<script>
import HeaderBasic from "~/components/header-basic"
import NavigationBar from "~/components/navigationBar"

export default {
    components: {
        HeaderBasic,
        NavigationBar
    }
}
</script>