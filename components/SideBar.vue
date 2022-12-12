<script setup>
import IconOrder from '~icons/ic/baseline-bookmark-border'
import IconProducts from '~icons/ic/twotone-coffee'
import IconMenu from '~icons/ic/round-restaurant-menu'
import IconHistory from '~icons/ic/baseline-history'
import IconSettings from "~icons/carbon/settings"
import IconUser from "~icons/mingcute/user-3-line"
import IconLogout from "~icons/humbleicons/logout"

    const currentUser = useUser()

    const config = useRuntimeConfig()

    const logout = async () => {
        await useFetch(`${config.baseUrl}/api/logout`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${currentUser.token}`
            },
            onResponseError() {
                return false;
            }
        }).catch(() => {
            return false
        })
        currentUser.isLoggedIn = false
        localStorage.removeItem("PourCoffeeAuth")
        useRouter().push("/login")
    }
</script>
<template lang="pug">
.drawer-side
    label(for="side-bar" class="drawer-overlay")
    ul.menu.pl-4.py-5.w-72.bg-white.text-base-content.shadow-xl.flex.flex-col.justify-cneter
        h1.logo
            .text-center.text-4xl
                HeaderLogo
        .side-bar-items.items(class="flex-grow-0 mt-10")
            li
                NuxtLink(to="/")
                    IconProducts
                    |Products
            li
                NuxtLink(to="/menu")
                    IconMenu
                    |Menu
            li
                NuxtLink(to="/orders")
                    IconOrder
                    |My orders
            li
                NuxtLink(to="/history")
                    IconHistory
                    |History
        .side-bar-settings.items(v-if="currentUser.isLoggedIn" class="flex-grow")
            li
                NuxtLink(to="/profile")
                    IconUser
                    |Profile
            li
                NuxtLink(to="/settings")
                    IconSettings
                    |Settings
        .side-bar-acctions(v-if="currentUser.isLoggedIn")
            li(@click="logout")
                NuxtLink
                    IconLogout
                    |Logout
</template>
<style lang="scss">
.drawer-side {
    @apply border-r;
    ul {
        > div {
            @apply text-lg;
        }
        .items {
            @apply border-b py-5;
        }
    }
}
li:has(.router-link-exact-active) {
    @apply border-r-4 border-primary text-primary;
}
</style>
