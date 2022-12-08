<script lang="ts" setup>

  useHead({
    title: "Register in PourCoffee now"
  })

  const user = reactive({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const errorMessage = ref('')
  const hasRegistered = ref()

  const signup = async () => {
    const config = useRuntimeConfig()
    await useFetch(`${config.baseUrl}/api/register`, {
      method: "post",
      body: {
        user: user
      },
      onResponse({ response }) {
        hasRegistered.value = response._data.success
      },
      onResponseError({ response }) {
        const errors = response._data.errors
        hasRegistered.value = response._data.success        
        errorMessage.value = errors[Object.keys(errors)[0]][0]
      }
    }).catch(error => {
      console.log(error);
    })
  }
</script>

<template lang="pug">
.register-page-container.px-2
  .w-full.max-w-xl(v-if="hasRegistered === false")
    MainAlert(:message="errorMessage")
  .form-control.max-w-xl.mx-auto.w-full.rounded-box.shadow-xl.p-10.mx-5
    h1.text-center
      HeaderLogo
      br
      |Create Your Account
    span.text-center.text-base already have an account? 
      NuxtLink.link.text-primary(to="/login") Login
    FormKit(type="form" submit-label="sign up" @submit="signup")
      FormKit(v-model="user.first_name" validation="required|alpha|length:3,24" name="first-name" label="First name" type="text")
      FormKit(v-model="user.last_name" validation="required|alpha|length:3,24" name="last-name" label="Last name" type="text")
      FormKit(v-model="user.email" validation="required|email" label="Email" type="email" name="email")
      FormKit(v-model="user.password" validation="required" name="password" label="Password" type="password")
      FormKit(v-model="user.password_confirmation" validation="required|confirm:password" name="password_confirm" label="Confirm password" type="password")
  
</template>

<style lang="scss">
.register-page-container {
  @apply w-full h-full mx-auto flex flex-col justify-center items-center;
}
</style>
