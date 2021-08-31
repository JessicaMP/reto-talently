<template lang="pug">
.bg-white.shadow.p-4.w-full
    .flex.justify-between.items-center
        BtnBlue
        .flex.items-center.justify-center
            img.w-40.cursor-pointer(src=`~/assets/images/logo.png` alt="Logo" @click="$router.push('/')")
        .flex.items-center.justify-center
            button.button__blue.button--rounded.mx-2(class="hidden md:block lg:block")
                .relative.inline-block
                    font-awesome-icon(icon="bell")
                    h5(class="absolute top__7 right__2 inline-block w-1 h-1 transform bg-blue-600 rounded-full bg-blue-600")
            button.button__blue.button--rounded.mx-2(class="hidden md:block lg:block")
                .relative.inline-block
                    font-awesome-icon(icon="envelope")
                    h5(class="absolute top__5 right__0 inline-block w-1 h-1 transform bg-blue-600 rounded-full bg-blue-600")
            img.rounded-full.h-14.w-14(:src="imageUrl" alt="Photo")
</template>
<script>
import { IMAGE_USER } from "~/enums"
import BtnBlue from "../buttons/btnBlue"

export default {
    name: "HeaderBasic",
    components: {
        BtnBlue
    },
    data: () => ({
        imageUrl: IMAGE_USER
    })
}
</script>