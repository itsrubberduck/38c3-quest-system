export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            title: 'Welches JS Framework bist du? - 38C3',
            // shortcut icon
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-title', content: 'Welches JS Framework bist du?'},
            ],
            link: [
                {rel: 'apple-touch-icon', href: 'https://events.ccc.de/media/38c3-teaser.webp'},
                {rel: 'icon', href: 'https://events.ccc.de/media/38c3-teaser.webp'},
            ],
        }
    },

    compatibilityDate: '2024-12-18'
})
