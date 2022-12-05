<template lang="pug">
.app-layout
    .side-bar.drawer.drawer-mobile
        input(id="side-bar" type="checkbox" class="drawer-toggle")
        .drawer-content.flex.flex-col.items-center.justify-center
            // page content
            main.bg-gray-50.w-full.h-screen
                slot
            SwapDrawer(class="lg:hidden").absolute.top-2.right-2
        SideBar
</template>
