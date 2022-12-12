<script setup>
const currentUser =  useUser()
</script>
<template lang="pug">
.avatar-container.w-full
    .avatar-card(v-if="currentUser.isLoggedIn")
        .avatar
            .w-12.rounded-full.bg-primary
                span {{currentUser.user.initials}}
        .user-info
            span.full-name {{`${currentUser.user.first_name} ${currentUser.user.last_name}`}}
            span.email {{ currentUser.user.email}}
    .auth-actions(v-else)
        .login
            NuxtLink(to="/login").btn.btn-primary.rounded-full.w-28 Log in
        .register
            NuxtLink(to="/register").btn.btn-accent.rounded-full.w-28 sign up
    
</template>
<style lang="scss">
.avatar-card, .auth-actions {
    @apply w-full bg-base-100 shadow border-r py-2 px-4 h-20 flex justify-start items-center;

    .avatar {
        > div {
            @apply flex justify-center items-center text-lg text-accent font-semibold;
        }
    }

    .user-info {
        @apply flex flex-col mx-2;

        .full-name {
            @apply text-accent;
            font-weight: 600;
        }

        .email {
            @apply text-primary-focus
        }
    }

    .login , .register {
        @apply mx-1
    }
}
.auth-actions {
    @apply justify-center
}
</style>
