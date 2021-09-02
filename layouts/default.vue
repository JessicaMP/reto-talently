<template lang="pug">
.grid(class="grid-cols-1 md:grid-cols-12 lg:grid-cols-12")
    //- , sidebarOpen ? 'block' : 'hidden'
    .min-h-screen.shadow.col-span-1(:class="['hidden md:block lg:block']")
        NavigationBar
        //- (:class="[sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in', 'fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0']")
    div(class="col-span-1 md:col-span-11 lg:col-span-11")
        Header
        Nuxt
</template>
<script>
import Header from "~/components/header"
import NavigationBar from "~/components/navigationBar"
import { mapState } from "vuex"

export default {
    components: {
        Header,
        NavigationBar
    },
    data:() => ({
        // sidebarOpen: true
    }),
    computed: {
        ...mapState(["sidebarOpen"])
    }
}
</script>