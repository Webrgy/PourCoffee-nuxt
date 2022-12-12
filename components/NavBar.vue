<script setup>
import IconSearch from "~icons/uil/search"
</script>
<template lang="pug">
.navbar.w-full.bg-base-100.shadow.border-r.p-2.h-20
    .form-group.bg-gray-100.rounded-full.w-96.px-4.py-2(class="sm:ml-16 lg:w-96")
        span
            IconSearch 
        input(type="text" class="input bg-transparent search-input w-full" placeholder="Search")
</template>
<style lang="scss">
.search-input {
    border: none !important;
    outline: none !important;
}
</style>
