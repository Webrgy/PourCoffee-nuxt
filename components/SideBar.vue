<template lang="pug">
.drawer-side
    label(for="side-bar" class="drawer-overlay")
    ul.menu.pl-4.py-5.w-72.bg-white.text-base-content.shadow-xl
        li
            NuxtLink(to="/products") Products
        li
            NuxtLink(to="/menu") Menu
        li
            NuxtLink(to="/orders") My orders
        li
            NuxtLink(to="/history") History
</template>
<style lang="scss">
li:has(.router-link-exact-active) {
    @apply border-r-2 border-primary;
}
</style>
