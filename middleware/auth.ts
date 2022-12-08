import { useUser } from "~/stores/User"

export default defineNuxtRouteMiddleware((to, from ) => {
    if(!useUser.isLoggedIn) {
        return navigateTo({name: "login"})
    }
})
