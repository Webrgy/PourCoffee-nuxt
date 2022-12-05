<script setup>
definePageMeta({layout: "main-layout"})

</script>
<template lang="pug">
NuxtLayout
  div
    NuxtLink(to="/login").btn.btn-primary Log in
    NuxtLink(to="/register").btn.btn-primary Sign up
</template>
