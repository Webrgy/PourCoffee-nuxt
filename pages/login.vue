<script lang="ts" setup>
  useHead({
    title: "Login to your PourCoffee account"
  })

  const currentUser = useUser()

  const user = reactive({
    email: "",
    password: ""
  })

  const errorMessage = ref('')
  const hasLogged = ref()

  const config = useRuntimeConfig()

  const login = async() => await useFetch(`${config.baseUrl}/api/login`, {
    method: "POST",
    body: {
      user : user
    },
    onResponse({ response }) {
      hasLogged.value = response._data.success
      if(hasLogged) {
        currentUser.isLoggedIn = true
        currentUser.token = response._data.token
        localStorage.setItem("PourCoffeeAuth", JSON.stringify(currentUser))
        currentUser.getCurrentUser()
        useRouter().push("/")
      }
    },
    onResponseError({ response }) {
      hasLogged.value = response._data.success
      errorMessage.value = response._data.errors.base[0]
    },
  })

</script>

<template lang="pug">
.login-page-container.px-2
  .w-full.max-w-xl(v-if="hasLogged === false")
    MainAlert(:message="errorMessage")
  .form-control.max-w-xl.mx-auto.w-full.rounded-box.shadow-xl.p-10.my-5
    h1.text-center
      HeaderLogo 
      br
      |Login To Your Account
    span.text-center.text-base don't have an account? 
      NuxtLink.link.text-primary(to="/register") Sign up
    FormKit(type="form" submit-label="log in" @submit="login")
      FormKit(v-model="user.email" validation="required|email" label="Email" type="email" name="email")
      FormKit(v-model="user.password" validation="required" name="password" label="Password" type="password")
</template>

<style lang="scss">
.login-page-container {
  @apply w-full h-full mx-auto flex flex-col justify-center items-center;
}
</style>
