<template lang="pug">
.bg-white.shadow.p-4.w-full
    img.w-40.cursor-pointer(@click="$router.push('/')"
            src=`~/assets/images/logo.png`
            alt="Logo" 
            class="hidden lg:block md:block")
    div(class="block md:hidden lg:hidden")
        .flex.justify-between.items-center
            BtnBlue
            h1(class="text-2xl md:text-4xl") Characters
            .flex.justify-center.items-center
                button.button__blue.button--rounded.mx-5
                    font-awesome-icon(icon="chevron-down")
                button.button__blue.button--rounded
                    .relative.inline-block
                        font-awesome-icon.text-1xl.w-6.h-6.fill-current(icon="bell")
                        h7(class="absolute top__7 right__2 inline-block w-1 h-1 transform bg-blue-600 rounded-full bg-blue-600")
</template>
<script>
import BtnBlue from "../buttons/btnBlue"

export default {
    name: "Header",
    components: {
        BtnBlue
    },
}
</script>