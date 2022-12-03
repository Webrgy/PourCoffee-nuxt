// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    css:["~/assets/css/tailwind.scss", "~/assets/css/global.scss"],
    modules: [
        '@nuxtjs/tailwindcss',
        '@formkit/nuxt'
    ],

    runtimeConfig: {
        public: {
            baseUrl: "http://pourcoffee.herokuapp.com"
        }
    },
})
