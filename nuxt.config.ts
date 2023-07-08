// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-font-loader", "nuxt-icon"],
  css: ["@/assets/style/main.scss"],
  srcDir: "src/",
  fontLoader: {
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        family: "Poppins",
      },
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      script: [
        {
          src: "/script/vibrant.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/relativeTime.js",
        },
      ],
    },
  },
  build: {
    transpile: ["skinview3d"],
  },
});
