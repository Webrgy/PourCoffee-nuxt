const router = useRouter
export const useUser = defineStore("user", {
    state: () => {
        return {
            isLoggedIn: false,
            token: '',
            user: {},
        }
    },
    getters: {},
    actions: {
        async fetchCurrentUser() {
            if(this.isLoggedIn) {
                await $fetch(`https://pourcoffee.up.railway.app/api/dashboard/me`, {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${this.token}`
                    },
                    onResponse({response}) {
                        if(response.status === 401) {
                            //notify 401 error
                            router().push({name: "login"})
                        }
                    }
               }).then((res: any) => {
                    if(res.success) {
                        this.user = res.user
                        router().push("/")
                    }

               }).catch(() => {
                    return false
               })
            }
        },
        logout() {
            this.token = "",
            this.isLoggedIn = false
            this.user = {}
        }
    }
})

if( import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
