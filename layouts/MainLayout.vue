<template lang="pug">
.app-layout
    .side-bar.drawer.drawer-mobile
        input(id="side-bar" type="checkbox" class="drawer-toggle")
        .drawer-content.flex.flex-col.items-center.justify-center
            // page content
            main.bg-gray-50.w-full.h-screen
                slot
            label(for="side-bar")
        SideBar
</template>
