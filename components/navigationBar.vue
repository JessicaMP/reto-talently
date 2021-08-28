<template lang="pug">
.items-start.justify-between.w-full
    aside.flex.flex-col.items-center.bg-white.text-gray-700
        .mb-20.mt-5.h-16.flex.items-center.w-full.justify-center
            //- button.button__blue.button--rounded.cursor-pointer.text-xl.leading-none.px-3.py-1.border.border-solid.border-transparent.rounded.bg-transparent.block.outline-none(class='focus:outline-none' type='button')
            //-     span.block.relative.w-6.rounded-sm.bg-gray-300(class="h-0.5")
            //-     span.block.relative.w-6.rounded-sm.bg-gray-300.mt-1(class="h-0.5")
            //-     span.block.relative.w-4.rounded-sm.bg-gray-300.mt-1(class="h-0.5")
            button.button__blue.button--rounded(class='focus:outline-none' type='button')
                span.w-6.rounded-sm(class="h-0.5")
                span.w-6.rounded-sm.mt-1(class="h-0.5")
                span.w-4.rounded-sm.mt-1(class="h-0.5")
        ul.w-full
            li.button__blue
                a.h-16.px-6.flex.flex.justify-center.items-center(class='focus:text-orange-500')
                    .cursor-pointer.text-xl.leading-none.px-3.py-1.border.border-solid.border-transparent.rounded.bg-transparent.block.outline-none.transform.-rotate-90(class='focus:outline-none' type='button')
                        span.w-4.rounded-sm.h-1
                        span.w-6.rounded-sm.mt-1.h-1
                        span.w-4.rounded-sm.mt-1.h-1
            li.button__blue
                a.h-16.px-6.flex.flex.justify-center.items-center(class='focus:text-orange-500')
                    font-awesome-icon.text-3xl(icon="th-large")
            li.button__blue
                a.h-16.px-6.flex.flex.justify-center.items-center(class='focus:text-orange-500')
                    font-awesome-icon.text-3xl(icon="users")
            li.button__blue
                a.h-16.px-6.flex.flex.justify-center.items-center(class='focus:text-orange-500')
                    font-awesome-icon.text-3xl(icon="car-side")
            li.button__blue
                a.h-16.px-6.flex.flex.justify-center.items-center(class='focus:text-orange-500')
                    font-awesome-icon.text-3xl(icon="map")
            li.button__blue
                a.h-16.px-6.flex.flex.justify-center.items-center(class='focus:text-orange-500')
                    font-awesome-icon.text-3xl(icon="envelope")
            li.button__blue
                a.h-16.px-6.flex.flex.justify-center.items-center(class='focus:text-orange-500')
                    font-awesome-icon.text-3xl(icon="cog")
</template>
<script>
export default {
    name: "NavigationBar"
}
</script>
<style lang="sass">
.button__blue
    @apply text-gray-300
    span
        @apply block relative bg-gray-300
    &:hover
        @apply bg-blue-100 text-blue-600 border-l-4 border-blue-600
        span
            @apply bg-blue-600
.button--rounded
    @apply rounded-full h-12 w-12
    span
        @apply transform translate-x-1/2
    span:last-of-type
        @apply transform translate-x-3/4
    &:hover
        @apply border-none
</style>