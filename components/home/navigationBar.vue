<template lang="pug">
.items-start.justify-between(class="w-1/12")
    aside.flex.flex-col.items-center.bg-white.text-gray-700
        .mb-20.mt-5.h-16.flex.items-center.w-full.justify-center
            button.cursor-pointer.text-xl.leading-none.px-3.py-1.border.border-solid.border-transparent.rounded.bg-transparent.block.outline-none(class='focus:outline-none' type='button')
                span.block.relative.w-6.rounded-sm.bg-gray-300(class="h-0.5")
                span.block.relative.w-6.rounded-sm.bg-gray-300.mt-1(class="h-0.5")
                span.block.relative.w-4.rounded-sm.bg-gray-300.mt-1(class="h-0.5")
        ul
            li(class='hover:bg-gray-100')
                a.h-16.px-6.flex.flex.justify-center.items-center.w-full(href='.' class='focus:text-orange-500')
                    .cursor-pointer.text-xl.leading-none.px-3.py-1.border.border-solid.border-transparent.rounded.bg-transparent.block.outline-none.transform.-rotate-90(class='focus:outline-none' type='button')
                        span.block.relative.w-4.rounded-sm.bg-gray-300.h-1
                        span.block.relative.w-6.rounded-sm.bg-gray-300.mt-1.h-1
                        span.block.relative.w-4.rounded-sm.bg-gray-300.mt-1.h-1
            li(class='hover:bg-gray-100')
                a.h-16.px-6.flex.flex.justify-center.items-center.w-full(href='.' class='focus:text-orange-500')
                    font-awesome-icon.text-3xl.text-gray-300(icon="th-large")
            li(class='hover:bg-gray-100')
                a.h-16.px-6.flex.flex.justify-center.items-center.w-full(href='.' class='focus:text-orange-500')
                    font-awesome-icon.text-3xl.text-gray-300(icon="users")
            li(class='hover:bg-gray-100')
                a.h-16.px-6.flex.flex.justify-center.items-center.w-full(href='.' class='focus:text-orange-500')
                    font-awesome-icon.text-3xl.text-gray-300(icon="car-side")
            li(class='hover:bg-gray-100')
                a.h-16.px-6.flex.flex.justify-center.items-center.w-full(href='.' class='focus:text-orange-500')
                    font-awesome-icon.text-3xl.text-gray-300(icon="map")
            li(class='hover:bg-gray-100')
                a.h-16.px-6.flex.flex.justify-center.items-center.w-full(href='.' class='focus:text-orange-500')
                    font-awesome-icon.text-3xl.text-gray-300(icon="envelope")
            li(class='hover:bg-gray-100')
                a.h-16.px-6.flex.flex.justify-center.items-center.w-full(href='.' class='focus:text-orange-500')
                    font-awesome-icon.text-3xl.text-gray-300(icon="cog")
</template>
<script>
export default {
    name: "NavigationBar"
}
</script>