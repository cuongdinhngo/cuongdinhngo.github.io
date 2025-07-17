// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/profile/', // GitHub Pages repository name
    buildAssetsDir: '/profile/_nuxt/', // Where Nuxt will look for assets
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