<template lang="pug">
.bg-blue-50.h-full(class="px-6 md:px-12 lg:px-24 p-8 md:p-16 lg:p-16")
    .flex.items-end.justify-between
        h1.text-4xl New Character
    form.px-8.pt-6.pb-8.mb-4.bg-white.rounded.my-5
        .grid(class="grid-cols-1 md:grid-cols-3 lg:grid-cols-3")
            .mb-4(class='md:mr-2 md:mb-0')
                label.block.mb-2.text-sm.font-bold.text-gray-700(for='name')
                    | Name
                input#name.w-full.px-3.py-2.text-sm.leading-tight.text-gray-700.border.rounded.shadow.appearance-none(v-model="name" class='focus:outline-none focus:shadow-outline' type='text' placeholder='Name')
            .mb-4(class='md:ml-2')
                label.block.mb-2.text-sm.font-bold.text-gray-700(for='status')
                    | Status
                input#status.w-full.px-3.py-2.text-sm.leading-tight.text-gray-700.border.rounded.shadow.appearance-none(v-model="status" class='focus:outline-none focus:shadow-outline' type='text' placeholder='Status')
            div(class='md:ml-2')
                label.block.mb-2.text-sm.font-bold.text-gray-700(for='species')
                    | Species
                input#species.w-full.px-3.py-2.text-sm.leading-tight.text-gray-700.border.rounded.shadow.appearance-none(v-model="species" class='focus:outline-none focus:shadow-outline' type='text' placeholder='Species')
        .grid.mt-4(class="grid-cols-1 md:grid-cols-3 lg:grid-cols-3")
            div
                label.block.mb-2.text-sm.font-bold.text-gray-700(for='gender')
                    | Gender
                input#species.w-full.px-3.py-2.text-sm.leading-tight.text-gray-700.border.rounded.shadow.appearance-none(v-model="gender" class='focus:outline-none focus:shadow-outline' type='text' placeholder='Gender')
        .grid.mt-4(class="grid-cols-1 md:grid-cols-3 lg:grid-cols-3")
            .flex.justify-start.my-5
                button.w-full.p-2.text-center.text-white.transition.bg-blue-600.rounded.shadow-2xl.ripple(
                    :class="['focus:outline-none', disableBtn ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg hover:bg-blue-800']"
                    :disabled="disableBtn"
                    @click.prevent="save({name, status, species, gender, image, url: '', created: '2017-11-04T18:50:21.651Z'})") Save
</template>
<script>
import { IMAGE_DEFAULT } from "~/enums"

export default {
    layout: "basic",
    data: () => ({
        name: "",
        status: "",
        species: "",
        gender: "",
        image: IMAGE_DEFAULT
    }),
    computed: {
        disableBtn() {
            let status = true
            if(this.name !== "" && this.status !== "" && this.species !== "" && this.gender !== "") {
                status = false
            }
            return status
        }
    },
    methods: {
        async save(content){
           await this.$store.dispatch("saveNewCharacter", content)
           this.$router.push("/")
        }
    }
}
</script>