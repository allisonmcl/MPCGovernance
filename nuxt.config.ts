// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  components: [
    {
      path: "~/components",
      global: true,
    },
  ],

  content: {
    documentDriven: true,
  },

  css: ["~/assets/main.css"],

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.7.1.slim.min.js",
          integrity: "sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
