// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-font-loader'],
  css: ["@/assets/style/main.scss"],
  srcDir: "src/",
  fontLoader: {
    external: [
      {
        src: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
        family: "Poppins",
      }
    ]
  }
});
