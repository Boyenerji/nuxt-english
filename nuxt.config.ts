// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // css: ['~/assets/css/main.css'],
  css: ['~/assets/css/main.css', '@formkit/themes/genesis', 'animate.css/animate.min.css'],
  

  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
  },

  // modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@formkit/nuxt'],
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@formkit/nuxt'],

  formkit: {
    configFile: './formkit.config.ts',
    // autoImport: true
  }
})





