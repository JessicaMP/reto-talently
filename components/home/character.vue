<template lang="pug">
.grid.gap-4.p-5.bg-white.shadow.rounded(class="sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6")
  .flex.justify-start.items-center
    img.rounded-full.h-14.w-14(:src="getImage(data.image)" alt="Photo")
    h5.mx-2.font-semibold {{ data.name || 'Name' }}
  .justify-start.items-center(class="hidden md:flex lg:flex")
    h5 {{ data.status || 'Status' }}
  .justify-start.items-center(class="hidden md:flex lg:flex")
    h5 {{ data.species || 'Species' }}
  .justify-start.items-center(class="hidden md:flex lg:flex")
    h5 {{ data.gender || 'Gender' }}
  .flex.justify-center.items-center
    h5 {{ formatDate(data.created) }}
  .flex.justify-center.items-center
    button.text-blue-600.p-3.font-semibold.rounded-md(class="hover:bg-blue-600 hover:text-white"
    @click="$router.replace(`character?url=${data.url}`)") Manage
    //- a.text-blue-600.font-semibold(:href="data.url") Manage
</template>
<script>
import { IMAGE_DEFAULT } from "~/enums"

export default {
  name: "Character",
  props: {
    data: { type: Object, required: false }
  },
  methods: {
    getImage(url = IMAGE_DEFAULT){
      return url
    },
    formatDate(dateData) {
      const [date] = dateData.split("T")
      const [year, month, day] = date.split("-")
      return `${day}/${month}/${year}`
    }
  }
}
</script>