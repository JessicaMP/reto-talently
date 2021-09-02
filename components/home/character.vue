<template lang="pug">
.grid.gap-2.bg-white.shadow.rounded(class="grid-cols-3 md:grid-cols-7 lg:grid-cols-7 py-4 px-2 md:p-5 lg:p-5")
  .flex.justify-start.items-center(class="flex-col md:flex-row lg:flex-row col-span-1 md:col-span-2 lg:col-span-2")
    img.rounded-full.h-14.w-14(:src="getImage(data.image)" alt="Photo")
    h5.mx-2.font-semibold(class="text-center md:text-left lg:text-left") {{ data.name || 'Name' }}
      | #[br] #[p.text-gray-300 # {{data.id}}]
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
    @click="$router.replace(`character?id=${data.id}`)") Manage
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