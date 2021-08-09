<template lang="pug">
.grid.gap-4.p-5.bg-white.shadow.rounded(class="sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6")
  .flex.justify-start.items-center
    img.rounded-full.h-14.w-14(:src="getImage(data.image)" alt="Photo")
    h5.mx-2.font-semibold {{ data.name || 'Name' }}
  .flex.justify-center.items-center(class="hidden md:block lg:block")
    h5 {{ data.status || 'Status' }}
  .flex.justify-center.items-center(class="hidden md:block lg:block")
    h5 {{ data.species || 'Species' }}
  .flex.justify-center.items-center(class="hidden md:block lg:block")
    h5 {{ data.gender || 'Gender' }}
  .flex.justify-center.items-center
    h5 {{ formatDate(data.created) }}
  .flex.justify-center.items-center
    a.text-blue-600.font-semibold(:href="data.url") Manage
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
      const [date, time] = dateData.split("T")
      const [year, month, day] = date.split("-")
      return `${day}/${month}/${year}`
    }
  }
}
</script>