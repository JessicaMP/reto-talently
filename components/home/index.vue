<template lang="pug">
//- .min-h-screen.flex
.h-screen.w-screen
    .flex.flex-wrap.items-start.justify-between
        NavigationBar
        .bg-blue-50(class="w-11/12")
            .flex.justify-between
                .w-full
                    Header
                    Body(:data="data")
//- .container
//-     .row
//-         .grid.grid-cols-12.gap-1
//-             .col-span-1
//-                 //- NavigationBar
//-                 h1 1
//-             .col-span-11.bg-blue-50
//-                 h1 2
//-             //- Header
//-             //- Body
</template>
<script>
import Header from "./header"
import NavigationBar from "./navigationBar"
import Body from "./body"

export default {
    props: {
        data: {type: Object, required: false}
    },
    components: {
        Header,
        NavigationBar,
        Body
    }
}
</script>