<template lang="pug">
.m-12.mx-24
    .flex.items-end.justify-between(class="hidden md:block lg:block")
        h1.text-4xl Characters
            span.text-gray-400.mx-5.text-lg {{data.info.count}} Total
        div.mb-2
            button.px-8.py-1.rounded-xl.text-3xl.font-medium.text-white.bg-blue-600.m-1.border.border-indigo-600.transition-all.flex.items-center.justify-end(class="focus:outline-none hover:m-0 focus:m-0 hover:border-4 focus:border-4 hover:border-blue-800 hover:bg-blue-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 hover:shadow")
                font-awesome-icon.mx-5(icon="plus")
                div.bg-blue-500.p-2.px-4 New
    .grid.text-gray-300.font-semibold.my-5.mt-10.uppercase(class="sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6")
        .flex.justify-center.items-center
            h5 Name
            font-awesome-icon.mx-5.text-blue-600(icon="chevron-down")
        .flex.justify-center.items-center(class="hidden md:block lg:block")
            h5 Status
        .flex.justify-center.items-center(class="hidden md:block lg:block")
            h5 Species
        .flex.justify-center.items-center(class="hidden md:block lg:block")
            h5 Gender
        .flex.justify-center.items-center
            h5 Date Created
        .flex.justify-center.items-center
    .my-5(v-for="result in data.results")
        Character(
            :key="result.id"
            :data="result"
        )
</template>
<script>
import Character from "./character"

export default {
    name: "Body",
    props: {
        data: {type: Object, required: false}
    },
    components: {
        Character
    }
}
</script>