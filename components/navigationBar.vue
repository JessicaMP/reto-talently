<template lang="pug">
.items-start.justify-between.w-full
    aside.flex.flex-col.items-center.bg-white.text-gray-700
        .mb-20.mt-5.h-16.flex.items-center.w-full.justify-center
            BtnBlue
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
import BtnBlue from "./buttons/btnBlue"

export default {
    name: "NavigationBar",
    components: {
        BtnBlue
    },
}
</script>
