<template lang="pug">
    h1 charater
</template>
<script>
export default {
    methods: {
        getQuery() {
            console.log({r:this.$route.query})
        }
    },
    mounted() {
        this.getQuery()
    }
}
</script>