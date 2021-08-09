<template lang="pug">
.bg-white.shadow.p-4.w-full
    img.w-40(src=`~/assets/images/logo.png` alt="Logo")
//- .flex-wrap.py-2.border.border-solid.shadow
//-     .flex
//-         .w-full.px-4
//-             nav.relative.flex.flex-wrap.items-center.justify-between.px-2.bg-white-500.rounded
//-                 .container.px-4.mx-auto.flex.flex-wrap.items-center.justify-between
//-                     .w-full.relative.flex.justify-between.px-4(class='lg:w-auto lg:static lg:block lg:justify-start')
//-                         a.text-sm.font-bold.leading-relaxed.inline-block.mr-4.py-2.whitespace-nowrap.uppercase.text-white(href='#pablo')
//-                             img.w-40(src=`~/assets/images/logo.png` 
//-                                 alt="Logo")
//-                         button.cursor-pointer.text-xl.leading-none.px-3.py-1.border.border-solid.border-transparent.rounded.bg-transparent.block.outline-none(class='lg:hidden focus:outline-none' type='button')
//-                             span.block.relative.w-6.h-px.rounded-sm.bg-black
//-                             span.block.relative.w-6.h-px.rounded-sm.bg-black.mt-1
//-                             span.block.relative.w-6.h-px.rounded-sm.bg-black.mt-1
//-                     #example-navbar-info.flex.items-center(class='lg:flex-grow')
//-                         ul.flex.flex-col.list-none.ml-auto(class='lg:flex-row')
//-                             li.nav-item
//-                                 a.px-3.py-2.flex.items-center.text-xs.uppercase.font-bold.leading-snug.text-black(class='hover:opacity-75' href='#pablo')
//-                                     | hola
//-                             li.nav-item
//-                                 a.px-3.py-2.flex.items-center.text-xs.uppercase.font-bold.leading-snug.text-black(class='hover:opacity-75' href='#pablo')
//-                                     | bye
//-                             li.nav-item
//-                                 a.px-3.py-2.flex.items-center.text-xs.uppercase.font-bold.leading-snug.text-black(class='hover:opacity-75' href='#pablo')
//-                                     | no
</template>
<script>
export default {
    name: "Header"
}
</script>