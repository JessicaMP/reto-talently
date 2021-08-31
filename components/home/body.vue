<template lang="pug">
.relative(class="m-6 md:m-12 lg:m-12 mx-4 md:mx-18 lg:mx-24")
    .flex.flex-wrap.items-end.justify-between(class="hidden md:flex hidden lg:flex")
        h1.text-4xl Characters
            span.text-gray-400.mx-5.text-lg {{data.info.count}} Total
        button.px-8.py-1.rounded-xl.text-3xl.font-medium.text-white.bg-blue-600.m-1.border.border-indigo-600.transition-all.flex.items-center.justify-end(class="focus:outline-none hover:m-0 focus:m-0 hover:border-4 focus:border-4 hover:border-blue-800 hover:bg-blue-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 hover:shadow"
        @click="addCharacter")
            font-awesome-icon.mx-5(icon="plus")
            div.bg-blue-500.p-2.px-4 New
    .bottom-4.right-4(class="fixed md:hidden lg:hidden")
        button.p-3.text-center.text-white.transition.bg-blue-600.rounded-full.h-20.w-20.shadow-2xl.ripple(
            class='hover:shadow-lg hover:bg-blue-800 focus:outline-none'
            @click="addCharacter")
            font-awesome-icon.text-3xl(icon="plus")
    .grid.text-gray-300.font-semibold.my-5.mt-10.uppercase.items-center(class="grid-cols-3 md:grid-cols-7 lg:grid-cols-7")
        .flex.justify-start.items-center(class="col-span-1 md:col-span-2 lg:col-span-2 px-2 md:px-5 lg:px-5")
            h5 Name and Id
            button.button__blue.button--rounded(@click="changeOrder(orderItems)" class="mx-2 md:mx-5 lg:mx-5")
                font-awesome-icon.text-blue-600(:icon="orderItems ? 'chevron-down' : 'chevron-up'")
        .flex.justify-center(class="hidden md:block lg:block")
            h5 Status
        .flex.justify-center(class="hidden md:block lg:block")
            h5 Species
        .flex.justify-center(class="hidden md:block lg:block")
            h5 Gender
        .flex.justify-center
            h5 Date Created
        .flex.justify-center
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
    data: () => ({
        orderItems: true
    }),
    components: {
        Character
    },
    methods: {
        addCharacter(){
            this.$router.push('/character/new')
        },
        changeOrder(order) {
            this.orderItems = !order
            this.$store.dispatch("changeOrderItems", this.orderItems ? (a, b) => a.id - b.id : (a, b) => b.id - a.id)
        }
    }
}
</script>