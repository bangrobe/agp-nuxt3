// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", 'vue3-carousel-nuxt', "@nuxtseo/module",'@vueuse/nuxt','nuxt-simple-sitemap', '@nuxt/image'],
  site: {
    url: 'https://agirlpic.com',
    name: 'Agirlpic Collection',
    description: 'Welcome to my awesome collection',
    defaultLocale: 'en',
  },
  app: {
    pageTransition: { name: 'route', mode: 'out-in' }
  },
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      siteUrl: process.env.SITE_URL,
      siteName: "Agirlpic Collection",
      siteDescription: "Beauty blog for you",
      language: "en",
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  //UINuxt Dark/Light  mode
  colorMode: {
    preference: 'light'
  },
  // Fix Cannot stringify a function
  experimental: {
    renderJsonPayloads: false
  },
  //Server proxy
  //https://github.com/nuxt/nuxt/issues/19325#issuecomment-1744853526
  routeRules: {
    '/proxy/**': {
      proxy: `${process.env.API_URL}/**`
    }
  },
  // Nuxt Image
  image: {
    domains: ['api.agirlpic.com','blogger.googleusercontent.com'],
    alias: {
      default: 'https://api.agirlpic.com',
      google: 'https://blogger.googleusercontent.com',
    }
  },
});
