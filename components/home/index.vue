<template lang="pug">
Body(:data="data")
</template>

<script>
import Body from "./body"

export default {
    props: {
        data: {type: Object, required: false}
    },
    components: {
        Body
    }
}
</script>