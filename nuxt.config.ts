// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Wray wuz here.' }
    ],
    link: [
    {rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Fanwood+Text|Inconsolata|M+PLUS+1p'}
    ]
  },
  css: [
    '~/css/main.css'
  ],
  devtools: { enabled: true }
})
