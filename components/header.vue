<template lang="pug">
.bg-white.shadow.p-4.w-full
    img.w-40.cursor-pointer(@click="$router.push('/')"
            src=`~/assets/images/logo.png`
            alt="Logo" 
            class="hidden lg:block hidden md:block")
    div(class="sm:hidden")
        .flex.justify-between.items-center
            button.cursor-pointer.text-xl.leading-none.px-3.py-1.border.border-solid.border-transparent.rounded.bg-transparent.block.outline-none(class='focus:outline-none' type='button')
                span.block.relative.w-6.rounded-sm.bg-gray-300(class="h-0.5")
                span.block.relative.w-6.rounded-sm.bg-gray-300.mt-1(class="h-0.5")
                span.block.relative.w-4.rounded-sm.bg-gray-300.mt-1(class="h-0.5")
            .flex.items-center.justify-center
                h1.text-4xl Characters
                font-awesome-icon.mx-5.text-gray-300(icon="chevron-down")
            font-awesome-icon.mx-5.text-gray-300.text-1xl(icon="bell")
</template>
<script>
export default {
    name: "Header"
}
</script>