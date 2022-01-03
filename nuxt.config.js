export default {
  target: 'static',
  head: {
    title: 'frontend-challenge',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    base: '/'
  },
  rules: [
    {
      test: /\.pug$/,
      oneOf: [
        {
          exclude: /\.vue$/,
          use: ['raw-loader', 'pug-plain-loader']
        },
        {
          use: ['pug-plain-loader']
        }
      ]
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              indentWidth: 4,
              includePaths: ["absolute/path/a", "absolute/path/b"],
            },
          },
        },
      ],
    },
  ],
  
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/sass/main.sass'
  ],
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/fontawesome.js',
    '~/plugins/vue-luxon.js',
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/dotenv'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  proxy: {
    '/api': {
      target: process.env.API_URL,
      pathRewrite: {
        '^/api': '/'
      }
    }
  }
}
