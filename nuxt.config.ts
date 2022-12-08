// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            title: "PourCoffee"
        }
    },
    css:["~/assets/css/tailwind.scss", "~/assets/css/global.scss"],
    modules: [
        '@nuxtjs/tailwindcss',
        '@formkit/nuxt',
        'unplugin-icons/nuxt',
        ['@pinia/nuxt', {
            autoImports: ["defineStore", "acceptHMRUpdate"]
        }]
    ],

    runtimeConfig: {
        public: {
            baseUrl: "https://pourcoffee.up.railway.app"
        }
    },

    imports: {
        dirs: ["stores"]
    }
})
