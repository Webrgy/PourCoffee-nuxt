<template lang="pug">
.app-container.w-full.h-screen(data-theme="bumblebee")
  NuxtPage
</template>
<script setup>

  const currentUser = useUser()

  onBeforeMount(() => {
    let currentUserSaved = JSON.parse(localStorage.getItem("PourCoffeeAuth") || '{}')

    if(Object.keys(currentUserSaved).length !== 0) {
      currentUser.isLoggedIn = currentUserSaved.isLoggedIn
      currentUser.token = currentUserSaved.token
      currentUser.fetchCurrentUser()
      localStorage.setItem("PourCoffeeAuth", JSON.stringify(currentUser))
    } else {
        currentUser.isLoggedIn = false
    }
  })
</script>
