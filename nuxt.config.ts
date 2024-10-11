export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt",
    "nuxt-rate-limit",
  ],
  colorMode: {
    preference: "dark",
  },
  nuxtRateLimit: {
    routes: {
      "/api/*": {
        maxRequests: 5,
        intervalSeconds: 120,
      },
    },
  },
  compatibilityDate: "2024-10-11",
  app: {
    head: {
      script: [
        {
          src: "https://eu.umami.is/script.js",
          "data-website-id": "2bd6347d-b9b2-4bd7-b846-a7b0a7f24598",
          async: true,
        },
      ],
    },
  },
});
