<template lang="pug">
.bg-white.shadow.p-4.w-full
    .flex.justify-between.items-center
        button.cursor-pointer.text-xl.leading-none.px-3.py-1.border.border-solid.border-transparent.rounded.bg-transparent.block.outline-none(class='focus:outline-none' type='button')
            span.block.relative.w-6.rounded-sm.bg-gray-300(class="h-0.5")
            span.block.relative.w-6.rounded-sm.bg-gray-300.mt-1(class="h-0.5")
            span.block.relative.w-4.rounded-sm.bg-gray-300.mt-1(class="h-0.5")
        .flex.items-center.justify-center
            img.w-40(src=`~/assets/images/logo.png` alt="Logo")
        .flex.items-center.justify-center
            font-awesome-icon.mx-5.text-gray-300.text-3xl(icon="bell")
            font-awesome-icon.mx-5.text-gray-300.text-3xl(icon="envelope")
            img.rounded-full.h-14.w-14(:src="imageUrl" alt="Photo")
</template>
<script>
import { IMAGE_USER } from "~/enums"

export default {
    name: "HeaderBasic",
    data: () => ({
        imageUrl: IMAGE_USER
    })
}
</script>