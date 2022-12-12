const router = useRouter
let currentUser = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem("PourCoffeeAuth") || '{}') : null
export const useUser = defineStore("user", {
    state: () => {
        return {
            isLoggedIn: true,
            token: '',
            user: {}
        }
    },
    getters: {},
    actions: {
        async getCurrentUser() {
            currentUser = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem("PourCoffeeAuth") || '{}') : null
            if(Object.keys(currentUser).length !== 0) {
                console.log(currentUser);
                this.isLoggedIn = currentUser.isLoggedIn
                this.token = currentUser.token
            } else {
                this.isLoggedIn = false
            }
            if(this.isLoggedIn) {
               await $fetch(`https://pourcoffee.up.railway.app/api/dashboard/me`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${this.token}`
                }
               }).then((res: any) => {
                    this.user = res.user;
                    router().push("/")
               }).catch(() => {
                    router().push({name: "login"})
               })
            }
        }
    }
})

if( import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
