<template lang="pug">
.app-container.w-full.h-screen(data-theme="bumblebee")
  NuxtPage
</template>
<script setup>

  const currentUser = useUser()
  currentUser.getCurrentUser()
</script>
