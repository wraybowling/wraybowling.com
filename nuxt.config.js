export default {
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
  modules: [
    'nuxt-markdown-graphql',
  ],
/*  modules: ['@nuxtjs/apollo'],
  // Give apollo module options
  apollo: {
    // required
    clientConfigs: {
      default: {
        // required  
        httpEndpoint: 'https://api-useast.graphcms.com/v1/cjs3nbxct0q9e01gfy2wqvqu0/master',
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: 'ws://localhost:4000', // optional
        // LocalStorage token
        tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        websocketsOnly: false // Optional
      },
      test: {
        httpEndpoint: 'http://localhost:5000',
        wsEndpoint: 'ws://localhost:5000',
        tokenName: 'apollo-token'
      },
      // alternative: user path to config which returns exact same config options
      test2: '~/plugins/my-alternative-apollo-config.js'
    }
  },
  */
  server: {
//    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }
}

