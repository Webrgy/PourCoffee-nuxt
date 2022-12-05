<script lang="ts" setup>
import { reactive } from 'vue';

  useHead({
    title: "Login to your PourCoffee account"
  })

  const user = reactive({
    email: "",
    password: ""
  })

  const login = async() => {
    const config = useRuntimeConfig()
    await useFetch(`${config.baseUrl}/api/login`, {
      method: "POST",
      body: {
        user : user
      }
    })
  }



</script>

<template lang="pug">
.login-page-container.px-2
  .form-control.max-w-xl.mx-auto.w-full.rounded-box.shadow-xl.p-10.mx-5
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
  @apply w-full h-full mx-auto flex justify-center items-center;
}
</style>
