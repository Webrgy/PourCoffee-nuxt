<script lang="ts" setup>
import { reactive } from "vue"

  const user = reactive({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const signup = /*async*/ (values: any) => {
    /*const config = useRuntimeConfig()
    await useFetch(`${config.baseUrl}/api/register`, {
      method: "post",
      body: {
        user: user
      }
    })*/
    // console.log(user.email, config.baseUrl);
  }
</script>

<template lang="pug">
.register-page-container.px-2
  .form-control.max-w-xl.mx-auto.w-full.rounded-box.shadow-xl.p-10.mx-5
    h1.font-bold.text-xl.my-5.text-center(class="md:text-3xl") PourCoffee 
      br
      |Create Your Account
    FormKit(type="form" submit-label="signup" @submit="signup")
      FormKit(v-model="user.first_name" validation="required|alpha" name="first-name" label="First name" type="text")
      FormKit(v-model="user.last_name" validation="required" name="last-name" label="Last name" type="text")
      FormKit(v-model="user.email" validation="required|email" label="Email" type="email" name="email")
      FormKit(v-model="user.password" validation="required" name="password" label="Password" type="password")
      FormKit(v-model="user.password_confirmation" validation="required" name="confirm-password" label="Confirm password" type="password")
  
</template>

<style lang="scss">
.register-page-container {
  @apply w-full h-full mx-auto flex justify-center items-center;
}
</style>
