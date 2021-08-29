<template lang="pug">
.bg-white.shadow.p-4.w-full
    img.w-40.cursor-pointer(@click="$router.push('/')"
            src=`~/assets/images/logo.png`
            alt="Logo" 
            class="hidden lg:block md:block")
    div(class="block md:hidden lg:hidden")
        .flex.justify-between.items-center
            BtnBlue
            //- h1.text-4xl Characters
            h1(class="text-2xl md:text-4xl") Characters
            .flex.justify-center.items-center
                button.button__blue.button--rounded.mx-5
                    font-awesome-icon(icon="chevron-down")
                button.button__blue.button--rounded
                    font-awesome-icon.text-1xl(icon="bell")
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