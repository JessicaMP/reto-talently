<template lang="pug">
.bg-white.shadow.p-4.w-full
    .flex.justify-between.items-center
        BtnBlue
        .flex.items-center.justify-center
            img.w-40.cursor-pointer(src=`~/assets/images/logo.png` alt="Logo" @click="$router.push('/')")
        .flex.items-center.justify-center
            font-awesome-icon.mx-5.text-gray-300.text-3xl(icon="bell")
            font-awesome-icon.mx-5.text-gray-300.text-3xl(icon="envelope")
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