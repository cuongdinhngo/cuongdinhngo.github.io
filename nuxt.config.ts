// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/ngo-dinh-cuong.png' },
        { rel: 'apple-touch-icon', href: '/images/ngo-dinh-cuong.png' },
        { rel: 'shortcut icon', href: '/images/ngo-dinh-cuong.png' }
      ]
    }
  },
  nitro: {
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    prerender: {
      routes: ['/']
    }
  },
  modules: ['@nuxt/content', 'vuetify-nuxt-module'],
  css: ['@mdi/font/css/materialdesignicons.css'],
  vuetify: {
    vuetifyOptions: 'vuetify.config.ts'
  }
})