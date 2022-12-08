export const useUser = defineStore("user", {
    state: () => {
        return {
            isLoggedIn: false,
            token: '',
            user: {}
        }
    },
    getters: {},
    actions: {}
})

if( import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
