// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // css: ['~/assets/css/main.css'],
  css: ['~/assets/css/main.css', '@formkit/themes/genesis'],
  

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