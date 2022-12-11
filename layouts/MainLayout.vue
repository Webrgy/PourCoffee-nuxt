<script setup>
import IconCoffeeCart from "~icons/line-md/buy-me-a-coffee-filled"
    const getNavBarHeight = computed(() => {
        document.querySelector(".nav-bar-content")
    })

    console.log(getNavBarHeight);

    const toggleCart = () => {
        const cart = document.querySelector(".shopping-card")
        cart.classList.toggle("cart-avtive")
    }
</script>
<template lang="pug">
.app-layout.w-full.h-screen
    .side-bar.drawer.drawer-mobile
        input(id="side-bar" type="checkbox" class="drawer-toggle")
        .drawer-content.flex-col.items-center.justify-center
            main.bg-green-500.w-full.h-full.overflow-y-hidden
                // page content
                .header-bar.w-full
                        .nav-bar-content
                            NavBar
                        .avatar-content
                            Avatar
                .bg-gray-50.w-full.overflow-y-hidden.h-full
                    .main-content
                        .view.overflow-y-scroll.relative
                            slot
                        .shopping-card
                            SideCart
                        .indicator.absolute.z-30.bottom-5.right-6.block.text-base-200(class="xl:hidden" @click="toggleCart")
                            span.indicator-item.badge.badge-primary 99
                            button.btn.btn-small.btn-circle.shadow-xl.text-xl
                                IconCoffeeCart
            SwapDrawer(class="lg:hidden").absolute.top-4.left-2
        SideBar
</template>
<style lang="scss">
.header-bar {
    @apply w-full flex flex-col-reverse sm:flex-row;

    .nav-bar-content {
        @apply w-full sm:w-7/12 lg:w-8/12 xl:w-9/12
    }

    .avatar-content {
        @apply w-full border-b sm:border-none sm:w-5/12 lg:w-4/12 xl:w-3/12
    }
}

.main-content {
    @apply  w-full flex flex-row h-full overflow-y-hidden;

    .view {
        @apply w-full xl:w-9/12 p-5
    }
    .shopping-card {
        margin-right: -100%;
        transform: translateX(100%);
        transition: all 0.5s ease-in;
        @apply w-full sm:w-11/12 md:w-7/12 lg:w-4/12 xl:block xl:w-3/12 h-full xl:mr-0;

        &.cart-avtive {
            position: absolute;
            bottom: 0;
            right: 0;
            margin-right: 0;
            transform: translateX(0);
            z-index: 10;
        }
        
    }
}

@media only screen and (min-width: 1280px) {
    .shopping-card {
        margin-right: 0 !important;
        transform: translateX(0) !important;
        @apply w-3/12;

        &.cart-avtive {
            @apply w-3/12;
        }
    }

}

</style>
